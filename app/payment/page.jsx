'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import { FiCreditCard, FiShield, FiCheckCircle } from 'react-icons/fi';

export default function Payment() {
  const [registrationData, setRegistrationData] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const data = localStorage.getItem('registrationData');
    if (data) {
      setRegistrationData(JSON.parse(data));
    } else {
      router.push('/register');
    }
  }, [router]);

  const handlePayment = async () => {
    setLoading(true);
    
    // Simulate Cashfree payment integration
    try {
      // In a real implementation, you would integrate with Cashfree SDK here
      // For demo purposes, we'll simulate a successful payment
      
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate payment processing
      
      // Verify payment on backend
      const response = await fetch('/api/payment/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          rsplId: registrationData.rsplId,
          paymentId: 'DEMO_' + Date.now(),
          status: 'SUCCESS'
        }),
      });

      if (response.ok) {
        localStorage.removeItem('registrationData');
        router.push('/payment/success');
      }
    } catch (error) {
      console.error('Payment error:', error);
    } finally {
      setLoading(false);
    }
  };

  if (!registrationData) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      
      <div className="py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-700">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiCreditCard className="text-black text-2xl" />
              </div>
              <h2 className="text-3xl font-bold text-white">Complete Your Registration</h2>
              <p className="text-gray-400 mt-2">Secure payment via Cashfree</p>
            </div>

            {/* Registration Summary */}
            <div className="bg-gray-700 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">Registration Summary</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-300">Name:</span>
                  <span className="text-white">{registrationData.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">RSPL ID:</span>
                  <span className="text-yellow-400 font-mono">{registrationData.rsplId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Email:</span>
                  <span className="text-white">{registrationData.email}</span>
                </div>
                <div className="border-t border-gray-600 pt-4 mt-4">
                  <div className="flex justify-between text-lg font-semibold">
                    <span className="text-white">Registration Fee:</span>
                    <span className="text-yellow-400">₹2,500</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Security Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="text-center">
                <FiShield className="text-green-400 text-2xl mx-auto mb-2" />
                <p className="text-sm text-gray-300">Secure Payment</p>
              </div>
              <div className="text-center">
                <FiCheckCircle className="text-green-400 text-2xl mx-auto mb-2" />
                <p className="text-sm text-gray-300">SSL Encrypted</p>
              </div>
              <div className="text-center">
                <FiCreditCard className="text-green-400 text-2xl mx-auto mb-2" />
                <p className="text-sm text-gray-300">Multiple Payment Options</p>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-white mb-4">Payment Methods</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gray-700 p-4 rounded-lg text-center">
                  <div className="text-2xl mb-2">💳</div>
                  <p className="text-sm text-gray-300">Cards</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg text-center">
                  <div className="text-2xl mb-2">🏦</div>
                  <p className="text-sm text-gray-300">Net Banking</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg text-center">
                  <div className="text-2xl mb-2">📱</div>
                  <p className="text-sm text-gray-300">UPI</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg text-center">
                  <div className="text-2xl mb-2">💰</div>
                  <p className="text-sm text-gray-300">Wallets</p>
                </div>
              </div>
            </div>

            {/* Pay Button */}
            <button
              onClick={handlePayment}
              disabled={loading}
              className="w-full btn-primary py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                  <span>Processing Payment...</span>
                </div>
              ) : (
                'Pay ₹2,500 Now'
              )}
            </button>

            {/* Terms */}
            <p className="text-xs text-gray-400 text-center mt-4">
              By proceeding, you agree to our Terms & Conditions and Privacy Policy.
              Powered by Cashfree Payments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}