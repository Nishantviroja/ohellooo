// ✅ FIXED: Improved blog post fetching with proper cache control
// 
// When called SERVER-SIDE (in Server Components):
// - Uses ISR with 1-hour revalidation
// - Caches at build time with force-cache
// 
// When called CLIENT-SIDE (in useEffect/event handlers):
// - Uses no-store to always fetch fresh data
// - Bypasses browser cache

async function fetchBlogPosts(options = {}) {
  const { clientSide = false } = options;
  
  try {
    // Detect if running on client vs server
    const isClientSide = clientSide || typeof window !== 'undefined';
    
    // Different cache strategies for client vs server
    const fetchOptions = isClientSide
      ? {
          // ✅ CLIENT-SIDE: Always fetch fresh data, no caching
          cache: 'no-store',
          // Add timestamp to prevent any caching layers
          headers: {
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Pragma': 'no-cache',
            'Expires': '0'
          }
        }
      : {
          // ✅ SERVER-SIDE: Use ISR with 1-minute revalidation
          next: { revalidate: 60 }, // Revalidate every minute
          cache: 'force-cache' // Cache during build
        };
    
    // Add cache-busting query param for client-side requests
    const url = isClientSide
      ? `https://raw.githubusercontent.com/Nishantviroja/blogdata/main/blogPosts.json?t=${Date.now()}`
      : 'https://raw.githubusercontent.com/Nishantviroja/blogdata/main/blogPosts.json';
    
    const response = await fetch(url, fetchOptions);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch blog posts: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    
    // Validate data structure
    if (!Array.isArray(data)) {
      console.error('Blog posts data is not an array:', data);
      return [];
    }
    
    return data;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    // Return empty array if fetch fails - no fallback data
    return [];
  }
}

// Export the function for dynamic fetching
export { fetchBlogPosts };

// For backward compatibility, export empty array as default
const blogPosts = [];
export default blogPosts;
