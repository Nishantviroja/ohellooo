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
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
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
                <li><Link href="/about" className="text-gray-600 hover:text-[#0066FF] transition-colors">About</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-[#0066FF]">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/terms-and-conditions" className="text-gray-600 hover:text-[#0066FF] transition-colors">Terms & Conditions</Link></li>
                <li><Link href="/privacy-policy" className="text-gray-600 hover:text-[#0066FF] transition-colors">Privacy Policy</Link></li>
                <li><Link href="/affiliate-disclosure" className="text-gray-600 hover:text-[#0066FF] transition-colors">Affiliate Disclosure</Link></li>
                <li><Link href="/blog/rss.xml" className="text-gray-600 hover:text-[#0066FF] transition-colors">RSS Feed</Link></li>
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