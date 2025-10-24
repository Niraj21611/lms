"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Award, Globe, ArrowRight, BookOpen } from "lucide-react";

const ExternalTeacherSection: React.FC = () => {
  return (
    <div className="relative py-20 px-4 bg-neutral-50">
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
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-neutral-200 text-xs font-medium text-neutral-600 uppercase tracking-wider">
              <Users className="w-3.5 h-3.5" />
              For Educators
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-normal text-neutral-900 mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Join as an External Teacher
          </motion.h2>

          <motion.p
            className="text-base text-neutral-600 leading-relaxed"
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

        {/* Benefits Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-4 mb-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {[
            {
              icon: <Globe className="w-7 h-7" strokeWidth={1.5} />,
              title: "Global Reach",
              desc: "Teach students from anywhere in the world",
              bgColor: "bg-white",
            },
            {
              icon: <Award className="w-7 h-7" strokeWidth={1.5} />,
              title: "Flexible Schedule",
              desc: "Create courses on your own timeline",
              bgColor: "bg-white",
            },
            {
              icon: <BookOpen className="w-7 h-7" strokeWidth={1.5} />,
              title: "Full Support",
              desc: "Access to teaching tools and resources",
              bgColor: "bg-white",
            },
          ].map((benefit, index) => (
            <motion.div
              key={index}
              className={`${benefit.bgColor} rounded-3xl p-8 transition-all duration-300 hover:shadow-lg border border-neutral-200`}
              whileHover={{ y: -4 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
            >
              <div className="text-neutral-900 mb-6">{benefit.icon}</div>
              <h3 className="text-xl font-normal text-neutral-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {benefit.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="relative bg-emerald-900 rounded-3xl p-12 md:p-16 text-center overflow-hidden max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-normal text-white mb-4">
              Ready to Share Your Knowledge?
            </h3>
            <p className="text-base text-emerald-100 mb-10 max-w-2xl mx-auto">
              Join our community of expert educators and start making a
              difference in students' lives today.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <motion.button
                className="group px-8 py-4 bg-white hover:bg-neutral-50 text-neutral-900 rounded-full font-medium flex items-center justify-center gap-2 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Apply Now
                <ArrowRight
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                  strokeWidth={2}
                />
              </motion.button>
              <motion.button
                className="px-8 py-4 bg-transparent hover:bg-white/10 text-white rounded-full font-medium transition-all duration-300 border border-white/30"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Learn More
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ExternalTeacherSection;
