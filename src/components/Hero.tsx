"use client";

import React from "react";
import { motion } from "framer-motion";
import JourneyAnimation from "./Animations/JourneyAnimation";
import { Play } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <div className="relative bg-linear-to-br from-slate-50 via-blue-50 to-teal-50 min-h-screen flex items-center px-4 py-16 overflow-hidden">
      {/* Animated Dotted Grid Background */}
      <div className="absolute inset-0 opacity-40">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="dot-pattern-hero"
              x="0"
              y="0"
              width="30"
              height="30"
              patternUnits="userSpaceOnUse"
            >
              <motion.circle
                cx="2"
                cy="2"
                r="1.5"
                fill="#14b8a6"
                initial={{ opacity: 1.0 }}
                animate={{ opacity: [0.5, 1.0, 0.5] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dot-pattern-hero)" />
        </svg>
      </div>

      {/* Decorative elements */}
      {/* Floating Geometric Shapes */}
      <motion.div
        className="absolute top-20 right-1/4 w-32 h-32 border-4 border-orange-300/30 rounded-full"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/3 w-16 h-16 bg-purple-200/30 rounded-full"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Curved Lines */}
      <div className="absolute top-1/4 right-20 w-32 h-32">
        <motion.svg
          viewBox="0 0 100 100"
          className="text-orange-400/40"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <path
            d="M10,50 Q30,10 50,30 T90,50"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
        </motion.svg>
      </div>

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

      {/* Additional Floating Elements */}
      <motion.div
        className="absolute top-40 left-1/4 w-20 h-20 bg-yellow-200/25 rounded-full blur-sm"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Small Accent Dots */}
      <motion.div
        className="absolute top-1/2 left-16 w-3 h-3 bg-teal-500/60 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/4 left-1/3 w-4 h-4 bg-orange-400/50 rounded-full"
        animate={{
          scale: [1, 1.8, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      <motion.div
        className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-purple-500/60 rounded-full"
        animate={{
          scale: [1, 2, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Abstract Shapes */}
      <div className="absolute top-45 left-20 w-20 h-20 bg-orange-200/20 rounded-lg rotate-12" />

      {/* Gradient Orbs */}
      <motion.div
        className="absolute top-16 left-12 w-40 h-40 bg-linear-to-br from-teal-300/20 to-cyan-300/20 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-20 right-20 w-48 h-48 bg-linear-to-br from-orange-300/20 to-pink-300/20 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Zigzag and Wave Lines */}
      <div className="absolute top-1/2 left-8 w-24 h-24">
        <motion.svg
          viewBox="0 0 100 100"
          className="text-purple-400/30"
          animate={{ 
            rotate: [0, 10, -10, 0],
            y: [0, -10, 0],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <path
            d="M10,10 L30,30 L50,10 L70,30 L90,10"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </div>

      <div className="absolute bottom-1/4 left-1/3 w-32 h-32">
        <motion.svg
          viewBox="0 0 100 100"
          className="text-pink-400/25"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, -5, 5, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <path
            d="M5,50 Q25,25 45,50 T85,50 Q95,60 95,75"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
        </motion.svg>
      </div>

      {/* Unique Geometric Patterns */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-16 h-16"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <svg viewBox="0 0 100 100" className="text-teal-400/30">
          <polygon
            points="50,10 90,35 75,75 25,75 10,35"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
          />
        </svg>
      </motion.div>

      {/* Floating Particles - Clusters */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-2 h-2 rounded-full"
          style={{
            background: ['#14b8a6', '#fb923c', '#a855f7', '#ec4899', '#06b6d4', '#fbbf24'][i],
            opacity: 0.4,
            top: `${20 + i * 12}%`,
            left: `${10 + i * 8}%`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, -10, 0],
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}

      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`particle-right-${i}`}
          className="absolute w-2.5 h-2.5 rounded-full"
          style={{
            background: ['#06b6d4', '#f97316', '#d946ef'][i],
            opacity: 0.35,
            bottom: `${15 + i * 10}%`,
            right: `${8 + i * 7}%`,
          }}
          animate={{
            y: [0, 15, 0],
            x: [0, -15, 0],
            scale: [1, 1.3, 1],
            opacity: [0.25, 0.5, 0.25],
          }}
          transition={{
            duration: 4 + i * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.4,
          }}
        />
      ))}

      {/* Decorative Corner Elements */}
      <motion.div
        className="absolute top-8 right-8 w-12 h-12 border-l-4 border-t-4 border-teal-400/40 rounded-tl-2xl"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-8 left-8 w-16 h-16 border-r-4 border-b-4 border-orange-400/40 rounded-br-2xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.35, 0.65, 0.35],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      {/* Star Shapes */}
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-6 h-6"
        animate={{
          rotate: [360, 180, 0],
          scale: [1, 1.4, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <svg viewBox="0 0 24 24" className="text-pink-400/50" fill="currentColor">
          <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6-6.3 4.6 2.3-7-6-4.6h7.6z" />
        </svg>
      </motion.div>

      {/* Plus Signs */}
      <motion.div
        className="absolute bottom-1/4 left-16 text-4xl font-bold text-purple-400/25"
        animate={{
          rotate: [0, -90, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.8,
        }}
      >
        +
      </motion.div>

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
              Where curiosity  
              <br />
              Grows{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-teal-900">Into</span>
                <span className="absolute inset-x-0 bottom-2 h-3 bg-orange-300/60 -rotate-1"></span>
              </span>
              <br />
              <span className="text-teal-700">Endless Possibility</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              className="text-base text-slate-600 leading-relaxed mb-6 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Unlock endless opportunities to learn, upskill, and grow — all
              powered by Raah Academy.
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
                <div className="w-8 h-8 rounded-full bg-linear-to-br from-orange-400 to-orange-500 flex items-center justify-center shadow-lg">
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

          <JourneyAnimation />
        </div>
      </div>
    </div>
  );
};

export default Hero;
