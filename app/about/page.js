import siteMetadata from '../data/metadata';
import About from './about';

export const metadata = {
  ...(siteMetadata.about || {}),
  robots: { index: true, follow: true, maxImagePreview: 'large' },
  alternates: {
    ...((siteMetadata.about && siteMetadata.about.alternates) || {}),
    canonical: 'https://fizoval.com/about',
  },
};

export default function AboutPage() {
  return <About />;
}
