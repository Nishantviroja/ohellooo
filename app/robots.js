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
         
        ],
      },
        ],
    sitemap: 'https://fizoval.com/sitemap.xml',
    host: 'https://fizoval.com',
  }
}