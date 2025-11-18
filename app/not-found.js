// app/not-found.js

import Link from 'next/link';

// ✅ ADDED: Metadata for 404 page
export const metadata = {
  title: '404 - Page Not Found | Fizoval',
  description: 'The page you are looking for does not exist. Return to Fizoval homepage to explore AI tools.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 text-gray-800">
      
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Oops!! - Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-6 max-w-md text-center">
        Looks like the page you’re trying to reach doesn’t exist or has been moved.
       
      </p>
      <Link href="/">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-md shadow-md transition">
          Back to Home
        </button>
      </Link>
    </div>
  );
}
