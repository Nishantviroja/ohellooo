'use client';

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import integrations from '../data/integrations';

export default function CleanAdsOnRouteChange() {
  const pathname = usePathname();
  const isTestMode = integrations.ADSENSE_TEST_MODE;

  useEffect(() => {
    const ads = document.querySelectorAll("ins.adsbygoogle");
    ads.forEach((ad) => {
      const testMode = ad.getAttribute('data-adtest');
      
      ad.removeAttribute('data-adsbygoogle-status');
      ad.removeAttribute('data-ad-status');
      ad.innerHTML = "";
      
      if (isTestMode && testMode) {
        ad.setAttribute('data-adtest', 'on');
      }
    });

    try {
      if (typeof window !== "undefined" && window.adsbygoogle) {
        window.adsbygoogle.length = 0;
      }
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, [pathname, isTestMode]);

  return null;
}
