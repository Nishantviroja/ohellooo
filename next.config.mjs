const nextConfig = {
  // ✅ REMOVED 'output: export' to enable SSR/ISR/SSG
  // This allows dynamic page generation and proper SEO
  trailingSlash: true,
  
  images: { 
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
  
  // Enable experimental features for better performance
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
