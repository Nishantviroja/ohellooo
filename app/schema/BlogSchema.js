// Structured Data (JSON-LD) for Blog Listing Page

export default function BlogSchema() {
  const schemas = [
    // 1. Blog Schema
    {
      "@context": "https://schema.org",
      "@type": "Blog",
      "@id": "https://fizoval.com/blog#blog",
      "name": "Fizoval AI Blog - Latest AI Tools News & Insights",
      "description": "Stay updated with AI industry trends, expert tool reviews, guides, and curated insights into the ever-evolving world of artificial intelligence.",
      "url": "https://fizoval.com/blog",
      "publisher": {
        "@id": "https://fizoval.com/#organization"
      },
      "inLanguage": "en-US",
      "blogPost": [],
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://fizoval.com/blog"
      }
    },
    
    // 2. WebPage Schema
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": "https://fizoval.com/blog",
      "url": "https://fizoval.com/blog",
      "name": "AI Blog - Latest News, Reviews & Insights | Fizoval",
      "description": "Explore expert articles, AI tool reviews, industry trends, and practical guides for leveraging AI in your work.",
      "isPartOf": {
        "@id": "https://fizoval.com/#website"
      },
      "breadcrumb": {
        "@id": "https://fizoval.com/blog#breadcrumb"
      },
      "inLanguage": "en-US",
      "potentialAction": {
        "@type": "ReadAction",
        "target": ["https://fizoval.com/blog"]
      }
    },
    
    // 3. BreadcrumbList Schema
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": "https://fizoval.com/blog#breadcrumb",
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
          "name": "Blog",
          "item": "https://fizoval.com/blog"
        }
      ]
    },
    
    // 4. CollectionPage Schema
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "AI Tools Blog Articles",
      "description": "Collection of articles about AI tools, trends, reviews, and guides",
      "url": "https://fizoval.com/blog",
      "isPartOf": {
        "@id": "https://fizoval.com/#website"
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

