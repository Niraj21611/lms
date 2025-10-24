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
import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
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
    <div className="flex justify-center bg-neutral-50 pt-24 pb-24 relative overflow-hidden">
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-primary/20 to-purple/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-br from-coral/20 to-teal/20 rounded-full blur-3xl" />
      
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl gap-16 px-6 relative z-10">
        <motion.div
          className="flex flex-col items-center justify-center w-full max-w-lg space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <motion.div 
            className="overflow-hidden rounded-3xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={"/images/landing-5.jpg"}
              sizes="100vw"
              height={600}
              width={800}
              className="h-auto w-full rounded-3xl shadow-xl"
              alt="Coaching students"
            />
          </motion.div>

          <div className="bg-white p-8 rounded-3xl shadow-xl border border-neutral-200 relative w-full max-w-md backdrop-blur-sm">
            <motion.p
              className="text-base text-neutral-700 min-h-[96px] leading-relaxed"
              key={currentIndex}
            >
              "{testimonials[currentIndex].quote}"
            </motion.p>
            <div className="flex items-center gap-3 mt-4">
              <Image
                src={testimonials[currentIndex].image}
                width={40}
                height={40}
                alt={testimonials[currentIndex].name}
                className="rounded-full shadow-md"
              />
              <div>
                <p className="font-semibold text-sm text-neutral-900">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-xs text-neutral-600">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>
            <div className="absolute top-1/2 -left-6 transform -translate-y-1/2">
              <motion.button
                onClick={prevSlide}
                className="p-2.5 bg-gradient-to-br from-primary to-primary-light text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft className="w-5 h-5" strokeWidth={2} />
              </motion.button>
            </div>
            <div className="absolute top-1/2 -right-6 transform -translate-y-1/2">
              <motion.button
                onClick={nextSlide}
                className="p-2.5 bg-gradient-to-br from-primary to-primary-light text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight className="w-5 h-5" strokeWidth={2} />
              </motion.button>
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
          <span className="uppercase font-medium text-purple text-xs tracking-wide">
            Academic Excellence & Student Success
          </span>

          <p className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold pt-6 pb-8 leading-tight tracking-tight bg-gradient-to-r from-neutral-900 to-neutral-700 bg-clip-text text-transparent">
            Empower students with proven learning strategies
          </p>

          <p className="font-normal text-lg text-neutral-600 leading-relaxed">
            Help students master concepts faster, build confidence, and achieve top results with structured guidance, expert mentorship, and effective study techniques.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-8">
            {[
              {
                icon: <TrendingUp className="w-6 h-6 text-white" strokeWidth={1.5} />,
                stat: "95%",
                desc: "Students Passing",
                gradient: "from-primary to-primary-light",
              },
              {
                icon: <Clock className="w-6 h-6 text-white" strokeWidth={1.5} />,
                stat: "200+",
                desc: "Hours Mentorship",
                gradient: "from-teal to-teal-light",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-lg hover:shadow-xl transition-all duration-300"
                custom={i}
                variants={fadeUp}
                whileHover={{ scale: 1.05, y: -4 }}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-3 bg-gradient-to-br ${item.gradient} rounded-xl shadow-lg`}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900">
                      {item.stat}
                    </h3>
                    <p className="text-sm text-neutral-600">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div className="space-y-4 mt-8">
            {[
              {
                icon: <LineChart className="w-6 h-6 text-white" strokeWidth={1.5} />,
                title: "Personalized Study Plans",
                desc: "Tailored programs for each student",
                gradient: "from-coral to-coral-light",
              },
              {
                icon: <PieChart className="w-6 h-6 text-white" strokeWidth={1.5} />,
                title: "Mock Tests & Assessments",
                desc: "Regular evaluations to track progress",
                gradient: "from-purple to-purple-light",
              },
              {
                icon: <Lightbulb className="w-6 h-6 text-white" strokeWidth={1.5} />,
                title: "Expert Mentorship",
                desc: "Guidance from experienced educators",
                gradient: "from-primary to-primary-light",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-neutral-200 hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.02, x: 8 }}
              >
                <div className={`p-3 bg-gradient-to-br ${item.gradient} rounded-xl shadow-lg`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900">{item.title}</h3>
                  <p className="text-neutral-600">{item.desc}</p>
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
