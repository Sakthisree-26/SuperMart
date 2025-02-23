import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { ShoppingCart, ArrowLeft, Star, Package, Truck } from 'lucide-react';
import { products } from '../data/products';
import { addToCart } from '../store/cartSlice';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1>Product not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-gray-800 mb-8"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back
        </button>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div>
                <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
                <div className="flex items-center mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={i < 4 ? "text-yellow-400 fill-current" : "text-gray-300"}
                    />
                  ))}
                  <span className="ml-2 text-gray-600">(4.0)</span>
                </div>
              </div>

              <p className="text-gray-600">{product.description}</p>

              <div className="text-3xl font-bold text-emerald-600">
                ₹{product.price.toFixed(2)}
              </div>

              <div className="space-y-4">
                <div className="flex items-center text-gray-600">
                  <Package size={20} className="mr-2" />
                  <span>In stock: {product.stock} units</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Truck size={20} className="mr-2" />
                  <span>Free delivery on orders above ₹500</span>
                </div>
              </div>

              {product.nutrition && (
                <div className="border-t pt-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Nutrition Information</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {Object.entries(product.nutrition).map(([key, value]) => (
                      <div key={key} className="text-gray-600">
                        <span className="capitalize">{key}:</span> {value}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <button
                onClick={() => dispatch(addToCart(product))}
                className="w-full bg-emerald-600 text-white py-3 px-6 rounded-full flex items-center justify-center space-x-2 hover:bg-emerald-700 transition-colors"
              >
                <ShoppingCart size={20} />
                <span>Add to Cart</span>
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;