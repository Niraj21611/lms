"use client"

import { ChevronLeft, ChevronRight, Clock, Lightbulb, LineChart, PieChart, TrendingUp } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const BusinessSection: React.FC = () => {

    const testimonials = [
        {
          id: 1,
          name: "Sarah Johnson",
          role: "Software Developer",
          image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80",
          quote: "EduFlow transformed my career. The courses are incredibly well-structured and the mentorship is outstanding.",
        },
        {
          id: 2,
          name: "Michael Chen",
          role: "UX Designer",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80",
          quote: "The practical projects and real-world applications have helped me build a portfolio that stands out.",
        },
        {
          id: 3,
          name: "Emily Rodriguez",
          role: "Data Scientist",
          image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80",
          quote: "The community support and expert guidance have been invaluable in my learning journey.",
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
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
      }, []);
    

  return (
    <>
    <div className="flex justify-center bg-background text-primary-text  py-24 font-plus-jakarta-sans">
      <div className="flex flex-row items-center justify-between w-full max-w-7xl">
        <div>
          <div className="flex flex-col items-center justify-center bg-white w-full max-w-lg rounded-4xl">
            <Image
              src={"/images/landing-5.jpg"}
              sizes="100vw"
              className="h-auto w-auto rounded-4xl"
              height={0}
              width={0}
              alt="landing-5"
            />
            {/* <p className="text-center text-sm font-semibold">
                Getting started is easy. Just share your name, contact info, and a
                bit about your learning needs — and you're all set to begin your
                journey
              </p> */}
          </div>
        </div>
        <div className="flex flex-col justify-center w-full max-w-xl ">
          <span className="uppercase font-bold text-indigo-500 text-sm bg-indigo-100 w-fit py-2 px-3 rounded-sm">
            Business Intelligence & Productivity
          </span>
          <p className="text-5xl font-semibold line-height-2 pt-8 pb-8">
            Streamline operations while improving productivity with{" "}
            <span className="font-bold text-indigo-600">robust tools.</span>
          </p>
          <p className="font-medium">
            Save time & money with automation & advanced reporting. Let our
            robust business intelligence guide your way to success. Transform
            raw data into actionable strategies while boosting your team's
            productivity.
          </p>
          <div className="grid grid-cols-2 gap-6 mt-8">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all group cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-indigo-100 rounded-xl group-hover:bg-indigo-200 transition-colors">
                  <TrendingUp className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">32%</h3>
                  <p className="text-sm text-gray-600">Efficiency Increase</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all group cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-indigo-100 rounded-xl group-hover:bg-indigo-200 transition-colors">
                  <Clock className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">15hrs</h3>
                  <p className="text-sm text-gray-600">Time Saved Weekly</p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4 mt-8">
              <div className="flex items-center gap-4 bg-white p-4 rounded-xl hover:shadow-md transition-all cursor-pointer group">
                <div className="p-3 bg-indigo-100 rounded-xl group-hover:bg-indigo-200 transition-colors">
                  <LineChart className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Advanced Analytics</h3>
                  <p className="text-gray-600">Real-time insights and predictive analysis</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white p-4 rounded-xl hover:shadow-md transition-all cursor-pointer group">
                <div className="p-3 bg-indigo-100 rounded-xl group-hover:bg-indigo-200 transition-colors">
                  <PieChart className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Performance Metrics</h3>
                  <p className="text-gray-600">Comprehensive reporting and KPI tracking</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white p-4 rounded-xl hover:shadow-md transition-all cursor-pointer group">
                <div className="p-3 bg-indigo-100 rounded-xl group-hover:bg-indigo-200 transition-colors">
                  <Lightbulb className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Smart Automation</h3>
                  <p className="text-gray-600">Streamlined workflows and processes</p>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
            <div className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <div className="relative">
                <div
                  className={`transition-transform duration-500 ease-in-out ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  <div className="flex flex-col items-center text-center">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-20 h-20 rounded-full object-cover mb-6 ring-4 ring-violet-100"
                    />
                    <p className="text-xl text-gray-700 mb-6 italic">
                      "{testimonials[currentIndex].quote}"
                    </p>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {testimonials[currentIndex].name}
                    </h3>
                    <p className="text-violet-600">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full px-4">
                <button
                  onClick={prevSlide}
                  className="p-2 rounded-full bg-white shadow-lg hover:bg-violet-50 transition-colors group"
                >
                  <ChevronLeft className="w-6 h-6 text-violet-600 group-hover:text-violet-700" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-2 rounded-full bg-white shadow-lg hover:bg-violet-50 transition-colors group"
                >
                  <ChevronRight className="w-6 h-6 text-violet-600 group-hover:text-violet-700" />
                </button>
              </div>

              {/* Dots */}
              <div className="flex justify-center space-x-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-violet-600 w-8'
                        : 'bg-violet-200 hover:bg-violet-300'
                    }`}
                  />
                ))}
              </div>
              </div>
              </>
  );
};

export default BusinessSection;
