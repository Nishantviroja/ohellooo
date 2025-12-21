'use client';

export default function PlaySchema() {
  const schemas = [
    // 1. WebPage Schema
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": "https://fizoval.com/play#webpage",
      "url": "https://fizoval.com/play",
      "name": "Play Free Online Games - 238+ Browser Games Instantly",
      "description": "Play 238+ free online games instantly! Puzzle, action, racing, sports & arcade games. No downloads, 100% free. Mobile & desktop friendly.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://fizoval.com/#website",
        "name": "Fizoval",
        "url": "https://fizoval.com",
        "publisher": {
          "@type": "Organization",
          "name": "Fizoval",
          "url": "https://fizoval.com"
        }
      },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://fizoval.com/FeaturingIMG.png",
        "width": 1200,
        "height": 630
      },
      "datePublished": "2024-11-28T00:00:00+00:00",
      "dateModified": new Date().toISOString(),
      "breadcrumb": {
        "@id": "https://fizoval.com/play#breadcrumb"
      },
      "mainEntity": {
        "@id": "https://fizoval.com/play#collection"
      }
    },
    
    // 2. BreadcrumbList Schema
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": "https://fizoval.com/play#breadcrumb",
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
          "name": "Play Games",
          "item": "https://fizoval.com/play"
        }
      ]
    },
    
    // 3. CollectionPage Schema for Game Collection
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": "https://fizoval.com/play#collection",
      "name": "Free Online Games Collection",
      "description": "Collection of 238+ free online browser games including puzzle, action, arcade, racing, sports, strategy, and card games. Play instantly without downloads.",
      "url": "https://fizoval.com/play",
      "about": {
        "@type": "Thing",
        "name": "Online Browser Games"
      },
      "hasPart": [
        {
          "@type": "Game",
          "name": "Puzzle & Logic Games",
          "gameType": "Browser Game",
          "playMode": "SinglePlayer",
          "genre": "Puzzle"
        },
        {
          "@type": "Game",
          "name": "Action Games",
          "gameType": "Browser Game",
          "playMode": "SinglePlayer",
          "genre": "Action"
        },
        {
          "@type": "Game",
          "name": "Arcade Games",
          "gameType": "Browser Game",
          "playMode": "SinglePlayer",
          "genre": "Arcade"
        },
        {
          "@type": "Game",
          "name": "Sports & Racing Games",
          "gameType": "Browser Game",
          "playMode": "SinglePlayer",
          "genre": "Sports"
        },
        {
          "@type": "Game",
          "name": "Strategy Games",
          "gameType": "Browser Game",
          "playMode": "SinglePlayer",
          "genre": "Strategy"
        }
      ]
    },
    
    // 4. Offer Schema (Free)
    {
      "@context": "https://schema.org",
      "@type": "Offer",
      "name": "Free Online Games Access",
      "description": "Play 238+ games absolutely free with no signup or download required",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "priceValidUntil": "2026-12-31",
      "image": "https://fizoval.com/FeaturingIMG.png",
      "hasMerchantReturnPolicy": {
        "@type": "MerchantReturnPolicy",
        "applicableCountry": "US",
        "returnPolicyCategory": "https://schema.org/MerchantReturnNotPermitted",
        "merchantReturnDays": 0,
        "returnMethod": "https://schema.org/ReturnByMail",
        "returnFees": "https://schema.org/FreeReturn"
      },
      "shippingDetails": {
        "@type": "OfferShippingDetails",
        "shippingRate": {
          "@type": "MonetaryAmount",
          "value": "0",
          "currency": "USD"
        },
        "shippingDestination": {
          "@type": "DefinedRegion",
          "addressCountry": "US"
        },
        "deliveryTime": {
          "@type": "ShippingDeliveryTime",
          "handlingTime": {
            "@type": "QuantitativeValue",
            "minValue": 0,
            "maxValue": 0,
            "unitCode": "DAY"
          },
          "transitTime": {
            "@type": "QuantitativeValue",
            "minValue": 0,
            "maxValue": 0,
            "unitCode": "DAY"
          }
        }
      },
      "itemOffered": {
        "@type": "Product",
        "name": "Free Online Games Collection",
        "description": "238+ free browser games",
        "category": "Entertainment",
        "image": "https://fizoval.com/FeaturingIMG.png"
      }
    },
    
    // 6. Organization Schema
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Fizoval",
      "url": "https://fizoval.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://fizoval.com/Fizoval.png"
      },
      "sameAs": [
        "https://twitter.com/fizoval",
        "https://www.linkedin.com/company/fizoval"
      ]
    }
  ];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}

