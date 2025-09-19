import siteMetadata from '../data/metadata';
import Blog from './blog';

export function generateMetadata() {
  const base = siteMetadata.blog || {};
  return {
    ...base,
    robots: { index: true, follow: true, maxImagePreview: 'large' },
    alternates: {
      ...(base.alternates || {}),
      canonical: 'https://fizoval.com/blog',
      types: {
        'application/rss+xml': 'https://fizoval.com/blog/rss.xml',
      },
    },
    openGraph: {
      ...(base.openGraph || {}),
      type: 'article',
    },
  };
}

export default function BlogPage() {
  return <Blog />;
}
