import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Truck, IndianRupee, Lock, Headphones, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const featuredProducts = products.slice(0, 6);

const promotions = [
  { id: 1, text: 'Get ₹200 Off on First Order' },
  { id: 2, text: 'Up to 50% Off on Essentials' },
  { id: 3, text: 'Free Delivery on Orders Above ₹499' },
  { id: 4, text: 'Buy 1 Get 1 Free on Selected Groceries' },
];

const testimonials = [
  {
    id: 1,
    name: 'Ramesh S.',
    location: 'Porur',
    rating: 5,
    text: 'Best grocery shopping experience ever! Super fast delivery, fresh produce, and amazing deals! I saved ₹500 on my first order. Definitely my go-to supermarket now!'
  },
  {
    id: 2,
    name: 'Priya M.',
    location: 'Annanagar',
    rating: 5,
    text: 'Superb quality and pricing! I\'ve switched to online grocery shopping entirely because of this site. The discounts are unbeatable, and delivery is always on time.'
  },
  {
    id: 3,
    name: 'Ankita D.',
    location: 'T.Nagar',
    rating: 5,
    text: 'So convenient! I ordered at 10 AM, and my groceries arrived by lunchtime. No more long supermarket queues for me!'
  },
  {
    id: 4,
    name: 'Rahul T.',
    location: 'Poonamalle',
    rating: 5,
    text: 'Secure payments & fast refunds! I mistakenly ordered the wrong item, but the return process was seamless. The refund was credited in 2 days. Love their customer service!'
  },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Parallax */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 6 }}
          className="absolute inset-0 z-0"
        >
          <img
            src="https://images.unsplash.com/photo-1534723452862-4c874018d66d"
            alt="Supermarket Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        </motion.div>
        
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Welcome to SuperMart
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl mb-8"
          >
            Your one-stop shop for quality groceries
          </motion.p>
          <Link to="/categories">
            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ delay: 0.6 }}
              className="bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-emerald-700 transition-colors"
            >
              Shop Now
            </motion.button>
          </Link>
        </div>
      </motion.div>

      {/* Promotions Slider */}
      <div className="bg-emerald-600 py-4 overflow-hidden">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear"
          }}
          className="flex whitespace-nowrap"
        >
          {[...promotions, ...promotions].map((promo, index) => (
            <div
              key={`${promo.id}-${index}`}
              className="inline-block mx-8 text-white font-semibold"
            >
              {promo.text}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Why Customers Love Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Customers Love Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              whileHover={{ y: -10 }}
              className="text-center p-6"
            >
              <Truck size={40} className="mx-auto mb-4 text-emerald-600" />
              <h3 className="font-semibold mb-2">Super Fast Delivery</h3>
              <p className="text-gray-600">90% of orders delivered within 24 hours!</p>
            </motion.div>
            <motion.div
              whileHover={{ y: -10 }}
              className="text-center p-6"
            >
              <IndianRupee size={40} className="mx-auto mb-4 text-emerald-600" />
              <h3 className="font-semibold mb-2">Best Prices Guaranteed</h3>
              <p className="text-gray-600">Save more on every purchase.</p>
            </motion.div>
            <motion.div
              whileHover={{ y: -10 }}
              className="text-center p-6"
            >
              <Lock size={40} className="mx-auto mb-4 text-emerald-600" />
              <h3 className="font-semibold mb-2">Secure Payments</h3>
              <p className="text-gray-600">Your transactions are protected with encryption.</p>
            </motion.div>
            <motion.div
              whileHover={{ y: -10 }}
              className="text-center p-6"
            >
              <Headphones size={40} className="mx-auto mb-4 text-emerald-600" />
              <h3 className="font-semibold mb-2">24/7 Customer Support</h3>
              <p className="text-gray-600">We're always here to help!</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Customer Testimonials</h2>
          <div className="relative">
            <motion.div
              animate={{ x: [0, -2000] }}
              transition={{
                repeat: Infinity,
                duration: 30,
                ease: "linear"
              }}
              className="flex space-x-8"
            >
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <motion.div
                  key={`${testimonial.id}-${index}`}
                  whileHover={{ scale: 1.05 }}
                  className="flex-shrink-0 w-96 bg-white p-6 rounded-lg shadow-lg"
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className="text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">{testimonial.text}</p>
                  <div className="font-semibold">
                    {testimonial.name}
                    <span className="text-gray-500 ml-2">• {testimonial.location}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Trusted Payment Partners</h2>
          <div className="flex justify-center items-center space-x-8 mb-8">
            <motion.img
              whileHover={{ scale: 1.1 }}
              src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
              alt="Visa"
              className="h-12"
            />
            <motion.img
              whileHover={{ scale: 1.1 }}
              src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
              alt="Mastercard"
              className="h-12"
            />
            <motion.img
              whileHover={{ scale: 1.1 }}
              src="https://razorpay.com/assets/razorpay-glyph.svg"
              alt="Razorpay"
              className="h-12"
            />
            <motion.img
              whileHover={{ scale: 1.1 }}
              src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
              alt="PayPal"
              className="h-12"
            />
          </div>
          <div className="flex justify-center items-center space-x-4">
            <span className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full">
              ✅ 100% Buyer Protection
            </span>
            <span className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full">
              🔒 Safe & Secure Payments
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/about" className="hover:text-emerald-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">FAQs</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Terms & Conditions</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Info</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Phone size={20} className="mr-2" />
                  <span>1800-123-4567</span>
                </li>
                <li className="flex items-center">
                  <Mail size={20} className="mr-2" />
                  <span>support@supermart.com</span>
                </li>
                <li className="flex items-center">
                  <MapPin size={20} className="mr-2" />
                  <span>123 Main Street, City</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.2, color: '#1DA1F2' }}
                  className="hover:text-emerald-400 transition-colors"
                >
                  <Twitter size={24} />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.2, color: '#4267B2' }}
                  className="hover:text-emerald-400 transition-colors"
                >
                  <Facebook size={24} />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.2, color: '#E1306C' }}
                  className="hover:text-emerald-400 transition-colors"
                >
                  <Instagram size={24} />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.2, color: '#0077B5' }}
                  className="hover:text-emerald-400 transition-colors"
                >
                  <Linkedin size={24} />
                </motion.a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Newsletter</h3>
              <p className="mb-4">Subscribe to get special offers and updates</p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-l-lg text-gray-900"
                />
                <button
                  type="submit"
                  className="bg-emerald-600 px-4 py-2 rounded-r-lg hover:bg-emerald-700 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <p>&copy; 2025 SuperMart. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;