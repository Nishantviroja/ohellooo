// Structured Data (JSON-LD) for Blog Listing Page

export default function BlogSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Fizoval AI Blog",
    "description": "Stay updated with AI industry trends, expert tool reviews, guides, and curated insights into the ever-evolving world of artificial intelligence.",
    "url": "https://fizoval.com/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Fizoval",
      "url": "https://fizoval.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://fizoval.com/FeaturingIMG.png"
      }
    },
    "inLanguage": "en-US"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

