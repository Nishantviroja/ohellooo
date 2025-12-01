'use client';
import { useEffect, useRef } from 'react';
import integrations from '../../data/integrations';

const AdFluid = () => {
  const adRef = useRef(null);
  const isAdPushed = useRef(false);
  const isTestMode = integrations.ADSENSE_TEST_MODE;

  useEffect(() => {
    if (!integrations.GOOGLE_ADSENSE) return;
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

  // Check if ads are globally enabled
  if (!integrations.GOOGLE_ADSENSE) return null;

  return (
    <div className="w-full h-full flex justify-center bg-white rounded-xl shadow-md duration-300 hover:shadow-lg">
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block', width: '100%', minHeight: '280px' }}
        data-ad-format="fluid"
        data-ad-layout-key="-6t+ed+2i-1n-4w"
        data-ad-client={integrations.ADSENSE_CLIENT_ID}
        data-ad-slot={integrations.ADSENSE_SLOTS.IN_ARTICLE}
        data-adtest={isTestMode ? 'on' : undefined}
      ></ins>
    </div>
  );
};

export default AdFluid;

