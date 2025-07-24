'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const BlogCard = ({ title, excerpt,  category, image, slug }) => {
  return (
    <div className="overflow-hidden bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
      <div className="h-48 w-full relative">
        {/* Image with fallback */}
        {image ? (
          <Image 
            src={image} 
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        ) : (
          <div className="h-full w-full bg-blue-50 flex items-center justify-center">
            <span className="text-gray-400">No image available</span>
          </div>
        )}
        
       
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="px-2 py-1 text-xs font-sen rounded-full bg-blue-100 text-blue-700">{category}</span>
        </div>
        <Link href={`/blog/${slug}`}>
          <h3 className="text-xl font-bricolage font-semibold mb-2 text-blue-600 transition-colors">
            {title}
          </h3>
        </Link>
        <p className="text-gray-600 font-sen mb-4 text-sm">{excerpt}</p>
        <Link 
          href={`/blog/${slug}`}
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-sen text-sm"
        >
          Read More
          <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard; 