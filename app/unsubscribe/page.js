'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function UnsubscribePage() {
  const [email, setEmail] = useState('');
  const [reasons, setReasons] = useState([]);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleReasonChange = (reason) => {
    setReasons((prev) => {
      let updated;
      if (prev.includes(reason)) {
        updated = prev.filter((r) => r !== reason);
      } else {
        updated = [...prev, reason];
      }

      // Remove error immediately if at least one checkbox is selected
      if (updated.length > 0) {
        setError('');
      }

      return updated;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (reasons.length === 0) {
      setError('Please select at least one reason before unsubscribing.');
      return;
    }

    // Redirect to home page
    router.push('/');
  };

  const reasonOptions = [
    'Emails are too frequent',
    'Content is not relevant to me',
    'Privacy concerns',
    'I switched to a different email address',
    'Other reason',
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-md p-8">
        <h1 className="text-3xl font-bold font-bricolage text-gray-800 mb-4 text-center">
          Unsubscribe from Newsletter
        </h1>

        <p className="text-gray-600 font-sen text-center mb-8">
          We’re sorry to see you go. Please confirm you want to unsubscribe from our mailing list.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Email Input */}
          <div>
            <label className="block font-bold text-base font-sen text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 border border-blue-100 rounded-lg bg-blue-50 text-blue-600 font-sen outline-[#0066FF]"
            />
          </div>

          {/* Checkbox Group */}
          <div>
            <label className="block font-bold text-base font-sen text-gray-700 mb-3">
              Why are you unsubscribing? (Select at least one)
            </label>
            <div className="flex flex-col gap-2">
              {reasonOptions.map((reason) => (
                <label key={reason} className="flex items-center text-gray-600 font-sen">
                  <input
                    type="checkbox"
                    checked={reasons.includes(reason)}
                    onChange={() => handleReasonChange(reason)}
                    className="mr-2 accent-blue-600"
                  />
                  {reason}
                </label>
              ))}
            </div>

            {/* Error Message */}
            {error && (
              <p className="text-red-600 font-sen font-medium text-sm mt-2">
                {error}
              </p>
            )}
          </div>
           {/* What Happens Next Section */}
        <div className="mt-1 mb-3 text-gray-600 font-sen text-sm space-y-2 ">
          <h2 className="font-bold text-base text-gray-800 mb-3">What Happens Next</h2>
          <p>✓ You’ll be removed from our mailing list within 24–48 hours</p>
          <p>✓ You may still receive transactional emails</p>
          <p>✓ You can resubscribe anytime from our website</p>
        </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-600 text-white hover:bg-blue-700 font-medium font-sen py-3 px-8 rounded-lg transition-colors"
          >
            Unsubscribe
          </button>
        </form>



        {/* Back to Home */}
        <div className="text-center mt-4">
          <Link href="/" className="text-blue-600 hover:underline font-sen text-sm">
            Changed your mind? Go to home →
          </Link>
        </div>
      </div>
    </div>
  );
}
 