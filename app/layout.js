import { Bricolage_Grotesque, Sen } from "next/font/google";
import "./globals.css";

import siteMetadata from "./data/metadata";
import integrations from "./data/integrations";

import GoogleAnalytics from "./components/GoogleAnalytics";
import OneSignalInit from "./components/OneSignalInit";
import MicrosoftClarity from "./components/MicrosoftClarity";
import GoogleAdSense from "./components/GoogleAdSense";
import AdSenseAutoReload from "./components/AdSenseAutoReload";

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
      <body className={`${bricolage.variable} ${sen.variable} bg-white antialiased`}>
        
        {/* Analytics + Tracking */}
        <GoogleAnalytics GA_MEASUREMENT_ID={integrations.GA_MEASUREMENT_ID} />
        <MicrosoftClarity CLARITY_PROJECT_ID={integrations.CLARITY_PROJECT_ID} />
        <OneSignalInit />

        {/* AdSense */}
        <GoogleAdSense AD_CLIENT_ID={integrations.ADSENSE_CLIENT_ID} />
        <AdSenseAutoReload />

        {children}
      </body>
    </html>
  );
}
