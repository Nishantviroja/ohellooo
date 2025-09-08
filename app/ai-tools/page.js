import siteMetadata from '../data/metadata';
import CategoryToolsPage from '../[category]/category-tools';

export const metadata = siteMetadata.aiTools;

export default function AIToolsPage() {
  return <CategoryToolsPage categorySlug={'all'} />;
}
