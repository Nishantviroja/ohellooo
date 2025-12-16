const nextConfig = {
  // ✅ REMOVED 'output: export' to enable SSR/ISR/SSG
  // This allows dynamic page generation and proper SEO
  trailingSlash: true,
  
  images: { 
    domains: ['i.pravatar.cc'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.gamezop.com',
      },
      {
        protocol: 'https',
        hostname: '**.play.gamezop.com',
      },
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  
  // Ensure robots.txt and sitemap are accessible
  async headers() {
    return [
      {
        source: '/robots.txt',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/plain; charset=utf-8',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
        ],
      },
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/xml; charset=utf-8',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
        ],
      },
    ];
  },
  
  // Enable experimental features for better performance
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
