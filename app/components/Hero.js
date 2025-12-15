'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Linear-Style Hero - Split Layout with 3D Floating Cards
const Hero = () => {
  const popularTools = [
    // Ring 1 - Inner (3 cards - same size)
    { name: 'ChatGPT', icon: '🤖', color: 'bg-green-100' },
    { name: 'Midjourney', icon: '🎨', color: 'bg-purple-100' },
    { name: 'DALL-E', icon: '🖼️', color: 'bg-orange-100' },
    
    // Ring 2 - Middle (4 cards - smaller size)
    { name: 'Claude', icon: '🧠', color: 'bg-indigo-100' },
    { name: 'Copy.ai', icon: '✍️', color: 'bg-blue-100' },
    { name: 'Runway', icon: '🎬', color: 'bg-red-100' },
    { name: 'Jasper', icon: '💎', color: 'bg-pink-100' },
    
    // Ring 3 - Outer (5 cards - same size as Ring 1)
    { name: 'Grammarly', icon: '✏️', color: 'bg-cyan-100' },
    { name: 'GitHub Copilot', icon: '💻', color: 'bg-teal-100' },
    { name: 'Synthesia', icon: '🎥', color: 'bg-rose-100' },
    { name: 'Murf AI', icon: '🎙️', color: 'bg-lime-100' },
    { name: 'Beautiful.ai', icon: '📊', color: 'bg-amber-100' },
  ];

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

          {/* Right Visual - CRAZY ANIMATED ORBITALS */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative hidden lg:flex items-center justify-center z-10"
          >
            <div className="relative w-[900px] h-[900px] z-10">
              
              {/* Orbital Rings (Decorative) - Render FIRST so they appear behind cards */}
              
              {/* Ring 1 Orbit */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[375px] h-[375px] rounded-full border-2 border-dashed border-blue-300 opacity-10 z-0"
              ></motion.div>
              
              {/* Ring 2 Orbit */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[560px] rounded-full border-2 border-dotted border-purple-300 opacity-10 z-0"
              ></motion.div>
              
              {/* Ring 3 Orbit */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] rounded-full border-2 border-dashed border-pink-300 opacity-10 z-0"
              ></motion.div>

              {/* Center Glowing Orb */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-15">
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: 360
                  }}
                  transition={{ 
                    scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" }
                  }}
                  className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 blur-3xl opacity-60"
                ></motion.div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-4xl shadow-2xl border-4 border-white">
                  🤖
                </div>
              </div>

              {/* Orbiting Elements - Ring 1 (Inner) - 3 cards - Same Size */}
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={`ring1-${i}`}
                  animate={{ 
                    rotate: 360,
                  }}
                  transition={{ 
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * (12 / 3)
                  }}
                  className="absolute top-1/2 left-1/2 w-[375px] h-[375px] -ml-[188px] -mt-[188px] z-20"
                  style={{ transformOrigin: 'center' }}
                >
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      y: [0, -5, 0]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.3
                    }}
                    className={`w-16 h-16 ${popularTools[i]?.color || 'bg-blue-100'} rounded-2xl shadow-xl border-2 border-white flex items-center justify-center text-3xl absolute top-0 left-1/2 -ml-8`}
                  >
                    {popularTools[i]?.icon || '⭐'}
                  </motion.div>
                </motion.div>
              ))}

              {/* Orbiting Elements - Ring 2 (Middle) - 4 cards - Smaller Size */}
              {[3, 4, 5, 6].map((i, index) => (
                <motion.div
                  key={`ring2-${i}`}
                  animate={{ 
                    rotate: -360,
                  }}
                  transition={{ 
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear",
                    delay: index * (18 / 4)
                  }}
                  className="absolute top-1/2 left-1/2 w-[560px] h-[560px] -ml-[280px] -mt-[280px] z-20"
                  style={{ transformOrigin: 'center' }}
                >
                  <motion.div
                    animate={{ 
                      scale: [1, 1.3, 1],
                      rotate: 360
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.4,
                      rotate: { duration: 8, repeat: Infinity, ease: "linear" }
                    }}
                    className={`w-12 h-12 ${popularTools[i]?.color || 'bg-purple-100'} rounded-xl shadow-xl border-2 border-white flex items-center justify-center text-2xl absolute top-0 left-1/2 -ml-6`}
                  >
                    {popularTools[i]?.icon || '✨'}
                  </motion.div>
                </motion.div>
              ))}

              {/* Orbiting Elements - Ring 3 (Outer) - 5 cards - Same Size as Ring 1 */}
              {[7, 8, 9, 10, 11].map((i, index) => (
                <motion.div
                  key={`ring3-${i}`}
                  animate={{ 
                    rotate: 360,
                  }}
                  transition={{ 
                    duration: 24,
                    repeat: Infinity,
                    ease: "linear",
                    delay: index * (24 / 5)
                  }}
                  className="absolute top-1/2 left-1/2 w-[850px] h-[850px] -ml-[425px] -mt-[425px] z-20"
                  style={{ transformOrigin: 'center' }}
                >
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      y: [0, -8, 0]
                    }}
                    transition={{ 
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5
                    }}
                    className={`w-16 h-16 ${popularTools[i]?.color || 'bg-cyan-100'} rounded-2xl shadow-xl border-2 border-white flex items-center justify-center text-3xl absolute top-0 left-1/2 -ml-8`}
                  >
                    {popularTools[i]?.icon || '💫'}
                  </motion.div>
                </motion.div>
              ))}

              {/* Floating Particles */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={`particle-${i}`}
                  animate={{ 
                    y: [0, -30, 0],
                    x: [0, Math.sin(i) * 20, 0],
                    opacity: [0.2, 0.6, 0.2],
                  }}
                  transition={{ 
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.3
                  }}
                  className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"
                  style={{
                    top: `${20 + (i * 10)}%`,
                    left: `${15 + (i * 8)}%`,
                  }}
                ></motion.div>
              ))}

            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Hero; 