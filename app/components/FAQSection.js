'use client';

import React, { useState } from 'react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What are AI tools and how can they help me?",
      answer: "AI tools are software applications powered by artificial intelligence that automate tasks, enhance productivity, and solve complex problems. They can help you save time, reduce costs, improve accuracy, and unlock new capabilities in areas like content creation, data analysis, design, coding, and more."
    },
    {
      question: "How do I find the best AI tool for my specific needs?",
      answer: "Browse our 120+ categories to find tools relevant to your industry or use case. Each tool listing includes detailed descriptions, features, pricing, and user reviews. You can also use our search function to find tools by keyword or compare multiple tools side-by-side to make an informed decision."
    },
    {
      question: "Are all the AI tools listed on Fizoval free?",
      answer: "No, we list both free and paid AI tools. Each tool listing clearly indicates its pricing model - whether it's completely free, freemium (free with paid upgrades), or paid subscription. We believe in transparency, so you'll always know the cost before you click through."
    },
    {
      question: "How often is Fizoval updated with new AI tools?",
      answer: "We update our directory daily! Our team continuously researches and adds new AI tools, removes discontinued ones, and updates existing listings with the latest features and pricing. This ensures you always have access to the most current and comprehensive AI tools database."
    },
    {
      question: "Can I submit my own AI tool to be listed on Fizoval?",
      answer: "Yes! We welcome submissions from AI tool creators and developers. Simply visit our 'Submit Tool' page, fill out the form with your tool's details, and our team will review it. If it meets our quality standards, we'll add it to our directory within 3-5 business days."
    },
    {
      question: "What's the difference between AI tool categories?",
      answer: "Each category represents a specific use case or industry. For example, 'Productivity' tools help you work more efficiently, 'Generative Art' tools create images and designs, 'Marketing' tools help with campaigns and analytics. Browse categories to discover tools tailored to your specific needs."
    },
    {
      question: "Do I need technical knowledge to use AI tools?",
      answer: "Not at all! Most modern AI tools are designed with user-friendly interfaces for non-technical users. We clearly mark the difficulty level for each tool (beginner, intermediate, advanced) so you can choose tools that match your skill level. Many tools offer tutorials and customer support to help you get started."
    },
    {
      question: "How does Fizoval make money if the directory is free?",
      answer: "Fizoval is completely free for users. We earn through affiliate partnerships and sponsored listings. When you click on a tool and sign up, we may earn a small commission at no extra cost to you. This allows us to keep the directory free and continuously improve our service."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Questions</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about Fizoval and AI tools
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:border-blue-500"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <h3 className="font-bold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <svg
                  className={`w-6 h-6 text-blue-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a
            href="mailto:support@fizoval.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all duration-300"
          >
            Contact Support
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>
      </div>

      {/* FAQ Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
    </section>
  );
};

export default FAQSection;

