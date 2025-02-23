import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CreditCard, Smartphone, Wallet } from 'lucide-react';
import { RootState } from '../store';

const paymentMethods = [
  { id: 'card', name: 'Credit/Debit Card', icon: CreditCard },
  { id: 'upi', name: 'UPI Payment', icon: Smartphone },
  { id: 'cod', name: 'Cash on Delivery', icon: Wallet },
];

const Checkout = () => {
  const { items, total } = useSelector((state: RootState) => state.cart);
  const [selectedPayment, setSelectedPayment] = useState('card');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', address: '', city: '', pincode: '' });
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Order placed with:', { formData, selectedPayment });
    navigate('/OrderTracking');
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Delivery Information */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Delivery Information</h2>
              <form className="space-y-4" onSubmit={handleSubmit}>
                {Object.keys(formData).map((key) => (
                  <input
                    key={key}
                    type="text"
                    name={key}
                    value={formData[key as keyof typeof formData]}
                    onChange={handleInputChange}
                    placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                ))}
              </form>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Payment Method</h2>
              <div className="space-y-4">
                {paymentMethods.map((method) => (
                  <div
                    key={method.id}
                    className={`flex items-center p-4 border rounded-lg cursor-pointer ${
                      selectedPayment === method.id ? 'border-emerald-500 bg-emerald-50' : 'border-gray-200'
                    }`}
                    onClick={() => setSelectedPayment(method.id)}
                  >
                    <method.icon size={24} className="text-gray-600" />
                    <span className="ml-3 font-medium">{method.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Order Summary */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="lg:sticky lg:top-24">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Order Summary</h2>
              {items.map((item, index) => (
                <div key={index} className="flex justify-between mb-2">
                  <span>{item.name}</span>
                  <span>₹{item.price}</span>
                </div>
              ))}
              <hr className="my-2" />
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>₹{total}</span>
              </div>
              <button
                onClick={handleSubmit}
                className="w-full mt-4 bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700"
              >
                Proceed to Payment
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;



