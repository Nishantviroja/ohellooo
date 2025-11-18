'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import BlogCard from './BlogCard';

export default function HomeBlogSection() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        // ✅ FIXED: Use API route instead of direct GitHub fetch (avoids CORS issues)
        const response = await fetch('/api/blog-posts');
        
        if (!response.ok) {
          throw new Error('Failed to fetch blog posts');
        }
        
        const all = await response.json();
        setPosts(Array.isArray(all) ? all.slice(0, 3) : []);
      } catch (e) {
        console.error('Error loading blog posts:', e);
        setPosts([]);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-8">
        <div className="flex items-center justify-between mb-8 ">
        <h2 className="font-bricolage text-3xl md:text-4xl font-bold text-center text-gray-800">
        Latest from the Blog
        </h2>
         
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading blog posts...</p>
          </div>
        ) : posts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <BlogCard key={post.id} {...post} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">No posts available.</p>
        )}

        <div className="mt-10 text-center"><Link href="/blog" className="text-blue-600 hover:text-blue-800 font-sen font-semibold">View more →</Link> </div>
      </div>
    </section>
  );
}
