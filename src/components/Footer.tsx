"use client";

import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Mail, Phone, MapPin, Star, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribed:', email);
    setEmail('');
  };

  return (
    <footer className="bg-white text-slate-900 relative overflow-hidden">
      {/* Animated Dotted Background */}
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="dot-pattern-footer"
              x="0"
              y="0"
              width="30"
              height="30"
              patternUnits="userSpaceOnUse"
            >
              <motion.circle
                cx="2"
                cy="2"
                r="1.5"
                fill="#14b8a6"
                initial={{ opacity: 1.0 }}
                animate={{ opacity: [0.5, 1.0, 0.5] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dot-pattern-footer)" />
        </svg>
      </div>

      {/* Minimal Decorative Elements */}
      <motion.div
        className="absolute top-20 right-1/4 text-yellow-400"
        animate={{
          y: [0, -15, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Star className="w-6 h-6 fill-yellow-400 opacity-40" />
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-1/4 text-teal-500"
        animate={{
          scale: [0, 1, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Sparkles className="w-6 h-6 opacity-40" />
      </motion.div>

      <motion.div
        className="absolute top-1/3 left-12 w-16 h-16 bg-teal-200/30 rounded-full"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-16 w-20 h-20 bg-orange-200/30 rounded-full"
        animate={{
          y: [0, 15, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="mb-4">
              <div className="text-2xl font-bold text-teal-700">
                Raah Academy
              </div>
            </div>
            <p className="text-slate-600 mb-6 leading-relaxed text-sm">
              Transform your teaching business with our all-in-one platform for coaching institutes, tutors & training centers.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="p-2 bg-teal-100 rounded-lg border-2 border-teal-200 group-hover:bg-teal-200 transition-colors">
                  <Phone className="h-4 w-4 text-teal-700" strokeWidth={1.5} />
                </div>
                <span className="text-slate-600 text-sm group-hover:text-slate-900 transition-colors">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="p-2 bg-purple-100 rounded-lg border-2 border-purple-200 group-hover:bg-purple-200 transition-colors">
                  <Mail className="h-4 w-4 text-purple-700" strokeWidth={1.5} />
                </div>
                <span className="text-slate-600 text-sm group-hover:text-slate-900 transition-colors">support@example.com</span>
              </div>
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="p-2 bg-blue-100 rounded-lg border-2 border-blue-200 group-hover:bg-blue-200 transition-colors">
                  <MapPin className="h-4 w-4 text-blue-700" strokeWidth={1.5} />
                </div>
                <span className="text-slate-600 text-sm group-hover:text-slate-900 transition-colors">123 Business Avenue</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-6 text-slate-900">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "About", "Features", "Pricing", "Contact", "Blog"].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/${item.toLowerCase()}`}
                    className="text-slate-600 hover:text-teal-700 hover:translate-x-1 inline-block transition-all duration-200 text-sm font-medium"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-6 text-slate-900">Features</h3>
            <ul className="space-y-3">
              {[
                "Online Classes",
                "Student Management",
                "Payment Gateway",
                "Mobile App",
                "Reports & Analytics",
                "Marketing Tools"
              ].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/features/${item.toLowerCase().replace(/ /g, "-")}`}
                    className="text-slate-600 hover:text-teal-700 hover:translate-x-1 inline-block transition-all duration-200 text-sm font-medium"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold mb-6 text-slate-900">Newsletter</h3>
            <p className="text-slate-600 mb-4 text-sm">
              Subscribe to our newsletter for updates and insights.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-xl bg-white border-2 border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-all duration-200 text-sm"
              />
              <motion.button
                onClick={handleSubscribe}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-teal-600 hover:bg-teal-700 hover:shadow-lg hover:shadow-teal-600/30 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 text-sm"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-300">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: "#", color: "bg-blue-600 hover:bg-blue-700" },
                { icon: Twitter, href: "#", color: "bg-sky-500 hover:bg-sky-600" },
                { icon: Linkedin, href: "#", color: "bg-blue-700 hover:bg-blue-800" },
                { icon: Instagram, href: "#", color: "bg-pink-600 hover:bg-pink-700" },
                { icon: Youtube, href: "#", color: "bg-red-600 hover:bg-red-700" },
              ].map(({ icon: Icon, href, color }, index) => (
                <motion.div 
                  key={index} 
                  whileHover={{ scale: 1.1, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={href}
                    className={`p-2.5 ${color} rounded-xl text-white hover:shadow-lg transition-all duration-200 inline-block`}
                  >
                    <Icon className="h-4 w-4" strokeWidth={1.5} />
                  </Link>
                </motion.div>
              ))}
            </div>
            <p className="text-slate-600 text-sm">
              © {new Date().getFullYear()} Raah Academy. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;