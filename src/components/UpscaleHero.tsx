"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Star, Award, Zap, TrendingUp } from "lucide-react";

const UpscaleHero: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center relative py-32 px-4 sm:px-6 lg:px-12 text-center bg-white overflow-hidden">
      {/* Decorative Animated Elements - Medium Density */}
      
      {/* Floating Stars */}
      <motion.div
        className="absolute top-20 left-1/4 text-yellow-400"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Star className="w-8 h-8 fill-yellow-400" />
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-16 text-teal-400"
        animate={{
          y: [0, 15, 0],
          rotate: [0, -180, -360],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Star className="w-7 h-7 fill-teal-400" />
      </motion.div>

      {/* Sparkles */}
      <motion.div
        className="absolute top-1/4 right-1/3 text-purple-500"
        animate={{
          scale: [0, 1.2, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Sparkles className="w-8 h-8" />
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 left-1/4 text-orange-500"
        animate={{
          scale: [0, 1, 0],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <Sparkles className="w-7 h-7" />
      </motion.div>

      {/* Bouncing Circles */}
      <motion.div
        className="absolute top-40 left-16 w-24 h-24 bg-teal-300/30 rounded-full"
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-32 right-20 w-20 h-20 bg-purple-300/30 rounded-full"
        animate={{
          y: [0, 25, 0],
          x: [0, 15, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Rotating Shapes */}
      <motion.div
        className="absolute top-1/2 left-12 w-16 h-16 border-4 border-teal-400/40 rounded-lg"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-16 w-14 h-14"
        animate={{
          rotate: [0, -360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <svg viewBox="0 0 100 100" className="text-orange-400/50">
          <polygon
            points="50,15 90,85 10,85"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
          />
        </svg>
      </motion.div>

      {/* Floating Icons */}
      <motion.div
        className="absolute top-2/3 left-20 text-purple-500/60"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 15, -15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Award className="w-9 h-9" />
      </motion.div>

      <motion.div
        className="absolute bottom-40 left-1/3 text-teal-500/60"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -15, 15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <TrendingUp className="w-8 h-8" />
      </motion.div>

      {/* Wavy Line */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-28 h-28"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <svg viewBox="0 0 100 100" className="text-purple-400/40">
          <path
            d="M20,50 Q30,20 50,30 T80,50"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>

      {/* Pulsating Dots */}
      <motion.div
        className="absolute top-1/2 right-1/4 w-4 h-4 bg-teal-600 rounded-full"
        animate={{
          scale: [1, 2, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-purple-600 rounded-full"
        animate={{
          scale: [1, 2, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      {/* Zap Icon */}
      <motion.div
        className="absolute top-1/4 left-16 text-yellow-500/60"
        animate={{
          rotate: [0, 15, -15, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Zap className="w-8 h-8 fill-yellow-500/60" />
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-teal-100 border-2 border-teal-300 text-sm font-semibold text-teal-700 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Sparkles className="w-4 h-4" />
            <span>Revolutionize Your Learning Experience</span>
          </motion.div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl text-slate-900 font-bold leading-tight tracking-tight">
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-teal-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Transform Learning,
              </span>
              <motion.span 
                className="absolute inset-x-0 bottom-2 h-4 bg-yellow-300/60 -rotate-1"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
              />
            </span>
            <br />
            Inspire Growth
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto mt-6 leading-relaxed">
            Deliver quality education, boost student confidence, and help every learner reach their true potential with our cutting-edge platform.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 text-white bg-teal-600 hover:bg-teal-700 hover:shadow-2xl hover:shadow-teal-600/30 rounded-2xl font-semibold text-base transition-all duration-300 w-full sm:w-auto shadow-lg flex items-center justify-center gap-2"
            >
              Join our academy
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-slate-300 text-slate-900 hover:bg-slate-50 hover:shadow-xl rounded-2xl font-semibold text-base transition-all duration-300 w-full sm:w-auto backdrop-blur-sm"
            >
              Explore programs
            </motion.button>
          </div>

          <motion.div
            className="mt-12 flex items-center justify-center gap-8 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {[
              { label: "Active Students", value: "50K+", color: "from-teal-600 to-teal-700" },
              { label: "Expert Instructors", value: "200+", color: "from-purple-600 to-purple-700" },
              { label: "Success Rate", value: "95%", color: "from-blue-600 to-blue-700" },
            ].map((stat, idx) => (
              <motion.div 
                key={idx} 
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + idx * 0.1, duration: 0.4 }}
              >
                <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
                <div className="text-sm text-slate-600 mt-1 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default UpscaleHero;