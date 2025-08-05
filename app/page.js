'use client';

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import ToolCard from './components/ToolCard';
import { aiTools } from './data/aiTools';

// Predefined Unsplash image IDs for each category
const categoryImages = {
  'Research': 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&h=600&q=80',
  'Communication': 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&h=600&q=80',
  'Design': 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&h=600&q=80',
  'Development': 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=800&h=600&q=80',
  'Productivity': 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&h=600&q=80',
  'Writing': 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?auto=format&fit=crop&w=800&h=600&q=80',
  'Media': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=600&q=80'
};

// Fallback images if category doesn't match
const fallbackImages = [
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&h=600&q=80',
  'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&h=600&q=80',
  'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&h=600&q=80'
];

// Function to shuffle array randomly
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [randomizedTools, setRandomizedTools] = useState([]);
  const cardsPerPage = 12;
  
  // Get unique categories for filter
  const categories = ['All', ...new Set(aiTools.map(tool => tool.category))];
  
  // Initialize with shuffled tools
  useEffect(() => {
    setRandomizedTools(shuffleArray(aiTools));
  }, []);
  
  // Filter tools based on search term and category
  const filteredTools = (randomizedTools.length ? randomizedTools : aiTools).filter(tool => {
    if (!tool) return false;
    
    const searchTermLower = searchTerm.toLowerCase();
    const nameLower = tool.name?.toLowerCase() || '';
    const descriptionLower = tool.description?.toLowerCase() || '';
    const categoryLower = tool.category?.toLowerCase() || '';
    
    const matchesSearch = nameLower.includes(searchTermLower) || 
                         descriptionLower.includes(searchTermLower) ||
                         categoryLower.includes(searchTermLower);
    const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredTools.length / cardsPerPage);
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredTools.slice(indexOfFirstCard, indexOfLastCard);
  
  // Reset to first page when search or filter changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory]);

  // Add a function to reshuffle the tools
  const reshuffleTools = () => {
    setRandomizedTools(shuffleArray(aiTools));
    setSearchTerm('');
    setSelectedCategory('All');
    setCurrentPage(1);
  };

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      // Show all pages if total is less than max visible
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Always show first page
      pageNumbers.push(1);
      
      // Calculate start and end of visible pages
      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(totalPages - 1, currentPage + 1);
      
      // Adjust if we're near the start
      if (currentPage <= 2) {
        endPage = 4;
      }
      
      // Adjust if we're near the end
      if (currentPage >= totalPages - 1) {
        startPage = totalPages - 3;
      }
      
      // Add ellipsis if needed
      if (startPage > 2) {
        pageNumbers.push('...');
      }
      
      // Add middle pages
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }
      
      // Add ellipsis if needed
      if (endPage < totalPages - 1) {
        pageNumbers.push('...');
      }
      
      // Always show last page
      pageNumbers.push(totalPages);
    }
    
    return pageNumbers;
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      
      {/* AI Tools Section with Search */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-bricolage text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">
            AI Tools Collection
          </h2>
          
          {/* Search and Filter */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search AI tools..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-800 focus:text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-sen"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-48">
                <select
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 focus:border-transparent font-sen bg-white"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              <button
                onClick={reshuffleTools}
                className="px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-sen flex items-center justify-center"
              >
                <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                </svg>
                Shuffle
              </button>
            </div>
            
            {/* Results count */}
            <p className="text-gray-600 font-sen text-sm text-center">
              Showing {filteredTools.length} of {aiTools.length} AI tools
            </p>
          </div>
          
          {/* Tool cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
            {currentCards.map((tool, index) => (
              <ToolCard 
                key={tool.index || index}
                title={tool.name}
                excerpt={tool.description}
                category={tool.category}
                image_url={tool.image_url}
                slug={tool.index}
                external_link={tool.external_link}
              />
            ))}
          </div>
          
          {/* No results message */}
          {filteredTools.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-bricolage font-semibold text-gray-800 mb-2">No AI tools found</h3>
              <p className="text-gray-600 font-sen">Try adjusting your search or filter to find what you&#39;re looking for.</p>
            </div>
          )}
          
          {/* Pagination */}
          {filteredTools.length > 0 && totalPages > 1 && (
            <div className="flex justify-center mt-12">
              <nav className="flex items-center space-x-2">
                {/* Previous button */}
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className={`px-3 py-2 rounded-md ${
                    currentPage === 1
                      ? 'text-gray-400 cursor-not-allowed'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                  </svg>
                </button>
                
                {/* Page numbers */}
                {getPageNumbers().map((pageNumber, index) => (
                  <React.Fragment key={index}>
                    {pageNumber === '...' ? (
                      <span className="px-3 py-2 text-gray-500">...</span>
                    ) : (
                      <button
                        onClick={() => setCurrentPage(pageNumber)}
                        className={`px-3 py-2 rounded-md ${
                          currentPage === pageNumber
                            ? 'bg-blue-600 text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        {pageNumber}
                      </button>
                    )}
                  </React.Fragment>
                ))}
                
                {/* Next button */}
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className={`px-3 py-2 rounded-md ${
                    currentPage === totalPages
                      ? 'text-gray-400 cursor-not-allowed'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
              </nav>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
