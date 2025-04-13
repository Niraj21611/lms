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
    <div className="text-center bg-background py-20">
      <motion.span
        className="text-blue-500 text-md font-inter tracking-wider uppercase bg-blue-100 px-4 py-2 rounded-full inline-block"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        custom={0}
      >
        Features
      </motion.span>

      <motion.h2
        className="text-4xl font-semibold mt-6 mb-4 font-manrope text-gray-900"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        custom={1}
      >
        Integrated Training Suite
      </motion.h2>

      <motion.p
        className="text-lg text-gray-600 max-w-2xl mx-auto font-manrope"
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
