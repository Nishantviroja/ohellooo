import { fetchBlogPosts } from './data/blogPosts';
import { aiTools } from './data/aiTools';

export default async function sitemap() {
  const baseUrl = 'https://fizoval.com';

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
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
      priority: 0.8,
    },
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

  // Fetch blog posts dynamically
  let blogPostUrls = [];
  try {
    const blogPosts = await fetchBlogPosts();
    blogPostUrls = blogPosts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly',
      priority: 0.7,
    }));
  } catch (error) {
    console.error('Error fetching blog posts for sitemap:', error);
    // If fetch fails, blogPostUrls remains empty array
  }

  // AI tools category URLs
  const categorySet = new Set();
  aiTools.forEach(tool => {
    if (tool.category) {
      categorySet.add(tool.category);
    }
  });

  const categoryUrls = Array.from(categorySet).map(category => ({
    url: `${baseUrl}/ai-tools/${category.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-')}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [
    ...staticPages,
    ...blogPostUrls,
    ...categoryUrls,
  ];
} 