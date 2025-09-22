import { Bricolage_Grotesque, Sen } from "next/font/google";
import "./globals.css";

import siteMetadata from "./data/metadata";
import GoogleAnalytics from "./components/GoogleAnalytics";
import OneSignalInit from "./components/OneSignalInit";

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
        <OneSignalInit />
        {children}
      </body>
    </html>
  );
}
