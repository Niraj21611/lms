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
      name: "Ravi Kumar",
      role: "IIT-JEE Aspirant",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
      quote:
        "The guidance and structured study plan helped me crack the IIT-JEE with confidence!",
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "NEET Aspirant",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop",
      quote:
        "The personalized mentoring and doubt-clearing sessions made all the difference in my preparation.",
    },
    {
      id: 3,
      name: "Amit Singh",
      role: "UPSC Aspirant",
      image:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop",
      quote:
        "The expert faculty and well-structured courses gave me the confidence to excel in the exams.",
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
      setCurrentIndex(
        (prev) => (prev - 1 + testimonials.length) % testimonials.length
      );
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="flex justify-center bg-background text-primary-text pt-24 font-plus-jakarta-sans">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl gap-12 px-6">
        {/* Left Side - Image & Testimonials */}
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
              alt="Coaching students"
            />
          </motion.div>

          <div className="bg-white p-6 rounded-2xl shadow-lg relative w-full max-w-md">
            <motion.p
              className="text-md italic text-gray-700 min-h-[96px]"
              key={currentIndex}
            >
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
                <p className="font-semibold text-sm">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-xs text-gray-500">
                  {testimonials[currentIndex].role}
                </p>
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

        {/* Right Side - Academy Info */}
        <motion.div
          className="flex flex-col justify-center w-full max-w-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className="uppercase font-bold text-indigo-500 text-sm bg-indigo-100 w-fit py-2 px-3 rounded-sm">
            Academic Excellence & Student Success
          </span>

          <p className="text-5xl font-semibold pt-8 pb-6 leading-tight">
            Empower students with{" "}
            <span className="text-indigo-600 font-bold">
              proven learning strategies
            </span>
          </p>

          <p className="font-medium text-gray-700">
            Help students master concepts faster, build confidence, and achieve
            top results with structured guidance, expert mentorship, and
            effective study techniques tailored to India’s competitive exams.
          </p>

          {/* Key Benefits / Stats */}
          <div className="grid grid-cols-2 gap-6 mt-8">
            {[
              {
                icon: <TrendingUp className="w-6 h-6 text-indigo-600" />,
                stat: "95%",
                desc: "Students Passing Exams",
              },
              {
                icon: <Clock className="w-6 h-6 text-indigo-600" />,
                stat: "200+",
                desc: "Hours of Mentorship Provided",
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
                    <h3 className="text-md md:text-2xl font-bold text-gray-900">
                      {item.stat}
                    </h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Features / Services */}
          <motion.div className="space-y-4 mt-8">
            {[
              {
                icon: <LineChart className="w-6 h-6 text-indigo-600" />,
                title: "Personalized Study Plans",
                desc: "Tailored programs for each student to maximize success",
              },
              {
                icon: <PieChart className="w-6 h-6 text-indigo-600" />,
                title: "Mock Tests & Assessments",
                desc: "Regular evaluations to track progress and improve performance",
              },
              {
                icon: <Lightbulb className="w-6 h-6 text-indigo-600" />,
                title: "Expert Mentorship",
                desc: "Guidance from experienced educators and exam strategists",
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
