"use client";

import {
  Brain,
  Target,
  Zap,
  Star,
  Award,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import { Variants, motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";

const fadeUp: Variants = {
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
      {/* Decorative Animated Elements - Medium Density */}

      {/* Floating Stars */}
      <motion.div
        className="absolute top-24 right-1/4 text-yellow-400"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Star className="w-7 h-7 fill-yellow-400" />
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 left-16 text-teal-400"
        animate={{
          y: [0, 15, 0],
          rotate: [0, -180, -360],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Star className="w-6 h-6 fill-teal-400" />
      </motion.div>

      {/* Bouncing Circles */}
      <motion.div
        className="absolute top-32 left-20 w-20 h-20 bg-purple-300/30 rounded-full"
        animate={{
          y: [0, -25, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-40 right-1/4 w-24 h-24 bg-teal-300/30 rounded-full"
        animate={{
          y: [0, 20, 0],
          x: [0, 10, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Rotating Shapes */}
      <motion.div
        className="absolute top-1/2 right-12 w-16 h-16 border-4 border-purple-400/40 rounded-lg"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 left-1/4 w-14 h-14"
        animate={{
          rotate: [0, -360],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <svg viewBox="0 0 100 100" className="text-blue-400/50">
          <polygon
            points="50,15 90,85 10,85"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
          />
        </svg>
      </motion.div>

      {/* Floating Icons */}
      <motion.div
        className="absolute top-1/3 left-12 text-teal-500/60"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 15, -15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Award className="w-9 h-9" />
      </motion.div>

      <motion.div
        className="absolute bottom-1/2 right-20 text-purple-500/60"
        animate={{
          y: [0, 15, 0],
          rotate: [0, -15, 15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <TrendingUp className="w-8 h-8" />
      </motion.div>

      {/* Wavy Line */}
      <motion.div
        className="absolute top-40 left-1/3 w-28 h-28"
        animate={{
          rotate: [0, 360],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg viewBox="0 0 100 100" className="text-teal-400/40">
          <path
            d="M20,50 Q30,20 50,30 T80,50"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>

      {/* Pulsating Dots */}
      <motion.div
        className="absolute top-2/3 right-1/3 w-3 h-3 bg-purple-600 rounded-full"
        animate={{
          scale: [1, 2, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-teal-600 rounded-full"
        animate={{
          scale: [1, 2, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl gap-16 relative z-10">
        <motion.div
          className="flex flex-col justify-center w-full md:max-w-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100 border-2 border-teal-300 text-sm font-semibold text-teal-700 uppercase tracking-wide w-fit mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Sparkles className="w-4 h-4 text-teal-600" />
            Communicate Efficiently
          </motion.span>

          <motion.p
            className="text-4xl md:text-5xl lg:text-6xl font-bold pt-2 pb-8 leading-tight tracking-tight text-slate-900"
            variants={fadeUp}
          >
            Enhance learner{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-purple-700">engagement</span>
              <span className="absolute inset-x-0 bottom-2 h-3 bg-teal-300/60 -rotate-1"></span>
            </span>{" "}
            & retention
          </motion.p>

          <motion.p
            className="font-normal text-lg text-slate-600 leading-relaxed"
            variants={fadeUp}
          >
            Make the most of e-learning by fostering deeper connections, and
            watch retention rates soar. Transform your teaching approach for the
            modern age.
          </motion.p>

          <motion.div className="grid grid-cols-3 gap-4 mt-8" variants={fadeUp}>
            {[
              {
                icon: (
                  <Target className="w-5 h-5 text-white" strokeWidth={1.5} />
                ),
                value: "95%",
                label: "Completion",
                color: "teal",
                bgColor: "bg-teal-500",
                borderColor: "border-teal-200",
              },
              {
                icon: (
                  <Brain className="w-5 h-5 text-white" strokeWidth={1.5} />
                ),
                value: "87%",
                label: "Retention",
                color: "blue",
                bgColor: "bg-blue-500",
                borderColor: "border-blue-200",
              },
              {
                icon: <Zap className="w-5 h-5 text-white" strokeWidth={1.5} />,
                value: "2.5x",
                label: "Engagement",
                color: "purple",
                bgColor: "bg-purple-500",
                borderColor: "border-purple-200",
              },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                className={`bg-white p-4 rounded-2xl border-2 ${stat.borderColor} shadow-lg hover:shadow-xl transition-all duration-300`}
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
                  <div className={`p-2 ${stat.bgColor} rounded-lg shadow-md`}>
                    {stat.icon}
                  </div>
                </div>
                <h3 className="font-semibold text-xl text-slate-900">
                  {stat.value}
                </h3>
                <p className="text-xs text-slate-600 mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* <motion.div className="space-y-4 mt-8" variants={fadeUp}>
            {[
              {
                icon: (
                  <Users className="w-6 h-6 text-white" strokeWidth={1.5} />
                ),
                title: "Interactive Learning Communities",
                desc: "Foster peer-to-peer learning and collaboration",
                color: "teal",
                bgColor: "bg-teal-500",
                borderColor: "border-teal-200",
                accentBg: "bg-teal-100/60",
              },
              {
                icon: (
                  <BarChart className="w-6 h-6 text-white" strokeWidth={1.5} />
                ),
                title: "Progress Tracking",
                desc: "Real-time insights into learner performance",
                color: "blue",
                bgColor: "bg-blue-500",
                borderColor: "border-blue-200",
                accentBg: "bg-blue-100/60",
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                className={`group relative flex flex-col gap-2 p-5 rounded-2xl bg-white border-2 ${feature.borderColor} hover:shadow-xl transition-all duration-300 overflow-hidden`}
                whileHover={{ scale: 1.02, x: 8 }}
              >
                {/* Background decoration on hover */}
                {/* <motion.div
                  className={`absolute -top-10 -right-10 w-32 h-32 ${feature.accentBg} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <div className="relative z-10">
                  <h3 className="font-semibold text-slate-900 text-lg mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600">{feature.desc}</p>
                </div>
              </motion.div> */}
            {/* ))} */}
          {/* </motion.div>  */}
        </motion.div>

        <motion.div
          className="flex flex-col items-center justify-center w-full md:max-w-lg rounded-3xl overflow-hidden relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          whileHover={{ scale: 1.02, rotate: 1 }}
          transition={{ duration: 0.3 }}
        >
          {/* Decorative elements around image */}
          <motion.div
            className="absolute -top-4 -right-4 w-12 h-12 bg-purple-300/60 rounded-full z-0"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="absolute -bottom-4 -left-4 w-14 h-14 bg-teal-300/60 rounded-full z-0"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />

          {/* Floating sparkle near image */}
          <motion.div
            className="absolute top-12 -left-8 text-yellow-400 z-0"
            animate={{
              scale: [0.8, 1.2, 0.8],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Sparkles className="w-6 h-6" />
          </motion.div>

          <div className="w-full h-full">
            <Player
              autoplay
              loop
              src="/animation-4.json"
              style={{ width: "90%", height: "90%" }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CommunicateSection;
