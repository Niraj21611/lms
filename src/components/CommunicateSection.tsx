"use client";

import { BarChart, Brain, Target, Users, Zap } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const CommunicateSection: React.FC = () => {
  return (
    <div className="flex justify-center bg-background text-primary-text py-16 px-4 md:px-8 font-plus-jakarta-sans">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl gap-12">
        {/* Text Column */}
        <motion.div
          className="flex flex-col justify-center w-full md:max-w-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className="uppercase font-bold text-green-500 text-xs md:text-sm bg-green-100 w-fit py-1.5 px-3 rounded-sm">
            Communicate efficiently
          </span>

          <motion.p
            className="text-3xl md:text-5xl font-semibold pt-6 md:pt-8 pb-6 md:pb-8 leading-snug md:leading-[3.5rem]"
            variants={fadeUp}
          >
            Enhance learner engagement &{" "}
            <span className="font-bold text-green-600">retention.</span>
          </motion.p>

          <motion.p
            className="font-medium text-base md:text-lg text-gray-700"
            variants={fadeUp}
          >
            Make the most of e-learning by fostering deeper connections, and
            watch retention rates soar. Transform your teaching approach for
            the modern age by ensuring every learner is captivated, committed,
            and coming back for more.
          </motion.p>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 md:mt-8"
            variants={fadeUp}
          >
            {[
              {
                icon: <Target className="w-5 h-5 text-green-600" />,
                value: "95%",
                label: "Completion Rate",
              },
              {
                icon: <Brain className="w-5 h-5 text-green-600" />,
                value: "87%",
                label: "Knowledge Retention",
              },
              {
                icon: <Zap className="w-5 h-5 text-green-600" />,
                value: "2.5x",
                label: "Engagement Boost",
              },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                whileHover={{ scale: 1.03 }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.1 * idx, duration: 0.4 },
                  },
                }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-green-100 rounded-lg">{stat.icon}</div>
                  <h3 className="font-semibold text-2xl">{stat.value}</h3>
                </div>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Feature List */}
          <motion.div className="space-y-4 mt-6 md:mt-8" variants={fadeUp}>
            {[
              {
                icon: <Users className="w-6 h-6 text-green-600" />,
                title: "Interactive Learning Communities",
                desc: "Foster peer-to-peer learning and collaboration",
              },
              {
                icon: <BarChart className="w-6 h-6 text-green-600" />,
                title: "Progress Tracking",
                desc: "Real-time insights into learner performance",
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                className="flex items-center gap-4 bg-white p-4 rounded-xl hover:shadow-md transition-all cursor-pointer group"
                whileHover={{ scale: 1.02 }}
              >
                <div className="p-3 bg-green-100 rounded-xl group-hover:bg-green-200 transition-colors">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Image Column */}
        <motion.div
          className="flex flex-col items-center justify-center bg-white w-full md:max-w-lg p-4 rounded-3xl shadow-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="rounded-xl overflow-hidden w-full"
          >
            <Image
              src={"/images/landing-4.jpg"}
              sizes="100vw"
              className="w-full h-auto object-cover rounded-xl"
              height={0}
              width={0}
              alt="landing-4"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default CommunicateSection;
