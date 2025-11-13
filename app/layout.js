import { Bricolage_Grotesque, Sen } from "next/font/google";
import "./globals.css";

import siteMetadata from "./data/metadata";
import integrations from "./data/integrations";

import GoogleAnalytics from "./components/GoogleAnalytics";
import OneSignalInit from "./components/OneSignalInit";
import MicrosoftClarity from "./components/MicrosoftClarity";

import AdSenseAutoReload from "./components/AdSenseAutoReload";
import CleanAdsOnRouteChange from "./components/CleanAdsOnRouteChange";

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
  return (
    <html lang="en" className="bg-white">
      <head>
        {/* REAL FIX: Load Auto Ads BEFORE page render */}
        <Script
          id="adsense-script"
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${integrations.ADSENSE_CLIENT_ID}`}
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
      </head>

      <body
        className={`${bricolage.variable} ${sen.variable} bg-white antialiased`}
      >
        {/* Analytics + Tracking */}
        <GoogleAnalytics GA_MEASUREMENT_ID={integrations.GA_MEASUREMENT_ID} />
        <MicrosoftClarity CLARITY_PROJECT_ID={integrations.CLARITY_PROJECT_ID} />
        <OneSignalInit />

        {/* FIX 1: Clean previous ads on route change */}
        <CleanAdsOnRouteChange />

        {/* FIX 2: Reload new ads after cleaning */}
        <AdSenseAutoReload />

        {children}
      </body>
    </html>
  );
}
