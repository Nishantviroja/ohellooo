import { aiTools } from '../data/aiTools';
import CategoryToolsPage from './category-tools';
import { notFound } from 'next/navigation';

// Helper to get original category slug from SEO-friendly slug
function getCategoryFromSlug(slug) {
  return slug.replace(/-ai-tools$/, '');
}

// Generate metadata for each category
export async function generateMetadata({ params }) {
  const { category } = await params;
  const categorySlug = getCategoryFromSlug(category);

  // Find the original category name from the slug
  let originalCategoryName = '';
  let categoryTools = [];

  if (aiTools && Array.isArray(aiTools)) {
    categoryTools = aiTools.filter(tool => {
      const toolCategorySlug = (tool.category || '').toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-');
      if (toolCategorySlug === categorySlug) {
        if (!originalCategoryName) {
          originalCategoryName = tool.category;
        }
        return true;
      }
      return false;
    });
  }

  const title = `${originalCategoryName} AI Tools - ${categoryTools.length} Best ${originalCategoryName} Tools for 2025`;
  const description = `Discover the best ${originalCategoryName} AI tools in 2025. Browse our curated collection of ${categoryTools.length} ${originalCategoryName.toLowerCase()} tools with reviews, features, and direct links.`;
  const keywords = `${originalCategoryName.toLowerCase()}, ai tools, artificial intelligence, ${originalCategoryName.toLowerCase()} software, best ${originalCategoryName.toLowerCase()} tools`;

  return {
    title,
    description,
    keywords,
    robots: { index: true, follow: true, maxImagePreview: 'large' },
    openGraph: {
      title,
      description,
      type: 'website',
      url: `https://fizoval.com/${category}`,
      siteName: 'Fizoval',
      images: [
        {
          url: 'https://fizoval.com/FeaturingIMG.png',
          width: 1200,
          height: 630,
        },
      ],
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://fizoval.com/FeaturingIMG.png'],
    },
    alternates: {
      canonical: `https://fizoval.com/${category}`,
    },
  };
}

export default async function CategoryPage({ params }) {
  const { category } = await params;
  const categorySlug = getCategoryFromSlug(category);
  // Ensure 404 status when category does not exist or has no tools
  const hasTools = Array.isArray(aiTools) && aiTools.some(tool => {
    const toolCategorySlug = (tool.category || '').toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-');
    return toolCategorySlug === categorySlug;
  });
  if (!hasTools) {
    notFound();
  }
  return <CategoryToolsPage categorySlug={categorySlug} />;
} 