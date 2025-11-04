import { Bricolage_Grotesque, Sen } from "next/font/google";
import "./globals.css";

import siteMetadata from "./data/metadata";
import GoogleAnalytics from "./components/GoogleAnalytics";
import OneSignalInit from "./components/OneSignalInit";
import MicrosoftClarity from "./components/MicrosoftClarity"; 
import GoogleAdSense from "./components/GoogleAdSense";

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
      <body className={`${bricolage.variable} ${sen.variable} bg-white antialiased`} >
        <GoogleAnalytics GA_MEASUREMENT_ID="G-RMDMKFX1EM" />
        <MicrosoftClarity CLARITY_PROJECT_ID="tyxnewam75" />
        <OneSignalInit />
        <GoogleAdSense AD_CLIENT_ID="ca-pub-6543173328208739" />
        {children}
      </body>
    </html>
  );
}
