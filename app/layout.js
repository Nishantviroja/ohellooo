import { Bricolage_Grotesque, Sen } from "next/font/google";
import "./globals.css";

import siteMetadata from "./data/metadata";
import integrations from "./data/integrations";

import GoogleAnalytics from "./components/GoogleAnalytics";
import MicrosoftClarity from "./components/MicrosoftClarity";
import OneSignalInit from "./components/OneSignalInit";

import CleanAdsOnRouteChange from "./components/CleanAdsOnRouteChange";
import AdSenseAutoReload from "./components/AdSenseAutoReload";

import Script from "next/script";

export const metadata = siteMetadata.home;

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

        <Script
          id="adsense-auto"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6543173328208739"
          crossOrigin="anonymous"
          async
          strategy="beforeInteractive"
          data-adtest={isTestMode ? 'on' : undefined}
        />

        {isTestMode && (
          <Script id="adsense-test-mode" strategy="beforeInteractive">
            {`
              window.adsbygoogle = window.adsbygoogle || [];
              window.adsbygoogle.pauseAdRequests = 0;
            `}
          </Script>
        )}

        <GoogleAnalytics GA_MEASUREMENT_ID={integrations.GA_MEASUREMENT_ID} />
        <MicrosoftClarity CLARITY_PROJECT_ID={integrations.CLARITY_PROJECT_ID} />
        <OneSignalInit />

        <CleanAdsOnRouteChange />
        <AdSenseAutoReload />

        {children}
      </body>
    </html>
  );
}
