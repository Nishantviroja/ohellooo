'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';


export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      {/* <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-bricolage text-gray-800 mb-6">
           Terms & Conditions
             
           
          </h1>
          <p className="text-lg text-gray-600 font-sen max-w-2xl mx-auto">
            Helping you navigate the rapidly evolving world of AI tools and technologies.
          </p>
        </div>
      </div> */}
      
      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
           
            <div className="bg-white rounded-xl shadow-md p-8 pt-0 mb-12">
                <h1 className="text-4xl font-bold font-bricolage text-blue-600 mb-8 text-center">
              Terms & Conditions
            </h1>
            <p className="text-lg text-gray-600 font-sen mb-6 text-end">
                Effective Date: August 05, 2025 

                </p>

              <p className="text-lg text-gray-600 font-sen mb-6">
  Welcome to the  <Link href="https://fizoval.com/" className="font-bricolage font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 animate-gradient">
            Fizoval - Best AI Tools Directory Featuring Over 5000+ Tools
             
            </Link> (fizoval.com). By accessing, browsing, or using this website and any of our services, you agree to comply with and be legally bound by the following terms and conditions.

Please read them carefully. If you do not agree with any part of these terms, please discontinue your use of the site and services.</p>
             <p className="text-lg text-gray-600 font-sen mb-6">
  <b>1. Acceptance of Terms</b><br />
  By accessing or using Fizoval (&#34;we&#34;, &#34;our&#34;, or &#34;us&#34;), you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must discontinue use of our site immediately.
</p>

<p className="text-lg text-gray-600 font-sen mb-6">
  <b>2. Description of Service</b><br />
  Fizoval is an online AI Tools directory that lists over 5000+ AI-related tools and resources. The information is provided for general informational purposes only and should not be considered as professional advice or endorsement.
</p>

<p className="text-lg text-gray-600 font-sen mb-6">
  <b>3. Use of the Website</b><br />
  You agree to use our website only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else’s use and enjoyment of the website. You must not use the site to transmit or upload harmful, unlawful, or misleading content.
</p>

<p className="text-lg text-gray-600 font-sen mb-6">
  <b>4. Intellectual Property</b><br />
  All content, trademarks, logos, and other intellectual property on this site are the property of Fizoval or its content providers and are protected by applicable intellectual property laws. You may not copy, reproduce, or distribute any material without express written permission.
</p>

<p className="text-lg text-gray-600 font-sen mb-6">
  <b>5. Affiliate Disclosure</b><br />
  Fizoval may use affiliate links in its content. If you click these links and make a purchase, we may earn a commission. This comes at no additional cost to you and helps support the development of the platform.
</p>

<p className="text-lg text-gray-600 font-sen mb-6">
  <b>6. Disclaimers</b><br />
  The information provided on Fizoval is offered &#39;as is&#39; without warranties of any kind. We do not guarantee the accuracy, completeness, or usefulness of any tools listed. Users should conduct their own research before relying on any tool.
</p>

<p className="text-lg text-gray-600 font-sen mb-6">
  <b>7. Limitation of Liability</b><br />
  Fizoval shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of or inability to use the site or any of its content or services.
</p>

<p className="text-lg text-gray-600 font-sen mb-6">
  <b>8. Changes to Terms</b><br />
  We reserve the right to update or modify these Terms and Conditions at any time. Changes will be posted on this page with an updated effective date. Your continued use of the site after changes signifies your acceptance of the new terms.
</p>

<p className="text-lg text-gray-600 font-sen mb-6">
  <b>9. Analytics Tools</b><br />
  We use various analytics tools to monitor and improve the user experience on our website. By using AI Tools, you consent to the collection and use of data by these analytics tools as described in our Privacy Policy.
</p>

<p className="text-lg text-gray-600 font-sen mb-6">
  <b>10. Privacy Policy</b><br />
  Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your personal information.
</p>

<p className="text-lg text-gray-600 font-sen mb-6">
  <b>11. Governing Law</b><br />
  These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law principles.
</p>

<p className="text-lg text-gray-600 font-sen mb-6">
  
  If you have any questions or concerns about these Terms and Conditions, you may contact us at:<br />
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