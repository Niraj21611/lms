"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Star, Users, Sparkles, TrendingUp, Award } from "lucide-react";

const PopularCourses = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Development", "Business", "Design", "Marketing"];

  const categoryColors = {
    Development: {
      bg: "bg-teal-100",
      border: "border-teal-300",
      text: "text-teal-700",
      accent: "bg-teal-500",
    },
    Business: {
      bg: "bg-purple-100",
      border: "border-purple-300",
      text: "text-purple-700",
      accent: "bg-purple-500",
    },
    Design: {
      bg: "bg-pink-100",
      border: "border-pink-300",
      text: "text-pink-700",
      accent: "bg-pink-500",
    },
    Marketing: {
      bg: "bg-orange-100",
      border: "border-orange-300",
      text: "text-orange-700",
      accent: "bg-orange-500",
    },
  };

  const courses = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp 2024",
      instructor: "Fatema fiha",
      price:1300,
      originalPrice: 2000,
      rating: 4.7,
      students: 25145,
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
      category: "Development",
      bestseller: true,
    },
    {
      id: 2,
      title: "Financial Analysis & Investment Management",
      instructor: "Leonel money",
      price: 4000,
      originalPrice: 5000,
      rating: 4.5,
      students: 18230,
      image:
        "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=300&fit=crop",
      category: "Business",
      bestseller: false,
    },
    {
      id: 3,
      title: "UI/UX Design Fundamentals with Figma",
      instructor: "Abrar islam",
      price: 2500,
      originalPrice: 3000,
      rating: 4.8,
      students: 32456,
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
      category: "Design",
      bestseller: true,
    },
    {
      id: 4,
      title: "Python Programming Masterclass",
      instructor: "Sarah Johnson",
      price: 1200,
      originalPrice: 1800,
      rating: 4.6,
      students: 45678,
      image:
        "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=300&fit=crop",
      category: "Development",
      bestseller: true,
    },
    {
      id: 5,
      title: "Digital Marketing Complete Course",
      instructor: "Michael Chen",
      price: 1000,
      originalPrice: 2000,
      rating: 4.4,
      students: 19876,
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      category: "Marketing",
      bestseller: false,
    },
    {
      id: 6,
      title: "Business Strategy & Leadership",
      instructor: "Emma Watson",
      price: 5000,
      originalPrice: 6500,
      rating: 4.7,
      students: 28934,
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop",
      category: "Business",
      bestseller: true,
    },
  ];

  const filteredCourses =
    activeCategory === "All"
      ? courses
      : courses.filter((course) => course.category === activeCategory);

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
              <span className="relative z-10 text-purple-700">courses</span>
              <span className="absolute inset-x-0 bottom-1 h-3 bg-yellow-300/60 -rotate-1"></span>
            </span>
          </motion.h1>

          {/* Category Navigation */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-slate-900 text-white shadow-lg scale-105"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCourses.map((course, index) => {
            const colors = categoryColors[course.category];
            return (
              <motion.div
                key={course.id}
                className={`group bg-white border-2 ${colors.border} rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Course Image */}
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Category Badge */}
                  <div
                    className={`absolute top-3 left-3 px-3 py-1 ${colors.bg} ${colors.text} text-xs font-bold rounded-full`}
                  >
                    {course.category}
                  </div>
                  {/* Bestseller Badge */}
                  {course.bestseller && (
                    <div className="absolute top-3 right-3 px-3 py-1 bg-yellow-400 text-slate-900 text-xs font-bold rounded-full flex items-center gap-1">
                      <Star className="w-3 h-3 fill-slate-900" />
                      Bestseller
                    </div>
                  )}
                </div>

                {/* Course Info */}
                <div className="p-4 relative">
                  {/* Decorative corner */}
                  <div
                    className={`absolute bottom-0 right-0 w-16 h-16 ${colors.bg} opacity-50 rounded-tl-full`}
                  />

                  <h3 className="text-base font-bold text-slate-900 mb-2 line-clamp-2 min-h-12 relative z-10">
                    {course.title}
                  </h3>
                  <p className="text-sm text-slate-600 mb-3 relative z-10">
                    {course.instructor}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3 relative z-10">
                    <span className="text-sm font-bold text-slate-900">
                      {course.rating}
                    </span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3.5 h-3.5 ${
                            i < Math.floor(course.rating)
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-slate-300"
                          }`}
                        />
                      ))}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-slate-500">
                      <Users className="w-3.5 h-3.5" />
                      <span>{course.students.toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-2 relative z-10">
                    <span className="text-xl font-bold text-slate-900">
                      ₹{course.price}
                    </span>
                    <span className="text-sm text-slate-500 line-through">
                      ₹{course.originalPrice}
                    </span>
                    <span
                      className={`ml-auto px-2 py-1 ${colors.accent} text-white text-xs font-bold rounded`}
                    >
                      {Math.round(
                        (1 - course.price / course.originalPrice) * 100
                      )}
                      % OFF
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredCourses.length === 0 && (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block p-8 bg-slate-50 rounded-2xl border-2 border-slate-200">
              <p className="text-slate-600 text-lg mb-4">
                No courses found in this category.
              </p>
              <button
                onClick={() => setActiveCategory("All")}
                className="px-6 py-3 text-sm font-semibold bg-slate-900 text-white hover:bg-slate-800 rounded-full transition-all duration-300 hover:scale-105"
              >
                View All Courses
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default PopularCourses;
