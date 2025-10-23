"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

const UpscaleHero: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center relative py-32 px-4 sm:px-6 lg:px-12 text-center bg-gradient-to-br from-neutral-50 via-white to-neutral-50 overflow-hidden">
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/20 to-teal/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-gradient-to-br from-purple/20 to-coral/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-4xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-teal/10 border border-primary/20 text-sm font-medium text-primary mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Sparkles className="w-4 h-4" />
            <span>Revolutionize Your Learning Experience</span>
          </motion.div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl text-neutral-900 font-display font-bold leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-primary via-purple to-teal bg-clip-text text-transparent">
              Transform Learning,
            </span>
            <br />
            Inspire Growth
          </h1>

          <p className="text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto mt-6 leading-relaxed">
            Deliver quality education, boost student confidence, and help every learner reach their true potential with our cutting-edge platform.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 text-white bg-gradient-to-r from-primary to-primary-light hover:shadow-2xl hover:shadow-primary/50 rounded-2xl font-medium text-base transition-all duration-300 w-full sm:w-auto shadow-lg flex items-center justify-center gap-2"
            >
              Join our academy
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-neutral-300 text-neutral-900 hover:bg-white hover:shadow-xl rounded-2xl font-medium text-base transition-all duration-300 w-full sm:w-auto backdrop-blur-sm"
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
              { label: "Active Students", value: "50K+" },
              { label: "Expert Instructors", value: "200+" },
              { label: "Success Rate", value: "95%" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-primary to-teal bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-neutral-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default UpscaleHero;
