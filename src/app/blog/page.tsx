"use client";

import React, { useState, useEffect } from "react";
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
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

type Blog = {
  id: string | number;
  title: string;
  description: string;
  photo?: string | null;
  categoryId?: string;
  authorName: string;
  slugUrl: string;
  createdAt: string;
};

type ApiResponse = {
  blogs: Blog[];
  pagination: { page: number; pageCount: number; pageSize: number; total: number };
};

const BlogPage = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    setLoading(true);

    async function fetchBlogs() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/blog?page=${page}`,
          { cache: "no-store" }
        );
        if (!res.ok) throw new Error("Failed to fetch blogs");
        const data: ApiResponse = await res.json();
        if (!mounted) return;
        setBlogs(data.blogs || []);
        setPageCount(data.pagination?.pageCount || 1);
      } catch (error) {
        console.error(error);
        if (!mounted) return;
        setBlogs([]);
        setPageCount(1);
      } finally {
        if (!mounted) return;
        setLoading(false);
      }
    }

    fetchBlogs();
    return () => {
      mounted = false;
    };
  }, [page]);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
            Explore articles on education, teaching strategies, and student success
          </motion.p>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="text-center py-20">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="inline-block"
            >
              <Sparkles className="w-8 h-8 text-teal-600" />
            </motion.div>
            <p className="mt-4 text-slate-600">Loading blogs...</p>
          </div>
        ) : blogs.length === 0 ? (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block p-8 bg-slate-50 rounded-2xl border-2 border-slate-200">
              <p className="text-slate-600 text-lg">No blog posts found.</p>
            </div>
          </motion.div>
        ) : (
          <>
            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {blogs.map((post, index) => (
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
                      src={post.photo || "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop"}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Category Badge */}
                    {post.categoryId && (
                      <div className="absolute top-3 left-3 px-3 py-1 bg-yellow-400 text-slate-900 text-xs font-bold rounded-full flex items-center gap-1">
                        <Tag className="w-3 h-3" />
                        {post.categoryId}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    {/* Date */}
                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                      <Calendar className="w-3.5 h-3.5 text-teal-600" />
                      <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2 min-h-14 group-hover:text-teal-700 transition-colors">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                      {post.description}
                    </p>

                    {/* Author */}
                    <div className="flex items-center justify-between pt-3 border-t border-slate-200">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center border-2 border-teal-200">
                          <User className="w-4 h-4 text-teal-700" />
                        </div>
                        <div>
                          <div className="flex items-center gap-1 text-xs">
                            <span className="font-medium text-slate-700">
                              {post.authorName}
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

            {/* Pagination */}
            {pageCount > 1 && (
              <motion.div
                className="flex justify-center items-center gap-2 mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Previous Button */}
                <motion.button
                  onClick={() => handlePageChange(page - 1)}
                  disabled={page === 1}
                  className={`p-2 rounded-lg border-2 transition-all duration-300 ${
                    page === 1
                      ? "border-slate-200 text-slate-400 cursor-not-allowed"
                      : "border-teal-300 text-teal-700 hover:bg-teal-50"
                  }`}
                  whileHover={page !== 1 ? { scale: 1.05 } : {}}
                  whileTap={page !== 1 ? { scale: 0.95 } : {}}
                >
                  <ChevronLeft className="w-5 h-5" />
                </motion.button>

                {/* Page Numbers */}
                <div className="flex gap-2">
                  {Array.from({ length: pageCount }, (_, i) => i + 1).map((pageNum) => (
                    <motion.button
                      key={pageNum}
                      onClick={() => handlePageChange(pageNum)}
                      className={`w-10 h-10 rounded-lg border-2 font-semibold text-sm transition-all duration-300 ${
                        page === pageNum
                          ? "bg-teal-600 border-teal-600 text-white shadow-lg"
                          : "border-slate-200 text-slate-700 hover:border-teal-300 hover:bg-teal-50"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {pageNum}
                    </motion.button>
                  ))}
                </div>

                {/* Next Button */}
                <motion.button
                  onClick={() => handlePageChange(page + 1)}
                  disabled={page === pageCount}
                  className={`p-2 rounded-lg border-2 transition-all duration-300 ${
                    page === pageCount
                      ? "border-slate-200 text-slate-400 cursor-not-allowed"
                      : "border-teal-300 text-teal-700 hover:bg-teal-50"
                  }`}
                  whileHover={page !== pageCount ? { scale: 1.05 } : {}}
                  whileTap={page !== pageCount ? { scale: 0.95 } : {}}
                >
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </motion.div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default BlogPage;