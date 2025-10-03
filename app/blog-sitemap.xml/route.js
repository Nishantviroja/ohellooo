import { fetchBlogPosts } from '../data/blogPosts';

export const dynamic = 'force-dynamic';
export const revalidate = 3600;

// Helper to escape XML special characters
function escapeXml(unsafe) {
  if (!unsafe) return '';
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export async function GET() {
  const baseUrl = 'https://fizoval.com';

  let blogPosts = [];
  try {
    blogPosts = await fetchBlogPosts();
  } catch (error) {
    console.error('Error fetching blog posts:', error);
  }

  const urls = [
    {
      loc: `${baseUrl}/blog`,
      lastModified: new Date().toISOString(),
      changefreq: 'daily',
      priority: 0.9,
      image: null, // No image for blog index
    },
    ...blogPosts.map((post) => ({
      loc: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date).toISOString(),
      changefreq: 'monthly',
      priority: 0.8,
      image: post.image || null, // single image URL
    })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${urls
    .map(
      (u) => `
    <url>
      <loc>${escapeXml(u.loc)}</loc>
      <lastmod>${u.lastModified}</lastmod>
      <changefreq>${u.changefreq}</changefreq>
      <priority>${u.priority}</priority>
      ${
        u.image
          ? `<image:image>
              <image:loc>${escapeXml(u.image)}</image:loc>
            </image:image>`
          : ''
      }
    </url>
  `
    )
    .join('')}
</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: { 'Content-Type': 'application/xml' },
  });
}
