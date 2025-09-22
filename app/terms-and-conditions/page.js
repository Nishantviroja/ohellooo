import siteMetadata from '../data/metadata';
import TermsAndConditions from './terms-and-conditions';

export const metadata = {
  ...(siteMetadata.terms || {}),
  robots: { index: true, follow: true, maxImagePreview: 'large' },
  alternates: {
    ...((siteMetadata.terms && siteMetadata.terms.alternates) || {}),
    canonical: 'https://fizoval.com/terms-and-conditions',
  },
};

export default function TermsAndConditionsPage() {
  return <TermsAndConditions />;
}
