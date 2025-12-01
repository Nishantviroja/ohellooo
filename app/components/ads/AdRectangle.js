'use client';
import { useEffect, useRef } from 'react';
import integrations from '../../data/integrations';

const AdRectangle = () => {
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
    <div className="overflow-hidden border-2 border-blue-200 rounded-lg  bg-blue-50">
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block', minHeight: '250px' }}
        data-ad-client={integrations.ADSENSE_CLIENT_ID}
        data-ad-slot={integrations.ADSENSE_SLOTS.RECTANGLE}
        data-ad-format="auto"
        data-full-width-responsive="true"
        data-adtest={isTestMode ? 'on' : undefined}
      ></ins>
    </div>
  );
};

export default AdRectangle;

