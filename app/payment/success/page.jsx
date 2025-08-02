'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { FiCheckCircle, FiDownload } from 'react-icons/fi';

export default function PaymentSuccess() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to dashboard after 5 seconds
    const timer = setTimeout(() => {
      router.push('/dashboard');
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      
      <div className="py-12 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-700">
            {/* Success Icon */}
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <FiCheckCircle className="text-white text-4xl" />
            </div>

            {/* Success Message */}
            <h2 className="text-3xl font-bold text-white mb-4">Payment Successful!</h2>
            <p className="text-gray-300 mb-8">
              Congratulations! Your registration for RSPL has been completed successfully.
            </p>

            {/* Golden Ticket Preview */}
            <div className="golden-ticket rounded-xl p-6 mb-8 text-black">
              <h3 className="text-2xl font-bold mb-4">🎫 Golden Ticket</h3>
              <p className="text-lg">Your Golden Ticket is ready!</p>
              <p className="text-sm opacity-80">Access your dashboard to view your complete ticket</p>
            </div>

            {/* Next Steps */}
            <div className="bg-gray-700 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">What's Next?</h3>
              <ul className="text-left text-gray-300 space-y-2">
                <li>• Access your Golden Ticket in the dashboard</li>
                <li>• Receive trial dates and venue information via email</li>
                <li>• Join the RSPL community and team assignments</li>
                <li>• Download your registration certificate</li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <Link href="/dashboard" className="w-full btn-primary py-3 text-lg font-semibold inline-block">
                View Dashboard
              </Link>
              
              <button className="w-full bg-gray-600 hover:bg-gray-500 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2">
                <FiDownload />
                <span>Download Certificate</span>
              </button>
            </div>

            {/* Auto Redirect Message */}
            <p className="text-sm text-gray-400 mt-6">
              You will be automatically redirected to your dashboard in a few seconds...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}