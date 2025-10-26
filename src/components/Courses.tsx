"use client";

import React, { useState } from "react";
import { Variants, motion } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const PopularCourses = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Development", "Business", "Design", "Marketing"];

  const courses = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp 2024",
      instructor: "Fatema fiha",
      price: 17.99,
      originalPrice: 114.99,
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
      price: 17.99,
      originalPrice: 114.99,
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
      price: 17.99,
      originalPrice: 114.99,
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
      price: 17.99,
      originalPrice: 109.99,
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
      price: 17.99,
      originalPrice: 99.99,
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
      price: 17.99,
      originalPrice: 119.99,
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
    <div className="bg-neutral-50 py-24 px-4">
      <div className="max-w-7xl mx-auto">
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
            Popular courses
          </h1>

          {/* Category Navigation */}
          <div className="flex flex-wrap gap-6 border-b border-neutral-200 pb-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-sm font-light transition-all duration-300 ${
                  activeCategory === category
                    ? "text-neutral-900 border-b-2 border-neutral-900 -mb-4 pb-4"
                    : "text-neutral-600 hover:text-neutral-900 pb-4"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Courses Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {filteredCourses.map((course, index) => (
            <motion.div
              key={course.id}
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
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {course.bestseller && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-neutral-900 text-white text-xs font-normal px-3 py-1 uppercase tracking-wider">
                      Bestseller
                    </span>
                  </div>
                )}
              </div>

              {/* Course Info */}
              <div className="p-6">
                <h3 className="text-lg font-normal text-neutral-900 mb-2 line-clamp-2 min-h-[3.5rem] leading-relaxed">
                  {course.title}
                </h3>
                <p className="text-sm text-neutral-600 mb-4 font-light">
                  {course.instructor}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-sm font-normal text-neutral-900">
                    {course.rating}
                  </span>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-3.5 h-3.5 fill-current text-neutral-900"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs text-neutral-500 font-light">
                    ({course.students.toLocaleString()})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-3 pt-4 border-t border-neutral-200">
                  <span className="text-xl font-light text-neutral-900">
                    €{course.price}
                  </span>
                  <span className="text-sm text-neutral-400 line-through font-light">
                    €{course.originalPrice}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-20">
            <div className="inline-block p-12 bg-white border border-neutral-200">
              <p className="text-neutral-600 text-base mb-6 font-light">
                No courses found in this category.
              </p>
              <button
                onClick={() => setActiveCategory("All")}
                className="px-8 py-3 text-sm font-normal bg-neutral-900 text-white hover:bg-neutral-800 transition-colors"
              >
                View All Courses
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PopularCourses;
