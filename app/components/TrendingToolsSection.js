'use client';

import React, { useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { aiTools } from '../data/aiTools';

const TrendingToolsSection = () => {
  // Get 8 popular tools (you can modify the logic to select based on actual popularity metrics)
  const trendingTools = useMemo(() => {
    // For now, taking the first 8 tools. In production, you'd sort by views/popularity
    return aiTools.slice(0, 8);
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Most Popular <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">AI Tools</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the hottest AI tools that everyone&apos;s talking about right now
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingTools.map((tool, index) => (
            <Link
              key={tool.index}
              href={tool.internal_link}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full"
            >
              {/* Tool Image */}
              <div className="relative w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                <Image
                  src={tool.image_url}
                  alt={tool.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                {/* Trending Badge */}
                {index < 3 && (
                  <div className="absolute top-2 right-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                    #{index + 1}
                  </div>
                )}
              </div>

              {/* Tool Info */}
              <div className="p-5 flex-1 flex flex-col">
                {/* Tool Name */}
                <h3 className="font-semibold text-xl text-gray-800 mb-2 line-clamp-2">
                  {tool.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 line-clamp-3 flex-1">
                  {tool.description}
                </p>

                {/* Footer */}
                <div className="mt-auto flex items-center justify-between">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-blue-600 rounded-full">
                    {tool.category}
                  </span>
                  <span className="text-blue-600 text-sm font-medium transition-colors">
                    View Tool →
                  </span>
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
            View All AI Tools
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrendingToolsSection;

