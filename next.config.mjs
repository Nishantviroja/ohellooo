const nextConfig = {
  output: 'export',
  trailingSlash: true,
   images: { unoptimized: true },
  distDir: 'build', // moves `.next` to `out`
};

module.exports = nextConfig;
