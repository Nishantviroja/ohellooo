'use client';

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import integrations from '../../data/integrations';

export default function CleanAdsOnRouteChange() {
  const pathname = usePathname();
  const isTestMode = integrations.ADSENSE_TEST_MODE;

  useEffect(() => {
    // Only clean manual ads (ins.adsbygoogle elements)
    // Auto Ads (Vignettes, Anchor) are handled by Google and don't need cleaning
    const ads = document.querySelectorAll("ins.adsbygoogle");
    ads.forEach((ad) => {
      // Skip Auto Ads elements (they don't have data-ad-slot attribute)
      const hasSlot = ad.getAttribute('data-ad-slot');
      if (!hasSlot) {
        // This is likely an Auto Ad, skip it
        return;
      }
      
      const testMode = ad.getAttribute('data-adtest');
      
      ad.removeAttribute('data-adsbygoogle-status');
      ad.removeAttribute('data-ad-status');
      ad.innerHTML = "";
      
      if (isTestMode && testMode) {
        ad.setAttribute('data-adtest', 'on');
      }
    });

    // Only clear manual ad queue, not Auto Ads
    // Auto Ads are managed by Google's script independently
    try {
      if (typeof window !== "undefined" && window.adsbygoogle) {
        // Only clear if there are manual ads to clean
        // Auto Ads don't use this array the same way
        const manualAds = document.querySelectorAll("ins.adsbygoogle[data-ad-slot]");
        if (manualAds.length > 0) {
          window.adsbygoogle.length = 0;
        }
      }
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, [pathname, isTestMode]);

  return null;
}
