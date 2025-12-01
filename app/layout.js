import { Bricolage_Grotesque, Sen } from "next/font/google";
import "./globals.css";

import siteMetadata from "./data/metadata";
import integrations from "./data/integrations";

import GoogleAnalytics from "./components/GoogleAnalytics";
import MicrosoftClarity from "./components/MicrosoftClarity";
import OneSignalInit from "./components/OneSignalInit";

import CleanAdsOnRouteChange from "./components/ads/CleanAdsOnRouteChange";
import AdSenseAutoReload from "./components/ads/AdSenseAutoReload";
import GoogleAdSense from "./components/ads/GoogleAdSense";



import Script from "next/script";

export const metadata = {
  ...siteMetadata.home,
  verification: {
    google: 'inam3wn74vU-fc7jfQNBd20mQogxlDGcOAPrKEFSt8U',
  },
};

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
});

const sen = Sen({
  subsets: ["latin"],
  variable: "--font-sen",
});

export default function RootLayout({ children }) {
  const isTestMode = integrations.ADSENSE_TEST_MODE;

  return (
    <html lang="en" className="bg-white">
      <body className={`${bricolage.variable} ${sen.variable} bg-white antialiased`}>
        {/* Test mode script must run BEFORE AdSense loads */}
        {isTestMode && (
          <Script id="adsense-test-mode" strategy="beforeInteractive">
            {`
              window.adsbygoogle = window.adsbygoogle || [];
              window.adsbygoogle.pauseAdRequests = 0;
            `}
          </Script>
        )}

        {/* AdSense Auto Ads - loads after page becomes interactive */}
        <GoogleAdSense AD_CLIENT_ID={integrations.ADSENSE_CLIENT_ID} />

        {/* Ad Management Components */}
        <CleanAdsOnRouteChange />
        <AdSenseAutoReload />

        {/* Analytics & Tracking Scripts */}
        <GoogleAnalytics GA_MEASUREMENT_ID={integrations.GA_MEASUREMENT_ID} />
        <MicrosoftClarity CLARITY_PROJECT_ID={integrations.CLARITY_PROJECT_ID} />
        <OneSignalInit />

        {/* Page Content */}
        {children}
      </body>
    </html>
  );
}
