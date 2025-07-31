export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/blog/',
          '/ai-tools/',
          '/about',
         
        ],
        disallow: [
          '/private/',
          '/data/',
          '/api/',
          
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: [
          '/',
          '/blog/',
          '/ai-tools/',
          '/about',
          
        ],
        disallow: [
          '/private/',
          '/data/',
          '/api/',
          
        ],
      },
      {
        userAgent: 'Googlebot-Image',
        allow: [
          '/',
          '/blog/',
          '/ai-tools/',
          '/public/',
          '/Fizoval.png',
          '/FeaturingIMG.png',
        ],
        disallow: [
          '/private/',
          '/data/',
          '/api/',
          
        ],
      },
      {
        userAgent: 'Bingbot',
        allow: [
          '/',
          '/blog/',
          '/ai-tools/',
          '/about',
         
        ],
        disallow: [
          '/private/',
          '/data/',
          '/api/',
         
        ],
      },
    ],
    sitemap: [
      'https://fizoval.com/sitemap.xml',
      'https://fizoval.com/image-sitemap.xml',
    ],
    host: 'https://fizoval.com',
  }
}