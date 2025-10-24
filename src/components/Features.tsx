"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, Shield, Target, Rocket } from "lucide-react";

const Features: React.FC = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8" strokeWidth={1.5} />,
      title: "Lightning Fast",
      desc: "Optimized performance for seamless learning",
      bgColor: "bg-emerald-900",
      iconColor: "text-white",
    },
    {
      icon: <Shield className="w-8 h-8" strokeWidth={1.5} />,
      title: "Secure Platform",
      desc: "Your data protected with enterprise-grade security",
      bgColor: "bg-neutral-100",
      iconColor: "text-neutral-900",
    },
    {
      icon: <Target className="w-8 h-8" strokeWidth={1.5} />,
      title: "Goal Oriented",
      desc: "Track progress and achieve your learning objectives",
      bgColor: "bg-neutral-100",
      iconColor: "text-neutral-900",
    },
    {
      icon: <Rocket className="w-8 h-8" strokeWidth={1.5} />,
      title: "Career Growth",
      desc: "Skills that propel your professional journey",
      bgColor: "bg-neutral-100",
      iconColor: "text-neutral-900",
    },
  ];

  return (
    <div className="relative py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.span
            className="inline-block text-xs font-medium text-neutral-500 uppercase tracking-widest mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Why Choose Us
          </motion.span>

          <motion.h2
            className="text-4xl md:text-5xl font-normal text-neutral-900 mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            All-in-One Learning Platform
          </motion.h2>

          <motion.p
            className="text-base text-neutral-600 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Everything you need to succeed in one powerful platform.{" "}
            No more juggling multiple tools.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`${feature.bgColor} rounded-3xl p-10 transition-all duration-300 hover:shadow-lg`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
            >
              {/* Icon */}
              <div className={`${feature.iconColor} mb-8`}>
                {feature.icon}
              </div>

              {/* Content */}
              <div>
                <h3 className={`text-2xl font-normal mb-3 ${index === 0 ? 'text-white' : 'text-neutral-900'}`}>
                  {feature.title}
                </h3>
                <p className={`text-sm leading-relaxed ${index === 0 ? 'text-emerald-100' : 'text-neutral-600'}`}>
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;