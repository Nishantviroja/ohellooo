import siteMetadata from '../data/metadata';
import PrivacyPolicy from './privacy-policy';

export const metadata = {
  ...(siteMetadata.privacy || {}),
  robots: { index: true, follow: true, maxImagePreview: 'large' },
  alternates: {
    ...((siteMetadata.privacy && siteMetadata.privacy.alternates) || {}),
    canonical: 'https://fizoval.com/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicy />;
}
