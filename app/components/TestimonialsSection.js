'use client';

import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Designer",
      company: "TechCorp",
      avatar: "https://i.pravatar.cc/150?img=5",
      rating: 5,
      text: "Fizoval has become my go-to resource for discovering AI tools. I've found amazing design tools that have 10x my productivity. The categorization is perfect!"
    },
    {
      name: "Michael Chen",
      role: "Software Developer",
      company: "StartupXYZ",
      avatar: "https://i.pravatar.cc/150?img=12",
      rating: 5,
      text: "As a developer, I'm always looking for AI tools to streamline my workflow. Fizoval makes it incredibly easy to find exactly what I need. Highly recommended!"
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Manager",
      company: "Digital Agency",
      avatar: "https://i.pravatar.cc/150?img=32",
      rating: 5,
      text: "The best AI tools directory I've come across. Updated regularly with honest reviews. Saved me countless hours of research. Worth bookmarking!"
    },
    {
      name: "David Kim",
      role: "Content Creator",
      company: "Independent",
      avatar: "https://i.pravatar.cc/150?img=44",
      rating: 5,
      text: "Fizoval helped me discover AI tools I didn't even know existed. The blog posts are insightful too. It's like having an AI expert friend!"
    },
    {
      name: "Lisa Anderson",
      role: "Entrepreneur",
      company: "E-commerce Store",
      avatar: "https://i.pravatar.cc/150?img=27",
      rating: 5,
      text: "Running a small business, I need tools that work. Fizoval's reviews and comparisons helped me choose the right AI tools without breaking the bank."
    },
    {
      name: "James Wilson",
      role: "Data Scientist",
      company: "AI Research Lab",
      avatar: "https://i.pravatar.cc/150?img=56",
      rating: 5,
      text: "Comprehensive database with accurate information. I use Fizoval to stay updated with the latest AI innovations. The trending section is gold!"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Users <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Say</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied users who trust Fizoval for their AI tool discovery
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-blue-500"
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* User Info */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-blue-200"
                />
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role} • {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-md border-2 border-blue-200">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="font-semibold text-gray-900">Trusted by 100,000+ AI Enthusiasts</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

