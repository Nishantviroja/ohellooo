import { fetchBlogPosts } from '../../data/blogPosts';

export async function GET() {
  const baseUrl = 'https://fizoval.com';
  let posts = [];
  try {
    posts = await fetchBlogPosts();
  } catch {
    posts = [];
  }

  const items = (posts || []).map((post) => {
    const url = `${baseUrl}/blog/${post.slug}`;
    const pubDate = post.date ? new Date(post.date).toUTCString() : new Date().toUTCString();
    const title = escapeXml(post.title || 'Untitled');
    const description = escapeXml(post.excerpt || post.metadata?.desc || '');
    const author = escapeXml(post.author || 'Fizoval Team');
    return `
      <item>
        <title>${title}</title>
        <link>${url}</link>
        <guid isPermaLink="true">${url}</guid>
        <description>${description}</description>
        <author>${author}</author>
        <pubDate>${pubDate}</pubDate>
      </item>`;
  }).join('');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Fizoval Blog</title>
    <link>${baseUrl}/blog</link>
    <description>AI news, reviews, and trends from Fizoval.</description>
    <language>en-us</language>
    ${items}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate=86400',
    },
  });
}

function escapeXml(unsafe = '') {
  return String(unsafe)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}


