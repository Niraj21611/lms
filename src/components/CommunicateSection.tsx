"use client";

import { BarChart, Brain, Target, Users, Zap } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const CommunicateSection: React.FC = () => {
  return (
    <div className="flex justify-center bg-white py-24 px-4 md:px-8 relative overflow-hidden">
      <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-primary/20 to-teal/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-gradient-to-br from-purple/15 to-primary/15 rounded-full blur-3xl" />
      
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl gap-16 relative z-10">
        <motion.div
          className="flex flex-col justify-center w-full md:max-w-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className="uppercase font-medium text-teal text-xs tracking-wide">
            Communicate Efficiently
          </span>

          <motion.p
            className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold pt-6 pb-8 leading-tight tracking-tight bg-gradient-to-r from-neutral-900 to-neutral-700 bg-clip-text text-transparent"
            variants={fadeUp}
          >
            Enhance learner engagement & retention
          </motion.p>

          <motion.p
            className="font-normal text-lg text-neutral-600 leading-relaxed"
            variants={fadeUp}
          >
            Make the most of e-learning by fostering deeper connections, and watch retention rates soar. Transform your teaching approach for the modern age.
          </motion.p>

          <motion.div
            className="grid grid-cols-3 gap-4 mt-8"
            variants={fadeUp}
          >
            {[
              {
                icon: <Target className="w-5 h-5 text-white" strokeWidth={1.5} />,
                value: "95%",
                label: "Completion",
                gradient: "from-primary to-primary-light",
              },
              {
                icon: <Brain className="w-5 h-5 text-white" strokeWidth={1.5} />,
                value: "87%",
                label: "Retention",
                gradient: "from-teal to-teal-light",
              },
              {
                icon: <Zap className="w-5 h-5 text-white" strokeWidth={1.5} />,
                value: "2.5x",
                label: "Engagement",
                gradient: "from-purple to-purple-light",
              },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-4 rounded-2xl border border-neutral-200 shadow-lg hover:shadow-xl transition-all duration-300"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -4 }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.1 * idx, duration: 0.4 },
                  },
                }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className={`p-2 bg-gradient-to-br ${stat.gradient} rounded-lg`}>{stat.icon}</div>
                </div>
                <h3 className="font-semibold text-xl text-neutral-900">{stat.value}</h3>
                <p className="text-xs text-neutral-600 mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="space-y-4 mt-8" variants={fadeUp}>
            {[
              {
                icon: <Users className="w-6 h-6 text-white" strokeWidth={1.5} />,
                title: "Interactive Learning Communities",
                desc: "Foster peer-to-peer learning and collaboration",
                gradient: "from-primary to-primary-light",
              },
              {
                icon: <BarChart className="w-6 h-6 text-white" strokeWidth={1.5} />,
                title: "Progress Tracking",
                desc: "Real-time insights into learner performance",
                gradient: "from-teal to-teal-light",
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                className="flex items-center gap-4 p-5 rounded-2xl bg-neutral-50 border border-neutral-200 hover:bg-white hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.02, x: 8 }}
              >
                <div className={`p-3 bg-gradient-to-br ${feature.gradient} rounded-xl shadow-lg`}>
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900">{feature.title}</h3>
                  <p className="text-neutral-600">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-col items-center justify-center w-full md:max-w-lg rounded-3xl overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={"/images/landing-4.jpg"}
            sizes="100vw"
            className="w-full h-auto object-cover rounded-3xl shadow-xl"
            height={600}
            width={800}
            alt="Learning engagement"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default CommunicateSection;
