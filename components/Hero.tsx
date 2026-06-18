"use client";

import { motion, Variants } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const floatingVariants: Variants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Animated background circles */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />

      <motion.div
        className="text-center z-10 px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Heading */}
        <motion.div variants={itemVariants} className="mb-6">
          <motion.h1
            className="text-6xl md:text-7xl font-bold text-white mb-4"
            animate={{ backgroundPosition: ["0%", "100%"] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            Discover Premium
            <motion.span
              className="block bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent animate-gradient"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Products
            </motion.span>
          </motion.h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-gray-300 text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Upgrade your lifestyle with our curated collection of cutting-edge
          technology and premium products. Experience shopping like never
          before.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex gap-4 justify-center flex-wrap"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl font-semibold text-white flex items-center gap-2 hover:shadow-lg transition-shadow"
          >
            Shop Now
            <ChevronRight size={20} />
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.05,
              borderColor: "rgb(59, 130, 246)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-gray-700 rounded-xl font-semibold text-white hover:border-blue-500 hover:text-blue-400 transition-colors"
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          variants={itemVariants}
          className="mt-16 flex justify-center gap-8"
        >
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              variants={floatingVariants}
              animate="animate"
              style={{ transitionDelay: `${item * 0.2}s` }}
              className="text-center"
            >
              <motion.div
                className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mb-3 border border-blue-500/20"
                animate={{
                  borderColor: [
                    "rgba(59, 130, 246, 0.2)",
                    "rgba(59, 130, 246, 0.5)",
                    "rgba(59, 130, 246, 0.2)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-2xl">⚡</span>
              </motion.div>
              <p className="text-gray-400 text-sm">
                {item === 1 && "Fast Shipping"}
                {item === 2 && "Premium Quality"}
                {item === 3 && "24/7 Support"}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
