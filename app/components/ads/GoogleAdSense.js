'use client';

import Script from 'next/script';
import integrations from '../../data/integrations';

const GoogleAdSense = ({ AD_CLIENT_ID }) => {
  // Check if ads are globally enabled
  if (!integrations.GOOGLE_ADSENSE) return null;

  return (
    <>
      <Script
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${AD_CLIENT_ID}`}
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
    </>
  );
};

export default GoogleAdSense;