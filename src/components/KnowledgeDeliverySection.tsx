"use client";

import { Trophy, Users, TrendingUp } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const KnowledgeDeliverySection: React.FC = () => {
  return (
    <div className="relative py-20 px-4 bg-white">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto gap-12">
        {/* Left Column */}
        <motion.div
          className="flex flex-col justify-center w-full md:max-w-lg"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-neutral-200 text-xs font-medium text-neutral-600 uppercase tracking-wider w-fit mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <TrendingUp className="w-3.5 h-3.5" />
            Knowledge Delivery
          </motion.span>

          <motion.h2
            className="text-4xl md:text-5xl font-normal text-neutral-900 mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Build & Deliver Courses With Ease
          </motion.h2>

          <motion.p
            className="text-base text-neutral-600 leading-relaxed mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Host well-structured & engaging courses for your learners. Enhance learner performance & watch your business grow multifold.
          </motion.p>

          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="rounded-3xl p-6 transition-all duration-300 bg-emerald-900">
              <div className="flex flex-col ">
                <div className="text-neutral-50 mb-4">
                  <Users className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-3xl font-normal text-neutral-50 mb-1">10k+</h3>
                  <p className="text-sm text-neutral-300">Active Learners</p>
                </div>
              </div>
            </div>
            <div className="bg-neutral-100 rounded-3xl p-6 hover:bg-neutral-100 transition-all duration-300">
              <div className="flex flex-col">
                <div className="text-neutral-900 mb-4">
                  <Trophy className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-3xl font-normal text-neutral-900 mb-1">95%</h3>
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
            className="relative rounded-3xl overflow-hidden shadow-lg"
            whileHover={{ scale: 1.01 }}
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
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default KnowledgeDeliverySection;