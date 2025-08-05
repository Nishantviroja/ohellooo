import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Handle redirects from old category URLs to new SEO-friendly URLs
  if (pathname.startsWith('/ai-tools/')) {
    const category = pathname.replace('/ai-tools/', '');
    
    // Skip if it's already a new SEO-friendly URL (ends with -ai-tools)
    if (category.endsWith('-ai-tools')) {
      return NextResponse.next();
    }
    
    // Skip if it's the main ai-tools page
    if (category === '') {
      return NextResponse.next();
    }
    
    // Skip if it's a valid new URL pattern
    if (category === 'all-ai-tools') {
      return NextResponse.next();
    }
    
    // Redirect old category URLs to new SEO-friendly URLs
    const newUrl = request.nextUrl.clone();
    newUrl.pathname = `/ai-tools/${category}-ai-tools`;
    
    return NextResponse.redirect(newUrl, 301); // Permanent redirect for SEO
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/ai-tools/:path*',
  ],
}; 