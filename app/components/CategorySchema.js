// Structured Data (JSON-LD) for Category Pages

export default function CategorySchema({ categoryName, toolCount, description, url }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": `${categoryName} AI Tools`,
    "description": description,
    "url": url,
    "isPartOf": {
      "@type": "WebSite",
      "name": "Fizoval",
      "url": "https://fizoval.com"
    },
    "about": {
      "@type": "Thing",
      "name": `${categoryName} Artificial Intelligence Tools`
    },
    "numberOfItems": toolCount,
    "publisher": {
      "@type": "Organization",
      "name": "Fizoval",
      "url": "https://fizoval.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://fizoval.com/FeaturingIMG.png"
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

