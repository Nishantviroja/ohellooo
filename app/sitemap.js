import { fetchBlogPosts } from './data/blogPosts';
import { aiTools } from './data/aiTools';

// Make sitemap dynamic with revalidation when not using static export
export const dynamic = 'force-dynamic';
export const revalidate = 3600; // revalidate every hour

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
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
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
    {
      url: `${baseUrl}/blog/author/nishant-viroja`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
  ];

  // Fetch blog posts dynamically
  let blogPostUrls = [];
  try {
    const blogPosts = await fetchBlogPosts();
    blogPostUrls = blogPosts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date).toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
      image: post.image || null, // single image URL
    }));
  } catch (error) {
    console.error('Error fetching blog posts for sitemap:', error);
    // If fetch fails, blogPostUrls remains empty array
  }

  // Helper functions for URL generation
  const getSeoCategorySlug = (categoryName) => {
    return categoryName.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-') + '-ai-tools';
  };

  const slugify = (str) => {
    return str
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-') // replace non-alphanumeric with dash
      .replace(/^-+|-+$/g, '')     // trim leading/trailing dashes
      .replace(/-+/g, '-');        // collapse multiple dashes
  };

  // Generate category and tool URLs
  const categorySet = new Set();
  const toolUrls = [];
  const categoryUrls = [];

  aiTools.forEach(tool => {
    if (tool.category && tool.name) {
      // Add category to set for category URLs
      categorySet.add(tool.category);
      
      // Generate tool detail URL
      const categorySlug = getSeoCategorySlug(tool.category);
      const toolSlug = slugify(tool.name);
      
      toolUrls.push({
        url: `${baseUrl}/${categorySlug}/${toolSlug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    }
  });

  // Generate category URLs
  const categoryUrlsArray = Array.from(categorySet).map(category => ({
    url: `${baseUrl}/${getSeoCategorySlug(category)}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.8,
  }));

  return [
    ...staticPages,
    ...blogPostUrls,
    ...categoryUrlsArray,
    // ...toolUrls,
  ];
} 