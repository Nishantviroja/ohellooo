'use client';

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function AdSenseAutoReload() {
  const pathname = usePathname();
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    const timer = setTimeout(() => {
      try {
        if (typeof window !== "undefined") {
          const ads = document.querySelectorAll("ins.adsbygoogle");
          
          ads.forEach((ad, index) => {
            if (!ad.getAttribute('data-adsbygoogle-status') && !ad.getAttribute('data-ad-status')) {
              setTimeout(() => {
                try {
                  const client = ad.getAttribute('data-ad-client');
                  
                  if (client && !ad.getAttribute('data-adsbygoogle-status')) {
                    (window.adsbygoogle = window.adsbygoogle || []).push({});
                  }
                } catch (e) {
                  console.error('AdSense error:', e);
                }
              }, 50 * (index + 1));
            }
          });
        }
      } catch (err) {
        console.error('AdSense error:', err);
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
