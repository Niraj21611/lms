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
      gradient: "from-primary to-primary-light",
    },
    {
      icon: <Shield className="w-6 h-6" strokeWidth={2} />,
      title: "Secure Platform",
      desc: "Your data protected with enterprise-grade security",
      gradient: "from-teal to-teal-light",
    },
    {
      icon: <Target className="w-6 h-6" strokeWidth={2} />,
      title: "Goal Oriented",
      desc: "Track progress and achieve your learning objectives",
      gradient: "from-coral to-coral-light",
    },
    {
      icon: <Rocket className="w-6 h-6" strokeWidth={2} />,
      title: "Career Growth",
      desc: "Skills that propel your professional journey",
      gradient: "from-purple to-purple-light",
    },
  ];

  return (
    <div className="relative py-24 px-4 bg-white overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-coral/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.span
            className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Why Choose Us
          </motion.span>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-neutral-900 mb-6 leading-tight tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            All-in-One Learning Platform
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Everything you need to succeed in one powerful platform.{" "}
            <span className="font-semibold text-neutral-900">
              No more juggling multiple tools.
            </span>
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative bg-gradient-to-br from-white to-neutral-50 rounded-2xl p-8 border border-neutral-200 hover:border-transparent hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3 font-display">
                {feature.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
