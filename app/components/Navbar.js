'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
            <Link href="/" className="font-bricolage text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 animate-gradient" onClick={closeMobileMenu}>
            {/* Fizoval - Your AI Insider */}
             <Image src="/Fizoval.png" alt="Fizoval" width={130} height={200} style={{ width: 'auto', height: 'auto' }} priority />
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="font-sen text-gray-600 hover:text-gray-900 transition-colors">
                Home
              </Link>
              <Link href="/ai-tools" className="font-sen text-gray-600 hover:text-gray-900 transition-colors">
              AI Tools
              </Link>
              <Link href="/blog" className="font-sen text-gray-600 hover:text-gray-900 transition-colors">
                Blog
              </Link>
              <Link href="/about" className="font-sen text-gray-600 hover:text-gray-900 transition-colors">
                About
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={toggleMobileMenu}
                className="p-1 rounded-md hover:bg-gray-100 transition-colors"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <svg className="h-6 w-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                ) : (
                  <svg className="h-6 w-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 opacity-50 bg-gray-700 z-50 md:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800">Menu</h2>
            <button 
              onClick={closeMobileMenu}
              className="p-1 rounded-md hover:bg-gray-100 transition-colors"
              aria-label="Close mobile menu"
            >
              <svg className="h-6 w-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          {/* Sidebar Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            <Link 
              href="/" 
              className="block px-4 py-3 rounded-lg text-base font-sen text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
              onClick={closeMobileMenu}
            >
              Home
            </Link>
            <Link 
              href="/ai-tools" 
              className="block px-4 py-3 rounded-lg text-base font-sen text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
              onClick={closeMobileMenu}
            >
              AI Tools
            </Link>
            <Link 
              href="/blog" 
              className="block px-4 py-3 rounded-lg text-base font-sen text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
              onClick={closeMobileMenu}
            >
              Blog
            </Link>
            <Link 
              href="/about" 
              className="block px-4 py-3 rounded-lg text-base font-sen text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
              onClick={closeMobileMenu}
            >
              About
            </Link>
          </nav>

          {/* Sidebar Footer */}
          <div className="p-4 border-t border-gray-200">
            <div className="text-center">
              <Image src="/Fizoval.png" alt="Fizoval" width={100} height={150} style={{ width: 'auto', height: 'auto' }} className="mx-auto" />
              <p className="text-sm text-gray-500 mt-2">Best AI Tools Directory</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 