import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const WORDS = ["Dominate.", "Innovate.", "Captivate.", "Convert."];

export const DynamicFlipText: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % WORDS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="relative inline-block w-[4.8em] sm:w-[5em] h-[1.2em] text-center align-bottom overflow-visible border-b-4 border-transparent">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={index}
          initial={{ y: 40, opacity: 0, rotateX: -60 }}
          animate={{ y: 0, opacity: 1, rotateX: 0 }}
          exit={{ y: -40, opacity: 0, rotateX: 60 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="absolute left-0 right-0 top-0 text-transparent bg-clip-text bg-gradient-to-r from-[#ff4d00] to-orange-400 drop-shadow-sm pb-2"
          style={{
            transformStyle: "preserve-3d",
            transformOrigin: "center center -50px",
          }}
        >
          {WORDS[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};
