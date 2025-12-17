// Structured Data (JSON-LD) for Category Pages

export default function CategorySchema({ categoryName, toolCount, description, url }) {
  const schemas = [
    // 1. CollectionPage Schema
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": `${url}#collectionpage`,
      "name": `${categoryName} AI Tools`,
      "description": description,
      "url": url,
      "isPartOf": {
        "@id": "https://fizoval.com/#website"
      },
      "about": {
        "@type": "Thing",
        "name": `${categoryName} Artificial Intelligence Tools`
      },
      "numberOfItems": toolCount,
      "publisher": {
        "@id": "https://fizoval.com/#organization"
      },
      "mainEntity": {
        "@type": "ItemList",
        "name": `${categoryName} Tools Collection`,
        "numberOfItems": toolCount,
        "itemListElement": []
      }
    },

    // 2. WebPage Schema
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": url,
      "url": url,
      "name": `${categoryName} AI Tools - Best ${categoryName} Tools`,
      "description": description,
      "isPartOf": {
        "@id": "https://fizoval.com/#website"
      },
      "breadcrumb": {
        "@id": `${url}#breadcrumb`
      },
      "inLanguage": "en-US",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": `${url}?search={search_term_string}`
        },
        "query-input": "required name=search_term_string"
      }
    },

    // 3. BreadcrumbList Schema
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
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
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": `${categoryName}`,
          "item": url
        }
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

