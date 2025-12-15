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
      "description": "Fizoval is the world's largest AI tools directory featuring over 5000+ curated AI tools across 120+ categories for creators, developers, marketers, and businesses.",
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
      "name": "Fizoval - AI Tools Directory",
      "description": "Find the best AI tools in one place. Browse 5000+ handpicked AI tools for every use case.",
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
      "name": "Fizoval | Discover 5000+ Top AI Tools for Every Use Case",
      "description": "Find the best AI tools in one place. Fizoval features over 5000+ handpicked AI tools for creators, developers, marketers, and businesses to stay ahead in the AI revolution.",
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

    // 6. FAQPage Schema
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Fizoval?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Fizoval is the world's largest AI tools directory featuring over 5000+ curated AI tools across 120+ categories. We help creators, developers, marketers, and businesses discover the best AI tools for their specific needs."
          }
        },
        {
          "@type": "Question",
          "name": "How many AI tools are listed on Fizoval?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Fizoval features over 5000+ handpicked AI tools across 120+ categories including productivity, marketing, development, design, content creation, and more."
          }
        },
        {
          "@type": "Question",
          "name": "Are all AI tools on Fizoval free?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Fizoval features a mix of free, freemium, and paid AI tools. Each tool listing clearly displays its pricing model so you can find tools that fit your budget."
          }
        },
        {
          "@type": "Question",
          "name": "How often is Fizoval updated?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Fizoval is updated daily with new AI tools and features. We continuously curate and add the latest AI innovations to keep you ahead in the AI revolution."
          }
        },
        {
          "@type": "Question",
          "name": "Can I submit my AI tool to Fizoval?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! Fizoval welcomes AI tool submissions. Visit our submission page or contact us to get your AI tool featured in our directory."
          }
        },
        {
          "@type": "Question",
          "name": "What categories of AI tools does Fizoval cover?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Fizoval covers 120+ categories including productivity, generative art, text-to-speech, music, video generation, marketing, SEO, social media, writing, development, data analysis, customer support, design, education, and many more."
          }
        }
      ]
    },

    // 7. CollectionPage Schema
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

    // 8. Product Schema (for Fizoval Platform)
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Fizoval AI Tools Directory",
      "description": "Discover and compare 5000+ AI tools across 120+ categories",
      "brand": {
        "@type": "Brand",
        "name": "Fizoval"
      },
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "url": "https://fizoval.com"
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

