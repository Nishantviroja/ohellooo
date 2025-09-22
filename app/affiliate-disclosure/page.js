import siteMetadata from '../data/metadata';
import AffiliateDisclosure from './affiliate-disclosure';

export const metadata = {
  ...(siteMetadata.affiliate || {}),
  robots: { index: true, follow: true, maxImagePreview: 'large' },
  alternates: {
    ...((siteMetadata.affiliate && siteMetadata.affiliate.alternates) || {}),
    canonical: 'https://fizoval.com/affiliate-disclosure',
  },
};

export default function AffiliateDisclosurePage() {
  return <AffiliateDisclosure />;
}
