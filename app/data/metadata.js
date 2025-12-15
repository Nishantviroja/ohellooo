// data/metadata.js

const siteMetadata = {
  home: {
    title: "Fizoval | Your Trusted AI Tools Directory - Empowering Innovation with 5000+ Curated AI Solutions",
    description:
      "Discover, compare, and leverage the power of AI with Fizoval. We curate 5000+ best AI tools across 120+ categories to help creators, developers, and businesses unlock their potential. Start your AI journey today!",
    keywords: [
      // Primary Keywords
      "AI tools directory",
      "best AI tools 2025",
      "free AI tools",
      "AI software directory",
      "artificial intelligence tools",
      
      // Tool Categories
      "AI productivity tools",
      "AI marketing tools",
      "AI writing tools",
      "AI image generator",
      "AI video tools",
      "AI coding tools",
      "AI design tools",
      "AI chatbot tools",
      
      // Use Cases
      "AI for business",
      "AI for developers",
      "AI for content creators",
      "AI for marketers",
      "AI automation tools",
      
      // Long-tail
      "compare AI tools",
      "AI tools reviews",
      "latest AI software",
      "generative AI tools",
      "ChatGPT alternatives",
      "Midjourney alternatives",
      
      // Branded
      "Fizoval",
      "Fizoval AI directory"
    ].join(", "),
    
    authors: [{ name: "Fizoval" }],
    creator: "Fizoval",
    publisher: "Fizoval",
    category: "Technology",
    
openGraph: {
      title: "Fizoval | Empowering Innovation with 5000+ Curated AI Tools",
      description: "Your trusted partner in AI discovery. Explore 5000+ handpicked AI tools to transform your work, boost creativity, and unlock new possibilities. Join 100K+ innovators today!",
      url: "https://fizoval.com",
      siteName: "Fizoval - Your AI Innovation Partner",
      images: [
        {
          url: "https://fizoval.com/FeaturingIMG.png",
          width: 1200,
          height: 630,
          alt: "Fizoval - Empowering Your AI Journey with 5000+ Curated Tools",
          type: "image/png",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      site: "@fizoval",
      creator: "@fizoval",
      title: "Fizoval | Empowering Your AI Journey with 5000+ Tools",
      description: "Discover curated AI tools to transform your work and unlock limitless possibilities. Join 100K+ innovators leveraging AI for success. Start exploring now!",
      images: {
        url: "https://fizoval.com/FeaturingIMG.png",
        alt: "Fizoval - Your AI Innovation Partner",
      },
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
      canonical: 'https://fizoval.com',
      languages: {
        'en-US': 'https://fizoval.com',
      },
    },
    
    other: {
      'theme-color': '#2563eb',
      'mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'default',
      'apple-mobile-web-app-title': 'Fizoval',
      'format-detection': 'telephone=no',
    },
  },
  aiTools: {
    title: "Explore All AI Tool | Fizoval",
    description:
      "Browse AI tools by category — from marketing, development, writing, art, SaaS automation, and more. Easily discover what fits your need.",
      keywords: "AI Tools Directory, Best AI Tools 2025, Free AI Tools, Fizoval, Top AI Software",
      openGraph: {
      title: "Explore All AI Tool | Fizoval",
      description: "Browse AI tools by categories including marketing, development, creativity and more on Fizoval.",
      url: "https://fizoval.com/ai-tools",
      siteName: "Fizoval",
      images: [
        {
          url: "https://fizoval.com/FeaturingIMG.png",
          width: 1200,
          height: 630,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Categories - AI Tools on Fizoval",
      description: "Browse AI tools by categories including marketing, development, creativity and more on Fizoval.",
      images: ["https://fizoval.com/FeaturingIMG.png"],
    },
  },
  blog: {
    title: "Fizoval Blog | AI News, Tool Reviews, and Trends",
    description:
      "Stay updated with AI industry trends, expert tool reviews, guides, and curated insights into the ever-evolving world of artificial intelligence.",
    keywords: "AI blog, AI tools review, latest AI news 2025, Fizoval blog, AI software reviews",
  },
  about: {
    title: "About Fizoval | World's Largest AI Tools Hub",
    description:
      "Fizoval is your go-to platform for discovering and comparing over 5000+ AI tools across industries. Learn more about our mission and vision.",
    keywords: "About Fizoval, AI tools directory, AI tools information, Fizoval mission, Fizoval vision",
    openGraph: {
      title: "About Fizoval | World's Largest AI Tools Hub",
      description: "Learn about Fizoval and our mission to provide the best AI tool directory featuring over 5000+ tools from all industries.",
      url: "https://fizoval.com/about",
      siteName: "Fizoval",
      images: [
        {
          url: "https://fizoval.com/FeaturingIMG.png",
          width: 1200,
          height: 630,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "About Fizoval | World's Largest AI Tools Hub",
      description: "Learn about Fizoval and our mission to provide the best AI tool directory featuring over 5000+ tools from all industries.",
      images: ["https://fizoval.com/FeaturingIMG.png"],
    },
  },
  terms: {
    title: "Terms and Conditions | Fizoval",
    description:
      "Read the terms and conditions governing the use of Fizoval, the best AI tools directory.",
    keywords: "Terms and conditions, Fizoval terms, Fizoval privacy policy",
  },
  privacy: {
    title: "Privacy Policy | Fizoval",
    description:
      "Understand how Fizoval protects your privacy and handles your data.",
    keywords: "Privacy policy, data protection, Fizoval privacy policy",
  },
  affiliate: {
    title: "Affiliate Disclosure | Fizoval",
    description:
      "Learn about Fizoval’s affiliate relationships and disclosures.",
    keywords: "Affiliate disclosure, affiliate relationships, Fizoval affiliate disclosure",
  },
};

export default siteMetadata;
