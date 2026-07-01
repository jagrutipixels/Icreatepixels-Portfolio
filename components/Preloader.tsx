import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export const Preloader: React.FC = () => {
  const [step, setStep] = useState(1);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Disable scroll on mount
    document.body.style.overflow = "hidden";

    const timer1 = setTimeout(() => {
      setStep(2);
    }, 1500);

    const timer2 = setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = "auto";
    }, 3500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0a0a0a]"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="relative text-white font-serif font-medium tracking-tight text-xl md:text-3xl text-center px-4 overflow-hidden">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                >
                  Crafting your experience...
                </motion.div>
              )}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                  className="font-black text-4xl md:text-6xl tracking-tighter"
                >
                  iCreate<span className="text-[#ff4d00]">Pixels</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
