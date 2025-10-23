"use client";

import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/10 to-purple/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-gradient-to-br from-teal/10 to-coral/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="mb-4">
              <div className="text-2xl font-display font-bold bg-gradient-to-r from-primary via-teal to-purple bg-clip-text text-transparent">
                LMS
              </div>
            </div>
            <p className="text-neutral-400 mb-6 leading-relaxed text-sm">
              Transform your teaching business with our all-in-one platform for coaching institutes, tutors & training centers.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 group">
                <div className="p-2 bg-gradient-to-br from-primary/20 to-teal/20 rounded-lg">
                  <Phone className="h-4 w-4 text-primary" strokeWidth={1.5} />
                </div>
                <span className="text-neutral-400 text-sm group-hover:text-white transition-colors">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="p-2 bg-gradient-to-br from-purple/20 to-coral/20 rounded-lg">
                  <Mail className="h-4 w-4 text-purple" strokeWidth={1.5} />
                </div>
                <span className="text-neutral-400 text-sm group-hover:text-white transition-colors">support@example.com</span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="p-2 bg-gradient-to-br from-teal/20 to-primary/20 rounded-lg">
                  <MapPin className="h-4 w-4 text-teal" strokeWidth={1.5} />
                </div>
                <span className="text-neutral-400 text-sm group-hover:text-white transition-colors">123 Business Avenue</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-6 font-display">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "About", "Features", "Pricing", "Contact", "Blog"].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/${item.toLowerCase()}`}
                    className="text-neutral-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-200 text-sm"
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
            <h3 className="text-lg font-semibold mb-6 font-display">Features</h3>
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
                    className="text-neutral-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-200 text-sm"
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
            <h3 className="text-lg font-semibold mb-6 font-display">Newsletter</h3>
            <p className="text-neutral-400 mb-4 text-sm">
              Subscribe to our newsletter for updates and insights.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-xl bg-neutral-800/50 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-200 text-sm backdrop-blur-sm"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-primary to-primary-light hover:shadow-lg hover:shadow-primary/50 text-white font-medium py-3 px-4 rounded-xl transition-all duration-300 text-sm"
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: "#", gradient: "from-primary to-teal" },
                { icon: Twitter, href: "#", gradient: "from-teal to-primary" },
                { icon: Linkedin, href: "#", gradient: "from-primary to-purple" },
                { icon: Instagram, href: "#", gradient: "from-purple to-coral" },
                { icon: Youtube, href: "#", gradient: "from-coral to-primary" },
              ].map(({ icon: Icon, href, gradient }, index) => (
                <motion.div key={index} whileHover={{ scale: 1.1, y: -2 }}>
                  <Link
                    href={href}
                    className={`p-2.5 bg-gradient-to-br ${gradient} rounded-xl text-white hover:shadow-lg transition-all duration-200 inline-block`}
                  >
                    <Icon className="h-4 w-4" strokeWidth={1.5} />
                  </Link>
                </motion.div>
              ))}
            </div>
            <p className="text-neutral-400 text-sm">
              © {new Date().getFullYear()} LMS. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
