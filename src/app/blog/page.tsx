"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Tag,
  User,
  ArrowRight,
  Star,
  Sparkles,
  TrendingUp,
  Award,
} from "lucide-react";

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "General education",
    "Teaching Tips",
    "Student Success",
    "Technology",
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Hiring for Curiosity, not just qualifications",
      excerpt:
        "Hiring for curiosity means prioritizing candidates who show eagerness to learn, adapt, and explore new ideas.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
      category: "General education",
      date: "8/18/2025",
      author: "Dr.Preeti Desai",
      authorImage: "https://i.pravatar.cc/150?img=1",
    },
    {
      id: 2,
      title: "Parenting in the age of Surveillance Tech",
      excerpt:
        "Parenting with surveillance tech means balancing your child's safety with their privacy and independence.",
      image:
        "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=800&h=600&fit=crop",
      category: "General education",
      date: "8/18/2025",
      author: "Dr.Preeti Desai",
      authorImage: "https://i.pravatar.cc/150?img=2",
    },
    {
      id: 3,
      title: "Assessment through Art, not Answers",
      excerpt:
        "Assessment through Art, not Answers Instead of tests alone, students can show learning through creative projects.",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
      category: "General education",
      date: "8/18/2025",
      author: "Dr.Preeti Desai",
      authorImage: "https://i.pravatar.cc/150?img=3",
    },
    {
      id: 4,
      title: "The Silent Curriculum: What Children Learn From Tone",
      excerpt:
        "Children absorb more from how we speak than what we say. Tone shapes their understanding of emotions and relationships.",
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop",
      category: "Teaching Tips",
      date: "8/17/2025",
      author: "Dr.Preeti Desai",
      authorImage: "https://i.pravatar.cc/150?img=4",
    },
    {
      id: 5,
      title: "Building Critical Thinking in Young Learners",
      excerpt:
        "Discover strategies to help students develop analytical skills and question the world around them.",
      image:
        "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=600&fit=crop",
      category: "Student Success",
      date: "8/16/2025",
      author: "Sarah Johnson",
      authorImage: "https://i.pravatar.cc/150?img=5",
    },
    {
      id: 6,
      title: "Technology in Modern Classrooms",
      excerpt:
        "Exploring how digital tools enhance learning experiences while maintaining human connection.",
      image:
        "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800&h=600&fit=crop",
      category: "Technology",
      date: "8/15/2025",
      author: "Michael Chen",
      authorImage: "https://i.pravatar.cc/150?img=6",
    },
  ];

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  return (
    <div className="min-h-screen bg-white relative overflow-hidden mt-10">
      {/* Decorative Elements */}
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
        className="absolute top-1/3 left-16 text-teal-400"
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
        <Star className="w-6 h-6 fill-teal-400 opacity-50" />
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-1/4 text-purple-500"
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
        className="absolute top-2/3 right-20 text-orange-500"
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

      <motion.div
        className="absolute top-1/4 left-12 w-20 h-20 bg-teal-200/30 rounded-full"
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
        className="absolute bottom-1/3 right-16 w-24 h-24 bg-purple-200/30 rounded-full"
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

      <motion.div
        className="absolute bottom-1/4 left-1/3 text-purple-500/50"
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

      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100 border-2 border-teal-300 text-sm font-semibold text-teal-700 mb-4">
              <Sparkles className="w-4 h-4" />
              Our Blog
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Latest{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-purple-700">Insights</span>
              <span className="absolute inset-x-0 bottom-2 h-3 bg-yellow-300/60 -rotate-1"></span>
            </span>
          </motion.h1>

          <motion.p
            className="text-lg text-slate-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore articles on education, teaching strategies, and student
            success
          </motion.p>

          {/* Category Navigation */}
          {/* <motion.div
            className="flex flex-wrap justify-center gap-3 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
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
          </motion.div> */}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="group bg-white border-2 border-slate-200 rounded-2xl overflow-hidden hover:shadow-2xl hover:border-teal-300 transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Category Badge */}
                <div className="absolute top-3 left-3 px-3 py-1 bg-yellow-400 text-slate-900 text-xs font-bold rounded-full flex items-center gap-1">
                  <Tag className="w-3 h-3" />
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Date */}
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                  <Calendar className="w-3.5 h-3.5 text-teal-600" />
                  <span>{post.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2 min-h-14 group-hover:text-teal-700 transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Author */}
                <div className="flex items-center justify-between pt-3 border-t border-slate-200">
                  <div className="flex items-center gap-2">
                    <img
                      src={post.authorImage}
                      alt={post.author}
                      className="w-8 h-8 rounded-full border-2 border-teal-200"
                    />
                    <div>
                      <div className="flex items-center gap-1 text-xs text-slate-500">
                        <User className="w-3 h-3" />
                        <span className="font-medium text-slate-700">
                          {post.author}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Read More Button */}
                  <motion.button
                    className="flex items-center gap-1 text-sm font-semibold text-teal-700 group-hover:gap-2 transition-all"
                    whileHover={{ x: 2 }}
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>

              {/* Decorative corner */}
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-teal-100 opacity-0 group-hover:opacity-50 rounded-tl-full transition-opacity duration-300" />
            </motion.article>
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block p-8 bg-slate-50 rounded-2xl border-2 border-slate-200">
              <p className="text-slate-600 text-lg mb-4">
                No blog posts found in this category.
              </p>
              <button
                onClick={() => setActiveCategory("All")}
                className="px-6 py-3 text-sm font-semibold bg-slate-900 text-white hover:bg-slate-800 rounded-full transition-all duration-300 hover:scale-105"
              >
                View All Posts
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
