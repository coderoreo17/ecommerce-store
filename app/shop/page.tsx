"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { motion } from "framer-motion";
import { useState } from "react";
import { Filter, X } from "lucide-react";

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [showFilters, setShowFilters] = useState(true);

  const products = [
    { id: 1, title: "Premium Running Shoes", price: 2999, category: "footwear" },
    { id: 2, title: "Wireless Headphones", price: 4999, category: "audio" },
    { id: 3, title: "Smart Watch", price: 3499, category: "wearables" },
    { id: 4, title: "Laptop Pro", price: 89999, category: "computers" },
    { id: 5, title: "Mechanical Keyboard", price: 7999, category: "accessories" },
    { id: 6, title: "USB-C Hub", price: 1999, category: "accessories" },
    { id: 7, title: "Wireless Mouse", price: 2499, category: "accessories" },
    { id: 8, title: "Gaming Chair", price: 15999, category: "furniture" },
    { id: 9, title: "Monitor 4K", price: 29999, category: "computers" },
  ];

  const categories = [
    { id: "all", label: "All Products" },
    { id: "footwear", label: "Footwear" },
    { id: "audio", label: "Audio" },
    { id: "wearables", label: "Wearables" },
    { id: "computers", label: "Computers" },
    { id: "accessories", label: "Accessories" },
    { id: "furniture", label: "Furniture" },
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <main className="bg-black min-h-screen">
      <Navbar />

      {/* Page Header */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-b from-gray-900 to-black py-12"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.h1
            className="text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Our Shop
          </motion.h1>
          <motion.p
            className="text-gray-400 text-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Discover our complete collection of premium products
          </motion.p>
        </div>
      </motion.section>

      {/* Shop Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <motion.aside
            className={`${showFilters ? "block" : "hidden"} lg:block w-full lg:w-64 flex-shrink-0`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="card-glass">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Filter size={20} />
                  Filters
                </h2>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setShowFilters(false)}
                  className="lg:hidden text-gray-400 hover:text-white"
                >
                  <X size={20} />
                </motion.button>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h3 className="text-white font-semibold mb-4">Categories</h3>
                <motion.div
                  className="space-y-2"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {categories.map((cat) => (
                    <motion.button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-all ${
                        selectedCategory === cat.id
                          ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white"
                          : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                      }`}
                    >
                      {cat.label}
                    </motion.button>
                  ))}
                </motion.div>
              </div>

              {/* Sort */}
              <div>
                <h3 className="text-white font-semibold mb-4">Sort By</h3>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest</option>
                </select>
              </div>
            </div>
          </motion.aside>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Mobile Filter Toggle */}
            <motion.div
              className="lg:hidden mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg text-white font-semibold"
              >
                <Filter size={20} />
                {showFilters ? "Hide Filters" : "Show Filters"}
              </motion.button>
            </motion.div>

            {/* Results count */}
            <motion.div
              className="mb-8 text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <p>
                Showing{" "}
                <span className="text-blue-400 font-semibold">
                  {filteredProducts.length}
                </span>{" "}
                results
              </p>
            </motion.div>

            {/* Products Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              key={selectedCategory}
            >
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <ProductCard
                    id={product.id}
                    title={product.title}
                    price={product.price}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* No results */}
            {filteredProducts.length === 0 && (
              <motion.div
                className="text-center py-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <p className="text-gray-400 text-lg">
                  No products found in this category.
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}