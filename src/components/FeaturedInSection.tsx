"use client";

import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { motion } from "framer-motion";

const companies = [
  { name: "Featured-1", logo: "/images/featured/featured-1.jpg" },
  { name: "Featured-2", logo: "/images/featured/featured-2.jpg" },
  { name: "Featured-3", logo: "/images/featured/featured-3.jpg" },
  { name: "Featured-4", logo: "/images/featured/featured-4.jpg" },
  { name: "Featured-5", logo: "/images/featured/featured-5.jpg" },
  { name: "Featured-6", logo: "/images/featured/featured-6.jpg" },
  { name: "Featured-7", logo: "/images/featured/featured-7.jpg" },
  { name: "Featured-8", logo: "/images/featured/featured-8.jpg" },
];

const FeaturedInSection: React.FC = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free",
    drag: false,
    renderMode: "performance",
    initial: 0,
    slides: {
      perView: 2,
      spacing: 24,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 3, spacing: 32 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 5, spacing: 60 },
      },
    },
    created(s) {
      s.moveToIdx(1, true, { duration: 5000, easing: (t) => t });
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 1, true, { duration: 5000, easing: (t) => t });
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 1, true, { duration: 5000, easing: (t) => t });
    },
  });

  return (
    <section id="featured-section" className="py-24 bg-gradient-to-br from-neutral-50 to-white overflow-hidden relative">
      <div className="absolute top-10 left-1/4 w-64 h-64 bg-gradient-to-br from-primary/10 to-teal/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-gradient-to-br from-purple/10 to-coral/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-teal/10 border border-primary/20 text-sm font-medium text-primary tracking-wide uppercase mb-4">
            Featured in
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-semibold bg-gradient-to-r from-neutral-900 to-neutral-700 bg-clip-text text-transparent">
            Trusted by Industry Leaders
          </h2>
        </motion.div>

        <div ref={sliderRef} className="keen-slider mask-fade">
          {companies.map((company, idx) => (
            <motion.div
              key={company.name}
              className="keen-slider__slide flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 0.7, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ opacity: 1, scale: 1.05 }}
            >
              <div className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm hover:shadow-xl transition-all duration-300">
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  width={160}
                  height={80}
                  className="max-h-20 grayscale hover:grayscale-0 transition-all duration-300"
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedInSection;
