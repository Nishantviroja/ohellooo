'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import ToolCard from '../components/ToolCard';
import AdFluid from '../components/ads/AdFluid';
import { aiTools } from '../data/aiTools';
import { useRouter } from 'next/navigation';

// Fallback image URLs for tools that don't have images
const fallbackImages = [
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&h=600&q=80',
  'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&h=600&q=80',
  'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&h=600&q=80'
];

// Function to get a random fallback image
const getRandomImage = () => {
  return fallbackImages[Math.floor(Math.random() * fallbackImages.length)];
};

// Function to shuffle array (Fisher-Yates algorithm)
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const getSeoCategorySlug = (categoryName) => {
  return categoryName.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-') + '-ai-tools';
};
const getCategoryFromSeoSlug = (slug) => slug.replace(/-ai-tools$/, '');

export default function CategoryToolsPage({ categorySlug }) {
  const router = useRouter();
  const [categories, setCategories] = useState([]);
  const [tools, setTools] = useState([]);
  const [filteredTools, setFilteredTools] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(categorySlug);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('default');
  const [visibleTools, setVisibleTools] = useState(16);
  const [isDataInitialized, setIsDataInitialized] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentCategoryName, setCurrentCategoryName] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Initialize data on component mount
  useEffect(() => {
    async function processData() {
      try {
        if (!aiTools || !Array.isArray(aiTools)) {
          setError("Tools data is not available");
          setLoading(false);
          return;
        }

        // Process data in chunks
        const chunkSize = 200;
        const totalItems = aiTools.length;
        let processedTools = [];
        let categoryMap = {};

        // Function to process a chunk of data
        const processChunk = (startIndex) => {
          return new Promise(resolve => {
            setTimeout(() => {
              const endIndex = Math.min(startIndex + chunkSize, totalItems);
              
              for (let i = startIndex; i < endIndex; i++) {
                const tool = aiTools[i];
                if (!tool) continue;
                
                // Add fallback image if missing
                const enhancedTool = {
                  ...tool,
                  image_url: tool.image_url || getRandomImage(),
                  category: tool.category || 'Uncategorized'
                };
                
                processedTools.push(enhancedTool);
                
                // Add to category map
                const categoryName = tool.category || 'Uncategorized';
                if (!categoryMap[categoryName]) {
                  categoryMap[categoryName] = {
                    name: categoryName,
                    count: 1,
                    slug: getSeoCategorySlug(categoryName),
                  };
                } else {
                  categoryMap[categoryName].count += 1;
                }
              }
              
              resolve(endIndex);
            }, 0);
          });
        };

        // Process all chunks
        let currentIndex = 0;
        while (currentIndex < totalItems) {
          currentIndex = await processChunk(currentIndex);
        }

        // Convert categories to array and add IDs
        const categoriesArray = Object.values(categoryMap).map((category, index) => ({
          ...category,
          id: index + 1
        }));

        // Sort by count (most tools first)
        categoriesArray.sort((a, b) => b.count - a.count);

        // Add an "All" category at the beginning
        categoriesArray.unshift({
          id: 0,
          name: 'All Categories',
          count: processedTools.length,
          slug: 'all'
        });

        // Find current category name
        const currentCategory = categoriesArray.find(cat => cat.slug === categorySlug);
        if (currentCategory) {
          setCurrentCategoryName(currentCategory.name);
        }

        // Shuffle tools for random order
        const shuffledTools = shuffleArray(processedTools);

        setCategories(categoriesArray);
        setTools(shuffledTools);
        setFilteredTools(shuffledTools);
        setIsDataInitialized(true);
        setLoading(false);
      } catch (err) {
        console.error("Error processing data:", err);
        setError(err.message);
        setLoading(false);
      }
    }

    processData();
  }, [categorySlug]);

  // Handle category selection with URL navigation
  const handleCategoryClick = (categorySlug) => {
    setSelectedCategory(categorySlug);
    setIsSidebarOpen(false);
    if (categorySlug === 'all') {
      router.push('/ai-tools');
    } else {
      router.push(`/${categorySlug}`);
    }
  };

  // Filter and sort tools based on selected category, search query, and sort option
  useEffect(() => {
    if (!isDataInitialized) return;
    
    const timeoutId = setTimeout(() => {
      let filtered = [...tools];
      
      // Filter by category if not "all"
      if (selectedCategory !== 'all') {
        filtered = filtered.filter(tool => {
          if (!tool.category) return false;
          const toolCategorySlug = tool.category.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-');
          return toolCategorySlug === getCategoryFromSeoSlug(selectedCategory);
        });
      }
      
      // Filter by search query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        filtered = filtered.filter(tool => 
          (tool.name && tool.name.toLowerCase().includes(query)) || 
          (tool.description && tool.description.toLowerCase().includes(query))
        );
      }
      
      // Sort tools based on the selected sort option
      if (sortOption === 'alphabetical') {
        filtered.sort((a, b) => (a.name || '').localeCompare(b.name || ''));
      } else if (sortOption === 'newest') {
        filtered.sort((a, b) => (b.id || 0) - (a.id || 0));
      }
      // Default sorting keeps the random order
      
      setFilteredTools(filtered);
      setVisibleTools(16);
    }, 300);
    
    return () => clearTimeout(timeoutId);
  }, [selectedCategory, searchQuery, sortOption, tools, isDataInitialized]);

  // Handle search input
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle sort option change
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  // Load more tools when scrolling
  const loadMoreTools = () => {
    setVisibleTools(prev => prev + 12);
  };

  // Use intersection observer for infinite scroll
  const observerTarget = useCallback(node => {
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && filteredTools.length > visibleTools) {
          loadMoreTools();
        }
      },
      { threshold: 0.1 }
    );
    
    observer.observe(node);
    
    return () => {
      observer.disconnect();
    };
  }, [filteredTools.length, visibleTools]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p className="text-xl text-gray-600">Loading {currentCategoryName} tools...</p>
            <p className="text-sm text-gray-500 mt-2">This may take a moment as we&#39;re loading a large dataset</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Error Loading Data</h2>
            <p className="text-lg text-gray-700">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      <div className="flex-grow container mx-auto px-8 py-8">
        {/* Mobile categories toggle */}
        <div className="mb-4 md:hidden">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow"
            aria-label="Open categories"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
            Categories
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Categories Sidebar */}
          <div className="hidden md:block md:w-1/4 lg:w-1/5">
            <div className="sticky top-24 bg-white shadow-sm rounded-lg border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 px-4 py-3">
                <h2 className="text-lg font-bold text-white">Categories</h2>
              </div>
              <div className="max-h-[calc(100vh-200px)] overflow-y-auto">
                <ul className="divide-y divide-gray-200">
                  {categories.map(category => (
                    <li key={category.id}>
                      <button
                        onClick={() => handleCategoryClick(category.slug)}
                        className={`w-full text-left px-4 py-3 font-medium transition-colors ${
                          (selectedCategory === 'all' && category.slug === 'all') || (getCategoryFromSeoSlug(selectedCategory) === getCategoryFromSeoSlug(category.slug))
                            ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-500'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        <span className="flex justify-between items-center">
                          <span>{category.name}</span>
                          <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded-full">
                            {category.count}
                          </span>
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="md:w-3/4 lg:w-4/5">
            {/* Search Bar and Filters */}
            <div className="mb-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <input
                    type="text"
                    placeholder={`Search ${currentCategoryName} tools by name or description...`}
                    className="w-full py-3 px-4 pl-12 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />
                  <div className="absolute left-4 top-3.5 text-gray-400">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                  </div>
                </div>
                <div className="w-full md:w-48">
                  <select
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={sortOption}
                    onChange={handleSortChange}
                  >
                    <option value="default">Random Order</option>
                    <option value="alphabetical">Alphabetical (A-Z)</option>
                    <option value="newest">Newest First</option>
                  </select>
                </div>
              </div>
            </div>
            
            {/* Results Info */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-800">
                {currentCategoryName || 'Category'} Tools
              </h2>
              <p className="text-gray-600">
                {filteredTools.length} {filteredTools.length === 1 ? 'tool' : 'tools'} found
              </p>
            </div>
            
            {/* Tools Grid */}
            {filteredTools.length === 0 ? (
              <div className="bg-gray-50 rounded-lg p-8 text-center">
                <svg className="h-16 w-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No tools found</h3>
                <p className="text-gray-600">
                  Try adjusting your search or category filter to find what you&#39;re looking for.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 gap-4">
                {filteredTools.slice(0, visibleTools).map((tool, index) => (
                  <React.Fragment key={tool.id || index}>
                    <ToolCard 
                      title={tool.name || tool.title || `Tool ${index + 1}`}
                      excerpt={tool.description || tool.full_description?.substring(0, 150) || "No description available"}
                      category={tool.category || "Uncategorized"}
                      image_url={tool.image_url || getRandomImage()}
                      slug={tool.id || tool.slug || index}
                      external_link={tool.external_link || tool.internal_link || tool.url || "#"}
                    />
                    {/* Insert Display ad after every 4 tool cards */}
                    {(index + 1) % 4 === 0 && index !== filteredTools.slice(0, visibleTools).length - 1 && (
                       <AdFluid />
                    )}
                  </React.Fragment>
                ))}
              </div>
            )}
            
            {/* Load More Trigger */}
            {filteredTools.length > visibleTools && (
              <div 
                ref={observerTarget}
                className="flex justify-center my-8"
              >
                <div className="animate-pulse flex space-x-2">
                  <div className="h-2 w-2 bg-blue-400 rounded-full"></div>
                  <div className="h-2 w-2 bg-blue-400 rounded-full"></div>
                  <div className="h-2 w-2 bg-blue-400 rounded-full"></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Mobile Slide-over Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        aria-hidden={!isSidebarOpen}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-bold text-gray-800">Categories</h2>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="p-1 rounded-md hover:bg-gray-100"
            aria-label="Close categories"
          >
            <svg className="h-6 w-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <div className="h-[calc(100%-64px)] overflow-y-auto">
          <ul className="divide-y divide-gray-200">
            {categories.map(category => (
              <li key={category.id}>
                <button
                  onClick={() => handleCategoryClick(category.slug)}
                  className={`w-full text-left px-4 py-3 font-medium transition-colors ${
                    (selectedCategory === 'all' && category.slug === 'all') || (getCategoryFromSeoSlug(selectedCategory) === getCategoryFromSeoSlug(category.slug))
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <span className="flex justify-between items-center">
                    <span>{category.name}</span>
                    <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
} 