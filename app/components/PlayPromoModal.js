'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getRandomPromotion } from '../data/playPromotions';

const PlayPromoModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [promoImage, setPromoImage] = useState(null);
  const router = useRouter();

  // Default values
  const PROMO_TITLE = "Need a quick break? Take 5 minutes to refresh with free casual games.";
  const BUTTON_TEXT = "Play Now";
  const REDIRECT_URL = "/play";

  useEffect(() => {
    // Check if user has already seen the modal in this session
    const hasSeenModal = sessionStorage.getItem('hasSeenPlayPromo');
    
    if (!hasSeenModal) {
      // Show modal after 10 seconds
      const timer = setTimeout(() => {
        const randomPromoImage = getRandomPromotion();
        setPromoImage(randomPromoImage);
        setIsOpen(true);
        sessionStorage.setItem('hasSeenPlayPromo', 'true');
      }, 10000); // 10 seconds

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleClick = () => {
    router.push(REDIRECT_URL);
    setIsOpen(false);
  };

  if (!isOpen || !promoImage) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300"
        onClick={handleClose}
      ></div>

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden animate-fadeIn">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Close"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Promotional Image - Clickable */}
          <div 
            onClick={handleClick}
            className="overflow-hidden cursor-pointer"
          >
            <img
              src={promoImage}
              alt="Play Games Promotion"
              className="w-full h-auto"
            />
          </div>

          {/* Text and Button Below Image (Always Visible) */}
          <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50">
            <p className="text-center text-gray-700 mb-4 text-base md:text-lg">{PROMO_TITLE}</p>
            <button
              onClick={handleClick}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 cursor-pointer"
            >
              {BUTTON_TEXT}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default PlayPromoModal;

