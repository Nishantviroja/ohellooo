'use client';

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function CleanAdsOnRouteChange() {
  const pathname = usePathname();

  useEffect(() => {
    // Remove old ads
    const ads = document.querySelectorAll("ins.adsbygoogle");
    ads.forEach((ad) => {
      ad.innerHTML = "";
      ad.style.display = "none";
    });

    // Reset AdSense internal memory
    try {
      if (typeof window !== "undefined" && window.adsbygoogle) {
        window.adsbygoogle.length = 0;
      }
    } catch (err) {
      console.log("Clean ads error:", err);
    }
  }, [pathname]);

  return null;
}
