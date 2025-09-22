import { getAuthorById, getAllAuthors } from '../../../data/authors';
import { fetchBlogPosts } from '../../../data/blogPosts';
import { notFound } from 'next/navigation';
import AuthorBio from './authorBio';

// Render this route dynamically on each request to ensure fresh blog counts
export const dynamic = 'force-dynamic';

// Generate metadata for each author page
export async function generateMetadata({ params }) {
  const { id } = await params;
  const author = getAuthorById(id);
  
  if (!author) {
    return {
      title: 'Author Not Found | Fizoval',
      description: 'The requested author could not be found.',
    };
  }

  return {
    title: `${author.name} - Author Bio | Fizoval`,
    description: author.about,
    keywords: `${author.name}, AI expert, ${author.expertise.join(', ')}`,
    authors: [{ name: author.name, url: author.linkedin }],
    openGraph: {
      title: `${author.name} - Author | Fizoval`,
      description: author.about,
      url: `https://fizoval.com/blog/author/${author.id}`,
      siteName: 'Fizoval',
      images: [
        {
          url: author.avatar,
          width: 400,
          height: 400,
          alt: `${author.name} - Author`,
        },
      ],
      locale: 'en_US',
      type: 'profile',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${author.name} - Author Bio | Fizoval`,
      description: author.about,
      images: [author.avatar],
      creator: `@${author.name.replace(/\s+/g, '').toLowerCase()}`,
    },
    robots: { index: true, follow: true, 'max-image-preview': 'large' },
    alternates: {
      canonical: `https://fizoval.com/blog/author/${author.id}`,
    },
  };
}

export default async function AuthorPage({ params }) {
  const { id } = await params;
  const author = getAuthorById(id);
  
  if (!author) {
    notFound();
  }

  // Get author's blog posts
  let authorPosts = [];
  try {
    const allPosts = await fetchBlogPosts();
    authorPosts = allPosts.filter(post => 
      post.author && post.author.toLowerCase() === author.name.toLowerCase()
    );
  } catch (error) {
    console.error('Error fetching author posts:', error);
  }

  return <AuthorBio author={author} posts={authorPosts} />;
}
