"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Heart } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  id?: number;
  image?: string;
  title?: string;
  price?: number;
}

export default function ProductCard({
  id = 1,
  image = "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  title = "Running Shoes",
  price = 2999,
}: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -8 }}
      className="group relative h-full"
    >
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 group-hover:border-blue-500/50 transition-all duration-300">
        {/* Image Container */}
        <div className="relative h-64 w-full overflow-hidden">
          <motion.img
            src={image}
            className="h-full w-full object-cover"
            alt={title}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
          />

          {/* Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          />

          {/* Quick Actions */}
          <motion.div
            className="absolute top-3 right-3 flex gap-2"
            initial={{ opacity: 0, scale: 0.8 }}
            whileHover={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsWishlisted(!isWishlisted)}
              className={`p-2 rounded-full backdrop-blur-md transition-colors ${
                isWishlisted
                  ? "bg-red-500/80 text-white"
                  : "bg-black/50 text-gray-300 hover:text-red-500"
              }`}
            >
              <Heart size={20} fill={isWishlisted ? "currentColor" : "none"} />
            </motion.button>
          </motion.div>

          {/* Badge */}
          <motion.div
            className="absolute top-3 left-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            New
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-5 relative">
          {/* Title */}
          <motion.h2 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
            {title}
          </motion.h2>

          {/* Rating */}
          <motion.div className="flex items-center gap-1 mt-2">
            {[...Array(5)].map((_, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-yellow-400"
              >
                ⭐
              </motion.span>
            ))}
            <span className="text-gray-400 text-sm">(128 reviews)</span>
          </motion.div>

          {/* Price */}
          <motion.div className="mt-4 flex items-center justify-between">
            <motion.p
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ₹{price.toLocaleString()}
            </motion.p>
            <motion.span
              className="text-gray-400 line-through text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              ₹{Math.floor(price * 1.3).toLocaleString()}
            </motion.span>
          </motion.div>

          {/* Add to Cart Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full mt-5 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 rounded-xl py-3 font-semibold text-white flex items-center justify-center gap-2 group/btn transition-all duration-300"
          >
            <ShoppingCart size={18} className="group-hover/btn:animate-bounce" />
            Add to Cart
          </motion.button>

          {/* Hover Effect - Quick View */}
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            whileHover={{ opacity: 1, y: 0 }}
            className="w-full mt-2 border border-gray-700 hover:border-blue-500 rounded-xl py-2 font-semibold text-gray-300 hover:text-blue-400 transition-colors"
          >
            Quick View
          </motion.button>
        </div>

        {/* Bottom Shimmer Effect */}
        <motion.div
          className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>
    </motion.div>
  );
}