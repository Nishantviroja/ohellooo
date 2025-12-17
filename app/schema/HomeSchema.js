'use client';

export default function HomeSchema() {
  const schemas = [
    // 1. Organization Schema
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://fizoval.com/#organization",
      "name": "Fizoval",
      "url": "https://fizoval.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://fizoval.com/Fizoval.png",
        "width": 200,
        "height": 200
      },
      "description": "Fizoval is your trusted AI innovation partner, curating 5000+ best-in-class AI tools across 120+ categories. We empower creators, developers, marketers, and businesses to unlock their potential and shape the future with AI.",
      "sameAs": [
        "https://twitter.com/fizoval",
        "https://www.linkedin.com/company/fizoval"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Customer Service",
        "url": "https://fizoval.com/about"
      }
    },

    // 2. Website Schema
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://fizoval.com/#website",
      "url": "https://fizoval.com",
      "name": "Fizoval - Your AI Innovation Partner",
      "description": "Empowering your AI journey with 5000+ curated tools. Discover, compare, and leverage the best AI solutions to transform your work and unlock limitless possibilities.",
      "publisher": {
        "@id": "https://fizoval.com/#organization"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://fizoval.com/ai-tools?search={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    },

    // 3. WebPage Schema
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": "https://fizoval.com/#webpage",
      "url": "https://fizoval.com",
      "name": "Fizoval | Empowering Innovation with 5000+ Curated AI Tools",
      "description": "Your trusted partner in AI discovery. Explore 5000+ handpicked AI tools to transform your work, boost creativity, and unlock new possibilities. Join 100K+ innovators shaping the future with AI.",
      "isPartOf": {
        "@id": "https://fizoval.com/#website"
      },
      "about": {
        "@type": "Thing",
        "name": "Artificial Intelligence Tools"
      },
      "breadcrumb": {
        "@id": "https://fizoval.com/#breadcrumb"
      }
    },

    // 4. BreadcrumbList Schema
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": "https://fizoval.com/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://fizoval.com"
        }
      ]
    },

    // 5. ItemList Schema (AI Tools Collection)
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "AI Tools Directory",
      "description": "Comprehensive directory of 5000+ AI tools across multiple categories",
      "url": "https://fizoval.com",
      "numberOfItems": "5000",
      "itemListOrder": "https://schema.org/ItemListOrderDescending"
    },

    // 6. CollectionPage Schema
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "AI Tools Directory",
      "description": "Browse the world's largest collection of AI tools organized by category",
      "url": "https://fizoval.com",
      "isPartOf": {
        "@id": "https://fizoval.com/#website"
      },
      "about": {
        "@type": "SoftwareApplication",
        "applicationCategory": "BusinessApplication",
        "name": "AI Tools Directory",
        "description": "Comprehensive directory of artificial intelligence tools and software"
      }
    },

    // 7. Product Schema (for Fizoval Platform)
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Fizoval AI Tools Directory",
      "description": "Discover and compare 5000+ AI tools across 120+ categories",
      "image": "https://fizoval.com/Fizoval.png",
      "brand": {
        "@type": "Brand",
        "name": "Fizoval"
      },
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "url": "https://fizoval.com",
        "priceValidUntil": "2025-12-31"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "10000",
        "bestRating": "5",
        "worstRating": "1"
      }
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

