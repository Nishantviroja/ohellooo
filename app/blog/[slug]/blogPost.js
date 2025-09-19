'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import BlogCard from '../../components/BlogCard';
import { fetchBlogPosts } from '../../data/blogPosts';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import { FaWhatsapp, FaLinkedinIn, FaRedditAlien } from 'react-icons/fa';
import { FiLink } from 'react-icons/fi';
import { getAuthorByName } from '../../data/authors';

export default function BlogPost({ slug }) {
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

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
      {post ? (
        <Script id="blog-post-jsonld" type="application/ld+json">
          {JSON.stringify((() => {
            const authorData = getAuthorByName(post.author);
            return {
              '@context': 'https://schema.org',
              '@type': 'NewsArticle',
              headline: post.metadata?.title || post.title,
              description: post.metadata?.desc || post.excerpt,
              author: { 
                '@type': 'Person', 
                name: authorData.name,
                url: `https://fizoval.com/blog/author/${authorData.id}`,
                description: authorData.about,
              },
              publisher: {
                '@type': 'Organization',
                name: 'Fizoval',
                logo: { '@type': 'ImageObject', url: 'https://fizoval.com/FeaturingIMG.png' },
              },
              image: post.image,
              datePublished: post.date,
              dateModified: post.date,
              mainEntityOfPage: { '@type': 'WebPage', '@id': `https://fizoval.com/blog/${post.slug}` },
            };
          })())}
        </Script>
      ) : null}
      
     
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        <div className="max-w-5xl mx-auto">
          {/* Article Header */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full mr-3">
                {post.category}
              </span> 
             <span className=" text-gray-600">{post.date} · {post.readTime}</span>
            </div>
            <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center justify-between">
              <Link href={`/blog/author/${getAuthorByName(post.author).id}`} className="flex items-center hover:opacity-80 transition-opacity">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-blue-200 shadow-md">
                  <Image
                    src={getAuthorByName(post.author).avatar}
                    alt={post.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="ml-4 text-gray-600 font-medium text-base md:text-lg hover:text-blue-600 transition-colors">{post.author}</span>
              </Link>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    const url = `https://fizoval.com/blog/${post.slug}`;
                    const text = encodeURIComponent(post.title);
                    const shareUrl = `https://wa.me/?text=${text}%20${encodeURIComponent(url)}`;
                    window.open(shareUrl, '_blank');
                  }}
                  className="h-9 w-9 rounded-full bg-green-500 text-white flex items-center justify-center shadow-sm hover:shadow-md transition-transform duration-150 hover:scale-105 active:scale-95"
                  aria-label="Share on WhatsApp"
                  title="Share on WhatsApp"
                >
                  <FaWhatsapp size={16} />
                </button>
                <button
                  onClick={() => {
                    const url = `https://fizoval.com/blog/${post.slug}`;
                    const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
                    window.open(shareUrl, '_blank');
                  }}
                  className="h-9 w-9 rounded-full bg-blue-700 text-white flex items-center justify-center shadow-sm hover:shadow-md transition-transform duration-150 hover:scale-105 active:scale-95"
                  aria-label="Share on LinkedIn"
                  title="Share on LinkedIn"
                >
                  <FaLinkedinIn size={16} />
                </button>
                <button
                  onClick={() => {
                    const url = `https://fizoval.com/blog/${post.slug}`;
                    const title = encodeURIComponent(post.title);
                    const shareUrl = `https://www.reddit.com/submit?url=${encodeURIComponent(url)}&title=${title}`;
                    window.open(shareUrl, '_blank');
                  }}
                  className="h-9 w-9 rounded-full bg-orange-600 text-white flex items-center justify-center shadow-sm hover:shadow-md transition-transform duration-150 hover:scale-105 active:scale-95"
                  aria-label="Share on Reddit"
                  title="Share on Reddit"
                >
                  <FaRedditAlien size={16} />
                </button>
                <button
                  onClick={async () => {
                    const url = `https://fizoval.com/blog/${post.slug}`;
                    try {
                      await navigator.clipboard.writeText(url);
                      setCopied(true);
                      setTimeout(() => setCopied(false), 1500);
                    } catch {
                      const textarea = document.createElement('textarea');
                      textarea.value = url;
                      document.body.appendChild(textarea);
                      textarea.select();
                      document.execCommand('copy');
                      document.body.removeChild(textarea);
                      setCopied(true);
                      setTimeout(() => setCopied(false), 1500);
                    }
                  }}
                  className="relative h-9 w-9 rounded-full bg-gray-800 text-white flex items-center justify-center shadow-sm hover:shadow-md transition-transform duration-150 hover:scale-105 active:scale-95"
                  aria-label="Copy link"
                  title={copied ? 'Copied!' : 'Copy link'}
                >
                  <FiLink size={16} />
                  <span className={`absolute -bottom-6 text-xs text-gray-600 transition-opacity duration-200 ${copied ? 'opacity-100' : 'opacity-0'}`}>Copied</span>
                </button>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative w-full aspect-[16/9] mb-8 rounded-2xl overflow-hidden shadow-2xl">
  <Image 
    src={post.image} 
    alt={post.title} 
    fill 
    className="object-cover" 
    priority 
  />

</div>


          {/* Article Content */}
          <article className="bg-transparent rounded-2xl  shadow-none md:shadow-xl p-0 md:p-12">
            {/* Excerpt */}
            <div className="mb-4">
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6"></div>
              <p className="text-base md:text-lg text-gray-700 font-sen leading-relaxed italic font-semibold rounded-r-lg my-6">
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
                  Ready to Explore AI Tools?
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
                    Explore AI Tools →
                  </Link>
                  
                </div>
                
              </div>
            </div>
          </div>

          {/* Related Articles Suggestion */}
        
            <h3 className="text-xl md:text-3xl font-bold text-black mb-6 mt-16 ">Continue Reading</h3>
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