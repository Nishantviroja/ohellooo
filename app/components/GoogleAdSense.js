'use client';

import Script from 'next/script';

const GoogleAdSense = ({ AD_CLIENT_ID }) => {
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
