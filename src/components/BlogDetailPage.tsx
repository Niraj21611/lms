"use client"

import React from "react";
import { motion } from "framer-motion";
import { Calendar, User, ArrowLeft, Star, Sparkles, Facebook, Twitter, Linkedin, Copy } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

type BlogProps = {
  blog: {
    id: string | number;
    title: string;
    description: string;
    content: string;
    photo?: string | null;
    categoryId?: string;
    createdAt: string;
    authorName: string;
    authorImage?: string;
  };
};

export default function BlogDetailPageClient({ blog }: BlogProps) {
  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = blog.title;
    
    if (platform === 'facebook') {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
    } else if (platform === 'twitter') {
      window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, '_blank');
    } else if (platform === 'linkedin') {
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
    } else if (platform === 'copy') {
      navigator.clipboard.writeText(url);
      alert('Link copied!');
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <motion.div className="absolute top-20 right-1/4 text-yellow-400" animate={{ y: [0, -20, 0], rotate: [0, 180, 360], scale: [1, 1.2, 1] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
        <Star className="w-8 h-8 fill-yellow-400 opacity-40" />
      </motion.div>
      <motion.div className="absolute top-1/3 left-16 text-teal-400" animate={{ y: [0, 15, 0], rotate: [0, -180, -360], scale: [1, 1.3, 1] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
        <Star className="w-6 h-6 fill-teal-400 opacity-40" />
      </motion.div>
      <motion.div className="absolute bottom-32 left-1/4 text-purple-500" animate={{ scale: [0, 1.2, 0], rotate: [0, 180, 360] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
        <Sparkles className="w-7 h-7 opacity-40" />
      </motion.div>
      <motion.div className="absolute top-1/4 left-12 w-20 h-20 bg-teal-200/30 rounded-full" animate={{ y: [0, -25, 0], scale: [1, 1.15, 1] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div className="absolute bottom-1/3 right-16 w-24 h-24 bg-purple-200/30 rounded-full" animate={{ y: [0, 20, 0], x: [0, 10, 0], scale: [1, 1.2, 1] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} />

      <div className="max-w-4xl mx-auto px-4 py-12 relative z-10">
        {/* Back to Articles Button - Top */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link 
            href="/blog" 
            className="inline-flex mt-10 items-center gap-2 px-5 py-2.5 bg-white hover:bg-teal-50 text-slate-700 hover:text-teal-700 font-semibold rounded-xl border-2 border-slate-200 hover:border-teal-300 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Articles
          </Link>
        </motion.div>

        {/* Article */}
        <motion.article className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-slate-200" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          {/* Image */}
          {blog.photo && (
            <motion.div className="relative h-96 overflow-hidden bg-slate-100" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }}>
              <Image src={blog.photo} alt={blog.title} fill className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
              
            </motion.div>
          )}

          {/* Content */}
          <div className="p-8 md:p-12">
            {/* Meta */}
            <motion.div className="flex flex-wrap items-center gap-4 mb-6 pb-6 border-b border-slate-200" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-teal-400 to-blue-500 flex items-center justify-center border-2 border-white shadow-md">
                  {blog.authorImage ? <Image src={blog.authorImage} fill alt={blog.authorName} className="w-full h-full rounded-full object-cover" /> : <User className="w-6 h-6 text-white" />}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{blog.authorName}</p>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <Calendar className="w-3.5 h-3.5 text-teal-600" />
                    <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>

              {/* Share */}
              <div className="ml-auto flex items-center gap-2">
                <span className="text-xs font-semibold text-slate-600 mr-2 hidden sm:block">Share:</span>
                <motion.button onClick={() => handleShare('facebook')} className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Facebook className="w-4 h-4" />
                </motion.button>
                <motion.button onClick={() => handleShare('twitter')} className="p-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Twitter className="w-4 h-4" />
                </motion.button>
                <motion.button onClick={() => handleShare('linkedin')} className="p-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Linkedin className="w-4 h-4" />
                </motion.button>
                <motion.button onClick={() => handleShare('copy')} className="p-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Copy className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
              {blog.title}
            </motion.h1>

            {/* Description */}
            <motion.p className="text-lg text-slate-600 mb-8 leading-relaxed font-medium" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}>
              {blog.description}
            </motion.p>

            {/* Content */}
            <motion.div className="text-base text-slate-700 leading-relaxed space-y-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} dangerouslySetInnerHTML={{ __html: blog.content }} />
          </div>
        </motion.article>

        {/* Bottom Button */}
        <motion.div className="mt-8 text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }}>
          <Link href="/blog" className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
            <ArrowLeft className="w-4 h-4" />
            Read More Articles
          </Link>
        </motion.div>
      </div>
    </div>
  );
}