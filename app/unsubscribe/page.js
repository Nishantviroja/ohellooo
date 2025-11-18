// ✅ FIXED: Added metadata wrapper for unsubscribe page
import UnsubscribeForm from './unsubscribe-form';

export const metadata = {
  title: 'Unsubscribe from Newsletter | Fizoval',
  description: 'Unsubscribe from Fizoval newsletter. Manage your email preferences and stop receiving updates.',
  robots: {
    index: false,  // Don't index this utility page
    follow: false,
  },
};

export default function UnsubscribePage() {
  return <UnsubscribeForm />;
}
