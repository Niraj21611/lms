"use client";

import React, { useEffect, useState } from "react";
import { Variants, motion } from "framer-motion";
import { Award, Sparkles, Star, TrendingUp } from "lucide-react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

interface Course {
  image: string | null;
  courseName: string;
  instructorName: string;
  subscription: {
    price: number;
    planType: "ANNUAL" | "ONE_TIME" | "MONTHLY";
  } | null;
}

const PopularCourses = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch("/api/courses", { method: "GET" });
        const data = await res.json();
        if (data.success) {
          setCourses(data.courses);
        }
      } catch (error) {
        console.error("Failed to fetch courses:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  return (
    <div className="min-h-screen bg-white py-16 px-4 relative overflow-hidden">
      {/* Enhanced Decorative Elements */}

      {/* Floating Stars */}
      <motion.div
        className="absolute top-20 right-1/4 text-yellow-400"
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
        <Star className="w-8 h-8 fill-yellow-400 opacity-50" />
      </motion.div>

      <motion.div
        className="absolute top-1/3 left-16 text-pink-400"
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
        <Star className="w-6 h-6 fill-pink-400 opacity-50" />
      </motion.div>

      {/* Sparkles */}
      <motion.div
        className="absolute bottom-32 left-1/4 text-teal-400"
        animate={{
          scale: [0, 1.2, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Sparkles className="w-7 h-7 opacity-50" />
      </motion.div>

      <motion.div
        className="absolute top-2/3 right-1/4 text-purple-500"
        animate={{
          scale: [0, 1, 0],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <Sparkles className="w-6 h-6 opacity-50" />
      </motion.div>

      {/* Bouncing Circles */}
      <motion.div
        className="absolute top-1/3 left-12 w-20 h-20 bg-purple-200/30 rounded-full"
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
        className="absolute bottom-1/3 right-20 w-24 h-24 bg-teal-200/30 rounded-full"
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
        className="absolute top-1/2 right-12 w-16 h-16 border-4 border-orange-400/40 rounded-lg"
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
        <svg viewBox="0 0 100 100" className="text-pink-400/50">
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
        className="absolute bottom-1/4 right-16 text-purple-500/50"
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
        <TrendingUp className="w-9 h-9" />
      </motion.div>

      <motion.div
        className="absolute top-1/4 right-1/3 text-teal-500/50"
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
        <Award className="w-8 h-8" />
      </motion.div>

      {/* Wavy Lines */}
      <motion.div
        className="absolute top-40 left-1/3 w-28 h-28"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <svg viewBox="0 0 100 100" className="text-orange-400/40">
          <path
            d="M20,50 Q30,20 50,30 T80,50"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-40 right-1/3 w-24 h-24"
        animate={{
          rotate: [0, -360],
          x: [0, -15, 0],
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

      {/* Pulsating Dots */}
      <motion.div
        className="absolute top-1/2 left-1/4 w-4 h-4 bg-teal-600 rounded-full"
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
        className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-purple-600 rounded-full"
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

      <motion.div
        className="absolute top-2/3 left-1/3 w-3 h-3 bg-pink-600 rounded-full"
        animate={{
          scale: [1, 2, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.8,
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <span className="uppercase font-medium text-sm tracking-widest text-neutral-500 mb-4 block">
            Our Courses
          </span>
          <h1 className="text-4xl md:text-5xl font-light text-neutral-900 mb-8 tracking-tight">
            Popular Courses
          </h1>
        </motion.div>

        {/* Loading State */}
        {loading ? (
          <div className="text-center py-20 text-neutral-600">Loading...</div>
        ) : courses.length === 0 ? (
          <div className="text-center py-20">
            <div className="inline-block p-12 bg-white border border-neutral-200">
              <p className="text-neutral-600 text-base mb-6 font-light">
                No courses available at the moment.
              </p>
            </div>
          </div>
        ) : (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {courses.map((course, index) => (
              <motion.div
                key={index}
                className="bg-white border border-neutral-200 overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -4 }}
              >
                {/* Course Image */}
                <div className="relative h-48 overflow-hidden bg-neutral-100">
                  <img
                    src={
                      course.image ||
                      "https://via.placeholder.com/400x300?text=No+Image"
                    }
                    alt={course.courseName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Course Info */}
                <div className="p-6">
                  <h3 className="text-lg font-normal text-neutral-900 mb-2 line-clamp-2 min-h-[3.5rem] leading-relaxed">
                    {course.courseName}
                  </h3>
                  <p className="text-sm text-neutral-600 mb-4 font-light">
                    {course.instructorName}
                  </p>

                  {/* Price and Plan */}
                  {course.subscription ? (
                    <div className="flex items-center gap-3 pt-4 border-t border-neutral-200">
                      <span className="text-xl font-light text-neutral-900">
                        ₹{course.subscription.price}
                      </span>
                      <span className="text-sm text-neutral-500 font-light uppercase">
                        / {course.subscription.planType.toLowerCase()}
                      </span>
                    </div>
                  ) : (
                    <div className="pt-4 border-t border-neutral-200 text-neutral-500 text-sm">
                      No active subscription
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default PopularCourses;
