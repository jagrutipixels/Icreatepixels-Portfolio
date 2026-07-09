import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const StickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (isDismissed) return;

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000); // Appear after 5 seconds

    return () => clearTimeout(timer);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
  };

  return (
    <AnimatePresence>
      {isVisible && !isDismissed && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: -20 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-6 left-6 z-[90] max-w-[300px]"
        >
          <div className="bg-[#050505] border border-white/10 p-5 rounded-2xl shadow-2xl relative">
            <button
              onClick={handleDismiss}
              className="absolute top-2 right-2 text-zinc-500 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X size={16} />
            </button>
            <h4 className="font-serif font-bold text-white mb-2 pr-6">
              Ready to Scale?
            </h4>
            <p className="text-zinc-400 text-sm mb-4">
              Let's build a cinematic brand that dominates your market.
            </p>
            <Link
              to="/contact"
              onClick={handleDismiss}
              className="inline-flex items-center gap-2 bg-[#ff4d00] text-white px-4 py-2 font-semibold text-sm rounded-2xl hover:bg-[#ff4d00]/90 transition-colors"
            >
              Get a Quote <ArrowRight size={14} />
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
