"use client";

import { motion } from "framer-motion";
import { Code, MessageCircle, Briefcase, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: "About", href: "#" },
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Contact", href: "#" },
  ];

  const socialLinks = [
    { icon: MessageCircle, label: "Twitter" },
    { icon: Code, label: "GitHub" },
    { icon: Briefcase, label: "LinkedIn" },
    { icon: Mail, label: "Email" },
  ];

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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="relative bg-black border-t border-gray-800 overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-blue-500/5 to-transparent pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16 relative z-10">
        {/* Main footer content */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <motion.h3
              className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent mb-4"
              whileHover={{ scale: 1.05 }}
            >
              TechStore
            </motion.h3>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
              Premium tech products with exceptional quality and service.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-sm md:text-base font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Shop", "About", "Contact"].map((link) => (
                <motion.li
                  key={link}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-xs md:text-sm">
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div variants={itemVariants}>
            <h4 className="text-sm md:text-base font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2">
              {["FAQ", "Documentation", "Community", "Status"].map((link) => (
                <motion.li
                  key={link}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-xs md:text-sm">
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants}>
            <h4 className="text-sm md:text-base font-semibold text-white mb-4">Newsletter</h4>
            <p className="text-gray-400 text-xs md:text-sm mb-4">
              Subscribe to get special offers and updates.
            </p>
            <motion.form
              className="flex flex-col sm:flex-row"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-gray-900/50 border border-gray-800 rounded-lg sm:rounded-l-lg text-gray-300 placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors text-sm mb-2 sm:mb-0"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg sm:rounded-r-lg text-white font-semibold hover:shadow-lg transition-shadow text-sm"
              >
                Subscribe
              </motion.button>
            </motion.form>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent my-6 md:my-8"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* Bottom footer */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Copyright */}
          <motion.p
            variants={itemVariants}
            className="text-gray-500 text-sm text-center md:text-left"
          >
            © {currentYear} TechStore. All rights reserved.
          </motion.p>

          {/* Social Links */}
          <motion.div
            className="flex gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {socialLinks.map(({ icon: Icon, label }) => (
              <motion.a
                key={label}
                href="#"
                variants={itemVariants}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-blue-400 transition-colors p-2 rounded-full border border-gray-800 hover:border-blue-500"
                title={label}
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </motion.div>

          {/* Footer Links */}
          <motion.div
            className="flex gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {footerLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                variants={itemVariants}
                className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Animated accent line */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>
    </footer>
  );
}