import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { User, Package, MapPin, CreditCard, Heart, Key } from 'lucide-react';
import { RootState } from '../store';

const Profile = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const [activeTab, setActiveTab] = useState('personal');

  const tabs = [
    { id: 'personal', name: 'Personal Details', icon: User },
    { id: 'orders', name: 'Order History', icon: Package },
    { id: 'addresses', name: 'Saved Addresses', icon: MapPin },
    { id: 'payments', name: 'Payment Methods', icon: CreditCard },
    { id: 'wishlist', name: 'Wishlist', icon: Heart },
    { id: 'security', name: 'Security', icon: Key },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">My Account</h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-4">
              <div className="space-y-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                      activeTab === tab.id
                        ? 'bg-emerald-100 text-emerald-700'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <tab.icon className="mr-3 h-5 w-5" />
                    {tab.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              {activeTab === 'personal' && (
                <div>
                  <h2 className="text-xl font-semibold mb-4">Personal Details</h2>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Full Name</label>
                      <input
                        type="text"
                        defaultValue={user?.name}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Email</label>
                      <input
                        type="email"
                        defaultValue={user?.email}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                      <input
                        type="tel"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition-colors"
                    >
                      Save Changes
                    </button>
                  </form>
                </div>
              )}

              {/* Add other tab contents here */}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;