"use client";

import { Globe, Smartphone } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const MonetizeSection: React.FC = () => {
  return (
    <div className="flex justify-center bg-background text-primary-text py-16 px-4 md:px-8 font-plus-jakarta-sans">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl gap-12">
        {/* Image Block */}
        <motion.div
          className="flex flex-col items-center justify-center bg-white w-full md:max-w-lg p-4 rounded-3xl shadow-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="rounded-xl overflow-hidden w-full"
          >
            <Image
              src={"/images/landing-3.jpg"}
              sizes="100vw"
              className="w-full h-auto object-cover rounded-xl"
              height={0}
              width={0}
              alt="landing-3"
            />
          </motion.div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="flex flex-col justify-center w-full md:max-w-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <span className="uppercase font-bold text-purple-500 text-xs md:text-sm bg-purple-100 w-fit py-1.5 px-3 rounded-sm">
            monetize your expertise
          </span>

          <motion.p
            className="text-3xl md:text-5xl font-semibold pt-6 md:pt-8 pb-6 md:pb-8 leading-snug md:leading-[3.5rem]"
            variants={fadeInUp}
          >
            Build a training <br /> academy that’s truly yours — fully
            white-labelled,{" "}
            <span className="font-bold text-purple-600">fully you.</span>
          </motion.p>

          <motion.p
            className="font-medium text-base md:text-lg text-gray-700"
            variants={fadeInUp}
          >
            Step into the spotlight with a white-labelled LMS tailored to your
            brand’s essence. Elevate learning with a unique training experience,
            personalized domain, and dedicated mobile app.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 md:pt-8"
            variants={fadeInUp}
          >
            {[
              {
                icon: <Globe className="w-6 h-6 text-purple-600" />,
                title: "Custom Domain",
                desc: "Your brand, your domain",
              },
              {
                icon: <Smartphone className="w-6 h-6 text-purple-600" />,
                title: "Support",
                desc: "Dedicated support",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="flex items-start gap-4 group cursor-pointer"
                whileHover={{ scale: 1.02 }}
              >
                <div className="p-3 bg-purple-100 rounded-xl group-hover:bg-purple-200 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row sm:items-center gap-4 pt-6 md:pt-8"
            variants={fadeInUp}
          >
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <Image
                  key={i}
                  width={0}
                  height={0}
                  src={`https://i.pravatar.cc/40?img=${i}`}
                  alt={`User ${i}`}
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
              ))}
            </div>
            <div>
              <p className="font-semibold text-gray-900">
                Trusted by 1000+ creators
              </p>
              <div className="flex items-center text-yellow-400 text-sm">
                {"★".repeat(5)}
                <span className="text-gray-600 ml-1">4.9/5</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default MonetizeSection;
