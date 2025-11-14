'use client';
import { useEffect, useRef } from 'react';

const AdInArticle = () => {
  const adRef = useRef(null);
  const isAdPushed = useRef(false);

  useEffect(() => {
    if (isAdPushed.current) return;

    const timer = setTimeout(() => {
      try {
        if (adRef.current && !adRef.current.getAttribute('data-adsbygoogle-status')) {
          if (typeof window !== 'undefined' && window.adsbygoogle) {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
            isAdPushed.current = true;
          }
        }
      } catch (err) {
        console.error('AdSense error:', err);
      }
    }, 100);

    return () => {
      clearTimeout(timer);
      isAdPushed.current = false;
    };
  }, []);

  return (
    <ins
      ref={adRef}
      className="adsbygoogle"
      style={{ display: 'block', textAlign: 'center', margin: '1rem 0' }}
      data-ad-layout="in-article"
      data-ad-format="fluid"
      data-ad-client="ca-pub-6543173328208739"
      data-ad-slot="4086921999"
    ></ins>
  );
};

export default AdInArticle;
