"use client";

import { Globe, Smartphone } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const MonetizeSection: React.FC = () => {
  return (
    <div className="flex justify-center bg-neutral-50 py-24 px-4 md:px-8 relative overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-coral/20 to-coral-light/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple/20 to-purple-light/20 rounded-full blur-3xl" />
      
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl gap-16 relative z-10">
        <motion.div
          className="flex flex-col items-center justify-center w-full md:max-w-lg rounded-3xl overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={"/images/landing-3.jpg"}
            sizes="100vw"
            className="w-full h-auto object-cover rounded-3xl shadow-xl"
            height={600}
            width={800}
            alt="Student coaching"
          />
        </motion.div>

        <motion.div
          className="flex flex-col justify-center w-full md:max-w-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <span className="uppercase font-medium text-primary text-xs tracking-wide">
            Empower Young Minds
          </span>

          <motion.p
            className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold pt-6 pb-8 leading-tight tracking-tight bg-gradient-to-r from-neutral-900 to-neutral-700 bg-clip-text text-transparent"
            variants={fadeInUp}
          >
            Build a coaching academy that guides students to excel
          </motion.p>

          <motion.p
            className="font-normal text-lg text-neutral-600 leading-relaxed"
            variants={fadeInUp}
          >
            Foster confidence, develop skills, and deliver a personalized learning experience designed for success in India's competitive education landscape.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 gap-4 pt-8"
            variants={fadeInUp}
          >
            {[
              {
                icon: <Globe className="w-6 h-6 text-white" strokeWidth={1.5} />,
                title: "Expert Faculty",
                desc: "Learn from India's top educators",
                gradient: "from-coral to-coral-light",
              },
              {
                icon: <Smartphone className="w-6 h-6 text-white" strokeWidth={1.5} />,
                title: "Comprehensive Study Material",
                desc: "Covering every concept in detail",
                gradient: "from-purple to-purple-light",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-neutral-200 hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.02, y: -4 }}
              >
                <div className={`p-3 bg-gradient-to-br ${item.gradient} rounded-xl shadow-lg`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900">{item.title}</h3>
                  <p className="text-neutral-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row sm:items-center gap-4 pt-8"
            variants={fadeInUp}
          >
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <Image
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
              <p className="font-semibold text-neutral-900 text-sm">
                Trusted by 1,000+ creators
              </p>
              <div className="flex items-center text-yellow-400 text-sm mt-1">
                {"★".repeat(5)}
                <span className="text-neutral-600 ml-2">4.9/5</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default MonetizeSection;
