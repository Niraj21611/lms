"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Award,
  Globe,
  ArrowRight,
  BookOpen,
  Star,
  Sparkles,
  Heart,
  Zap,
} from "lucide-react";

const ExternalTeacherSection: React.FC = () => {
  return (
    <div className="relative py-24 px-4 overflow-hidden bg-white">
      {/* Animated Dotted Grid Background */}
      <div className="absolute inset-0 opacity-40">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="dot-grid-teacher"
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
                fill="#a855f7"
                initial={{ opacity: 0.3 }}
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dot-grid-teacher)" />
        </svg>
      </div>

      {/* Decorative Animated Elements - Medium Density */}

      {/* Floating Stars with different colors */}
      <motion.div
        className="absolute top-20 left-1/4 text-yellow-400"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
          scale: [1, 1.3, 1],
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
        className="absolute top-1/3 right-20 text-pink-400"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -180, -360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Star className="w-7 h-7 fill-pink-400" />
      </motion.div>

      {/* Bouncing Circles */}
      <motion.div
        className="absolute top-32 left-16 w-24 h-24 bg-blue-400/30 rounded-full"
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
        className="absolute bottom-40 right-24 w-20 h-20 bg-pink-400/30 rounded-full"
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
        className="absolute top-1/2 left-12 w-16 h-16 border-4 border-purple-500/40 rounded-lg"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-16 w-18 h-18"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <svg viewBox="0 0 100 100" className="text-pink-500/50">
          <polygon
            points="50,15 90,85 10,85"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
          />
        </svg>
      </motion.div>

      {/* Wavy Lines */}
      <motion.div
        className="absolute top-40 right-1/4 w-28 h-28"
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
        <svg viewBox="0 0 100 100" className="text-blue-400/40">
          <path
            d="M10,50 Q30,20 50,30 T90,50"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>

      {/* Pulsating Dots */}
      <motion.div
        className="absolute top-1/2 right-1/4 w-4 h-4 bg-purple-600 rounded-full"
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
        className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-pink-600 rounded-full"
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

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-purple-100 border-2 border-purple-300 text-sm font-semibold text-purple-700 mb-6">
              <Users className="w-4 h-4 text-purple-600" />
              For Educators
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Join as an{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-teal-700">
                External Teacher
              </span>
              <motion.span
                className="absolute inset-x-0 bottom-2 h-4 bg-yellow-300/60 -rotate-1"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
              />
            </span>
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            We welcome passionate educators from around the world to share their
            expertise on our platform. Empower students globally while building
            your teaching career.
          </motion.p>
        </div>


        {/* CTA Section */}
        <motion.div
          className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl p-12 md:p-16 text-center overflow-hidden shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          {/* Simple overlay */}
          <div className="absolute inset-0 bg-white/5" />

          {/* Floating decorative elements in CTA */}
          <motion.div
            className="absolute top-8 right-12 text-white/30"
            animate={{
              y: [0, -15, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Star className="w-8 h-8 fill-white/30" />
          </motion.div>

          <motion.div
            className="absolute bottom-8 left-12 text-white/30"
            animate={{
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Sparkles className="w-8 h-8" />
          </motion.div>

          <div className="relative z-10">
            <motion.h3
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Ready to Share Your Knowledge?
            </motion.h3>
            <motion.p
              className="text-lg text-white/95 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              Join our community of expert educators and start making a
              difference in students' lives today.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <motion.button
                className="group px-8 py-4 bg-white hover:bg-gray-50 text-slate-900 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all duration-300 shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Apply Now
                <ArrowRight
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                  strokeWidth={2.5}
                />
              </motion.button>
              <motion.button
                className="px-8 py-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white rounded-2xl font-bold transition-all duration-300 border-2 border-white/40"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ExternalTeacherSection;
