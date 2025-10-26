"use client";

import React from "react";
import { ArrowUpRight, TrendingUp, Globe, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <div className="relative bg-slate-50 min-h-screen flex items-center px-4 py-24 overflow-hidden">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto relative z-10 w-full pt-5">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-sm text-slate-600 font-medium tracking-wide uppercase">TRY IT NOW!</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-6"
              style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, sans-serif" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Change the way
              <br />
              you use your
              <br />
              <span className="italic font-serif">learning</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              className="text-base text-slate-600 leading-relaxed mb-8 max-w-md"
              style={{ fontFamily: "'Inter', -apple-system, sans-serif" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              From your everyday skills, to planning for your future with courses and certifications, EduPlatform helps you get more from your learning.
            </motion.p>

            {/* CTA Button and Rating */}
            <motion.div
              className="flex flex-wrap items-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <motion.button
                className="px-7 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-full font-semibold text-sm transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Now
              </motion.button>

              <div className="flex items-center gap-3">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">5.0</p>
                  <p className="text-xs text-slate-500">from 100+ reviews</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Card Grid */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Top Left - Phone Image */}
              <motion.div
                className="bg-slate-200 rounded-3xl overflow-hidden shadow-lg aspect-[4/5]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=500&fit=crop"
                  alt="Mobile Learning"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Top Right - Stats Card */}
              <motion.div
                className="bg-slate-100 rounded-3xl p-6 shadow-lg flex flex-col justify-between"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div>
                  <p className="text-4xl font-bold text-slate-900 mb-2">56+</p>
                  <p className="text-sm text-slate-600 mb-4">Domains</p>
                </div>
                <div className="flex justify-center">
                  <div className="w-20 h-20 rounded-full border-2 border-slate-400 flex items-center justify-center">
                    <Globe className="w-10 h-10 text-slate-700" strokeWidth={1.5} />
                  </div>
                </div>
              </motion.div>

              {/* Bottom Left - Users Active */}
              <motion.div
                className="bg-slate-100 rounded-3xl p-6 shadow-lg flex flex-col justify-between"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="flex gap-2 mb-4">
                  <Sparkles className="w-8 h-8 text-slate-900" fill="currentColor" />
                  <Sparkles className="w-6 h-6 text-slate-700" fill="currentColor" />
                </div>
                <div>
                  <p className="text-sm text-slate-600 mb-3">Users Active</p>
                  <div className="flex items-center gap-2">
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
                          className="w-9 h-9 rounded-full border-2 border-slate-100 object-cover"
                        />
                      ))}
                    </div>
                    <div className="w-9 h-9 rounded-full bg-slate-900 flex items-center justify-center text-white text-xs font-bold">
                      +9
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Bottom Right - Savings/Growth Card */}
              <motion.div
                className="bg-slate-800 rounded-3xl p-6 shadow-lg flex flex-col justify-between text-white"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <p className="text-2xl font-bold">$196,000</p>
                  <ArrowUpRight className="w-5 h-5" />
                </div>
                <div className="mb-3">
                  <svg viewBox="0 0 100 40" className="w-full h-16">
                    <polyline
                      points="0,35 15,32 30,28 45,20 60,18 75,12 90,8 100,5"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="text-sm text-slate-300">Saving</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;