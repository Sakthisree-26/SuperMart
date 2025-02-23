import React, { useState } from "react";
import { motion } from "framer-motion";
import { Truck, Package, CheckCircle, HelpCircle, Phone } from "lucide-react";

const OrderTracking = () => {
  const [order, setOrder] = useState({
    orderId: "ORD123456789",
    status: "Shipped",
    estimatedDelivery: "Feb 25, 2025",
    items: [
      { id: 1, name: "Wireless Headphones", price: "₹2,999", quantity: 1 },
      { id: 2, name: "Smart Watch", price: "₹4,999", quantity: 1 },
    ],
  });

  const statusSteps = ["Pending", "Shipped", "Out for Delivery", "Delivered"];

  return (
    <div className="p-6 max-w-3xl mx-auto">
      {/* Order Details */}
      <motion.div
        className="bg-white shadow-lg rounded-xl p-6 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-xl font-bold mb-4">Order Details</h2>
        <p className="text-gray-700 mb-2">Order ID: {order.orderId}</p>
        <p className="text-gray-700 mb-2">Estimated Delivery: {order.estimatedDelivery}</p>
        <h3 className="text-lg font-semibold mt-4 mb-2">Items:</h3>
        <ul>
          {order.items.map((item) => (
            <li key={item.id} className="text-gray-800 flex justify-between py-2">
              {item.name} <span>{item.price} (x{item.quantity})</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Order Tracking */}
      <motion.div
        className="bg-white shadow-lg rounded-xl p-6 mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-xl font-bold mb-4">Order Tracking</h2>
        <div className="flex items-center space-x-4">
          {statusSteps.map((step, index) => (
            <motion.div
              key={step}
              className={`flex flex-col items-center ${index <= statusSteps.indexOf(order.status) ? "text-green-500" : "text-gray-400"}`}
              whileHover={{ scale: 1.1 }}
            >
              {index === 0 && <Package size={30} />}
              {index === 1 && <Truck size={30} />}
              {index === 2 && <CheckCircle size={30} />}
              {index === 3 && <CheckCircle size={30} />}
              <p className="text-sm mt-2">{step}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Support Section */}
      <motion.div
        className="bg-white shadow-lg rounded-xl p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-xl font-bold mb-4">Need Help?</h2>
        <div className="flex items-center space-x-4">
          <HelpCircle size={30} className="text-blue-500" />
          <p className="text-gray-700">Visit our Help Center</p>
        </div>
        <div className="flex items-center space-x-4 mt-4">
          <Phone size={30} className="text-blue-500" />
          <p className="text-gray-700">Call us: +91 9876543210</p>
        </div>
      </motion.div>
    </div>
  );
};

export default OrderTracking;