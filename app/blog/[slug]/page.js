import blogPosts from '../../data/blogPosts';
import BlogPost from './blogPost';

// Generate metadata for each blog post
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

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
  return <BlogPost slug={slug} />;
} 