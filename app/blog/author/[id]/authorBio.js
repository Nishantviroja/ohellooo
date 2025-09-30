"use client";

import React from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Image from "next/image";
import Link from "next/link";
import BlogCard from "../../../components/BlogCard";
import Script from "next/script";
import {
  FaLinkedinIn,
  FaCalendarAlt,
  FaRss,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { motion } from "framer-motion";

export default function AuthorBio({ author, posts }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navbar />

      {/* Author JSON-LD */}
      <Script id="author-jsonld" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: author.name,
          description: author.about,
          url: author.linkedin,
          image: author.avatar,
          worksFor: {
            "@type": "Organization",
            name: "Fizoval",
          },
        })}
      </Script>

      {/* Hero Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              {/* Author Avatar */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative inline-block mb-6"
              >
                <div className="relative w-32 h-32 mx-auto">
                  <Image
                    src={author.avatar}
                    alt={author.name}
                    fill
                    className="rounded-full object-cover shadow-lg"
                  />
                </div>
              </motion.div>

              {/* Author Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                  {author.name}
                </h1>

                <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
                  {author.about}
                </p>

               
                {/* Stats */}
                <div className="flex justify-center gap-8 mb-8">
                  <div className="flex items-center gap-2 text-gray-600">
                    <FaCalendarAlt className="text-blue-500" />
                    <span className="text-sm">Joined 2024</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <FaRss className="text-orange-500" />
                    <span className="text-sm">{posts.length} Articles</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center items-center gap-4 mb-8">
                  {author.social.linkedin && (
                    <motion.a
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      href={author.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-10 w-10 rounded-full bg-blue-700 text-white flex items-center justify-center hover:bg-blue-800 transition-all duration-200 shadow-md hover:shadow-lg"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedinIn size={16} />
                    </motion.a>
                  )}
                  {author.social.twitter && (
                    <motion.a
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      href={author.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-10 w-10 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-gray-900 transition-all duration-200 shadow-md hover:shadow-lg"
                      aria-label="Twitter"
                    >
                      <FaXTwitter size={16} />
                    </motion.a>
                  )}
{author.social.peerlist && (
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href={author.social.peerlist}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative h-10 w-10 rounded-full bg-blue-400 text-white flex items-center justify-center hover:bg-blue-500 transition-all duration-200 shadow-md hover:shadow-lg"
                    aria-label="Twitter"
                  >
                      <Image
                    src="https://blogger.googleusercontent.com/img/a/AVvXsEjioNnk1LFL6aiYHRgl80IMbqgUh3Ez2CzHDdWvu70h8ouZAzG3EZBOMjSMCnBdz3vEgKbV5Sywkij1S9bNyK_xrK60RkTwZHNMG17xupawE8NOMyXRRaUmPy808Bq5HodmVSoHjH2GFXahi5DZAh_S6FfNzajAqvpGcu_GfJxeVJe2indd4fC8AdPtzcEi"
                    alt="peerlist"
                    fill
                  className="rounded-full object-cover shadow-lg"
                  />
                  </motion.a> 
                  )}
                  {author.social.mail && (
                    <motion.a
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      href={`mailto:${author.social.mail}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-10 w-10 rounded-full bg-red-500 text-white flex items-center justify-center hover:bg-red-600 transition-all duration-200 shadow-md hover:shadow-lg"
                      aria-label="mail"
                    >
                      <IoMail size={20} />
                    </motion.a>
                  )}

              
                 
                </div>
              </motion.div>
            </div>

          </motion.div>
        </div>
      </div>

      {/* Author's Posts */}
      {posts && posts.length > 0 && (
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4 md:px-8 py-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Articles by {author.name}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore the latest insights and expertise from{" "}
                {author.name.split(" ")[0]}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <BlogCard key={post.id} {...post} />
              ))}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
