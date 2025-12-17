// Structured Data (JSON-LD) for AI Tools Listing Page

export default function AIToolsSchema() {
  const schemas = [
    // 1. CollectionPage Schema
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": "https://fizoval.com/ai-tools#collectionpage",
      "name": "Browse All AI Tools - Fizoval Directory",
      "description": "Explore 5000+ AI tools across 120+ categories. Find the perfect AI solution for productivity, design, marketing, development, and more.",
      "url": "https://fizoval.com/ai-tools",
      "isPartOf": {
        "@id": "https://fizoval.com/#website"
      },
      "about": {
        "@type": "Thing",
        "name": "Artificial Intelligence Tools Directory"
      },
      "numberOfItems": "5000",
      "mainEntity": {
        "@type": "ItemList",
        "name": "AI Tools Collection",
        "numberOfItems": "5000",
        "itemListElement": []
      }
    },
    
    // 2. WebPage Schema
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": "https://fizoval.com/ai-tools",
      "url": "https://fizoval.com/ai-tools",
      "name": "All AI Tools | Browse 5000+ AI Solutions | Fizoval",
      "description": "Discover and compare 5000+ AI tools across all categories. Filter by features, pricing, and use cases to find your perfect AI solution.",
      "isPartOf": {
        "@id": "https://fizoval.com/#website"
      },
      "breadcrumb": {
        "@id": "https://fizoval.com/ai-tools#breadcrumb"
      },
      "inLanguage": "en-US",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://fizoval.com/ai-tools?search={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    },
    
    // 3. BreadcrumbList Schema
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": "https://fizoval.com/ai-tools#breadcrumb",
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
          "name": "AI Tools",
          "item": "https://fizoval.com/ai-tools"
        }
      ]
    },
    
    // 4. ItemList Schema (Comprehensive)
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Complete AI Tools Directory",
      "description": "Comprehensive directory featuring 5000+ AI tools across 120+ categories",
      "url": "https://fizoval.com/ai-tools",
      "numberOfItems": "5000",
      "itemListOrder": "https://schema.org/ItemListOrderDescending",
      "itemListElement": []
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

