// Fetch blog posts from GitHub repository
async function fetchBlogPosts() {
  try {
    // Fetch from your GitHub repository
    const response = await fetch('https://raw.githubusercontent.com/Nishantviroja/blogdata/main/blogPosts.json');
    
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