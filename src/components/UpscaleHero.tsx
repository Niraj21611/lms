"use client";

import React from "react";
import { motion } from "framer-motion";

const UpscaleHero: React.FC = () => {
  return (
    <div
      className="flex flex-col items-center justify-center relative min-h-[600px] bg-cover bg-center bg-no-repeat px-4 sm:px-6 lg:px-12 text-center"
      style={{
        backgroundImage: `url('https://framerusercontent.com/images/txlEA7URXm4l3xykcItSoZzZnEs.png')`,
      }}
    >
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#f7f6f4] to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto space-y-6 font-manrope">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-plus-jakarta-sans text-indigo-950 font-bold leading-tight">
            Transform Learning, Inspire Growth
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-indigo-950 max-w-2xl mx-auto mt-4 leading-relaxed">
            Deliver quality education, boost student confidence, and help every
            learner reach their true potential.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg font-medium text-sm transition-colors duration-200 shadow-lg w-full sm:w-auto"
            >
              Join our academy
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-3 border-2 border-blue-500 text-blue-500 hover:bg-blue-50 rounded-lg font-medium text-sm transition-colors duration-200 w-full sm:w-auto"
            >
              Explore programs
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UpscaleHero;
