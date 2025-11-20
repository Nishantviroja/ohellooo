'use client';

import React from 'react';
import Link from 'next/link';
import promotions from '../data/promotions';

export default function PromotionBanner() {
  if (!promotions.PROMOTION_MODE) return null;

  return (
    <div className="w-full bg-blue-50 py-2 px-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-center  md:text-sm">
          <p className="font-sen text-gray-600 text-xs lg:text-sm text-center font-medium">
            {promotions.PROMOTION_TEXT} 
          
          <Link 
            href={promotions.PROMOTION_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sen px-1 py-1 font-semibold text-xs lg:text-sm text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 animate-gradient"
          >
            {promotions.BUTTON_TEXT}
          </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

