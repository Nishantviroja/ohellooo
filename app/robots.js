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
        allow: [
          '/',
          '/public/',
          '/Fizoval.png',
          '/FeaturingIMG.png',
        ],
        disallow: '/private/',
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: '/private/',
      },
    ],
    sitemap: [
      'https://fizoval.com/sitemap.xml',
      'https://fizoval.com/blog-sitemap.xml', // add more if needed
    ],
    host: 'fizoval.com',
  }
}
