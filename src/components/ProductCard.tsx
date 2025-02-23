import React from 'react';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { Product } from '../types';
import { addToCart } from '../store/cartSlice';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
          <p className="text-gray-600 text-sm mt-1">{product.description}</p>
        </div>
      </Link>
      <div className="p-4 flex items-center justify-between">
        <span className="text-xl font-bold text-emerald-600">
          ₹{product.price.toFixed(2)}
        </span>
        <button
          onClick={() => dispatch(addToCart(product))}
          className="bg-emerald-600 text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-emerald-700 transition-colors"
        >
          <ShoppingCart size={18} />
          <span>Add</span>
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
