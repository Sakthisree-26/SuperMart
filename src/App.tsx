import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Categories from './pages/Categories';
import CategoryProducts from './pages/CategoryProducts';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';
import Profile from './pages/Profile';
import About from './pages/About';
import OrderTracking from './pages/OrderTracking';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/category/:id" element={<CategoryProducts />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<About />} />
            <Route path="/order-tracking" element={<OrderTracking />} />
            <Route path="/checkout" element={<Checkout />} />
            
       
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

