import { aiTools } from '../data/aiTools';
import CategoryToolsPage from './category-tools';

// Generate static params for all categories with '-ai-tools' suffix
export async function generateStaticParams() {
  if (!aiTools || !Array.isArray(aiTools)) {
    return [];
  }

  // Get unique categories
  const categorySet = new Set();
  aiTools.forEach(tool => {
    if (tool.category) {
      categorySet.add(tool.category);
    }
  });

  // Convert to params format with '-ai-tools' suffix
  const params = Array.from(categorySet).map(category => ({
    category: category.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-') + '-ai-tools'
  }));

  return params;
}

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
  return <CategoryToolsPage categorySlug={categorySlug} />;
} 