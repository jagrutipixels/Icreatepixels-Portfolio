import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { DynamicFlipText } from "./DynamicFlipText.tsx";

export const Hero: React.FC = () => {
  const lineVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.15 + 3.5,
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
      },
    }),
  };

  return (
    <section className="relative min-h-[100vh] w-full flex flex-col justify-center px-6 lg:px-12 pt-32 pb-16 overflow-hidden">
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity"
          src="https://assets.mixkit.co/videos/preview/mixkit-set-of-lights-in-a-video-studio-32400-large.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col items-center text-center gap-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 3.2, duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-[#ff4d00]/10 border border-[#ff4d00]/30 text-[#ff4d00] rounded-full px-4 py-2 w-max backdrop-blur-md mb-2"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff4d00] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff4d00]"></span>
          </span>
          <span className="text-[10px] font-bold tracking-widest uppercase text-center">
            Premium Agency in Navi Mumbai
          </span>
        </motion.div>

        <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-black leading-[1.05] tracking-tight text-white mb-6 w-full max-w-5xl">
          <div className="overflow-visible pb-1">
            <motion.div
              custom={0}
              variants={lineVariants}
              initial="hidden"
              animate="visible"
            >
              We Build Brands <br className="hidden md:block" />
            </motion.div>
          </div>
          <div className="overflow-visible pb-4">
            <motion.div
              custom={1}
              variants={lineVariants}
              initial="hidden"
              animate="visible"
              className="flex justify-center items-center flex-wrap gap-x-3 gap-y-2"
            >
              that <DynamicFlipText />
            </motion.div>
          </div>
        </h1>

        <div className="flex flex-col items-center gap-8 mt-8 w-full">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4.2 }}
            className="text-zinc-400 max-w-2xl text-sm md:text-base leading-relaxed text-center"
          >
            icreatepixels is a high-end production house and growth agency
            merging cinematic video production with ruthless, data-driven
            marketing.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 4.4, type: "spring" }}
          >
            <Link
              to="/contact"
              className="bg-[#ff4d00] text-white w-32 h-32 md:w-36 md:h-36 rounded-full flex items-center justify-center text-center p-6 text-sm font-bold tracking-widest uppercase hover:scale-105 hover:bg-orange-500 transition-all shadow-[0_0_40px_rgba(255,77,0,0.3)] mt-4"
              data-cursor="START"
            >
              Start a<br />
              Project
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
