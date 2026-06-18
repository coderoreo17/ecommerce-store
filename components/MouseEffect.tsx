"use client";

import { useMousePosition } from "@/hooks/useMousePosition";
import { motion } from "framer-motion";

export default function MouseEffect() {
  const mousePosition = useMousePosition();

  return (
    <>
      {/* Glow effect */}
      <motion.div
        className="fixed pointer-events-none w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-10"
        animate={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
        }}
        transition={{
          type: "spring",
          damping: 30,
          mass: 0.2,
          stiffness: 100,
        }}
      />

      {/* Cursor circle */}
      <motion.div
        className="fixed pointer-events-none w-8 h-8 border-2 border-blue-500 rounded-full"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        transition={{
          type: "spring",
          damping: 25,
          mass: 0.1,
          stiffness: 150,
        }}
      />

      {/* Inner dot */}
      <motion.div
        className="fixed pointer-events-none w-2 h-2 bg-blue-500 rounded-full"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{
          type: "spring",
          damping: 20,
          mass: 0.05,
          stiffness: 200,
        }}
      />
    </>
  );
}
