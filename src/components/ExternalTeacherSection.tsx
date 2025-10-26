"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Award, Globe, ArrowRight, BookOpen } from "lucide-react";

const ExternalTeacherSection: React.FC = () => {
  return (
    <div className="relative py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-xs font-medium text-slate-600 uppercase tracking-widest">
              <Users className="w-3.5 h-3.5" strokeWidth={1} />
              For Educators
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-light text-slate-900 mb-6 leading-tight tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Join as an External Teacher
          </motion.h2>

          <motion.p
            className="text-base text-slate-600 leading-relaxed"
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
          className="relative bg-gradient-to-br from-slate-100 to-slate-50 p-12 md:p-16 text-center overflow-hidden max-w-4xl mx-auto border border-slate-200 rounded-3xl shadow-sm"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-light text-slate-900 mb-4 tracking-tight">
              Ready to Share Your Knowledge?
            </h3>
            <p className="text-base text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join our community of expert educators and start making a
              difference in students' lives today.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <motion.button
                className="group px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-normal flex items-center justify-center gap-2 transition-all duration-300 rounded-full shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Apply Now
                <ArrowRight
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                  strokeWidth={1.5}
                />
              </motion.button>
              <motion.button
                className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 font-normal transition-all duration-300 border border-slate-300 rounded-full shadow-sm hover:shadow-md"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Learn More
              </motion.button>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-slate-400/5 rounded-full blur-3xl"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default ExternalTeacherSection;
