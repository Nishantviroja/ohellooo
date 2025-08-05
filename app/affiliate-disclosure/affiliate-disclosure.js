'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';


export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
     
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
           
            <div className="bg-white rounded-xl shadow-md p-8 pt-0 mb-12">
                <h1 className="text-4xl font-bold font-bricolage text-blue-600 mb-8 text-center">
              Affiliate Disclosure
            </h1>
            <p className="text-lg text-gray-600 font-sen mb-6 text-end">
                Effective Date: August 05, 2025 

                </p>

              <p className="text-lg text-gray-600 font-sen mb-6">
  <b>Our Commitment to Transparency</b><br />
  At  <Link href="https://fizoval.com/" className="font-bricolage font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 animate-gradient">
            Fizoval
             
            </Link>, our mission is to connect you with the most effective and innovative AI solutions available. To keep our platform running and continue delivering up-to-date, insightful content, we sometimes partner with select AI tool providers through affiliate programs. This means that if you choose to click on certain links or make a purchase through our site, we may earn a small commission—always at no extra cost to you.
</p>

<p className="text-lg text-gray-600 font-sen mb-6">
  We want to assure you that our recommendations are always driven by independent research and a genuine desire to help you discover the best tools for your needs. Affiliate partnerships do not influence our editorial integrity or the quality of our reviews. Your trust is our top priority, and affiliate earnings simply help us sustain and grow our resource hub.
</p>

<p className="text-lg text-gray-600 font-sen mb-6">
  <b>Questions?</b><br />
  If you have any questions or concerns about our affiliate relationships, please reach out to us at:<br />
  📧 Email: contact@fizoval.com
</p>


            </div>
          </div>
          
       
        </div>
      </section>

      <Footer />
    </div>
  );
} 