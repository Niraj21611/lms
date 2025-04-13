"use client";

import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const companies = [
  {
    name: "Featured-1",
    logo: "/images/featured/featured-1.jpg",
  },
  {
    name: "Featured-2",
    logo: "/images/featured/featured-2.jpg",
  },
  {
    name: "Featured-3",
    logo: "/images/featured/featured-3.jpg",
  },
  {
    name: "Featured-4",
    logo: "/images/featured/featured-4.jpg",
  },
  {
    name: "Featured-5",
    logo: "/images/featured/featured-5.jpg",
  },
  {
    name: "Featured-6",
    logo: "/images/featured/featured-6.jpg",
  },
  {
    name: "Featured-7",
    logo: "/images/featured/featured-7.jpg",
  },
  {
    name: "Featured-8",
    logo: "/images/featured/featured-8.jpg",
  },
];

const FeaturedInSection: React.FC = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free",
    slides: {
      perView: 5,
      spacing: 60,
    },
    renderMode: "performance",
    drag: false,
    initial: 0,
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
    <section id="featured-section" className="pt-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-18">
          <h2 className="text-lg font-plus-jakarta-sans font-semibold text-blue-500 mb-4">
            Featured in
          </h2>
        </div>

        <div ref={sliderRef} className="keen-slider mask-fade">
          {companies.map((company) => (
            <div
              key={company.name}
              className="keen-slider__slide flex items-center justify-center"
            >
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                width={200}
                height={100}
                className="max-h-20"
                style={{ width: "auto", height: "auto" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedInSection;