'use client';

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function CleanAdsOnRouteChange() {
  const pathname = usePathname();

  useEffect(() => {
    const ads = document.querySelectorAll("ins.adsbygoogle");
    ads.forEach((ad) => {
      ad.removeAttribute('data-adsbygoogle-status');
      ad.removeAttribute('data-ad-status');
      ad.innerHTML = "";
    });

    try {
      if (typeof window !== "undefined" && window.adsbygoogle) {
        window.adsbygoogle.length = 0;
      }
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, [pathname]);

  return null;
}
