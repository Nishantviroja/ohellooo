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
    } catch (err) {
      console.log("AdSense reload error:", err);
    }
  }, [pathname]);

  return null;
}
