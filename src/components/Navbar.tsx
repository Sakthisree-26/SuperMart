import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, User, Search, Menu, X } from 'lucide-react';
import { RootState } from '../store';
import { setSearchQuery, setSearchResults } from '../store/searchSlice';
import { products } from '../data/products';
import SearchResults from './SearchResults';

const Navbar = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state: RootState) => state.cart);
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const handleSearch = (query: string) => {
    dispatch(setSearchQuery(query));
    if (query.trim()) {
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
      );
      dispatch(setSearchResults(filtered));
    } else {
      dispatch(setSearchResults([]));
    }
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest('.search-container')) {
        setIsSearchFocused(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <nav className="bg-emerald-600 text-white fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="text-2xl font-bold"
              >
                SuperMart
              </motion.div>
            </Link>
          </div>

          <div className="flex-1 max-w-xl mx-8 relative search-container">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                onChange={(e) => handleSearch(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                className="w-full px-4 py-2 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-300 transition-all"
              />
              <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
            </div>
            {isSearchFocused && <SearchResults />}
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link 
              to="/categories" 
              className="hover:text-emerald-200 transition-colors font-medium"
            >
              Categories
            </Link>
            <Link to="/cart" className="relative">
              <motion.div whileHover={{ scale: 1.1 }}>
                <ShoppingCart className="hover:text-emerald-200 transition-colors" />
                <AnimatePresence>
                  {items.length > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                    >
                      {items.length}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </Link>
            <Link to={isAuthenticated ? "/account" : "/login"}>
              <motion.div whileHover={{ scale: 1.1 }}>
                <User className="hover:text-emerald-200 transition-colors" />
              </motion.div>
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-emerald-700"
          >
            <div className="px-4 py-2 space-y-2">
              <Link
                to="/categories"
                className="block py-2 text-emerald-100 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Categories
              </Link>
              <Link
                to="/cart"
                className="block py-2 text-emerald-100 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Cart ({items.length})
              </Link>
              <Link
                to={isAuthenticated ? "/account" : "/login"}
                className="block py-2 text-emerald-100 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                {isAuthenticated ? "Account" : "Login"}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;