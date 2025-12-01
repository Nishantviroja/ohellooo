'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
 
const Footer = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
 
  const handleSubscribe = async (e) => {
    e.preventDefault();
    setStatus('');
    setLoading(true);
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus(data.error || 'Subscription failed.');
      }
    } catch {
      setStatus('Subscription failed.');
    }
    setLoading(false);
  };
 
  return (
    <footer className="bg-white dark:bg-muted border-t border-[#0066FF]/10 py-12">
      <div className="container mx-auto px-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1  lg:grid-cols-3 gap-8 ">
          <div>
            <div className="flex-shrink-0 mb-4">
            <Link href="/" className="font-bricolage text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 animate-gradient">
            {/* Fizoval - Your AI Insider */}
             <Image src="/Fizoval.png" alt="Fizoval" width={120} height={200} style={{ width: 'auto', height: 'auto' }} />
            </Link>
          </div>
           
            <p className="text-gray-600 mb-4">
            Helping you navigate the rapidly evolving world of AI tools and technologies.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/fizoval" className="text-gray-600 hover:text-[#0066FF] transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                </svg>
              </a>
              
              <a href="https://www.linkedin.com/company/fizoval" className="text-gray-600 hover:text-[#0066FF] transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              
              <a href="/blog/rss.xml" className="text-gray-600 hover:text-[#0066FF] transition-colors">
                <span className="sr-only">RSS Feed</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.199 24C19.199 13.467 10.533 4.8 0 4.8V0c13.165 0 24 10.835 24 24h-4.801zM3.291 17.415c1.814 0 3.293 1.479 3.293 3.295 0 1.813-1.485 3.29-3.301 3.29C1.47 24 0 22.526 0 20.71s1.475-3.294 3.291-3.295zM15.909 24h-4.665c0-6.169-5.075-11.245-11.244-11.245V8.09c8.727 0 15.909 7.184 15.909 15.91z"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
            <div>
              <h3 className="text-lg font-bold mb-4 text-[#0066FF]">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-600 hover:text-[#0066FF] transition-colors">Home</Link></li>
                <li><Link href="/ai-tools" className="text-gray-600 hover:text-[#0066FF] transition-colors">AI Tools</Link></li>
                <li><Link href="/blog" className="text-gray-600 hover:text-[#0066FF] transition-colors">Blog</Link></li>
                
                <li><Link href="/play" className="text-gray-600 hover:text-[#0066FF] transition-colors">Play Games</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-[#0066FF]">Quick Links</h3>
              <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-600 hover:text-[#0066FF] transition-colors">About Fizoval</Link></li>
                
                <li><Link href="/terms-and-conditions" className="text-gray-600 hover:text-[#0066FF] transition-colors">Terms & Conditions</Link></li>
                <li><Link href="/privacy-policy" className="text-gray-600 hover:text-[#0066FF] transition-colors">Privacy Policy</Link></li>
                <li><Link href="/affiliate-disclosure" className="text-gray-600 hover:text-[#0066FF] transition-colors">Affiliate Disclosure</Link></li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#0066FF]"> Stay Updated on AI Trends</h3>
            <p className="text-gray-600 mb-4">
              Subscribe to our newsletter to receive the latest updates, tutorials, and insights about AI tools.
            </p>
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  className="px-4 py-3 rounded-lg flex-1 bg-blue-50 border border-blue-100 outline-[#0066FF] text-blue-600 font-sen"
                  disabled={loading}
                />
                <button
                  type="submit"
                  className={`text-white bg-blue-600 font-medium font-sen py-3 px-6 rounded-lg transition-transform duration-100 active:scale-95 flex items-center justify-center ${loading ? 'opacity-60 cursor-not-allowed' : ''}`}
                  disabled={loading}
                >
                  {loading ? (
                    <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                    </svg>
                  ) : null}
                  {loading ? 'Subscribing...' : 'Subscribe'}
                </button>
              </div>
              {status === 'success' && (
                <div className="mt-4 p-3 rounded-lg bg-green-100 text-green-800 font-semibold text-center animate-fade-in">
                  Thank you for subscribing! Please check your inbox for updates.
                </div>
              )}
              {status && status !== 'success' && (
                <p className="text-sm mt-3 text-red-600 text-center">{status}</p>
              )}
            </form>
            <p className="text-sm mt-3 text-gray-600 ">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
           
          </div>
         
         
        </div>
        <div className="mt-12 pt-8 border-t border-[#0066FF]/10">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} <Link href="https://fizoval.com/" className="font-bricolage font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 animate-gradient">
            Fizoval
           
            </Link>
             &nbsp;- All rights reserved.
          </p>
        </div>
     
    </footer>
  );
};
 
export default Footer;