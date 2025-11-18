// ✅ FIXED: Fetch blog posts from GitHub repository with proper caching for SSG
async function fetchBlogPosts() {
  try {
    // Fetch from your GitHub repository with revalidation
    // This allows Next.js to cache the data during build and revalidate periodically
    const response = await fetch(
      'https://raw.githubusercontent.com/Nishantviroja/blogdata/main/blogPosts.json', 
      { 
        next: { revalidate: 3600 }, // Revalidate every hour with ISR
        cache: 'force-cache' // Use cache during build
      }
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch blog posts');
    }
    
    const data = await response.json();
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