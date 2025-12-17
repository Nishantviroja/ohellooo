// Structured Data (JSON-LD) for Individual Blog Posts

export default function BlogPostSchema({ post, author }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image,
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Person",
      "name": author.name,
      "url": `https://fizoval.com/blog/author/${author.id}`
    },
    "publisher": {
      "@type": "Organization",
      "name": "Fizoval",
      "url": "https://fizoval.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://fizoval.com/FeaturingIMG.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://fizoval.com/blog/${post.slug}`
    },
    "articleSection": post.category,
    "keywords": post.metadata?.keyword || "",
    "wordCount": post.content?.split(' ').length || 1000
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

