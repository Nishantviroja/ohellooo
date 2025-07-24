import { Bricolage_Grotesque, Sen } from 'next/font/google';
import './globals.css';

const bricolage = Bricolage_Grotesque({ 
  subsets: ['latin'],
  variable: '--font-bricolage'
});

const sen = Sen({ 
  subsets: ['latin'],
  variable: '--font-sen'
});

export const metadata = {
  title: "Fizoval - Best AI Tools Directory Featuring Over 5000+ Tools",
  description: "Explore the latest in AI technology, Stay ahead in the AI era with a curated list of cutting-edge tools for developers, creators, marketers, and tech enthusiasts.",
  keywords: "Best AI Tools , AI Tools , AI Tools Directory , Best AI Tools Directory , Fizoval"

};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-white">
      <body className={`${bricolage.variable} ${sen.variable} bg-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
