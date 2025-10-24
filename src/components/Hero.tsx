"use client";

import React from "react";
import { Check, Users } from "lucide-react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <div className="relative bg-black min-h-screen flex items-center px-4 py-24 overflow-hidden">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Rating Badge */}
            <motion.div
              className="flex items-center gap-2 mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <div key={star} className="w-4 h-4 bg-teal-400 rounded-sm" />
                ))}
              </div>
              <span className="text-sm text-white font-medium tracking-wide">
                4.9 Rating - 10,000+ Reviews
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15] mb-8 tracking-tight"
              style={{
                fontFamily:
                  "'Inter', 'SF Pro Display', -apple-system, sans-serif",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Master New Skills
              <br />
              At Your Own
              <br />
              Pace
            </motion.h1>

            {/* Feature List */}
            <motion.div
              className="space-y-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              {[
                "Expert-led courses designed by industry professionals",
                "Flexible learning paths tailored to your career goals",
                "Live support and mentorship included, accessible 24/7",
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-white flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-black" strokeWidth={3} />
                  </div>
                  <p
                    className="text-white text-base leading-relaxed"
                    style={{ fontFamily: "'Inter', -apple-system, sans-serif" }}
                  >
                    {feature}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              <motion.button
                className="px-6 py-2.5 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold text-sm transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Learning
              </motion.button>

              <motion.button
                className="px-6 py-2.5 bg-transparent hover:bg-white/10 text-white rounded-lg font-semibold text-sm border-2 border-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Courses
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - Image Grid */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Top Left - Product Image */}
              <motion.div
                className="bg-neutral-700 rounded-3xl overflow-hidden shadow-xl aspect-square"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop"
                  alt="Product"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Top Right - Main Person */}
              <motion.div
                className="row-span-2 bg-blue-100 rounded-3xl overflow-hidden shadow-xl relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=600&fit=crop"
                  alt="Happy student"
                  className="w-full h-full object-cover"
                />

                {/* Stats Card Overlay */}
                <motion.div
                  className="absolute bottom-4 left-4 right-4 bg-white rounded-2xl p-4 shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex -space-x-2">
                      {[
                        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
                        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
                        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
                      ].map((url, index) => (
                        <img
                          key={index}
                          src={url}
                          alt={`User ${index + 1}`}
                          className="w-7 h-7 rounded-full border-2 border-white object-cover"
                        />
                      ))}
                    </div>
                  </div>
                  <p
                    className="text-2xl font-bold text-slate-900"
                    style={{ fontFamily: "'Inter', -apple-system, sans-serif" }}
                  >
                    100k +
                  </p>
                  <p
                    className="text-xs text-slate-600"
                    style={{ fontFamily: "'Inter', -apple-system, sans-serif" }}
                  >
                    Active Learners
                  </p>
                </motion.div>
              </motion.div>

              {/* Bottom Left - Person */}
              <motion.div
                className="bg-yellow-100 rounded-3xl overflow-hidden shadow-xl aspect-square"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
                  alt="Student"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
