"use client";

import React from "react";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <div className="relative bg-white min-h-screen flex items-center justify-center px-4 py-32 overflow-hidden">
      {/* Subtle Abstract Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top left gradient blob */}
        <motion.div
          className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-gradient-to-br from-primary/10 via-purple/5 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Bottom right gradient blob */}
        <motion.div
          className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-gradient-to-br from-coral/10 via-teal/5 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating circles */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-2 h-2 bg-primary/20 rounded-full"
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-coral/20 rounded-full"
          animate={{
            y: [0, 30, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #0f1419 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Main Content - Centered */}
      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/5 to-purple/5 border border-primary/10 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-sm font-medium text-neutral-700">Join 10,000+ students learning smarter</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-display text-neutral-900 leading-[1.1] tracking-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Learn Without
          <br />
          <span className="bg-gradient-to-r from-primary via-purple to-coral bg-clip-text text-transparent">
            Limits
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto leading-relaxed mb-12 font-light"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Experience personalized education that adapts to your pace. Master any skill with world-class instructors and cutting-edge learning tools.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <motion.button
            className="group relative px-8 py-4 bg-gradient-to-r from-primary to-primary-light text-white rounded-2xl font-semibold text-lg flex items-center gap-2 shadow-lg shadow-primary/25 overflow-hidden w-full sm:w-auto"
            whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0, 102, 255, 0.3)" }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">Get Started Free</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10" strokeWidth={2.5} />
            
            {/* Shine effect on hover */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </motion.button>

          <motion.button
            className="group px-8 py-4 bg-white hover:bg-neutral-50 text-neutral-900 rounded-2xl font-semibold text-lg flex items-center gap-2 border-2 border-neutral-200 hover:border-neutral-300 transition-all duration-300 w-full sm:w-auto"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/10 to-purple/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Play className="w-4 h-4 text-primary ml-0.5" strokeWidth={2.5} fill="currentColor" />
            </div>
            <span>Watch Demo</span>
          </motion.button>
        </motion.div>

        {/* Social Proof Stats */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {[
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
              ].map((url, index) => (
                <motion.img
                  key={index}
                  src={url}
                  alt={`Student ${index + 1}`}
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                />
              ))}
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1 text-coral text-sm mb-0.5">
                {"★".repeat(5)}
              </div>
              <p className="text-sm text-neutral-600 font-medium">4.9 from 10k+ reviews</p>
            </div>
          </div>

          <div className="hidden sm:block w-px h-12 bg-neutral-200" />

          <div className="flex items-center gap-8">
            <div className="text-center">
              <p className="text-3xl font-bold text-neutral-900 mb-1">500+</p>
              <p className="text-sm text-neutral-600">Expert Courses</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-neutral-900 mb-1">95%</p>
              <p className="text-sm text-neutral-600">Success Rate</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </div>
  );
};

export default Hero;
