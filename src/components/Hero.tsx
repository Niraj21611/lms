"use client";

import React from "react";
import { ArrowRight, Play, BookOpen, Users, Award } from "lucide-react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 min-h-screen flex items-center px-4 py-16 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-30 right-1/4 w-32 h-32 border-4 border-orange-300/30 rounded-full" />
      <div className="absolute bottom-25 left-1/4 w-24 h-24">
        <svg viewBox="0 0 100 100" className="text-teal-400/30">
          <path
            d="M20,50 Q30,20 50,30 T80,50"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="absolute top-45 left-20 w-20 h-20 bg-orange-200/20 rounded-lg rotate-12" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto relative z-10 w-full pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Main Headline */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-teal-900 leading-[1.1] mb-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Build Your Skills
              <br />
              on the{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-teal-900">Best</span>
                <span className="absolute inset-x-0 bottom-2 h-3 bg-orange-300/60 -rotate-1"></span>
              </span>
              <br />
              <span className="text-teal-700">Platform</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              className="text-base text-slate-600 leading-relaxed mb-6 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Find Unlimited Courses That Match Your Needs to Hasten the Process
              of Developing Your Skills
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap items-center gap-3 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <motion.button
                className="group px-6 py-3 bg-teal-700 hover:bg-teal-800 text-white rounded-lg font-semibold text-sm flex items-center gap-2 transition-all duration-300 shadow-lg shadow-teal-700/20"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started
              </motion.button>

              <motion.button
                className="group px-5 py-3 bg-white hover:bg-orange-50 text-slate-700 rounded-lg font-semibold text-sm flex items-center gap-2 transition-all duration-300 shadow-md"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center shadow-lg">
                  <Play className="w-3 h-3 text-white ml-0.5" fill="white" />
                </div>
                <span>Video Play</span>
              </motion.button>
            </motion.div>

            {/* User Stats */}
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <div className="flex -space-x-3">
                {[
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
                  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop",
                ].map((url, index) => (
                  <motion.img
                    key={index}
                    src={url}
                    alt={`Student ${index + 1}`}
                    className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-md"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                  />
                ))}
              </div>
              <div>
                <p className="text-base font-bold text-teal-900">
                  10,00+ Active
                </p>
                <p className="text-xs text-slate-600">Student</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Image Card */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              {/* Background card with pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-600 to-teal-700 rounded-3xl transform rotate-3"></div>

              {/* Main image card */}
              <div className="relative bg-gradient-to-br from-orange-100 to-pink-100 rounded-3xl overflow-hidden shadow-2xl">
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.3) 10px, rgba(255,255,255,0.3) 20px)",
                  }}
                />
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop"
                  alt="Student learning"
                  className="relative w-full h-[450px] object-cover object-top mix-blend-multiply opacity-90"
                />
              </div>

              {/* Decorative cloud */}
              <div className="absolute top-8 right-8">
                <svg
                  width="80"
                  height="60"
                  viewBox="0 0 80 60"
                  className="text-white/40"
                >
                  <path
                    d="M60,30 Q65,20 70,25 Q75,20 75,30 Q80,30 80,40 Q75,50 65,50 L25,50 Q15,50 10,40 Q10,30 20,25 Q20,20 30,20 Q35,15 40,20 Q45,15 50,20 Q55,25 60,30 Z"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>

              {/* Decorative squiggle */}
              <div className="absolute bottom-20 -left-8">
                <svg
                  width="100"
                  height="100"
                  viewBox="0 0 100 100"
                  className="text-orange-400"
                >
                  <path
                    d="M20,50 Q30,30 40,50 T60,50 T80,50"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
