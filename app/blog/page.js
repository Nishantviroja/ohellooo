import React from 'react';
import siteMetadata from '../data/metadata';
import { fetchBlogPosts } from '../data/blogPosts';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlogCard from '../components/BlogCard';
import AdFluid from '../components/ads/AdFluid';
import BlogSchema from '../schema/BlogSchema';

export function generateMetadata() {
  const base = siteMetadata.blog || {};
  return {
    ...base,
    robots: { index: true, follow: true, maxImagePreview: 'large' },
    alternates: {
      ...(base.alternates || {}),
      canonical: 'https://fizoval.com/blog',
      types: {
        'application/rss+xml': 'https://fizoval.com/blog/rss.xml',
      },
    },
    openGraph: {
      ...(base.openGraph || {}),
      type: 'article',
    },
  };
}

// ✅ FIXED: Enable ISR for blog listing page
export const revalidate = 60; // Revalidate every minute (1 min = 60 seconds)

export default async function BlogPage() {
  // ✅ FIXED: Fetch blog posts server-side
  let blogPosts = [];
  
  try {
    blogPosts = await fetchBlogPosts();
  } catch (err) {
    console.error('Error loading blog posts:', err);
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <BlogSchema />
      <Navbar />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-50 py-8 px-4 md:px-8 flex items-center justify-center">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold font-bricolage text-gray-900 mb-6 leading-tight drop-shadow-sm">
            Latest <span className="font-bricolage font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 animate-gradient">
            AI Insights
             
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-sen mb-4 max-w-2xl mx-auto">
            Stay ahead with expert articles, reviews, and news about the most powerful AI tools and technology trends.
          </p>
        </div>
      </section>
      {/* Blog Cards Grid */}
      <section className="flex-1 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 py-10 gap-4">

          {blogPosts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <React.Fragment key={post.id}>
                  <BlogCard {...post} />
                  {/* Insert fluid ad after every 4 blog posts - adapts to grid layout */}
                  {(index + 1) % 4 === 0 && index !== blogPosts.length - 1 && (
                    <AdFluid />
                  )}
                </React.Fragment>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="max-w-md mx-auto">
                <div className="text-gray-400 mb-4">
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">No Blog Posts Found</h3>
                <p className="text-gray-500">No blog posts are available at the moment. Please check back later.</p>
              </div>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}
