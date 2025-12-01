import { fetchBlogPosts } from '../data/blogPosts';
import { aiTools } from '../data/aiTools';

export const revalidate = 60; // revalidate every minute

// Helper function to escape XML special characters
function escapeXml(unsafe) {
  if (!unsafe) return '';
  return String(unsafe)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

// Helper function to validate URL
function isValidUrl(url) {
  if (!url) return false;
  try {
    new URL(url);
    return !url.startsWith('data:') && !url.startsWith('javascript:') && !url.startsWith('blob:');
  } catch {
    return false;
  }
}

export async function GET() {
  const baseUrl = 'https://fizoval.com';
  
  // Helper functions for URL generation
  const getSeoCategorySlug = (categoryName) => {
    return categoryName.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-') + '-ai-tools';
  };

  const slugify = (str) => {
    return str
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .replace(/-+/g, '-');
  };

  // Static pages
  const staticPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/ai-tools`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/play`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/terms-and-conditions`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/privacy-policy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/affiliate-disclosure`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/blog/author/nishant-viroja`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.8 },
  ];

  // Fetch blog posts
  let blogPosts = [];
  try {
    blogPosts = await fetchBlogPosts();
  } catch (error) {
    console.error('Error fetching blog posts for sitemap:', error);
  }

  // Generate categories
  const categorySet = new Set();
  aiTools.forEach(tool => {
    if (tool.category) categorySet.add(tool.category);
  });

  // Build XML
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n';

  // Add static pages
  staticPages.forEach(page => {
    xml += '  <url>\n';
    xml += `    <loc>${escapeXml(page.url)}</loc>\n`;
    xml += `    <lastmod>${page.lastModified.toISOString()}</lastmod>\n`;
    xml += `    <changefreq>${page.changeFrequency}</changefreq>\n`;
    xml += `    <priority>${page.priority}</priority>\n`;
    xml += '  </url>\n';
  });

  // Add blog posts WITH images
  blogPosts.forEach(post => {
    const postUrl = `${baseUrl}/blog/${post.slug}`;
    const hasValidImage = post.image && isValidUrl(post.image);
    
    xml += '  <url>\n';
    xml += `    <loc>${escapeXml(postUrl)}</loc>\n`;
    xml += `    <lastmod>${new Date(post.date).toISOString()}</lastmod>\n`;
    xml += `    <changefreq>monthly</changefreq>\n`;
    xml += `    <priority>0.8</priority>\n`;
    
    // ✅ Add image if valid
    if (hasValidImage) {
      xml += '    <image:image>\n';
      xml += `      <image:loc>${escapeXml(post.image)}</image:loc>\n`;
      if (post.title) {
        xml += `      <image:title>${escapeXml(post.title)}</image:title>\n`;
      }
      xml += '    </image:image>\n';
    }
    
    xml += '  </url>\n';
  });

  // Add categories
  Array.from(categorySet).forEach(category => {
    const categoryUrl = `${baseUrl}/${getSeoCategorySlug(category)}`;
    xml += '  <url>\n';
    xml += `    <loc>${escapeXml(categoryUrl)}</loc>\n`;
    xml += `    <lastmod>${new Date().toISOString()}</lastmod>\n`;
    xml += `    <changefreq>daily</changefreq>\n`;
    xml += `    <priority>0.8</priority>\n`;
    xml += '  </url>\n';
  });

  // Add AI tools
  aiTools.forEach(tool => {
    if (tool.category && tool.name) {
      const categorySlug = getSeoCategorySlug(tool.category);
      const toolSlug = slugify(tool.name);
      const toolUrl = `${baseUrl}/${categorySlug}/${toolSlug}`;
      
      xml += '  <url>\n';
      xml += `    <loc>${escapeXml(toolUrl)}</loc>\n`;
      xml += `    <lastmod>${new Date().toISOString()}</lastmod>\n`;
      xml += `    <changefreq>monthly</changefreq>\n`;
      xml += `    <priority>0.7</priority>\n`;
      xml += '  </url>\n';
    }
  });

  xml += '</urlset>';

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}

