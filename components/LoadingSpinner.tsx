"use client";

import { motion } from "framer-motion";

export default function LoadingSpinner() {
  const containerVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  const itemVariants = {
    animate: (i: number) => ({
      scale: [1, 1.2, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        delay: i * 0.1,
      },
    }),
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <motion.div className="relative w-20 h-20" variants={containerVariants} animate="animate">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={itemVariants}
            animate="animate"
            className="absolute w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
            style={{
              left: "50%",
              top: "50%",
              transform: `rotate(${(i * 90)}deg) translateX(40px)`,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}
