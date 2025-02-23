import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { categories } from '../data/categories';
import { productsByCategory } from '../data/products';
import ProductCard from '../components/ProductCard';

const CategoryProducts = () => {
  const { id } = useParams();
  const category = categories.find(c => c.id === id);
  const products = productsByCategory[id || ''] || [];

  if (!category) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1>Category not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center mb-8">
          <Link to="/categories" className="flex items-center text-gray-600 hover:text-gray-800">
            <ArrowLeft size={20} className="mr-2" />
            Back to Categories
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-800">{category.name}</h1>
          <p className="text-gray-600 mt-2">{category.description}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryProducts;