"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Features: React.FC = () => {
  return (
    <div className="text-center bg-background py-16 px-4 sm:px-6 md:px-10 lg:px-16">
      <motion.span
        className="text-blue-500 text-sm sm:text-md font-inter tracking-wider uppercase bg-blue-100 px-4 py-2 rounded-full inline-block"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        custom={0}
      >
        Features
      </motion.span>

      <motion.h2
        className="text-3xl sm:text-4xl lg:text-5xl font-semibold mt-6 mb-4 font-manrope text-gray-900 leading-tight"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        custom={1}
      >
        Integrated Training Suite
      </motion.h2>

      <motion.p
        className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto font-manrope px-2"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        custom={2}
      >
        Break Free from Software Overload:{" "}
        <span className="text-blue-500 font-semibold">
          No more juggling Multiple Tools!
        </span>
      </motion.p>
    </div>
  );
};

export default Features;
