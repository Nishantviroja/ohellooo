// app/robots.js or app/robots.ts
export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/private/',
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: '/private/',
      },
      {
        userAgent: 'Googlebot-Image',
        allow: '/',
        disallow: '/private/',
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: '/private/',
      },
    ],
    sitemap: [
      'https://fizoval.com/sitemap.xml'
    ],
    
  }
}
