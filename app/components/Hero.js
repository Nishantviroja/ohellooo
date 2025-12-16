'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Linear-Style Hero - Split Layout with Lightweight Bento Grid
const Hero = () => {

  return (
    <div className="relative h-[90vh] overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      {/* Animated gradient background orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-pink-400 to-orange-400 rounded-full blur-3xl opacity-20"></div>
      
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
        <div className="w-full max-w-4xl py-8 lg:py-12">
          
          {/* Centered Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-4 lg:space-y-6 text-center flex flex-col gap-4 items-center justify-center relative z-40"
              >
            {/* Badge */}
            

            {/* Headline */}
            <div className="space-y-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200"
            >
              <span className="text-2xl">✨</span>
              <span className="text-sm font-semibold text-gray-700">The World's Largest AI Tools Directory</span>
           </motion.div> 
           
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                <span className="block text-gray-900">Discover the Best</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                  AI Tools & Insights for You
                </span>
              </h1>
              <p className="text-lg md:text-xl lg:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                Explore 5,000+ handpicked AI tools across 120+ categories, and stay updated with the latest trends, and find your perfect solution in minutes.
              </p>
            </div>

            {/* Trust Badge - Centered */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center justify-center gap-3"
            >
              <div className="flex -space-x-2">
                <img src="https://i.pravatar.cc/150?img=12" alt="User" className="w-10 h-10 rounded-full border-2 border-white shadow-md"/>
                <img src="https://i.pravatar.cc/150?img=5" alt="User" className="w-10 h-10 rounded-full border-2 border-white shadow-md"/>
                <img src="https://i.pravatar.cc/150?img=32" alt="User" className="w-10 h-10 rounded-full border-2 border-white shadow-md"/>
                <img src="https://i.pravatar.cc/150?img=44" alt="User" className="w-10 h-10 rounded-full border-2 border-white shadow-md"/>
              </div>
              <div className="text-start">
                <div className="text-sm font-semibold text-gray-900">Trusted by 100K+ AI Enthusiasts</div>
                <div className="text-xs text-gray-600">Developers, designers & entrepreneurs</div>
              </div>
            </motion.div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/ai-tools"
                className="group px-6 py-3 lg:px-8 lg:py-4 bg-gray-900 hover:bg-gray-800 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                Browse All Tools
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Hero; 