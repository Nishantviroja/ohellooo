export const metadata = {
  title: 'Play Free Online Games - 238+ Browser Games Instantly | Fizoval',
  description: 'Play 238+ free online games instantly! Puzzle, action, racing, sports & arcade games. No downloads, no signup required. Perfect for quick breaks. Mobile & desktop friendly.',
  keywords: [
    // Primary Keywords
    'free online games',
    'play games online',
    'browser games',
    'instant play games',
    'no download games',
    
    // Game Categories
    'puzzle games online',
    'action games',
    'arcade games free',
    'racing games',
    'sports games online',
    'strategy games',
    'card games online',
    
    // Features
    'HTML5 games',
    'mobile games',
    'casual games',
    'quick break games',
    'web games',
    'free browser games',
    'games no signup',
    
    // Target Audience
    'office games',
    'work break games',
    'stress relief games',
    'time killer games',
  ].join(', '),
  
  authors: [{ name: 'Fizoval' }],
  creator: 'Fizoval',
  publisher: 'Fizoval',
  
  applicationName: 'Fizoval Games',
  category: 'Entertainment',
  
  openGraph: {
    title: 'Play Free Online Games - 238+ Instant Browser Games',
    description: 'Take a 5-minute break! Play 238+ free games instantly. Puzzle, action, racing & more. No downloads, 100% free. Mobile & desktop ready.',
    type: 'website',
    url: 'https://fizoval.com/play',
    siteName: 'Fizoval',
    locale: 'en_US',
    images: [
      {
        url: 'https://fizoval.com/FeaturingIMG.png',
        width: 1200,
        height: 630,
        alt: 'Free Online Games - Play 238+ Browser Games at Fizoval',
        type: 'image/png',
      }
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    site: '@fizoval',
    creator: '@fizoval',
    title: 'Play Free Online Games - 238+ Instant Browser Games',
    description: 'Take a 5-minute break! Play 238+ free games instantly. Puzzle, action, racing & more. No downloads needed.',
    images: {
      url: 'https://fizoval.com/FeaturingIMG.png',
      alt: 'Free Online Games at Fizoval',
    },
  },
  
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  alternates: {
    canonical: 'https://fizoval.com/play',
    languages: {
      'en-US': 'https://fizoval.com/play',
    },
  },
  
  verification: {
    google: 'inam3wn74vU-fc7jfQNBd20mQogxlDGcOAPrKEFSt8U',
  },
  
  other: {
    'theme-color': '#2563eb',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Fizoval Games',
    'format-detection': 'telephone=no',
  },
};

export default function PlayLayout({ children }) {
  return children;
}

