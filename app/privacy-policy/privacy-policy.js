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
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600 font-sen mb-6 text-end">
                Effective Date: August 05, 2025 

                </p>
 <p className="text-lg text-gray-600 font-sen mb-6">
  At  <Link href="https://fizoval.com/" className="font-bricolage font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 animate-gradient">
            Fizoval 
             
            </Link>, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, create an account, and use our services. Please read this policy carefully to understand our views and practices regarding your personal data and how we will treat it.</p>
              <p className="text-lg text-gray-600 font-sen mb-6">
  <b>1. Use of Cookies</b><br />
  We may use cookies and similar technologies to enhance your experience on our website, such as remembering your preferences and gathering anonymous usage statistics. You can control or disable cookies through your browser settings.
</p>

<p className="text-lg text-gray-600 font-sen mb-6">
  <b>2. Third-Party Services</b><br />
  We may use trusted third-party services for analytics, advertising, and content delivery. These third parties may collect and process data in accordance with their own privacy policies. These services may include Google Analytics, Google AdSense, and similar platforms.<br />
  We are not responsible for the privacy practices or content of external sites linked from our website.
</p>

<p className="text-lg text-gray-600 font-sen mb-6">
  <b>3. Affiliate Disclosure</b><br />
  Fizoval may include affiliate links, which means we may earn a commission if you click on or purchase products through those links. This helps support our platform at no additional cost to you. These links do not influence our content or recommendations.
</p>

<p className="text-lg text-gray-600 font-sen mb-6">
  <b>4. Children’s Privacy</b><br />
  Fizoval does not knowingly collect or process information from children under the age of 13. If we discover that we have inadvertently collected data from a child, we will take appropriate steps to delete it.
</p>

<p className="text-lg text-gray-600 font-sen mb-6">
  <b>5. Data Protection and Security</b><br />
  We use commercially reasonable measures to safeguard your interactions with our site, including encryption (SSL) for secure browsing. However, no online transmission is ever completely secure. You use the site at your own risk.
</p>

<p className="text-lg text-gray-600 font-sen mb-6">
  <b>6. Your Rights</b><br />
  Depending on your region, you may have rights under applicable privacy laws, including:<br />
  - The right to request access, correction, or deletion of your personal information.<br />
  - The right to object to or restrict data processing.<br />
  To exercise any of these rights, you may contact us at contact@fizoval.com.
</p>

<p className="text-lg text-gray-600 font-sen mb-6">
  <b>7. Changes to This Privacy Policy</b><br />
  We reserve the right to modify this Privacy Policy at any time. Any changes will be posted on this page with an updated &#34;Effective Date.&#34; We encourage you to review this policy regularly to stay informed.
</p>

<p className="text-lg text-gray-600 font-sen mb-6">
 
  If you have any questions about this Privacy Policy or your data, please contact us at:<br />
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