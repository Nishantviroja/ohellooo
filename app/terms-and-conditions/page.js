import siteMetadata from '../data/metadata';
import TermsAndConditions from './terms-and-conditions';

export const metadata = siteMetadata.terms;

export default function TermsPage() {
  return <TermsAndConditions />;
}
