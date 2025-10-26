"use client";

import React from "react";
import { motion } from "framer-motion";

const UpscaleHero: React.FC = () => {
  return (
    <div className="flex justify-center bg-white py-0 px-4 md:px-8">
      <div className="w-full max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 bg-[#2d4a3e] overflow-hidden">
          {/* Left Content Section */}
          <motion.div
            className="flex flex-col justify-center px-16 md:px-12 py-20 md:py-24"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-5xl text-white font-light leading-tight tracking-tight mb-6">
              Change the way you
              <br />
              <span className="italic font-serif">learn & teach</span>
            </h1>

            <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8 max-w-md">
              Join thousands of educators who choose our platform for transformative and accessible quality education.
            </p>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3.5 bg-white text-neutral-900 rounded-full font-medium text-base transition-all duration-300 w-fit hover:shadow-xl"
            >
              Get Started Now
            </motion.button>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            className="relative bg-[#2d4a3e] flex items-center justify-center overflow-hidden min-h-[400px] md:min-h-[500px]"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Decorative stars */}
            <div className="absolute top-12 right-12 md:top-16 md:right-20">
              <svg width="120" height="60" viewBox="0 0 120 60" fill="none" className="text-white opacity-90">
                <path d="M30 0L35 25L30 50L25 25L30 0Z" fill="currentColor" />
                <path d="M0 30L25 35L50 30L25 25L0 30Z" fill="currentColor" />
                <path d="M90 10L95 25L90 40L85 25L90 10Z" fill="currentColor" />
                <path d="M70 20L85 25L100 20L85 15L70 20Z" fill="currentColor" />
              </svg>
            </div>

            {/* Central curved shape with content */}
            <div className="relative w-full h-full flex items-center justify-center p-8">
              <div className="relative">
                {/* Curved background shape */}
                <svg width="450" height="450" viewBox="0 0 450 450" fill="none" className="absolute -top-24 -left-24 opacity-95">
                  <path d="M225 0C100.736 0 0 100.736 0 225C0 349.264 100.736 450 225 450L225 0Z" fill="#e8e5dc" />
                </svg>

                {/* Learning Dashboard Card */}
                <div className="relative z-10 transform translate-x-16 translate-y-6">
                  {/* Main Dashboard Card */}
                  <div className="w-40 h-60 bg-white rounded-2xl shadow-2xl p-6 relative overflow-hidden">
                    {/* Header with avatar and info */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#2d4a3e] to-[#3d5a4e] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        JD
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="h-2 bg-neutral-200 rounded w-full mb-1.5"></div>
                        <div className="h-1.5 bg-neutral-200 rounded w-2/3"></div>
                      </div>
                    </div>

                    {/* Progress Circle */}
                    <div className="flex justify-center my-6">
                      <div className="relative w-24 h-24">
                        <svg className="transform -rotate-90" width="96" height="96" viewBox="0 0 96 96">
                          <circle cx="48" cy="48" r="40" fill="none" stroke="#f0f0f0" strokeWidth="8"/>
                          <circle cx="48" cy="48" r="40" fill="none" stroke="#f5d76e" strokeWidth="8" strokeDasharray="251.2" strokeDashoffset="62.8" strokeLinecap="round"/>
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-[#2d4a3e]">75%</div>
                            <div className="text-xs text-neutral-500">Complete</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Course modules */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 bg-[#f5d76e] rounded-full flex items-center justify-center flex-shrink-0">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-[#2d4a3e]">
                            <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <div className="h-1.5 bg-[#f5d76e] rounded w-full"></div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 bg-[#f5d76e] rounded-full flex items-center justify-center flex-shrink-0">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-[#2d4a3e]">
                            <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <div className="h-1.5 bg-[#f5d76e] rounded w-4/5"></div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 bg-neutral-200 rounded-full flex-shrink-0"></div>
                        <div className="h-1.5 bg-neutral-200 rounded w-3/5"></div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Achievement Badge */}
                  <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-[#f5d76e] to-[#e5c75e] rounded-full flex items-center justify-center shadow-2xl border-4 border-white">
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" className="text-[#2d4a3e]">
                      <path d="M18 3L21 13L31 14L23 21L25 31L18 26L11 31L13 21L5 14L15 13L18 3Z" fill="currentColor" />
                    </svg>
                  </div>

                  {/* Floating Stats Card */}
                  <div className="absolute -bottom-4 -left-8 bg-white rounded-xl shadow-xl px-5 py-3 border-2 border-[#2d4a3e]">
                    <div className="flex items-center gap-3">
                      <div className="text-center">
                        <div className="text-xl font-bold text-[#2d4a3e]">12</div>
                        <div className="text-xs text-neutral-600">Courses</div>
                      </div>
                      <div className="w-px h-8 bg-neutral-300"></div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-[#2d4a3e]">4.8</div>
                        <div className="text-xs text-neutral-600">Rating</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default UpscaleHero;