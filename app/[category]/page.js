import { aiTools } from '../data/aiTools';
import CategoryToolsPage from './category-tools';
import { notFound } from 'next/navigation';
import CategorySchema from '../schema/CategorySchema';

// Helper to get original category slug from SEO-friendly slug
function getCategoryFromSlug(slug) {
  return slug.replace(/-ai-tools$/, '');
}

// ✅ FIXED: Added generateStaticParams for SSG with ISR
export async function generateStaticParams() {
  // Extract unique categories from aiTools
  const categorySet = new Set();
  
  aiTools.forEach(tool => {
    if (tool.category) {
      const categorySlug = tool.category
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-') + '-ai-tools';
      categorySet.add(categorySlug);
    }
  });
  
  return Array.from(categorySet).map(slug => ({
    category: slug,
  }));
}

// ✅ Enable ISR - pages regenerate daily
export const revalidate = 86400;

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
  
  // Get category name and tool count for schema
  let originalCategoryName = '';
  let toolCount = 0;
  
  if (Array.isArray(aiTools)) {
    const categoryTools = aiTools.filter(tool => {
      const toolCategorySlug = (tool.category || '').toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-');
      if (toolCategorySlug === categorySlug) {
        if (!originalCategoryName) {
          originalCategoryName = tool.category;
        }
        toolCount++;
        return true;
      }
      return false;
    });
    
    if (toolCount === 0) {
      notFound();
    }
  } else {
    notFound();
  }
  
  const description = `Discover the best ${originalCategoryName} AI tools in 2025. Browse our curated collection of ${toolCount} ${originalCategoryName.toLowerCase()} tools with reviews, features, and direct links.`;
  
  return (
    <>
      <CategorySchema 
        categoryName={originalCategoryName}
        toolCount={toolCount}
        description={description}
        url={`https://fizoval.com/${category}`}
      />
      <CategoryToolsPage categorySlug={categorySlug} />
    </>
  );
} 