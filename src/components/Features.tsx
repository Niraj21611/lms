"use client";

import React from "react";
import { Variants, motion } from "framer-motion";
import { Shield, Layout, Users } from "lucide-react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <Shield className="w-12 h-12 text-white" strokeWidth={1} />,
      title: "Data Protection",
      desc: "Your privacy is our priority. We use industry-leading encryption to keep your personal and estate planning documents safe.",
      bgColor: "bg-[#2d4a3e]",
      textColor: "text-white",
      descColor: "text-white/70",
    },
    {
      icon: <Layout className="w-12 h-12 text-white" strokeWidth={1} />,
      title: "Interface Friendly",
      desc: "No complicated forms or confusing steps. Our platform is designed for simplicity with clear visualizations and step-by-step guidance.",
      bgColor: "bg-[#2d4a3e]",
      textColor: "text-white",
      descColor: "text-white/70",
    },
    {
      icon: <Users className="w-12 h-12 text-white" strokeWidth={1} />,
      title: "Expert Consultation",
      desc: "Connect with professional financial advisers and legal experts to ensure your estate planning aligns with regulations.",
      bgColor: "bg-[#3d5a4e]",
      textColor: "text-white",
      descColor: "text-white/70",
    },
  ];

  return (
    <div className="relative py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-light text-neutral-900 mb-4 leading-tight tracking-tight">
            Why Choose Us?
          </h2>
        </motion.div>

        {/* Features Row */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`${feature.bgColor} rounded-2xl p-8 transition-all duration-300 hover:shadow-xl min-h-[320px] flex flex-col`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
            >
              {/* Visual Element - Mock UI */}
              <div className="mb-6 h-32 bg-white/10 rounded-xl flex items-center justify-center relative overflow-hidden">
                {index === 0 && (
                  <div className="relative">
                    <div className="w-20 h-20 bg-emerald-400/30 rounded-2xl flex items-center justify-center">
                      <Shield className="w-10 h-10 text-emerald-300" strokeWidth={1.5} />
                    </div>
                   
                  </div>
                )}
                {index === 1 && (
                  <div className="w-full h-full p-4 flex flex-col gap-2">
                    <div className="flex gap-2">
                      <div className="flex-1 h-3 bg-white/20 rounded"></div>
                      <div className="flex-1 h-3 bg-white/20 rounded"></div>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-16 h-16 bg-white/30 rounded-lg"></div>
                      <div className="flex-1 space-y-2">
                        <div className="h-2 bg-white/20 rounded"></div>
                        <div className="h-2 bg-white/20 rounded w-3/4"></div>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-auto">
                      <div className="flex-1 h-2 bg-white/20 rounded"></div>
                      <div className="flex-1 h-2 bg-white/20 rounded"></div>
                      <div className="flex-1 h-2 bg-white/20 rounded"></div>
                    </div>
                  </div>
                )}
                {index === 2 && (
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      <div className="w-10 h-10 bg-emerald-300 rounded-full border-2 border-white"></div>
                      <div className="w-10 h-10 bg-emerald-400 rounded-full border-2 border-white"></div>
                      <div className="w-10 h-10 bg-emerald-200 rounded-full border-2 border-white"></div>
                    </div>
                    <div className="text-white/80 text-sm">+24 Experts</div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col">
                <h3 className={`text-xl font-normal ${feature.textColor} mb-3 leading-relaxed`}>
                  {feature.title}
                </h3>
                <p className={`text-sm ${feature.descColor} leading-relaxed`}>
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Features;