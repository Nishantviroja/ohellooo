// app/sitemap.js
import blogPosts from './data/blogPosts';
import { aiTools } from './data/aiTools';

export default function sitemap() {
  const baseUrl = 'https://fizoval.com';

  // Generate blog post URLs with images
  const blogPostUrls = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'daily',
    priority: 0.8,
    images: [
      {
        url: post.image,
        title: post.title,
        caption: post.excerpt,
        geoLocation: 'Worldwide',
        license: 'https://creativecommons.org/licenses/by/4.0/',
      }
    ],
  }));

  // Collect all unique images from blog posts
  const allBlogImages = blogPosts.map((post) => ({
    url: post.image,
    title: post.title,
    caption: post.excerpt,
    geoLocation: 'Worldwide',
    license: 'https://creativecommons.org/licenses/by/4.0/',
  }));

  // Generate AI tools category URLs
  const categorySet = new Set();
  if (aiTools && Array.isArray(aiTools)) {
    aiTools.forEach(tool => {
      if (tool.category) {
        categorySet.add(tool.category);
      }
    });
  }

  const categoryUrls = Array.from(categorySet).map(category => ({
    url: `${baseUrl}/ai-tools/${category.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-')}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      images: [
        {
          url: `${baseUrl}/Fizoval.png`,
          title: 'Fizoval - Best AI Tools Directory',
          caption: 'Fizoval logo and branding',
          geoLocation: 'Worldwide',
          license: 'https://creativecommons.org/licenses/by/4.0/',
        }
      ],
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
      images: allBlogImages.slice(0, 10), // Include first 10 blog images
    },
    {
      url: `${baseUrl}/ai-tools`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // Add all blog posts to sitemap
    ...blogPostUrls,
    // Add all AI tools category pages to sitemap
    ...categoryUrls,
    {
      url: `${baseUrl}/terms-and-conditions`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/affiliate-disclosure`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    
  ];
}
