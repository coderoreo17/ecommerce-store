"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Trash2, Plus, Minus, ShoppingCart } from "lucide-react";
import { useState } from "react";

interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      title: "Premium Running Shoes",
      price: 2999,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    },
    {
      id: 2,
      title: "Wireless Headphones",
      price: 4999,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    },
  ]);

  const updateQuantity = (id: number, delta: number) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: Math.max(0, item.quantity + delta),
              }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const shipping = subtotal > 0 ? 299 : 0;
  const tax = Math.round(subtotal * 0.18);
  const total = subtotal + shipping + tax;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <main className="bg-black min-h-screen">
      <Navbar />

      {/* Header */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="py-12 bg-gradient-to-b from-gray-900 to-black border-b border-gray-800"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.h1
            className="text-4xl font-bold text-white flex items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <ShoppingCart size={36} className="text-blue-500" />
            Shopping Cart
          </motion.h1>
        </div>
      </motion.section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <motion.div
                className="space-y-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {cartItems.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="glass rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-colors"
                  >
                    <div className="flex gap-6">
                      {/* Image */}
                      <motion.img
                        src={item.image}
                        alt={item.title}
                        className="w-24 h-24 object-cover rounded-lg"
                        whileHover={{ scale: 1.05 }}
                      />

                      {/* Details */}
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white mb-2">
                          {item.title}
                        </h3>
                        <p className="text-blue-400 font-semibold mb-4">
                          ₹{item.price.toLocaleString()}
                        </p>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-4">
                          <span className="text-gray-400">Qty:</span>
                          <motion.div
                            className="flex items-center gap-2 bg-gray-900/50 rounded-lg p-2"
                            whileHover={{ scale: 1.05 }}
                          >
                            <motion.button
                              whileTap={{ scale: 0.9 }}
                              onClick={() => updateQuantity(item.id, -1)}
                              className="p-1 text-gray-400 hover:text-white"
                            >
                              <Minus size={16} />
                            </motion.button>
                            <span className="text-white font-semibold w-6 text-center">
                              {item.quantity}
                            </span>
                            <motion.button
                              whileTap={{ scale: 0.9 }}
                              onClick={() => updateQuantity(item.id, 1)}
                              className="p-1 text-gray-400 hover:text-white"
                            >
                              <Plus size={16} />
                            </motion.button>
                          </motion.div>
                        </div>
                      </div>

                      {/* Price and Delete */}
                      <div className="text-right flex flex-col justify-between items-end">
                        <p className="text-xl font-bold text-white">
                          ₹{(item.price * item.quantity).toLocaleString()}
                        </p>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => removeItem(item.id)}
                          className="text-red-400 hover:text-red-300 transition-colors p-2"
                        >
                          <Trash2 size={20} />
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Order Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="glass rounded-xl p-8 border border-gray-700 h-fit sticky top-24"
            >
              <h2 className="text-2xl font-bold text-white mb-6">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-400">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Shipping</span>
                  <span>₹{shipping.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Tax (18%)</span>
                  <span>₹{tax.toLocaleString()}</span>
                </div>

                <motion.div
                  className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                <div className="flex justify-between text-xl font-bold text-white">
                  <span>Total</span>
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    ₹{total.toLocaleString()}
                  </span>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg font-semibold text-white hover:shadow-lg transition-shadow mb-3"
              >
                Proceed to Checkout
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                className="w-full px-6 py-3 border border-gray-700 rounded-lg font-semibold text-white hover:border-blue-500 hover:text-blue-400 transition-colors"
              >
                Continue Shopping
              </motion.button>
            </motion.div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-6xl mb-6"
            >
              🛒
            </motion.div>
            <p className="text-gray-400 text-xl mb-8">Your cart is empty</p>
            <motion.a
              href="/shop"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg font-semibold text-white"
            >
              Continue Shopping
            </motion.a>
          </motion.div>
        )}
      </section>

      <Footer />
    </main>
  );
}
