import { fetchBlogPosts } from '../../data/blogPosts';
import BlogPost from './blogPost';
import { notFound } from 'next/navigation';
import { getAuthorByName } from '../../data/authors';

// Generate metadata for each blog post
export async function generateMetadata({ params }) {
  const { slug } = await params;
  let post = null;
  try {
    const posts = await fetchBlogPosts();
    post = posts.find((p) => p.slug === slug) || null;
  } catch {
    post = null;
  }

  if (!post) {
    return {
      title: 'Blog Post Not Found | Fizoval',
      description: 'The requested blog post could not be found.',
      robots: { index: true, follow: true, maxImagePreview: 'large' },
      openGraph: { type: 'article' },
      alternates: {
        canonical: `https://fizoval.com/blog/${slug}`,
        types: {
          'application/rss+xml': 'https://fizoval.com/blog/rss.xml',
        },
      },
    };
  }

  const authorData = getAuthorByName(post.author);
  
  return {
    title:  `${post.metadata?.title} - Fizoval` || `${post.title} - Fizoval`,
    description: post.metadata?.desc || post.excerpt,
    keywords: post.metadata?.keyword || '',
    authors: [{ name: authorData.name, url: `https://fizoval.com/blog/author/${authorData.id}`}],
    openGraph: {
      title: post.metadata?.title || post.title,
      description: post.metadata?.desc || post.excerpt,
      url: `https://fizoval.com/blog/${post.slug}`,
      siteName: 'Fizoval',
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt:post.title, 
        },
      ],
      locale: 'en_US',
      type: 'article',
      authors: [authorData.name],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metadata?.title || post.title,
      description: post.metadata?.desc || post.excerpt,
      images: [post.image],
      creator: `@${authorData.name.replace(/\s+/g, '').toLowerCase()}`,
    },
    robots: { index: true, follow: true, 'max-image-preview': 'large' },
    alternates: {
      canonical: `https://fizoval.com/blog/${post.slug}`,
      types: {
        'application/rss+xml': 'https://fizoval.com/blog/rss.xml',
      },
    },
  };
}

// ✅ FIXED: Added generateStaticParams for SSG with ISR
export async function generateStaticParams() {
  try {
    const posts = await fetchBlogPosts();
    return posts.map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error('Error generating static params for blog posts:', error);
    return [];
  }
}

// ✅ Enable ISR - pages regenerate every minute
export const revalidate = 60;

export default async function BlogPostPage({ params }) {
  const { slug } = await params;

  // ✅ FIXED: Fetch post data server-side and pass to client component
  let post = null;
  let relatedPosts = [];
  
  try {
    const posts = await fetchBlogPosts();
    post = posts.find((p) => p.slug === slug);
    
    if (!post) {
      notFound();
    }
    
    // Get related posts (excluding current post)
    relatedPosts = posts
      .filter(p => p.id !== post.id)
      .slice(0, 2);
      
  } catch (error) {
    console.error('Error fetching blog post:', error);
    notFound();
  }

  // Pass data as props to client component
  return <BlogPost post={post} relatedPosts={relatedPosts} />;
}