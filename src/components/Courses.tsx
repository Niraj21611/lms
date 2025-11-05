"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star, Sparkles, Award, TrendingUp } from "lucide-react";
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
      {/* Floating Stars & Shapes */}
      <motion.div
        className="absolute top-20 right-1/4 text-yellow-400"
        animate={{ y: [0, -20, 0], rotate: [0, 180, 360], scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Star className="w-8 h-8 fill-yellow-400 opacity-50" />
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 right-20 w-24 h-24 bg-teal-200/30 rounded-full"
        animate={{ y: [0, 20, 0], x: [0, 10, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute top-1/3 left-12 w-20 h-20 bg-purple-200/30 rounded-full"
        animate={{ y: [0, -25, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute top-1/4 right-1/3 text-teal-500/50"
        animate={{ y: [0, 15, 0], rotate: [0, -15, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Award className="w-8 h-8" />
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 right-16 text-purple-500/50"
        animate={{ y: [0, -20, 0], rotate: [0, 15, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <TrendingUp className="w-9 h-9" />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100 border-2 border-teal-300 text-sm font-semibold text-teal-700 mb-4">
              <Award className="w-4 h-4" />
              Top Rated
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Popular{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-purple-700">Courses</span>
              <span className="absolute inset-x-0 bottom-1 h-3 bg-yellow-300/60 -rotate-1"></span>
            </span>
          </motion.h1>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="text-center text-slate-500 py-16 text-lg">
            Loading courses...
          </div>
        ) : courses.length === 0 ? (
          <div className="text-center text-slate-600 py-20">
            No courses found.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                className="group bg-white border-2 border-slate-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={
                      course.image
                        ? `${process.env.NEXT_PUBLIC_API_URL}${course.image}`
                        : "/default.png"
                    }
                    alt={course.courseName}
                    width={400}
                    height={300}
                    className="object-cover rounded-xl"
                  />
                </div>

                {/* Info */}
                <div className="p-4 relative">
                  <h3 className="text-lg font-bold text-slate-900 mb-1 line-clamp-2">
                    {course.courseName}
                  </h3>
                  <p className="text-sm text-slate-600 mb-3">
                    {course.instructorName}
                  </p>

                  {course.subscription ? (
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold text-slate-900">
                        ₹{course.subscription.price}
                      </span>
                      <span className="text-sm text-slate-500 uppercase">
                        / {course.subscription.planType.toLowerCase()}
                      </span>
                    </div>
                  ) : (
                    <p className="text-slate-500 text-sm">Free </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PopularCourses;
