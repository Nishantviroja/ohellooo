'use client';

import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import BlogCard from '../../components/BlogCard';
import { fetchBlogPosts } from '../../data/blogPosts';
import { notFound } from 'next/navigation';

export default function BlogPost({ slug }) {
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadBlogPost() {
      try {
        const posts = await fetchBlogPosts();
        const currentPost = posts.find((p) => p.slug === slug);
        
        if (!currentPost) {
          notFound();
        }
        
        setPost(currentPost);
        setRelatedPosts(posts.filter(p => p.id !== currentPost.id).slice(0, 2));
      } catch (error) {
        console.error('Error loading blog post:', error);
        notFound();
      } finally {
        setLoading(false);
      }
    }
    loadBlogPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <Navbar />
        <div className="container mx-auto px-4 py-16">
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading blog post...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navbar />
      
     

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          {/* Article Header */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full mr-3">
                {post.category}
              </span> 
             <span className=" text-gray-600">{post.date} · {post.readTime}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white text-lg font-bold">
                {post.author.charAt(0).toUpperCase()}
              </div>
              <span className="ml-4 text-gray-600 font-medium text-lg">{post.author}</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative w-full aspect-[16/9] mb-12 rounded-2xl overflow-hidden shadow-2xl">
  <Image 
    src={post.image} 
    alt={post.title} 
    fill 
    className="object-cover" 
    priority 
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
</div>


          {/* Article Content */}
          <article className="bg-transparent rounded-2xl  shadow-none md:shadow-xl p-0 md:p-12">
            {/* Excerpt */}
            <div className="mb-4">
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6"></div>
              <p className="text-xl text-gray-700 font-sen leading-relaxed italic">
              &#34;{post.excerpt}&#34;
              </p>
            </div>

            {/* Main Content */}
            <div 
              className="blog-content text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>

          {/* CTA Section */}
          <div className="mt-16 mb-16">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Explore More AI Tools?
                </h2>
                <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                  Discover over 5000+ cutting-edge AI tools that can transform your workflow. 
                  From productivity to creativity, find the perfect AI solution for your needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/ai-tools" 
                    className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
                  >
                    Browse All AI Tools →
                  </Link>
                  
                </div>
                
              </div>
            </div>
          </div>

          {/* Related Articles Suggestion */}
        
            <h3 className="text-4xl font-bold text-blue-600 mb-6 mt-16 ">Continue Reading</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.id} {...relatedPost} />
              ))}
            </div>
         
        </div>
      </div>
      
      <Footer />
    </div>
  );
} 