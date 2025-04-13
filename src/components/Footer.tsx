"use client";

import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#E1ECFE] text-black">

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 font-manrope">
          <div>
            <h3 className="text-xl font-bold mb-6">About Us</h3>
            <p className="text-gray-700 mb-6">
              Transform your teaching business with our all-in-one platform for coaching institutes, tutors & training centers.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-500" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-500" />
                <span>support@example.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-blue-500" />
                <span>123 Business Avenue, Suite 100, City, State 12345</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "About", "Features", "Pricing", "Contact", "Blog"].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/${item.toLowerCase()}`}
                    className="text-gray-700 hover:text-gray-800 transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Features</h3>
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
                    className="text-gray-700 hover:text-gray-800 transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Newsletter</h3>
            <p className="text-gray-700 mb-4">
              Subscribe to our newsletter for updates and insights.
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded bg-white  text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-blue-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex space-x-6">
              {[
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Youtube, href: "#" },
              ].map(({ icon: Icon, href }, index) => (
                <Link
                  key={index}
                  href={href}
                  className="text-gray-700 hover:text-gray-800 transition-colors duration-200"
                >
                  <Icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
            <p className="text-gray-700 text-sm">
              © {new Date().getFullYear()} LMS. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;