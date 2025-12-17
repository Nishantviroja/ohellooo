import siteMetadata from '../data/metadata';
import CategoryToolsPage from '../[category]/category-tools';
import AIToolsSchema from '../schema/AIToolsSchema';

export const metadata = {
  ...(siteMetadata.aiTools || {}),
  robots: { index: true, follow: true, maxImagePreview: 'large' },
  alternates: {
    ...((siteMetadata.aiTools && siteMetadata.aiTools.alternates) || {}),
    canonical: 'https://fizoval.com/ai-tools',
  },
};

export default function AIToolsPage() {
  return (
    <>
      <AIToolsSchema />
      <CategoryToolsPage categorySlug={'all'} />
    </>
  );
}
