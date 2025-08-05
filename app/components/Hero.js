'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  return React.createElement(
    'div',
    { 
      className: 'relative h-[calc(100vh-4rem)] overflow-hidden flex items-center justify-center',
      style: {
        background: '#ffffff'
      }
    },
    // Creative background elements
    React.createElement(
      'div',
      { className: 'absolute inset-0' },
      // Enhanced dots pattern with reduced opacity
    React.createElement(
      'div',
      { 
          className: 'absolute inset-0 opacity-[0.12] z-10',
        style: {
            backgroundImage: 'radial-gradient(circle, #4F46E5 2px, transparent 2px)',
            backgroundSize: '40px 40px'
        }
      }
    ),
      // Floating particles
      React.createElement(
        motion.div,
        {
          className: 'absolute top-1/3 left-1/3 w-3 h-3 rounded-full bg-blue-500/30 z-20',
          animate: {
            y: [0, -20, 0],
            x: [0, 10, 0],
          },
          transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }
      ),
      React.createElement(
        motion.div,
        {
          className: 'absolute top-2/3 right-1/3 w-4 h-4 rounded-full bg-purple-500/30 z-20',
          animate: {
            y: [0, 20, 0],
            x: [0, -10, 0],
          },
          transition: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }
      ),
      React.createElement(
        motion.div,
        {
          className: 'absolute bottom-1/4 left-1/4 w-3 h-3 rounded-full bg-blue-500/30 z-20',
          animate: {
            y: [0, 15, 0],
            x: [0, -15, 0],
          },
          transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }
      )
    ),
    
    // Main content - centered
    React.createElement(
      'div',
      { className: 'relative container mx-auto px-4 py-20 text-center z-30' },
      React.createElement(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8 },
          className: 'max-w-5xl mx-auto space-y-12'
        },
        // Badge
        React.createElement(
          motion.div,
          {
            initial: { opacity: 0, y: -20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.5, delay: 0.2 },
            className: 'inline-block'
          },
          React.createElement(
            'span',
            { 
              className: 'px-4 py-2 rounded-full text-[10px] sm:text-sm font-medium bg-blue-50 text-blue-600 border border-blue-100 shadow-sm flex items-center gap-2'
            },
            React.createElement(
              Image,
              {
                src: 'https://em-content.zobj.net/source/apple/419/robot_1f916.png',
                alt: 'Robot',
                width: 20,
                height: 20,
                className: 'inline-block'
              }
            ),
            'Best AI Tools Directory Featuring Over 5000+ Tools'
          )
        ),
        
        // Text content
        React.createElement(
          'div',
          { className: 'space-y-6' },
          React.createElement(
            'h1',
            { 
              className: 'text-5xl md:text-7xl font-bold leading-tight text-gray-900 tracking-tight'
            },
          'Discover the Power of',
          React.createElement(
            'span',
              { 
                className: 'block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-size-200 animate-gradient'
              },
              'Artificial Intelligence'
          )
        ),
        React.createElement(
          'p',
            { 
              className: 'text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed'
            },
          'Explore the latest in AI technology, Stay ahead in the AI era with a curated list of cutting-edge tools for developers, creators, marketers, and tech enthusiasts.'
          )
        ),
        
        // Single CTA Button
        React.createElement(
          'div',
          { 
            className: 'flex justify-center mt-8 hidden md:block lg:block'
          },
          React.createElement(
            'button',
            { 
                className: 'group px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105'
            },
            React.createElement(
              'span',
              { className: 'flex items-center gap-2' },
              'Scroll Down',
          React.createElement(
                'svg',
                {
                  className: 'w-5 h-5 transition-transform group-hover:translate-x-1',
                  fill: 'none',
                  stroke: 'currentColor',
                  viewBox: '0 0 24 24'
                },
                React.createElement('path', {
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeWidth: '2',
                  d: 'M17 13l-5 5m0 0l-5-5m5 5V6'
                })
              )
            )
          )
        )
      )
    ),
    
    // Gradient overlays
    React.createElement('div', { 
      className: 'absolute bottom-0 left-0 right-0 h-32 z-20',
      style: {
        background: 'linear-gradient(to top, #ffffff, transparent)'
      }
    }),
    // Left side gradient
    React.createElement('div', { 
      className: 'absolute top-0 left-0 bottom-0 w-32 z-20',
      style: {
        background: 'linear-gradient(to right, #ffffff, transparent)'
      }
    }),
    // Right side gradient
    React.createElement('div', { 
      className: 'absolute top-0 right-0 bottom-0 w-32 z-20',
      style: {
        background: 'linear-gradient(to left, #ffffff, transparent)'
      }
    })
  );
};

export default Hero; 