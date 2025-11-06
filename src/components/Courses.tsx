"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Star,
  Sparkles,
  Award,
  TrendingUp,
  Users,
  BookOpen,
  Play,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";

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
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/course`,
          {
            method: "GET",
          }
        );
        const data = await res.json();
        console.log("Fetched courses:", data);
        if (data.success) {
          // Limit to 8 courses
          setCourses(data.courses.slice(0, 8));
        }
      } catch (error) {
        console.error("Failed to fetch courses:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  const planColors = {
    ANNUAL: {
      bg: "bg-teal-500",
      light: "bg-teal-100",
      border: "border-teal-300",
    },
    MONTHLY: {
      bg: "bg-purple-500",
      light: "bg-purple-100",
      border: "border-purple-300",
    },
    ONE_TIME: {
      bg: "bg-orange-500",
      light: "bg-orange-100",
      border: "border-orange-300",
    },
  };

  return (
    <div id="courses" className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-white py-20 px-4 relative overflow-hidden">
      {/* Enhanced Decorative Elements */}

      {/* Floating Stars */}
      <motion.div
        className="absolute top-20 right-1/4 text-yellow-400"
        animate={{ y: [0, -20, 0], rotate: [0, 180, 360], scale: [1, 1.3, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Star className="w-9 h-9 fill-yellow-400 opacity-50" />
      </motion.div>

      <motion.div
        className="absolute top-1/3 left-16 text-pink-400"
        animate={{ y: [0, 15, 0], rotate: [0, -180, -360], scale: [1, 1.2, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Star className="w-7 h-7 fill-pink-400 opacity-50" />
      </motion.div>

      {/* Sparkles */}
      <motion.div
        className="absolute bottom-32 left-1/4 text-teal-500"
        animate={{ scale: [0, 1.2, 0], rotate: [0, 180, 360] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Sparkles className="w-8 h-8 opacity-50" />
      </motion.div>

      <motion.div
        className="absolute top-2/3 right-1/4 text-purple-500"
        animate={{ scale: [0, 1, 0], rotate: [0, -180, -360] }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <Sparkles className="w-7 h-7 opacity-50" />
      </motion.div>

      {/* Bouncing Circles */}
      <motion.div
        className="absolute top-1/4 left-12 w-24 h-24 bg-purple-300/30 rounded-full"
        animate={{ y: [0, -30, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-1/3 right-20 w-28 h-28 bg-teal-300/30 rounded-full"
        animate={{ y: [0, 25, 0], x: [0, 15, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute top-1/2 right-12 w-20 h-20 bg-orange-200/30 rounded-full"
        animate={{ x: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Rotating Shapes */}
      <motion.div
        className="absolute top-1/3 right-16 w-16 h-16 border-4 border-teal-400/40 rounded-lg"
        animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="absolute bottom-1/4 left-1/4 w-14 h-14"
        animate={{ rotate: [0, -360], scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
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
        animate={{ y: [0, -20, 0], rotate: [0, 15, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <TrendingUp className="w-10 h-10" />
      </motion.div>

      <motion.div
        className="absolute top-1/4 right-1/3 text-teal-500/50"
        animate={{ y: [0, 15, 0], rotate: [0, -15, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Award className="w-9 h-9" />
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 left-16 text-orange-500/50"
        animate={{ y: [0, 20, 0], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <BookOpen className="w-8 h-8" />
      </motion.div>

      {/* Wavy Lines */}
      <motion.div
        className="absolute top-40 left-1/3 w-28 h-28"
        animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
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
        animate={{ scale: [1, 2, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-purple-600 rounded-full"
        animate={{ scale: [1, 2, 1], opacity: [0.5, 1, 0.5] }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100 border-2 border-teal-300 text-xs font-bold text-teal-700 mb-4 uppercase tracking-wide">
              <Award className="w-3.5 h-3.5" />
              Top Rated Courses
            </span>
          </motion.div>

          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Popular{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-purple-700">Courses</span>
              <motion.span
                className="absolute inset-x-0 bottom-1 h-3 bg-yellow-300/60 -rotate-1"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
              />
            </span>
          </motion.h1>

          <motion.p
            className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover our most loved courses designed to accelerate your learning
            journey
          </motion.p>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="text-center text-slate-500 py-20 text-lg">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="inline-block"
            >
              <Sparkles className="w-8 h-8 text-teal-600" />
            </motion.div>
            <p className="mt-4">Loading courses...</p>
          </div>
        ) : courses.length === 0 ? (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="inline-block p-8 bg-white rounded-2xl border-2 border-slate-200 shadow-lg">
              <p className="text-slate-600 text-lg">
                No courses available at the moment.
              </p>
            </div>
          </motion.div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {courses.map((course, index) => {
              const planType = course.subscription?.planType || "ONE_TIME";
              const colors = planColors[planType];

              return (
                <motion.div
                  key={index}
                  className={`group bg-white border-2 ${colors.border} rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer relative`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  {/* Background decoration on hover */}
                  <motion.div
                    className={`absolute -top-10 -right-10 w-24 h-24 ${colors.light} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Image */}
                  <div className="relative h-36 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                    <Image
                      src={
                        course.image
                          ? `${process.env.NEXT_PUBLIC_API_URL}${course.image}`
                          : "/default.png"
                      }
                      alt={course.courseName}
                      width={300}
                      height={200}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <motion.div
                        className={`w-12 h-12 rounded-full ${colors.bg} flex items-center justify-center shadow-xl`}
                        whileHover={{ scale: 1.1 }}
                      >
                        <Play
                          className="w-5 h-5 text-white ml-0.5"
                          fill="white"
                        />
                      </motion.div>
                    </div>

                    {/* Plan Badge */}
                    {course.subscription && (
                      <div
                        className={`absolute top-2 right-2 px-2 py-1 ${colors.bg} text-white text-[10px] font-bold rounded-full uppercase shadow-md`}
                      >
                        {course.subscription.planType}
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="p-3.5 relative">
                    {/* Decorative corner */}
                    <div
                      className={`absolute bottom-0 right-0 w-16 h-16 ${colors.light} opacity-30 rounded-tl-full`}
                    />

                    <h3 className="text-sm font-bold text-slate-900 mb-1.5 line-clamp-2 min-h-10 relative z-10 leading-snug group-hover:text-purple-700 transition-colors">
                      {course.courseName}
                    </h3>

                    <div className="flex items-center gap-1.5 mb-3 text-xs text-slate-600 relative z-10">
                      <Users className="w-3.5 h-3.5 text-teal-600 flex-shrink-0" />
                      <p className="font-medium truncate">
                        {course.instructorName}
                      </p>
                    </div>

                    {course.subscription ? (
                      <div className="flex items-center justify-between relative z-10">
                        <div className="flex items-baseline gap-0.5">
                          <span className="text-lg font-bold text-slate-900">
                            ₹{course.subscription.price}
                          </span>
                          <span className="text-[10px] text-slate-500 uppercase">
                            /
                            {course.subscription.planType === "ANNUAL"
                              ? "yr"
                              : course.subscription.planType === "MONTHLY"
                              ? "mo"
                              : "once"}
                          </span>
                        </div>
                        <motion.button
                          className={`px-3 py-1.5 ${colors.bg} text-white rounded-lg text-xs font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity shadow-md`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Enroll
                          <ArrowRight className="w-3 h-3" />
                        </motion.button>
                      </div>
                    ) : (
                      <div className="flex items-center justify-between relative z-10">
                        <span
                          className={`px-3 py-1.5 ${
                            colors.light
                          } ${colors.bg.replace(
                            "bg-",
                            "text-"
                          )} rounded-lg text-xs font-bold`}
                        >
                          FREE
                        </span>
                        <motion.button
                          className={`px-3 py-1.5 ${colors.bg} text-white rounded-lg text-xs font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity shadow-md`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Start
                          <ArrowRight className="w-3 h-3" />
                        </motion.button>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default PopularCourses;
