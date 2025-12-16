'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Linear-Style Hero - Split Layout with Lightweight Bento Grid
const Hero = () => {

  return (
    <div className="relative h-[90vh] overflow-hidden bg-white">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
        <div className="grid lg:grid-cols-2 gap-8 items-center justify-items-center w-full py-8 lg:py-12">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 lg:space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start justify-center relative z-40"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 mx-auto lg:mx-0"
            >
              <span className="text-2xl">🚀</span>
              <span className="text-sm font-semibold text-gray-700">Trusted by 100K+ AI Enthusiasts</span>
           </motion.div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                <span className="block text-gray-900">Your Gateway to</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                  5000+ AI Tools
                </span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Find, compare, and discover the perfect AI tool for every need. From design to development, marketing to music.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/ai-tools"
                className="group px-6 py-3 lg:px-8 lg:py-4 bg-gray-900 hover:bg-gray-800 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                Explore Tools
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </motion.div>

          {/* Right Visual - AI Abstract Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block w-full max-w-xl z-10"
          >
            <div className="relative h-[600px]">
              
              {/* Subtle Background Gradient Orbs - Static */}
              <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full blur-3xl opacity-10"></div>
              <div className="absolute bottom-20 left-10 w-72 h-72 bg-gradient-to-tr from-pink-400 to-orange-500 rounded-full blur-3xl opacity-10"></div>

              {/* Floating Cards/Windows */}
              
              {/* Card 1 - Compare & Find the Perfect Tool */}
              <div className="absolute top-16 left-8 w-80 h-48 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden" style={{ zIndex: 5 }}>
                {/* Window Header */}
                <div className="h-8 bg-gradient-to-r from-gray-100 to-gray-50 border-b border-gray-200 flex items-center px-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <span className="text-xs text-gray-500 ml-2">fizoval.com/compare</span>
                </div>
                {/* Content - Comparison Feature */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center shadow-lg">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <path d="M9 11l3 3L22 4" />
                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-800">Side-by-Side</div>
                      <div className="text-sm text-gray-600">Tool Comparison</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                      <span>Compare features & pricing</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                      <span>Read real user reviews</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                      <span>Make informed decisions fast</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2 - Free Games Break */}
              <div className="absolute top-32 right-12 w-48 h-32 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden" style={{ zIndex: 5 }}>
                <div className="h-full bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-5">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div className="text-[10px] text-purple-600 font-semibold uppercase tracking-wide">Take a Break</div>
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center text-lg">
                        🎮
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-purple-700">238+ Games</div>
                    <div className="text-[10px] text-gray-600 leading-relaxed">Play free casual games instantly—no downloads needed!</div>
                  </div>
                </div>
              </div>

              {/* Card 3 - Find Alternatives */}
              <div className="absolute bottom-24 left-16 w-64 h-40 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden" style={{ zIndex: 5 }}>
                <div className="h-full bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 p-5 space-y-3">
                  <div className="flex items-center gap-3">
                    {/* Alternatives Icon */}
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                        <polyline points="7.5 4.21 12 6.81 16.5 4.21" />
                        <polyline points="7.5 19.79 7.5 14.6 3 12" />
                        <polyline points="21 12 16.5 14.6 16.5 19.79" />
                        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                        <line x1="12" y1="22.08" x2="12" y2="12" />
                      </svg>
                    </div>
                    <div className="space-y-1">
                      <div className="text-sm font-bold text-blue-700">Looking for Alternatives?</div>
                      <div className="text-[10px] text-blue-600">We've got you covered</div>
                    </div>
                  </div>
                  {/* Examples */}
                  <div className="space-y-2 pl-1">
                    <div className="text-[11px] text-gray-700">
                      <span className="font-semibold">ChatGPT</span> → 47 alternatives
                    </div>
                    <div className="text-[11px] text-gray-700">
                      <span className="font-semibold">Midjourney</span> → 35 alternatives
                    </div>
                    <div className="text-[11px] text-gray-700">
                      <span className="font-semibold">Canva AI</span> → 28 alternatives
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 4 - Always Updated */}
              <div className="absolute bottom-16 right-20 w-32 h-32 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden" style={{ zIndex: 5 }}>
                <div className="h-full bg-gradient-to-br from-orange-50 via-pink-50 to-red-50 flex items-center justify-center p-4">
                  <div className="space-y-2 text-center">
                    {/* Update Icon */}
                    <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-orange-400 to-pink-600 flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2" />
                      </svg>
                    </div>
                    <div className="text-sm font-bold text-orange-700">Daily Updates</div>
                    <div className="text-[9px] text-gray-600 leading-relaxed">Fresh tools added every week</div>
                  </div>
                </div>
              </div>

              {/* Minimal Decorative Elements */}
              
              {/* Static Geometric Shapes */}
              <div className="absolute top-4 right-4 w-16 h-16 opacity-5">
                <svg viewBox="0 0 100 100" fill="none">
                  <rect x="30" y="30" width="40" height="40" stroke="#8B5CF6" strokeWidth="4" rx="4" />
                  <line x1="50" y1="10" x2="50" y2="30" stroke="#8B5CF6" strokeWidth="3" />
                  <line x1="50" y1="70" x2="50" y2="90" stroke="#8B5CF6" strokeWidth="3" />
                  <line x1="10" y1="50" x2="30" y2="50" stroke="#8B5CF6" strokeWidth="3" />
                  <line x1="70" y1="50" x2="90" y2="50" stroke="#8B5CF6" strokeWidth="3" />
                  <circle cx="50" cy="50" r="8" fill="#8B5CF6" />
                </svg>
              </div>
              
              <div className="absolute bottom-4 left-4 w-12 h-12 opacity-5">
                <svg viewBox="0 0 100 100" fill="none">
                  <circle cx="50" cy="50" r="20" stroke="#3B82F6" strokeWidth="4" />
                  <circle cx="50" cy="20" r="8" fill="#3B82F6" />
                  <circle cx="80" cy="50" r="8" fill="#3B82F6" />
                  <circle cx="50" cy="80" r="8" fill="#3B82F6" />
                  <circle cx="20" cy="50" r="8" fill="#3B82F6" />
                </svg>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Hero; 