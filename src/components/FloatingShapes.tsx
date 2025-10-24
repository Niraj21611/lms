"use client";

import { motion } from "framer-motion";

interface FloatingShapesProps {
  variant?: "primary" | "secondary" | "minimal";
}

const FloatingShapes: React.FC<FloatingShapesProps> = ({ variant = "primary" }) => {
  if (variant === "minimal") {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Small accent shapes */}
        <motion.div
          className="absolute top-20 right-1/4 w-32 h-32 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0, 102, 255, 0.08) 0%, transparent 70%)',
            filter: 'blur(30px)',
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute bottom-20 left-1/4 w-36 h-36 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255, 107, 107, 0.08) 0%, transparent 70%)',
            filter: 'blur(35px)',
          }}
          animate={{
            y: [0, 35, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>
    );
  }

  if (variant === "secondary") {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Medium gradient blobs */}
        <motion.div
          className="absolute top-10 right-10 w-[400px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(124, 58, 237, 0.06) 0%, rgba(20, 184, 166, 0.04) 50%, transparent 70%)',
            filter: 'blur(50px)',
          }}
          animate={{
            scale: [1, 1.15, 1],
            x: [0, 20, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-10 left-10 w-[350px] h-[350px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255, 107, 107, 0.07) 0%, rgba(0, 102, 255, 0.04) 50%, transparent 70%)',
            filter: 'blur(45px)',
          }}
          animate={{
            scale: [1.1, 1, 1.1],
            x: [0, -25, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />

        {/* Small floating circles */}
        <motion.div
          className="absolute top-1/3 left-1/4 w-28 h-28 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0, 102, 255, 0.1) 0%, transparent 100%)',
            filter: 'blur(20px)',
          }}
          animate={{
            y: [0, -25, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    );
  }

  // Primary variant - full decoration
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large gradient blobs */}
      <motion.div
        className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(0, 102, 255, 0.08) 0%, rgba(124, 58, 237, 0.05) 50%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute -bottom-32 -right-32 w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255, 107, 107, 0.08) 0%, rgba(20, 184, 166, 0.06) 50%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{
          scale: [1.1, 1, 1.1],
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Medium floating circles */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-36 h-36 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(124, 58, 237, 0.1) 0%, transparent 100%)',
          filter: 'blur(25px)',
        }}
        animate={{
          y: [0, -30, 0],
          x: [0, 15, 0],
          opacity: [0.5, 0.9, 0.5],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/3 left-1/4 w-32 h-32 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(20, 184, 166, 0.12) 0%, transparent 100%)',
          filter: 'blur(28px)',
        }}
        animate={{
          y: [0, 35, 0],
          x: [0, -20, 0],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.8,
        }}
      />

      {/* Tiny accent dots */}
      <motion.div
        className="absolute top-1/3 left-1/3 w-2.5 h-2.5 bg-primary/25 rounded-full"
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-coral/30 rounded-full"
        animate={{
          y: [0, 25, 0],
          opacity: [0.2, 0.8, 0.2],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </div>
  );
};

export default FloatingShapes;
