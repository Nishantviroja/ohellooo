'use client';

export default function PlaySchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Free Online Games - Play 200+ Casual Browser Games",
    "description": "Take a quick break with 200+ free online games! Play casual browser games instantly - no downloads needed.",
    "url": "https://fizoval.com/play",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Fizoval",
      "url": "https://fizoval.com"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://fizoval.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Free Games",
          "item": "https://fizoval.com/play"
        }
      ]
    },
    "mainEntity": {
      "@type": "Game",
      "name": "Free Online Games Collection",
      "description": "Collection of 200+ free casual browser games including puzzle, action, arcade, racing, and strategy games",
      "gameType": "Browser Game",
      "playMode": "SinglePlayer",
      "numberOfPlayers": {
        "@type": "QuantitativeValue",
        "value": 1
      },
      "applicationCategory": "Game"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

