'use client';

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function AdSenseAutoReload() {
  const pathname = usePathname();

  useEffect(() => {
    try {
      if (typeof window !== "undefined" && window.adsbygoogle) {
        window.adsbygoogle.push({});
      }
    } catch (e) {
      console.log("AdSense reload error:", e);
    }
  }, [pathname]);

  return null;
}
