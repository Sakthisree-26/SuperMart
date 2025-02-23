import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { categories } from '../data/categories';

const Categories = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Shop by Category</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link key={category.id} to={`/category/${category.id}`}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-800">{category.name}</h2>
                  <p className="text-gray-600 mt-2">{category.description}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;