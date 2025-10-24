"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, Shield, Target, Rocket } from "lucide-react";

const Features: React.FC = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6" strokeWidth={2} />,
      title: "Lightning Fast",
      desc: "Optimized performance for seamless learning",
      color: "teal",
      bgColor: "bg-teal-100",
      iconBg: "bg-teal-500",
      borderColor: "border-teal-200",
    },
    {
      icon: <Shield className="w-6 h-6" strokeWidth={2} />,
      title: "Secure Platform",
      desc: "Your data protected with enterprise-grade security",
      color: "blue",
      bgColor: "bg-blue-100",
      iconBg: "bg-blue-500",
      borderColor: "border-blue-200",
    },
    {
      icon: <Target className="w-6 h-6" strokeWidth={2} />,
      title: "Goal Oriented",
      desc: "Track progress and achieve your learning objectives",
      color: "orange",
      bgColor: "bg-orange-100",
      iconBg: "bg-orange-500",
      borderColor: "border-orange-200",
    },
    {
      icon: <Rocket className="w-6 h-6" strokeWidth={2} />,
      title: "Career Growth",
      desc: "Skills that propel your professional journey",
      color: "purple",
      bgColor: "bg-purple-100",
      iconBg: "bg-purple-500",
      borderColor: "border-purple-200",
    },
  ];

  return (
    <div className="relative py-24 px-4 bg-white overflow-hidden">
      {/* Animated Dotted Background */}
      <div className="absolute inset-0 opacity-40">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="dot-pattern"
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
                initial={{ opacity: 0.2 }}
                animate={{ opacity: [0.2, 0.6, 0.2] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dot-pattern)" />
        </svg>
      </div>

      {/* Decorative Animated Elements */}
      <motion.div
        className="absolute top-20 right-1/4 w-32 h-32 border-4 border-teal-300/40 rounded-full"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-32 left-1/4 w-24 h-24"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg viewBox="0 0 100 100" className="text-orange-400/40">
          <path
            d="M20,50 Q30,20 50,30 T80,50"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>

      <motion.div
        className="absolute top-1/2 left-16 w-20 h-20 bg-blue-200/30 rounded-lg"
        animate={{
          rotate: [12, -12, 12],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/3 right-20 w-16 h-16 border-3 border-purple-300/40 rounded-lg"
        animate={{
          rotate: [-12, 12, -12],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/3 w-28 h-28 bg-teal-100/40 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-2/3 right-12 w-12 h-12"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <svg viewBox="0 0 100 100" className="text-orange-300/50">
          <polygon
            points="50,15 90,85 10,85"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
          />
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-40 left-12 w-14 h-14 border-3 border-blue-400/30 rounded-full"
        animate={{
          scale: [1, 1.15, 1],
          x: [0, 15, 0],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.span
            className="inline-block text-sm font-semibold text-teal-600 uppercase tracking-wider mb-4 px-4 py-2 bg-teal-50 rounded-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Why Choose Us
          </motion.span>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            All-in-One Learning Platform
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Everything you need to succeed in one powerful platform.{" "}
            <span className="font-semibold text-slate-900">
              No more juggling multiple tools.
            </span>
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`group relative bg-white rounded-2xl p-8 border-2 ${feature.borderColor} hover:shadow-2xl hover:shadow-${feature.color}-200/50 transition-all duration-300 overflow-hidden`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Background decoration on hover */}
              <motion.div
                className={`absolute -top-10 -right-10 w-32 h-32 ${feature.bgColor} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <div
                className={`relative z-10 w-14 h-14 rounded-xl ${feature.iconBg} flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
              >
                {feature.icon}
              </div>

              <h3 className="relative z-10 text-xl font-bold text-slate-900 mb-3">
                {feature.title}
              </h3>

              <p className="relative z-10 text-slate-600 leading-relaxed">
                {feature.desc}
              </p>

              {/* Animated corner accent */}
              <motion.div
                className={`absolute bottom-0 right-0 w-16 h-16 ${feature.bgColor} opacity-60 rounded-tl-full`}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;