'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';
import Image from 'next/image';

// Blog posts data
const blogPosts = [
  {
    id: 1,
    title: 'Top 10 AI Tools for Content Creators in 2023',
    excerpt: 'Discover the most powerful AI tools that are revolutionizing content creation across various mediums.',
    date: 'October 15, 2023',
    author: 'Sarah Johnson',
    category: 'Tools Roundup',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?auto=format&fit=crop&w=800&h=500&q=80',
    slug: 'top-ai-tools-content-creators-2023'
  },
  {
    id: 2,
    title: 'How AI is Transforming the Future of Web Development',
    excerpt: 'From automated coding to intelligent debugging, AI is changing how developers build websites and applications.',
    date: 'September 28, 2023',
    author: 'Michael Chen',
    category: 'Development',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&h=500&q=80',
    slug: 'ai-transforming-web-development'
  },
  {
    id: 3,
    title: 'The Ethics of Using AI for Content Generation',
    excerpt: 'Exploring the moral implications and best practices when leveraging AI to create written and visual content.',
    date: 'September 15, 2023',
    author: 'Priya Patel',
    category: 'Ethics',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&h=500&q=80',
    slug: 'ethics-ai-content-generation'
  },
  {
    id: 4,
    title: 'Beginners Guide to Using AI Image Generators',
    excerpt: 'A comprehensive walkthrough on getting started with popular AI image generation tools.',
    date: 'August 30, 2023',
    author: 'David Wilson',
    category: 'Tutorials',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&h=500&q=80',
    slug: 'beginners-guide-ai-image-generators'
  },
  {
    id: 5,
    title: 'How to Use AI Writing Tools Without Losing Your Voice',
    excerpt: 'Tips and strategies for maintaining your unique writing style while leveraging AI writing assistants.',
    date: 'August 18, 2023',
    author: 'Emma Roberts',
    category: 'Writing',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=800&h=500&q=80',
    slug: 'using-ai-writing-tools-keep-your-voice'
  },
  {
    id: 6,
    title: 'The Rise of AI Personal Assistants in Productivity Tools',
    excerpt: 'How AI-powered personal assistants are being integrated into productivity software to boost efficiency.',
    date: 'July 24, 2023',
    author: 'Thomas Brown',
    category: 'Productivity',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=800&h=500&q=80',
    slug: 'rise-ai-personal-assistants-productivity'
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 py-20 px-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-bricolage text-gray-800 mb-6">
            AI Tools Blog
          </h1>
          <p className="text-lg text-gray-600 font-sen max-w-2xl mx-auto">
            Insights, tutorials, and updates about the latest AI tools and technology trends.
          </p>
        </div>
      </div>
      
      {/* Featured Post */}
      <section className="py-12">
        <div className="container mx-auto px-8">
          <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
            <div className="md:flex">
              <div className="md:flex-shrink-0 md:w-1/2">
                <div className="relative h-64 md:h-full">
                  <Image
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="p-8 md:p-10 md:w-1/2">
                <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold font-sen mb-2">
                  {blogPosts[0].category}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold font-bricolage text-gray-800 mb-3">
                  {blogPosts[0].title}
                </h2>
                <p className="text-gray-600 font-sen mb-6">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center mb-5">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                    {blogPosts[0].author.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-800">{blogPosts[0].author}</p>
                    <p className="text-xs text-gray-500">{blogPosts[0].date} · {blogPosts[0].readTime}</p>
                  </div>
                </div>
                <Link href={`/blog/${blogPosts[0].slug}`} className="inline-flex items-center px-4 py-2 border border-blue-600 text-blue-600 bg-white hover:bg-blue-50 rounded-lg transition-colors font-sen text-sm">
                  Read Article
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Blog Posts Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-8">
          <h2 className="text-2xl md:text-3xl font-bold font-bricolage text-gray-800 mb-8">
            Latest Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold font-bricolage text-gray-800 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 font-sen mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-xs">
                        {post.author.charAt(0)}
                      </div>
                      <span className="ml-2 text-sm text-gray-700">{post.author}</span>
                    </div>
                    <span className="text-xs text-gray-500">{post.date}</span>
                  </div>
                  <Link href={`/blog/${post.slug}`} className="mt-4 inline-block text-blue-600 hover:text-blue-800 text-sm font-medium font-sen transition-colors">
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      
      
      <Footer />
    </div>
  );
} 