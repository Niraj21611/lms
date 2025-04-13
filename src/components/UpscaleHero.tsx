"use client"

import React from 'react';
// import { motion } from "motion/react"
// import { div } from "framer-motion/client"
import {motion} from "framer-motion"

const UpscaleHero: React.FC = () => {

  return (
    <div
      className="flex flex-col items-center justify-center relative min-h-[600px] bg-cover bg-center bg-no-repeat px-6 md:px-10"
      style={{
        backgroundImage: `url('https://framerusercontent.com/images/txlEA7URXm4l3xykcItSoZzZnEs.png')`,
      }}
    >
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#f7f6f4] to-transparent pointer-events-none" />

      {/* <div className="absolute inset-0 bg-black/40" /> */}

      <div className="text-center justify-center relative z-10 max-w-6xl font-manrope mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-3xl md:text-3xl lg:text-5xl font-plus-jakarta-sans text-indigo-950 font-bold max-w-2xl">
            Upscale Your Training Business Today
          </h1>
          
          <p className="text-xl  md:text-lg text-indigo-950 max-w-2xl leading-relaxed">
            Improve Productivity in Your Training Business <br/> While Delivering
            Educational Excellence!
          </p>

          <div className="flex flex-col items-center justify-center sm:flex-row gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg font-normal text-sm transition-colors duration-200 shadow-lg"
            >
              Book a demo
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-3 bg-transparent hover:bg-white/10 border-2 text-blue-500 border-blue-500 rounded-lg font-normal text-sm transition-colors duration-200"
            >
              Start free trial
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UpscaleHero;