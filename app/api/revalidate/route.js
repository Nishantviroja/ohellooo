import { revalidatePath, revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';

// ✅ On-demand revalidation API
// This allows you to manually trigger revalidation when you add a new blog post
// 
// Usage:
// POST https://yoursite.com/api/revalidate
// Headers: { "Authorization": "Bearer YOUR_SECRET_TOKEN" }
// Body: { "path": "/blog" } or { "path": "/blog/[slug]", "slug": "post-slug" }

export async function POST(request) {
  try {
    // ✅ SECURITY: Verify secret token
    const authHeader = request.headers.get('authorization');
    const token = authHeader?.replace('Bearer ', '');
    
    // Set your secret token in environment variable: REVALIDATE_SECRET
    const secret = process.env.REVALIDATE_SECRET || 'your-secret-token-change-this';
    
    if (token !== secret) {
      return NextResponse.json(
        { message: 'Invalid token' },
        { status: 401 }
      );
    }

    // Parse request body
    const body = await request.json();
    const { path, slug } = body;

    // Revalidate specific path or all blog paths
    if (path) {
      revalidatePath(path);
      console.log(`✅ Revalidated path: ${path}`);
    } else if (slug) {
      revalidatePath(`/blog/${slug}`);
      console.log(`✅ Revalidated blog post: ${slug}`);
    } else {
      // Default: revalidate blog listing and all blog posts
      revalidatePath('/blog');
      revalidatePath('/blog/[slug]', 'page');
      console.log('✅ Revalidated all blog pages');
    }

    return NextResponse.json({
      revalidated: true,
      now: Date.now(),
      message: 'Revalidation successful'
    });
  } catch (err) {
    console.error('❌ Error revalidating:', err);
    return NextResponse.json(
      { message: 'Error revalidating', error: err.message },
      { status: 500 }
    );
  }
}

// Handle GET requests with instructions
export async function GET() {
  return NextResponse.json({
    message: 'On-demand revalidation API',
    usage: {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer YOUR_SECRET_TOKEN',
        'Content-Type': 'application/json'
      },
      body: {
        option1: { path: '/blog' },
        option2: { slug: 'your-post-slug' },
        option3: {} // Revalidates all blog pages
      }
    },
    examples: [
      'curl -X POST https://yoursite.com/api/revalidate -H "Authorization: Bearer YOUR_TOKEN" -H "Content-Type: application/json" -d \'{"path":"/blog"}\'',
      'curl -X POST https://yoursite.com/api/revalidate -H "Authorization: Bearer YOUR_TOKEN" -H "Content-Type: application/json" -d \'{"slug":"new-post-slug"}\'',
    ]
  });
}

