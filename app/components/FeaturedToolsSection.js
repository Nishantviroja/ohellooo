'use client';

import React, { useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { aiTools } from '../data/aiTools';

// Helper function to get SEO-friendly slugs
const getSeoCategorySlug = (categoryName) => {
  return categoryName.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-') + '-ai-tools';
};

const slugify = (str) => {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').replace(/-+/g, '-');
};

export default function FeaturedToolsSection() {
  // Get trending/popular tools (top rated or most viewed)
  const featuredTools = useMemo(() => {
    // Select first 8 tools from the randomized list as "featured"
    return aiTools.slice(0, 8);
  }, []);

  const getToolUrl = (tool) => {
    const categorySlug = getSeoCategorySlug(tool.category);
    const toolSlug = slugify(tool.name);
    return `/${categorySlug}/${toolSlug}`;
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ⭐ Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">AI Tools</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the most popular and trending AI tools trusted by thousands of users
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredTools.map((tool) => (
            <Link
              key={tool.index}
              href={getToolUrl(tool)}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:scale-105 border-2 border-transparent hover:border-blue-500"
            >
              {/* Tool Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100 overflow-hidden">
                <Image
                  src={tool.image_url || '/placeholder-tool.png'}
                  alt={tool.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  unoptimized
                />
                
                {/* Pricing Badge */}
                {tool.pricing_model && (
                  <div className="absolute top-3 right-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      tool.pricing_model === 'Free' 
                        ? 'bg-green-500 text-white' 
                        : tool.pricing_model === 'Freemium'
                        ? 'bg-blue-500 text-white'
                        : 'bg-purple-500 text-white'
                    }`}>
                      {tool.pricing_model}
                    </span>
                  </div>
                )}
              </div>

              {/* Tool Info */}
              <div className="p-5">
                {/* Category Tag */}
                <div className="mb-2">
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                    {tool.category}
                  </span>
                </div>

                {/* Tool Name */}
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1 group-hover:text-blue-600 transition-colors">
                  {tool.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                  {tool.description}
                </p>

                {/* Learn More Button */}
                <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:translate-x-2 transition-transform">
                  Learn More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/ai-tools"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Explore All Tools
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

