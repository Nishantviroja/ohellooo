'use client';
 
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';
 
// Team members data
const teamMembers = [
  {
    id: 1,
    name: 'Alex Johnson',
    role: 'Founder & CEO',
    bio: 'Former AI researcher with a passion for making advanced technology accessible to everyone.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=400&q=80'
  },
  {
    id: 2,
    name: 'Samantha Lee',
    role: 'Chief Technology Officer',
    bio: 'Software engineer specializing in AI applications with 10+ years of experience in tech leadership.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&h=400&q=80'
  },
  {
    id: 3,
    name: 'Marcus Taylor',
    role: 'Head of Research',
    bio: 'PhD in Machine Learning with a focus on evaluating AI tools for practical applications.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&h=400&q=80'
  },
  {
    id: 4,
    name: 'Jessica Wong',
    role: 'Content Director',
    bio: 'Tech journalist and writer who translates complex AI concepts into accessible content.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&h=400&q=80'
  }
];
 
export default function About() {
  // Add state for form fields and status
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', message: '' });
  const [status, setStatus] = useState('');
 
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus('Thank you for contacting us!');
        setForm({ firstName: '', lastName: '', email: '', message: '' });
      } else {
        setStatus(data.error || 'Something went wrong.');
      }
    } catch (err) {
      setStatus('Something went wrong.');
    }
  };
 
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
     
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-bricolage text-gray-800 mb-6">
            About <Link href="https://fizoval.com/" className="font-bricolage font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 animate-gradient">
            Fizoval
             
            </Link>
          </h1>
          <p className="text-lg text-gray-600 font-sen max-w-2xl mx-auto">
            Helping you navigate the rapidly evolving world of AI tools and technologies.
          </p>
        </div>
      </div>
     
      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-bricolage text-gray-800 mb-6 text-center">
              Our Mission
            </h2>
            <div className="bg-white rounded-xl shadow-md p-8 mb-12">
              <p className="text-lg text-gray-600 font-sen mb-6">
                At&nbsp;
                <Link href="https://fizoval.com/" className="font-bricolage font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 animate-gradient">
            Fizoval
             
            </Link>
                , we believe that artificial intelligence should be accessible to everyone. Our mission is to curate, evaluate, and showcase the best AI tools across various categories to help individuals and businesses harness the power of AI.
              </p>
              <p className="text-lg text-gray-600 font-sen mb-6">
                We&#39;re committed to providing unbiased, in-depth information about each tool, making it easier for you to find the right solution for your specific needs. Our team of experts tests and reviews each tool, ensuring that our recommendations are based on real-world performance and value.
              </p>
              <p className="text-lg text-gray-600 font-sen">
                Whether you&#39;re a content creator, developer, researcher, or business owner, we&#39;re here to be your trusted guide in the ever-expanding universe of AI tools.
              </p>
            </div>
          </div>
         
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold font-bricolage text-gray-800 mb-4">
                Our Values
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600 font-sen">Transparency in our review process</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600 font-sen">Accessibility of information for all skill levels</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600 font-sen">Integrity in our recommendations</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600 font-sen">Community-focused approach</span>
                </li>
              </ul>
            </div>
           
            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold font-bricolage text-gray-800 mb-4">
                What We Offer
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600 font-sen">Comprehensive tool reviews and comparisons</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600 font-sen">Educational resources about AI technologies</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600 font-sen">Practical tutorials for implementing AI tools</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600 font-sen">Industry insights and trends analysis</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
     
      {/* Team Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-bricolage text-gray-800 mb-12 text-center">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-xl shadow-md overflow-hidden text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="relative w-32 h-32 mx-auto mt-8 mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bricolage text-xl font-semibold text-gray-800 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-sen text-sm mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600 font-sen">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
       */}
      {/* Contact CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-bricolage text-gray-800 mb-6">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 font-sen max-w-2xl mx-auto mb-8">
            Have questions, suggestions, or want to collaborate? <br/>We&#39;d love to hear from you!
          </p>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col gap-3">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={form.firstName}
                onChange={handleChange}
                className="px-4 py-3 border border-blue-100 rounded-lg flex-1 bg-blue-50 outline-[#0066FF] text-blue-600 font-sen"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={form.lastName}
                onChange={handleChange}
                className="px-4 py-3 rounded-lg border border-blue-100 flex-1 bg-blue-50 outline-[#0066FF] text-blue-600 font-sen"
                required
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                className="px-4 py-3 rounded-lg border border-blue-100 flex-1 bg-blue-50 outline-[#0066FF] text-blue-600 font-sen"
                required
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <textarea
                name="message"
                placeholder="Type Your Message Here.."
                value={form.message}
                onChange={handleChange}
                className="px-4 py-3 rounded-lg border border-blue-100 flex-1 bg-blue-50 outline-[#0066FF] text-blue-600 font-sen"
                required
              />
            </div>
            <button type="submit" className="bg-blue-600 text-white hover:bg-blue-700 font-medium font-sen py-3 px-8 rounded-lg transition-colors">
              Contact Us
            </button>
            {status && <p className="mt-2 text-sm text-blue-600">{status}</p>}
          </form>
        </div>
      </section>
       
     
      <Footer />
    </div>
  );
}
 