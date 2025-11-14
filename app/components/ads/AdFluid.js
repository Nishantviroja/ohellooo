'use client';
import { useEffect, useRef } from 'react';
import integrations from '../../data/integrations';

const AdFluid = () => {
  const adRef = useRef(null);
  const isAdPushed = useRef(false);
  const isTestMode = integrations.ADSENSE_TEST_MODE;

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
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border-2 border-dashed border-blue-200">
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

