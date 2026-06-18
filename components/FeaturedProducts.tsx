"use client";

import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

export default function FeaturedProducts() {
  const products = [
    {
      id: 1,
      title: "Premium Running Shoes",
      price: 2999,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    },
    {
      id: 2,
      title: "Wireless Headphones",
      price: 4999,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    },
    {
      id: 3,
      title: "Smart Watch",
      price: 3499,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    },
    {
      id: 4,
      title: "Laptop Pro",
      price: 89999,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    },
    {
      id: 5,
      title: "Mechanical Keyboard",
      price: 7999,
      image: "https://images.unsplash.com/photo-1587829191301-2d61a94a5dee",
    },
    {
      id: 6,
      title: "USB-C Hub",
      price: 1999,
      image: "https://images.unsplash.com/photo-1625948515291-69613efd103f",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="max-w-7xl mx-auto py-20 px-6 relative">
      {/* Section Title with Animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <motion.h2
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-4"
        >
          Featured{" "}
          <motion.span
            className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent"
            animate={{ backgroundPosition: ["0%", "100%"] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
          >
            Products
          </motion.span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-400 text-lg"
        >
          Explore our handpicked selection of premium products
        </motion.p>
      </motion.div>

      {/* Animated Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {products.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <ProductCard {...product} />
          </motion.div>
        ))}
      </motion.div>

      {/* View All Button */}
      <motion.div
        className="flex justify-center mt-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
          whileTap={{ scale: 0.95 }}
          className="px-12 py-4 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl font-semibold text-white hover:shadow-lg transition-shadow"
        >
          View All Products
        </motion.button>
      </motion.div>

      {/* Background Decoration */}
      <motion.div
        className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 pointer-events-none"
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </section>
  );
}