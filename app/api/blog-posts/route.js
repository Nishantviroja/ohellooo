import { NextResponse } from 'next/server';

// ✅ Proxy API route to fetch blog posts (avoids CORS issues on client-side)
export const revalidate = 60; // Cache for 1 minute

export async function GET() {
  try {
    const response = await fetch(
      'https://raw.githubusercontent.com/Nishantviroja/blogdata/main/blogPosts.json',
      {
        next: { revalidate: 60 },
        cache: 'force-cache',
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub fetch failed: ${response.status}`);
    }

    const data = await response.json();

    // Validate data structure
    if (!Array.isArray(data)) {
      throw new Error('Blog posts data is not an array');
    }

    return NextResponse.json(data, {
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120',
      },
    });
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    
    // Return empty array on error
    return NextResponse.json([], {
      status: 200, // Return 200 to avoid breaking the UI
      headers: {
        'Cache-Control': 'no-cache',
      },
    });
  }
}

