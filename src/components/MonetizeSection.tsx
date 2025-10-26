"use client";

import { Globe, Smartphone, ArrowUpRight } from "lucide-react";
import { Variants, motion } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const MonetizeSection: React.FC = () => {
  return (
    <div className="flex justify-center bg-neutral-50 py-24 px-4 md:px-8">
      <div className="flex flex-col items-start w-full max-w-7xl gap-12">
        <motion.div
          className="flex flex-col w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <span className="uppercase font-medium text-sm tracking-widest text-neutral-500 mb-4">
            Empower Young Minds
          </span>

          <h2 className="text-4xl md:text-5xl font-light leading-tight tracking-tight text-neutral-900 max-w-2xl">
            Build a coaching academy that guides students to excel
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <motion.div
            className="flex flex-col justify-between p-8 rounded-none bg-white border border-neutral-200 min-h-[280px] group hover:bg-neutral-900 transition-all duration-500"
            variants={fadeInUp}
          >
            <div>
              <div className="w-14 h-14 mb-6 flex items-center justify-center">
                <Globe className="w-10 h-10 text-neutral-900 group-hover:text-white transition-colors duration-500" strokeWidth={1} />
              </div>
              <h3 className="text-xl font-normal text-neutral-900 mb-3 group-hover:text-white transition-colors duration-500">
                Expert Faculty
              </h3>
              <p className="text-neutral-600 leading-relaxed group-hover:text-neutral-300 transition-colors duration-500">
                Learn from India's top educators
              </p>
            </div>
            <div className="mt-6">
              <div className="w-10 h-10 rounded-full border border-neutral-300 group-hover:border-white flex items-center justify-center group-hover:bg-white transition-all duration-500">
                <ArrowUpRight className="w-5 h-5 text-neutral-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500" strokeWidth={1.5} />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col justify-between p-8 rounded-none bg-white border border-neutral-200 min-h-[280px] group hover:bg-neutral-900 transition-all duration-500"
            variants={fadeInUp}
          >
            <div>
              <div className="w-14 h-14 mb-6 flex items-center justify-center">
                <Smartphone className="w-10 h-10 text-neutral-900 group-hover:text-white transition-colors duration-500" strokeWidth={1} />
              </div>
              <h3 className="text-xl font-normal text-neutral-900 mb-3 group-hover:text-white transition-colors duration-500">
                Comprehensive Study Material
              </h3>
              <p className="text-neutral-600 leading-relaxed group-hover:text-neutral-300 transition-colors duration-500">
                Covering every concept in detail
              </p>
            </div>
            <div className="mt-6">
              <div className="w-10 h-10 rounded-full border border-neutral-300 group-hover:border-white flex items-center justify-center group-hover:bg-white transition-all duration-500">
                <ArrowUpRight className="w-5 h-5 text-neutral-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500" strokeWidth={1.5} />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col justify-between p-8 rounded-none bg-[#e8e5dc] border border-neutral-200 min-h-[280px]"
            variants={fadeInUp}
          >
            <div>
              <div className="w-14 h-14 mb-6 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full border-2 border-neutral-900"></div>
              </div>
              <h3 className="text-xl font-normal text-neutral-900 mb-3">
                Foster confidence, develop skills
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                Deliver a personalized learning experience designed for success in India's competitive education landscape.
              </p>
            </div>
            <div className="mt-6">
              <div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center">
                <ArrowUpRight className="w-5 h-5 text-white" strokeWidth={1.5} />
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row sm:items-center gap-4 pt-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map((i) => (
              <img
                key={i}
                width={40}
                height={40}
                src={`https://i.pravatar.cc/40?img=${i}`}
                alt={`User ${i}`}
                className="w-10 h-10 rounded-full border-2 border-white shadow-md"
              />
            ))}
          </div>
          <div>
            <p className="font-medium text-neutral-900 text-sm">
              Trusted by 1,000+ creators
            </p>
            <div className="flex items-center text-yellow-400 text-sm mt-1">
              {"★".repeat(5)}
              <span className="text-neutral-600 ml-2">4.9/5</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MonetizeSection;