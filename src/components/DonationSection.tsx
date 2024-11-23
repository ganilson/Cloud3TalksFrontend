import React, { useState } from 'react';
import { Heart } from 'lucide-react';

export const DonationSection = () => {
  const [amount, setAmount] = useState('');
  const predefinedAmounts = ['5', '10', '25', '50', '100'];

  const handleDonate = async () => {
    if (!amount) return;
    
    // Here you would typically integrate with Stripe or another payment processor
    console.log(`Processing donation of $${amount}`);
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Support Our Community</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your donation helps us continue providing valuable content and maintaining our platform.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
          <div className="grid grid-cols-3 gap-4 mb-6">
            {predefinedAmounts.map((preset) => (
              <button
                key={preset}
                onClick={() => setAmount(preset)}
                className={`px-4 py-2 rounded-md transition-colors ${
                  amount === preset
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                ${preset}
              </button>
            ))}
          </div>

          <div className="mb-6">
            <label htmlFor="custom-amount" className="block text-sm font-medium text-gray-700 mb-2">
              Custom Amount
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
              <input
                type="number"
                id="custom-amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="block w-full pl-8 pr-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter amount"
                min="1"
              />
            </div>
          </div>

          <button
            onClick={handleDonate}
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center"
          >
            <Heart className="h-5 w-5 mr-2" />
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
};