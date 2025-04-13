"use client";

import { Trophy, Users } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const imageFadeIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const KnowledgeDeliverySection: React.FC = () => {
  return (
    <div className="flex justify-center bg-background text-primary-text pb-24 font-plus-jakarta-sans">
      <div className="flex flex-row items-center justify-between w-full max-w-7xl flex-wrap gap-12">
        {/* Left Column */}
        <motion.div
          className="flex flex-col justify-center w-full max-w-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.span
            className="uppercase font-bold text-blue-500 text-sm bg-blue-100 w-fit py-2 px-3 rounded-sm"
            variants={fadeUp}
            custom={0}
          >
            Knowledge Delivery
          </motion.span>

          <motion.p
            className="text-5xl font-semibold pt-8 pb-8 leading-13"
            variants={fadeUp}
            custom={1}
          >
            Build & deliver
            <br /> courses with ease <br /> all through a <br />
            <span className="font-bold text-blue-600">unified platform.</span>
          </motion.p>

          <motion.p className="font-medium" variants={fadeUp} custom={2}>
            Host well-structured & engaging courses for your learners. Enhance
            learner performance & watch your business grow multifold.
          </motion.p>

          <motion.div
            className="grid grid-cols-2 pt-8 gap-6"
            variants={fadeUp}
            custom={3}
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold">10k+</h3>
                <p className="text-sm text-gray-600">Active Learners</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Trophy className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold">95%</h3>
                <p className="text-sm text-gray-600">Success Rate</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="flex flex-col items-center justify-center bg-white w-full max-w-lg p-4 rounded-4xl shadow-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={imageFadeIn}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="rounded-xl overflow-hidden"
          >
            <Image
              src={"/images/landing-2.jpg"}
              sizes="100vw"
              className="h-auto w-auto rounded-xl"
              height={0}
              width={0}
              alt="landing-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default KnowledgeDeliverySection;
