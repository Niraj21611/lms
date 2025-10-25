"use client";

import { Trophy, Users, TrendingUp, Sparkles, Star, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";

const KnowledgeDeliverySection: React.FC = () => {
  return (
    <div className="relative py-24 px-4 bg-white overflow-hidden">
      {/* Playful Animated Decorative Elements */}

      {/* Bouncing circles */}
      <motion.div
        className="absolute top-20 left-10 w-16 h-16 bg-teal-400/20 rounded-full"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-32 right-16 w-20 h-20 border-4 border-orange-300/40 rounded-full"
        animate={{
          rotate: [0, 180, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating stars */}
      <motion.div
        className="absolute top-1/4 right-1/4"
        animate={{
          y: [0, -15, 0],
          rotate: [0, 360],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Star className="w-8 h-8 text-yellow-400/60 fill-yellow-400/40" />
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 left-20"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -360],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Sparkles className="w-10 h-10 text-teal-400/50 fill-teal-400/30" />
      </motion.div>

      <motion.div
        className="absolute top-2/3 right-12"
        animate={{
          y: [0, -25, 0],
          x: [0, 10, 0],
          rotate: [0, 180, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Zap className="w-7 h-7 text-orange-400/60 fill-orange-400/40" />
      </motion.div>

      {/* Playful shapes */}
      <motion.div
        className="absolute bottom-40 right-1/3 w-24 h-24 bg-purple-300/20 rounded-full"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/4 w-14 h-14 border-3 border-blue-400/30 rounded-lg"
        animate={{
          rotate: [45, -45, 45],
          x: [0, 15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Squiggly lines */}
      <motion.div
        className="absolute top-40 left-1/3"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          className="text-teal-400/40"
        >
          <path
            d="M10,30 Q20,10 30,20 T50,30"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 left-1/2"
        animate={{
          y: [0, -15, 0],
          rotate: [0, -180, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          className="text-orange-400/50"
        >
          <path
            d="M5,25 Q15,5 25,15 Q35,25 45,15"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>

      {/* Small dots dancing around */}
      <motion.div
        className="absolute top-1/3 left-16 w-3 h-3 bg-pink-400 rounded-full"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/2 right-20 w-4 h-4 bg-blue-400 rounded-full"
        animate={{
          y: [0, 25, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-3/4 left-1/3 w-3 h-3 bg-yellow-400 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Triangle */}
      <motion.div
        className="absolute bottom-32 left-1/4"
        animate={{
          rotate: [0, 120, 240, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          className="text-purple-400/40"
        >
          <polygon
            points="20,5 35,35 5,35"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
          />
        </svg>
      </motion.div>

      {/* Plus signs */}
      <motion.div
        className="absolute top-1/2 right-1/4 text-teal-400/50 text-3xl font-bold"
        animate={{
          rotate: [0, 90, 180, 270, 360],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        +
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 right-12 text-orange-400/50 text-2xl font-bold"
        animate={{
          rotate: [0, -90, -180, -270, -360],
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        +
      </motion.div>

      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto gap-16 relative z-10">
        {/* Left Column */}
        <motion.div
          className="flex flex-col justify-center w-full md:max-w-xl"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 border-2 border-teal-200 text-sm font-medium text-teal-700 w-fit mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <TrendingUp className="w-4 h-4 text-teal-600" />
            Knowledge Delivery
          </motion.span>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Build & Deliver Courses{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-teal-600">With Ease</span>
              <motion.span
                className="absolute inset-x-0 bottom-2 h-3 bg-teal-300/60"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
              />
            </span>
          </motion.h2>

          <motion.p
            className="text-lg text-slate-600 leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Host well-structured & engaging courses for your learners. Enhance
            learner performance & watch your business grow multifold.
          </motion.p>

          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <motion.div
              className="bg-white rounded-2xl p-6 border-2 border-teal-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="absolute -top-8 -right-8 w-24 h-24 bg-teal-100 rounded-full opacity-50"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-teal-500 flex items-center justify-center shadow-lg">
                  <Users className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">10k+</h3>
                  <p className="text-sm text-slate-600">Active Learners</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-6 border-2 border-orange-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="absolute -top-8 -right-8 w-24 h-24 bg-orange-100 rounded-full opacity-50"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center shadow-lg">
                  <Trophy className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">95%</h3>
                  <p className="text-sm text-slate-600">Success Rate</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="w-full md:max-w-lg relative"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          {/* Floating decorative elements around image */}
          <motion.div
            className="absolute -top-6 -left-6 w-12 h-12 bg-teal-400/30 rounded-full"
            animate={{
              y: [0, -10, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="absolute -bottom-4 -right-4 w-16 h-16 bg-orange-400/30 rounded-full"
            animate={{
              y: [0, 10, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="absolute top-1/2 -right-8"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Star className="w-6 h-6 text-yellow-400/70 fill-yellow-400/50" />
          </motion.div>

          {/* <motion.div
            className="relative rounded-3xl overflow-hidden shadow-2xl"
            whileHover={{ scale: 1.02, rotate: 1 }}
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
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/10 via-transparent to-orange-500/10" />
          </motion.div> */}
          <div className="w-full h-full">
            <Player
              autoplay
              loop
              src="/animation-2.json"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default KnowledgeDeliverySection;
