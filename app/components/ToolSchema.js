// Structured Data (JSON-LD) for Individual Tool Pages

export default function ToolSchema({ tool }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": tool.name || tool.title,
    "description": tool.full_description || tool.description,
    "applicationCategory": `${tool.category} Software`,
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": tool.pricing_model === 'Free' ? "0" : undefined,
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "image": tool.image_url,
    "url": tool.external_link,
    "publisher": {
      "@type": "Organization",
      "name": "Fizoval",
      "url": "https://fizoval.com"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "ratingCount": "100",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

