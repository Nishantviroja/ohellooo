'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const BlogCard = ({
  title,
  excerpt,
  category,
  image,
  slug,
  author,
  date,
  readTime
}) => {
  return (
    <Link href={`/blog/${slug}`} className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="relative w-full aspect-[16/9]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            {category}
          </span>
          <span className="text-xs text-gray-500">
         {date} · {readTime}
          </span>
        </div>
        <h3 className="text-xl font-bold font-bricolage text-gray-800 mb-3 line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-600 font-sen mb-4 line-clamp-3">
          {excerpt}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-xs">
              {author && author.charAt(0)}
            </div>
            <span className="ml-2 text-sm text-gray-700">{author}</span>
          </div>
        
         
        </div>
        
      </div>
    </Link>
  );
};

export default BlogCard; 