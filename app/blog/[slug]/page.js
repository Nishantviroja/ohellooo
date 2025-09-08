import { fetchBlogPosts } from '../../data/blogPosts';
import BlogPost from './blogPost';
import { notFound } from 'next/navigation';

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
    };
  }

  return {
    title: post.metadata?.title || `${post.title} | Fizoval`,
    description: post.metadata?.desc || post.excerpt,
    keywords: post.metadata?.keyword || '',
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
        },
      ],
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metadata?.title || post.title,
      description: post.metadata?.desc || post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;

  // Ensure 404 status by resolving post server-side
  try {
    const posts = await fetchBlogPosts();
    const post = posts.find((p) => p.slug === slug);
    if (!post) {
      notFound();
    }
  } catch {
    notFound();
  }

  return <BlogPost slug={slug} />;
}