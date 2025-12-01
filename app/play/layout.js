export const metadata = {
  title: 'Free Online Games - Play 200+ Casual Browser Games | Fizoval',
  description: 'Take a quick break with 200+ free online games! Play casual browser games instantly - no downloads needed. Perfect for busy professionals, creators, and tech enthusiasts.',
  keywords: 'free online games, browser games, casual games, HTML5 games, instant play games, no download games, quick break games, puzzle games, action games, arcade games',
  
  openGraph: {
    title: 'Free Online Games - Play 200+ Casual Browser Games',
    description: 'Take a quick break with 200+ free online games! Play instantly in your browser - no downloads needed.',
    type: 'website',
    url: 'https://fizoval.com/play',
    siteName: 'Fizoval - AI Tools & Tech Resources',
    images: [
      {
        url: 'https://fizoval.com/FeaturingIMG.png',
        width: 1200,
        height: 630,
        alt: 'Free Online Games at Fizoval',
      }
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Free Online Games - Play 200+ Casual Browser Games',
    description: 'Take a quick break with 200+ free online games! Play instantly - no downloads needed.',
    images: ['https://fizoval.com/FeaturingIMG.png'],
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  alternates: {
    canonical: 'https://fizoval.com/play',
  },
  
  other: {
    'theme-color': '#2563eb',
  },
};

export default function PlayLayout({ children }) {
  return children;
}

