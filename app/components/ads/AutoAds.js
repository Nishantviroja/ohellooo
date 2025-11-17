'use client';

import { useEffect } from 'react';
import integrations from '../../data/integrations';

/**
 * Auto Ads Component
 * Enables Google Auto Ads (Vignettes and Anchor ads)
 * Works alongside manual ads without conflicts
 */
export default function AutoAds() {
  useEffect(() => {
    // Initialize Auto Ads
    // Google Auto Ads will automatically detect and show:
    // - Vignettes ads (full-screen overlay ads)
    // - Anchor ads (sticky top/bottom ads)
    // - In-article ads (if enabled in dashboard)
    // - In-feed ads (if enabled in dashboard)
    
    if (typeof window !== 'undefined') {
      try {
        // Ensure adsbygoogle is initialized
        window.adsbygoogle = window.adsbygoogle || [];
        
        // Auto Ads are automatically enabled when:
        // 1. Script is loaded with client ID (already in layout.js)
        // 2. Auto Ads is enabled in AdSense dashboard (user confirmed)
        // 3. No additional code needed - Google handles it automatically
        
        // Optional: Log for debugging
        if (integrations.ADSENSE_TEST_MODE) {
          console.log('Auto Ads initialized (Test Mode)');
        }
      } catch (err) {
        console.error('Auto Ads initialization error:', err);
      }
    }
  }, []);

  // This component doesn't render anything
  // Auto Ads are handled automatically by Google's script
  return null;
}

