"use client";

import Link from "next/link";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Variants, motion } from "framer-motion";
import { useState } from "react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log("Subscribed:", email);
    setEmail("");
  };

  return (
    <footer className="bg-neutral-50 text-neutral-900 border-t border-neutral-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-neutral-200">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="mb-6">
              <div className="text-2xl font-light tracking-tight text-neutral-900">
                LMS
              </div>
            </div>
            <p className="text-neutral-600 mb-8 leading-relaxed text-sm">
              Transform your teaching business with our all-in-one platform for
              coaching institutes, tutors & training centers.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-neutral-900" strokeWidth={1} />
                <span className="text-neutral-600 text-sm">
                  +1 (555) 123-4567
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-neutral-900" strokeWidth={1} />
                <span className="text-neutral-600 text-sm">
                  support@example.com
                </span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-neutral-900" strokeWidth={1} />
                <span className="text-neutral-600 text-sm">
                  123 Business Avenue
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3 className="text-sm font-medium uppercase tracking-widest mb-6 text-neutral-500">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {["Home", "About", "Features", "Pricing", "Contact", "Blog"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase()}`}
                      className="text-neutral-600 hover:text-neutral-900 transition-colors duration-200 text-sm font-light"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3 className="text-sm font-medium uppercase tracking-widest mb-6 text-neutral-500">
              Features
            </h3>
            <ul className="space-y-3">
              {[
                "Online Classes",
                "Student Management",
                "Payment Gateway",
                "Mobile App",
                "Reports & Analytics",
                "Marketing Tools",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href={`/features/${item.toLowerCase().replace(/ /g, "-")}`}
                    className="text-neutral-600 hover:text-neutral-900 transition-colors duration-200 text-sm font-light"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3 className="text-sm font-medium uppercase tracking-widest mb-6 text-neutral-500">
              Newsletter
            </h3>
            <p className="text-neutral-600 mb-6 text-sm leading-relaxed font-light">
              Subscribe to our newsletter for updates and insights.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-neutral-300 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-900 transition-all duration-200 text-sm"
              />
              <motion.button
                onClick={handleSubscribe}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-neutral-900 hover:bg-neutral-800 text-white font-normal py-3 px-4 transition-all duration-300 text-sm"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>

        <div className="pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-neutral-500 text-sm font-light order-2 md:order-1">
              © {new Date().getFullYear()} LMS. All rights reserved.
            </p>
            <div className="flex space-x-3 order-1 md:order-2">
              {[
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Youtube, href: "#" },
              ].map(({ icon: Icon, href }, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={href}
                    className="w-9 h-9 border border-neutral-300 flex items-center justify-center text-neutral-600 hover:text-neutral-900 hover:border-neutral-900 transition-all duration-200"
                  >
                    <Icon className="h-4 w-4" strokeWidth={1} />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
