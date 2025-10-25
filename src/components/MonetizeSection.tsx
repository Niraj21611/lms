"use client";

import { Star, Award, BookOpen } from "lucide-react";
import { Variants, motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

const MonetizeSection: React.FC = () => {
  return (
    <div className="flex justify-center bg-white py-24 px-4 md:px-8 relative overflow-hidden">
      {/* Animated Dotted Background */}
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="dot-pattern-monetize"
              x="0"
              y="0"
              width="30"
              height="30"
              patternUnits="userSpaceOnUse"
            >
              <motion.circle
                cx="2"
                cy="2"
                r="1.5"
                fill="#f97316"
                initial={{ opacity: 1.0 }}
                animate={{ opacity: [0.5, 1.0, 0.5] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dot-pattern-monetize)" />
        </svg>
      </div>

      {/* Decorative Animated Elements - Less Dense */}

      {/* Floating Star */}
      <motion.div
        className="absolute top-20 right-1/4 text-orange-400"
        animate={{
          y: [0, -15, 0],
          rotate: [0, 180, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Star className="w-7 h-7 fill-orange-400" />
      </motion.div>

      {/* Bouncing Circle */}
      <motion.div
        className="absolute top-32 left-16 w-20 h-20 bg-purple-300/30 rounded-full"
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

      {/* Rotating Square */}
      <motion.div
        className="absolute bottom-40 left-1/4 w-16 h-16 border-4 border-orange-400/40 rounded-lg"
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

      {/* Wavy Path */}
      <motion.div
        className="absolute top-1/3 left-12 w-24 h-24"
        animate={{
          rotate: [0, -360],
          x: [0, 15, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg viewBox="0 0 100 100" className="text-purple-400/40">
          <path
            d="M20,50 Q30,20 50,30 T80,50"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>

      {/* Floating Icon */}
      <motion.div
        className="absolute bottom-1/3 right-20 text-purple-500/50"
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

      {/* Dashed Circle */}
      <motion.div
        className="absolute top-1/2 right-16 w-20 h-20 border-3 border-dashed border-orange-400/40 rounded-full"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Small Book Icon */}
      <motion.div
        className="absolute bottom-20 left-1/3 text-orange-500/50"
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
        <BookOpen className="w-8 h-8" />
      </motion.div>

      {/* Pulsating Dot */}
      <motion.div
        className="absolute top-2/3 left-20 w-3 h-3 bg-purple-500 rounded-full"
        animate={{
          scale: [1, 2, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl gap-16 relative z-10">
        <motion.div
          className="flex flex-col items-center justify-center w-full md:max-w-lg rounded-3xl overflow-hidden relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          whileHover={{ scale: 1.02, rotate: -1 }}
          transition={{ duration: 0.3 }}
        >
          {/* Decorative elements around image */}
          <motion.div
            className="absolute -top-4 -left-4 w-10 h-10 bg-orange-300/60 rounded-full z-0"
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

          <div className="w-full h-full">
            <Player
              autoplay
              loop
              src="/animation-3.json"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col justify-center w-full md:max-w-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border-2 border-orange-200 text-sm font-semibold text-orange-600 uppercase tracking-wide w-fit mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Empower Young Minds
          </motion.span>

          <motion.p
            className="text-4xl md:text-5xl lg:text-6xl font-bold pt-2 pb-8 leading-tight tracking-tight text-slate-900"
            variants={fadeInUp}
          >
            Build a coaching academy that{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-purple-700">
                guides students
              </span>
              <span className="absolute inset-x-0 bottom-2 h-3 bg-orange-300/60 -rotate-1"></span>
            </span>{" "}
            to excel
          </motion.p>

          <motion.p
            className="font-normal text-lg text-slate-600 leading-relaxed"
            variants={fadeInUp}
          >
            Foster confidence, develop skills, and deliver a personalized
            learning experience designed for success in India&apos;s competitive
            education landscape.
          </motion.p>

          {/* <motion.div
            className="grid grid-cols-1 gap-4 pt-8"
            variants={fadeInUp}
          >
            {[
              {
                icon: (
                  <Globe className="w-6 h-6 text-white" strokeWidth={1.5} />
                ),
                title: "Expert Faculty",
                desc: "Learn from India's top educators",
                color: "orange",
                bgColor: "bg-orange-500",
                borderColor: "border-orange-200",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className={`flex items-start gap-4 p-5 rounded-2xl bg-white border-2 ${item.borderColor} hover:shadow-xl transition-all duration-300`}
                whileHover={{ scale: 1.02, y: -4 }}
              >
                <div className={`p-3 ${item.bgColor} rounded-xl shadow-lg`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 text-lg">
                    {item.title}
                  </h3>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div> */}

          <motion.div
            className="flex flex-col sm:flex-row sm:items-center gap-4 pt-8"
            variants={fadeInUp}
          >
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <motion.img
                  key={i}
                  width={40}
                  height={40}
                  src={`https://i.pravatar.cc/40?img=${i}`}
                  alt={`User ${i}`}
                  className="w-10 h-10 rounded-full border-2 border-white shadow-md"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
                />
              ))}
            </div>
            <div>
              <p className="font-semibold text-slate-900 text-sm">
                Trusted by 1,000+ creators
              </p>
              <div className="flex items-center text-yellow-400 text-sm mt-1">
                {"★".repeat(5)}
                <span className="text-slate-600 ml-2">4.9/5</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default MonetizeSection;
