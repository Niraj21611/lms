"use client";

import React from "react";
import { Star, ArrowRight, CheckCircle } from "lucide-react";
import RotatingText from "./RotatingText";
import { motion } from "framer-motion";
import Image from "next/image";

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

const Hero: React.FC = () => {
  return (
    <div className="bg-[#1a472a] min-h-[90vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          className="space-y-8"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <motion.div
            className="flex items-center gap-2 bg-white/10 w-fit px-4 py-2 rounded-full"
            custom={0}
            variants={fadeUp}
          >
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>
            <span className="text-white/90 text-sm">
              Trusted by 10,000+ students
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-bold font-plus-jakarta-sans text-white leading-tight"
            custom={1}
            variants={fadeUp}
          >
            <RotatingText /> your training business with{" "}
            <span className="text-emerald-400">ZERO operational hassles</span>
          </motion.h1>

          <motion.p
            className="text-white text-lg md:text-xl max-w-xl font-inter"
            custom={2}
            variants={fadeUp}
          >
            Deliver training programs, convert insights into profit, and build
            lasting learner loyalty—all under your brand
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 font-inter"
            custom={3}
            variants={fadeUp}
          >
            <button className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-semibold flex items-center gap-2 transition-all">
              Get Started Free
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-lg font-semibold transition-all">
              Watch Demo
            </button>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 pt-4 font-manrope"
            custom={4}
            variants={fadeUp}
          >
            {[
              "No credit card required",
              "14-day free trial",
              "Cancel anytime",
            ].map((text, index) => (
              <div key={index} className="flex items-center gap-2 text-white/80">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
                <span>{text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" }}
        >
          <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
              alt="Students learning"
              className="w-full h-full object-cover"
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
          <div className="md:block hidden absolute inset-0 bg-gradient-to-r from-emerald-500/30 to-emerald-700/30 rounded-xl transform translate-x-4 translate-y-4 -z-0"></div>

          <motion.div
            className="md:block hidden absolute -bottom-6 -left-6 z-20 bg-white p-4 rounded-lg shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.6 }}
          >
            <div className="flex items-center gap-4 ">
              <div className="flex -space-x-4">
                {[
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
                  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop",
                  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop",
                ].map((url, index) => (
                  <Image
                    key={index}
                    width={0}
                    height={0}


                    src={url}
                    alt={`Student ${index + 1}`}
                    className="w-10 h-10 rounded-full border-2  border-white object-cover"
                  />
                ))}
              </div>
              <div className="font-inter">
                <p className="font-semibold text-gray-800">
                  Join 10,000+ learners
                </p>
                <p className="text-sm text-gray-600">Start your journey today</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
