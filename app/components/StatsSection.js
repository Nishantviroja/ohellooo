'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function StatsSection() {
  const stats = [
    {
      icon: '🤖',
      number: '5000+',
      label: 'AI Tools',
      description: 'Curated collection'
    },
    {
      icon: '📂',
      number: '120+',
      label: 'Categories',
      description: 'Diverse industries'
    },
    {
      icon: '👥',
      number: '100K+',
      label: 'Active Users',
      description: 'Monthly visitors'
    },
    {
      icon: '⭐',
      number: '4.9/5',
      label: 'User Rating',
      description: 'Trusted platform'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.08]" style={{
        backgroundImage: 'radial-gradient(circle, #4F46E5 2px, transparent 2px)',
        backgroundSize: '40px 40px'
      }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Thousands</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join the fastest-growing AI tools directory platform
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-transparent hover:border-blue-500"
            >
              {/* Icon */}
              <div className="text-4xl md:text-5xl mb-4">
                {stat.icon}
              </div>
              
              {/* Number */}
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              
              {/* Label */}
              <div className="text-lg font-semibold text-gray-700 mb-1">
                {stat.label}
              </div>
              
              {/* Description */}
              <div className="text-sm text-gray-500">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-600 mb-4">Featured on</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold text-gray-700">Product Hunt</div>
            <div className="text-2xl font-bold text-gray-700">TechCrunch</div>
            <div className="text-2xl font-bold text-gray-700">Forbes</div>
            <div className="text-2xl font-bold text-gray-700">Wired</div>
          </div>
        </div>
      </div>
    </section>
  );
}

