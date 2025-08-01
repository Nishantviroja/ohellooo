import siteMetadata from '../data/metadata';
import Blog from './blog';

export const metadata = siteMetadata.blog;

export default function BlogPage() {
  return <Blog />;
}
