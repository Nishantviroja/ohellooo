import siteMetadata from '../data/metadata';
import Categories from './categories';

export const metadata = siteMetadata.categories;

export default function TermsPage() {
  return <Categories />;
}
