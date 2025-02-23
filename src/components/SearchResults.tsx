import React from 'react';
import { useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { RootState } from '../store';

const SearchResults = () => {
  const { results, query } = useSelector((state: RootState) => state.search);

  if (!query) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className="absolute top-full left-0 right-0 bg-white rounded-b-lg shadow-lg mt-1 z-50 max-h-96 overflow-y-auto"
      >
        {results.length === 0 ? (
          <div className="p-4 text-gray-500">No products found</div>
        ) : (
          <div className="divide-y">
            {results.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="block p-4 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h3 className="text-gray-800 font-medium">{product.name}</h3>
                    <p className="text-gray-500 text-sm">{product.category}</p>
                    <p className="text-emerald-600 font-semibold">₹{product.price}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default SearchResults