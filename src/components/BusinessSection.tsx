"use client";

import {
  ChevronLeft,
  ChevronRight,
  Clock,
  Lightbulb,
  LineChart,
  PieChart,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

const BusinessSection: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Software Developer",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      quote:
        "EduFlow transformed my career. The courses are incredibly well-structured and the mentorship is outstanding.",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "UX Designer",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      quote:
        "The practical projects and real-world applications have helped me build a portfolio that stands out.",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Data Scientist",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      quote:
        "The community support and expert guidance have been invaluable in my learning journey.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="flex justify-center bg-background text-primary-text pt-24 font-plus-jakarta-sans">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl gap-12 px-6">
        <motion.div
          className="flex flex-col items-center justify-center w-full max-w-lg space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden rounded-4xl shadow-xl"
          >
            <Image
              src={"/images/landing-5.jpg"}
              sizes="100vw"
              height={0}
              width={0}
              className="h-auto w-auto rounded-4xl"
              alt="landing-5"
            />
          </motion.div>

          <div className="bg-white p-6 rounded-2xl shadow-lg relative w-full max-w-md">
            <motion.p className="text-md italic text-gray-700 min-h-[96px]" key={currentIndex}>
              “{testimonials[currentIndex].quote}”
            </motion.p>
            <div className="flex items-center gap-3 mt-4">
              <Image
                src={testimonials[currentIndex].image}
                width={40}
                height={40}
                alt={testimonials[currentIndex].name}
                className="rounded-full"
              />
              <div>
                <p className="font-semibold text-sm">{testimonials[currentIndex].name}</p>
                <p className="text-xs text-gray-500">{testimonials[currentIndex].role}</p>
              </div>
            </div>
            <div className="absolute top-1/2 -left-6 transform -translate-y-1/2">
              <button onClick={prevSlide}>
                <ChevronLeft className="w-6 h-6 text-indigo-500 hover:text-indigo-700" />
              </button>
            </div>
            <div className="absolute top-1/2 -right-6 transform -translate-y-1/2">
              <button onClick={nextSlide}>
                <ChevronRight className="w-6 h-6 text-indigo-500 hover:text-indigo-700" />
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col justify-center w-full max-w-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className="uppercase font-bold text-indigo-500 text-sm bg-indigo-100 w-fit py-2 px-3 rounded-sm">
            Business Intelligence & Productivity
          </span>
          <p className="text-5xl font-semibold pt-8 pb-6 leading-tight">
            Streamline operations with{" "}
            <span className="text-indigo-600 font-bold">robust tools.</span>
          </p>
          <p className="font-medium text-gray-700">
            Save time & money with automation and advanced reporting. Let our business
            intelligence guide your way to success by transforming raw data into
            actionable strategies.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-8">
            {[
              {
                icon: <TrendingUp className="w-6 h-6 text-indigo-600" />,
                stat: "32%",
                desc: "Efficiency Increase",
              },
              {
                icon: <Clock className="w-6 h-6 text-indigo-600" />,
                stat: "15hrs",
                desc: "Time Saved Weekly",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all group cursor-pointer"
                custom={i}
                variants={fadeUp}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-indigo-100 rounded-xl group-hover:bg-indigo-200 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{item.stat}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div className="space-y-4 mt-8">
            {[
              {
                icon: <LineChart className="w-6 h-6 text-indigo-600" />,
                title: "Advanced Analytics",
                desc: "Real-time insights and predictive analysis",
              },
              {
                icon: <PieChart className="w-6 h-6 text-indigo-600" />,
                title: "Performance Metrics",
                desc: "Comprehensive reporting and KPI tracking",
              },
              {
                icon: <Lightbulb className="w-6 h-6 text-indigo-600" />,
                title: "Smart Automation",
                desc: "Streamlined workflows and processes",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="flex items-center gap-4 bg-white p-4 rounded-xl hover:shadow-md transition-all cursor-pointer group"
                whileHover={{ scale: 1.02 }}
              >
                <div className="p-3 bg-indigo-100 rounded-xl group-hover:bg-indigo-200 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default BusinessSection;
