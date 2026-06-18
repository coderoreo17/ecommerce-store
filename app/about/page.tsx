"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import GlassCard from "@/components/GlassCard";
import { motion } from "framer-motion";
import { Award, Users, Zap, Heart } from "lucide-react";

export default function AboutPage() {
  const features = [
    {
      icon: Award,
      title: "Premium Quality",
      description: "Carefully curated products meeting highest standards",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Dedicated professionals ensuring your satisfaction",
    },
    {
      icon: Zap,
      title: "Fast Service",
      description: "Quick shipping and responsive customer support",
    },
    {
      icon: Heart,
      title: "Customer Focused",
      description: "Your satisfaction is our top priority",
    },
  ];

  const stats = [
    { number: "10K+", label: "Happy Customers" },
    { number: "500+", label: "Products" },
    { number: "50+", label: "Brands" },
    { number: "24/7", label: "Support" },
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

  return (
    <main className="bg-black min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="py-12 md:py-20 bg-gradient-to-b from-gray-900 to-black"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.h1
            className="text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-4 md:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            About <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">TechStore</span>
          </motion.h1>
          <motion.p
            className="text-gray-400 text-sm md:text-base lg:text-lg max-w-2xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Revolutionizing the way you shop for premium tech products with innovation,
            quality, and customer service excellence.
          </motion.p>
        </div>
      </motion.section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="text-center"
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ delay: i * 0.1 }}
            >
              <motion.div
                className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent mb-2"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
              >
                {stat.number}
              </motion.div>
              <p className="text-gray-400 text-xs md:text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20">
        <SectionTitle
          title="Why Choose Us"
          subtitle="Excellence in every interaction"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <GlassCard key={i} delay={i * 0.1} hover>
                <motion.div
                  className="flex items-start gap-6"
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    className="p-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <Icon className="text-white" size={28} />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </motion.div>
              </GlassCard>
            );
          })}
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SectionTitle
              title="Our Mission"
              gradient={false}
            />
            <p className="text-gray-400 leading-relaxed mb-6">
              We believe that everyone deserves access to premium technology without
              compromise. Our mission is to connect you with the best products,
              curated by experts, delivered with excellence.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Every product in our collection is handpicked to ensure quality,
              durability, and value for money. We're committed to providing the best
              shopping experience with fast delivery and dedicated customer support.
            </p>
          </motion.div>

          <motion.div
            className="relative h-96 rounded-2xl overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm" />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="text-center"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="text-6xl mb-4">🚀</div>
                <p className="text-white font-semibold">Innovation First</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}