'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import blogPosts from '../data/blogPosts';
import BlogCard from '../components/BlogCard';


export default function Blog() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-50 py-20 px-4 md:px-8 flex items-center justify-center">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold font-bricolage text-gray-900 mb-6 leading-tight drop-shadow-sm">
            Latest <span className="font-bricolage font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 animate-gradient">
            AI Insights
             
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-sen mb-8 max-w-2xl mx-auto">
            Stay ahead with expert articles, reviews, and news about the most powerful AI tools and technology trends.
          </p>
        </div>
      </section>
      {/* Blog Cards Grid */}
      <section className="flex-1 py-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 py-12">
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} {...post} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
} 