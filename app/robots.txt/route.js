export async function GET() {
  const robotsTxt = `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /
Disallow: /private/

User-agent: Googlebot
Allow: /
Disallow: /private/

User-agent: Googlebot-Image
Allow: /
Disallow: /private/

User-agent: Bingbot
Allow: /
Disallow: /private/

Sitemap: https://fizoval.com/sitemap.xml
`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600, must-revalidate',
      'Access-Control-Allow-Origin': '*',
    },
  });
}

