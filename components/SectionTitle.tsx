"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  gradient?: boolean;
}

export default function SectionTitle({
  title,
  subtitle,
  gradient = true,
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mb-12"
    >
      <motion.h2
        className={`text-4xl md:text-5xl font-bold mb-4 ${
          gradient
            ? "bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent"
            : "text-white"
        }`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-400 text-lg"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
