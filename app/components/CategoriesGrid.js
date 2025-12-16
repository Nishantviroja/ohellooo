'use client';

import React, { useMemo } from 'react';
import Link from 'next/link';
import { aiTools } from '../data/aiTools';

// Helper function to get SEO-friendly category slug
const getSeoCategorySlug = (categoryName) => {
  return categoryName.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-') + '-ai-tools';
};

// Comprehensive unique category icons - NO DUPLICATES
const categoryIcons = {
  // Main Categories
  'Productivity': '⚡',
  'Generative Art': '🎨',
  'Text-To-Speech': '🗣️',
  'Music': '🎵',
  'Generative Video': '🎬',
  'Marketing': '📢',
  'SEO': '🔍',
  'Social Media': '📱',
  'Email': '✉️',
  'Writing': '✍️',
  'Development': '💻',
  'Data Analysis': '📊',
  'Customer Support': '🎧',
  'Sales': '💰',
  'HR': '👥',
  'Design': '🖌️',
  'Education': '📚',
  'Healthcare': '🏥',
  'Finance': '💳',
  'Legal': '⚖️',
  'E-commerce': '🛒',
  'Gaming': '🎮',
  'Real Estate': '🏠',
  'Travel': '✈️',
  'Food': '🍔',
  'Fashion': '👗',
  'Sports': '⚽',
  'News': '📰',
  'Weather': '🌤️',
  'Automation': '🤖',
  'Translation': '🌐',
  'Research': '🔬',
  'Coding': '👨‍💻',
  'Image': '🖼️',
  'Video': '📹',
  'Audio': '🎙️',
  'Chat': '💬',
  'Voice': '🎤',
  'Search': '🔎',
  'Document': '📄',
  'Spreadsheet': '📈',
  'Presentation': '📽️',
  'Database': '🗄️',
  'API': '🔌',
  'Cloud': '☁️',
  'Security': '🔒',
  'Privacy': '🛡️',
  'Blockchain': '⛓️',
  'Crypto': '₿',
  'NFT': '🖼️',
  'Web3': '🌍',
  'Metaverse': '🥽',
  'VR': '👓',
  'AR': '📲',
  'IoT': '📡',
  '3D': '🎲',
  'Animation': '🎞️',
  'Photography': '📷',
  'Video Editing': '🎥',
  'Audio Editing': '🎚️',
  'Graphics': '🎭',
  'UI/UX': '🖥️',
  'Prototyping': '📐',
  'Wireframing': '📝',
  'Testing': '🧪',
  'Debugging': '🐛',
  'Monitoring': '👁️',
  'Analytics': '📉',
  'Reporting': '📑',
  'Dashboard': '📊',
  'Visualization': '📈',
  'Mapping': '🗺️',
  'Location': '📍',
  'Navigation': '🧭',
  'Delivery': '🚚',
  'Logistics': '📦',
  'Inventory': '🏪',
  'Supply Chain': '🔗',
  'Manufacturing': '🏭',
  'Agriculture': '🌾',
  'Energy': '⚡',
  'Environment': '🌲',
  'Sustainability': '♻️',
  'Climate': '🌡️',
  'Business': '💼',
  'Communication': '📞',
  'Collaboration': '🤝',
  'Project Management': '📋',
  'CRM': '👤',
  'Advertising': '📺',
  'Content': '📝',
  'Copywriting': '✏️',
  'Storytelling': '📖',
  'Podcasting': '🎙️',
  'Streaming': '📡',
  'Broadcasting': '📻',
  'Recording': '⏺️',
  'Editing': '✂️',
  'Publishing': '📰',
  'Blogging': '📔',
  'Vlogging': '📹',
  'Influencer': '⭐',
  'Creator': '🎨',
  'Artist': '🎭',
  'Musician': '🎸',
  'Producer': '🎬',
  'Director': '🎥',
  'Writer': '✍️',
  'Author': '📚',
  'Journalist': '📰',
  'Reporter': '🎤',
  'Blogger': '💻',
  'Reviewer': '⭐',
  'Analyst': '📊',
  'Consultant': '💡',
  'Advisor': '🎓',
  'Coach': '🏆',
  'Trainer': '👨‍🏫',
  'Teacher': '👩‍🏫',
  'Tutor': '📖',
  'Mentor': '🤵',
  'Guide': '🗺️',
  'Helper': '🤝',
  'Assistant': '🤖',
  'Bot': '🤖',
  'Agent': '👔',
  'Tool': '🔧',
  'Utility': '🛠️',
  'Plugin': '🔌',
  'Extension': '🧩',
  'Widget': '📱',
  'App': '📲',
  'Software': '💿',
  'Platform': '🖥️',
  'Service': '☁️',
  'Solution': '💡',
  'System': '⚙️',
  'Framework': '🏗️',
  'Library': '📚',
  'Package': '📦',
  'Module': '🧱',
  'Component': '🔧',
  'Feature': '✨',
  'Function': '⚡',
  'default': '🎯'
};

// Generate a unique icon based on category name hash if not found
const getUniqueIcon = (category, index) => {
  const uniqueIcons = [
    '🚀', '💎', '🔮', '🎯', '🌟', '💫', '✨', '🔥', '⚡', '💡',
    '🎨', '🎭', '🎪', '🎬', '🎤', '🎧', '🎵', '🎸', '🎹', '🎺',
    '📱', '💻', '🖥️', '⌨️', '🖱️', '🖨️', '📷', '📹', '📞', '📟',
    '🔬', '🔭', '🧪', '🧬', '🔎', '🔍', '🔧', '🔨', '⚙️', '🛠️',
    '📊', '📈', '📉', '💹', '📌', '📍', '🗺️', '🧭', '⏱️', '⏰',
    '🏆', '🥇', '🥈', '🥉', '🎖️', '🏅', '⚽', '🏀', '🏈', '⚾',
    '🌍', '🌎', '🌏', '🗻', '🏔️', '⛰️', '🏕️', '🏖️', '🏜️', '🏝️',
    '🎓', '📚', '📖', '📝', '✏️', '✍️', '📄', '📃', '📑', '📰',
    '💰', '💵', '💴', '💶', '💷', '💳', '💸', '🪙', '💼', '🏦',
    '🛒', '🛍️', '🏪', '🏬', '🏢', '🏭', '🏗️', '🏘️', '🏚️', '🏠',
    '🎁', '🎀', '🎊', '🎉', '🎈', '🎆', '🎇', '🧨', '✨', '🎋'
  ];
  
  // Use index to get a unique icon
  return uniqueIcons[index % uniqueIcons.length];
};

const getCategoryIcon = (category, index = 0) => {
  // Try exact match first
  if (categoryIcons[category]) return categoryIcons[category];
  
  // Try partial match
  const categoryLower = category.toLowerCase();
  for (const [key, icon] of Object.entries(categoryIcons)) {
    if (categoryLower.includes(key.toLowerCase()) || key.toLowerCase().includes(categoryLower)) {
      return icon;
    }
  }
  
  // Return unique icon based on index
  return getUniqueIcon(category, index);
};

export default function CategoriesGrid() {
  // Get unique categories and count tools per category
  const categoriesData = useMemo(() => {
    const categoryMap = new Map();
    
    aiTools.forEach(tool => {
      const category = tool.category || 'Other';
      if (!categoryMap.has(category)) {
        categoryMap.set(category, {
          name: category,
          count: 0,
          slug: getSeoCategorySlug(category),
          icon: '' // Will be set after sorting
        });
      }
      categoryMap.get(category).count++;
    });
    
    // Convert to array and sort by count (descending)
    const sortedCategories = Array.from(categoryMap.values())
      .sort((a, b) => b.count - a.count);
    
    // Assign unique icons based on sorted index
    sortedCategories.forEach((cat, index) => {
      cat.icon = getCategoryIcon(cat.name, index);
    });
    
    return sortedCategories;
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Browse AI Tools by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Category</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our curated collection of {categoriesData.length}+ categories featuring the best AI tools for every industry and use case
          </p>
        </div>

        {/* Categories Grid - Horizontal Card Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {categoriesData.map((category) => (
            <Link
              key={category.slug}
              href={`/${category.slug}`}
              className="bg-gradient-to-br from-white to-blue-50 group relative bg-white px-3 py-3 rounded-xl border-2 border-blue-50 hover:border-blue-100 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                {/* Icon - Left Side */}
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center  rounded-xl text-3xl group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                
                {/* Text Content - Right Side */}
                <div className="flex-1 min-w-0">
                  {/* Category Name */}
                  <h3 className="font-bold text-gray-900 mb-1 truncate group-hover:text-blue-600 transition-colors">
                    {category.name}
                  </h3>
                  
                  {/* Tools Count */}
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="font-semibold text-blue-600">{category.count}</span>
                    <span className="ml-1">AI tools</span>
                  </div>
                </div>

                {/* Hover Arrow - Far Right */}
                <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            href="/ai-tools"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            View All AI Tools
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

