"use client";

import { Trophy, Users, TrendingUp } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const KnowledgeDeliverySection: React.FC = () => {
  return (
    <div className="relative py-24 px-4 bg-gradient-to-br from-neutral-50 to-white overflow-hidden">
      <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-primary/10 to-teal/10 rounded-full blur-3xl" />
      
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto gap-16">
        {/* Left Column */}
        <motion.div
          className="flex flex-col justify-center w-full md:max-w-xl"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-teal/10 border border-primary/20 text-sm font-medium text-neutral-700 w-fit mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <TrendingUp className="w-4 h-4 text-primary" />
            Knowledge Delivery
          </motion.span>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-neutral-900 mb-6 leading-tight tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Build & Deliver Courses{" "}
            <span className="bg-gradient-to-r from-primary to-teal bg-clip-text text-transparent">
              With Ease
            </span>
          </motion.h2>

          <motion.p
            className="text-lg text-neutral-600 leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Host well-structured & engaging courses for your learners. Enhance learner performance & watch your business grow multifold.
          </motion.p>

          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-neutral-900">10k+</h3>
                  <p className="text-sm text-neutral-600">Active Learners</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal to-teal-light flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-neutral-900">95%</h3>
                  <p className="text-sm text-neutral-600">Success Rate</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="w-full md:max-w-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          <motion.div
            className="relative rounded-3xl overflow-hidden shadow-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={"/images/landing-2.jpg"}
              sizes="100vw"
              className="h-auto w-full object-cover"
              height={600}
              width={800}
              alt="Course delivery platform"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-teal/10" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default KnowledgeDeliverySection;
