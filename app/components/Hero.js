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

          {/* Right Visual - Lightweight Bento Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block w-full max-w-lg z-10"
          >
            <div className="grid grid-cols-3 gap-4 h-[600px]">
              
              {/* Large Card - Top Left */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="col-span-2 row-span-2 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-6 shadow-lg border border-blue-200 flex flex-col justify-between"
              >
                <div className="text-5xl mb-4">🤖</div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">AI Writing</h3>
                  <p className="text-sm text-gray-600">50+ Tools</p>
                </div>
              </motion.div>

              {/* Small Card - Top Right */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                animate={{ y: [0, -10, 0] }}
                transition={{ y: { duration: 3, repeat: Infinity, ease: "easeInOut" } }}
                className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-3xl p-4 shadow-lg border border-purple-200 flex flex-col justify-center items-center"
              >
                <div className="text-4xl">🎨</div>
                <p className="text-xs font-semibold text-gray-700 mt-2">Design</p>
              </motion.div>

              {/* Small Card - Middle Right */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                animate={{ y: [0, 10, 0] }}
                transition={{ y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 } }}
                className="bg-gradient-to-br from-orange-50 to-red-100 rounded-3xl p-4 shadow-lg border border-orange-200 flex flex-col justify-center items-center"
              >
                <div className="text-4xl">📹</div>
                <p className="text-xs font-semibold text-gray-700 mt-2">Video</p>
              </motion.div>

              {/* Medium Card - Bottom Left */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="col-span-1 row-span-2 bg-gradient-to-br from-green-50 to-emerald-100 rounded-3xl p-6 shadow-lg border border-green-200 flex flex-col justify-between"
              >
                <div className="text-4xl mb-4">💻</div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-1">Code</h3>
                  <p className="text-xs text-gray-600">30+ Tools</p>
                </div>
              </motion.div>

              {/* Medium Card - Bottom Middle */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="col-span-2 bg-gradient-to-br from-cyan-50 to-blue-100 rounded-3xl p-6 shadow-lg border border-cyan-200 flex items-center gap-4"
              >
                <div className="text-4xl">📊</div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Analytics</h3>
                  <p className="text-xs text-gray-600">25+ Tools</p>
                </div>
              </motion.div>

              {/* Small Card - Bottom Right */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                animate={{ y: [0, -8, 0] }}
                transition={{ y: { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 } }}
                className="bg-gradient-to-br from-yellow-50 to-amber-100 rounded-3xl p-4 shadow-lg border border-yellow-200 flex flex-col justify-center items-center"
              >
                <div className="text-4xl">🎵</div>
                <p className="text-xs font-semibold text-gray-700 mt-2">Audio</p>
              </motion.div>

            </div>

            {/* Subtle Gradient Blob */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 rounded-full blur-3xl opacity-20"></div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Hero; 