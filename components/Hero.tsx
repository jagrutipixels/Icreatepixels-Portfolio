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
    <section className="relative min-h-[100vh] w-full flex flex-col justify-center px-6 lg:px-12 pt-32 pb-32 overflow-hidden">
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

      <div className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col items-center text-center gap-6">
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

        <h1 className="sr-only">Premium Video Production & Growth Marketing Agency in Navi Mumbai</h1>
        <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-black leading-[1.05] tracking-tight text-white mb-2 w-full max-w-5xl">
          <div className="overflow-visible pb-1">
            <motion.div
              custom={0}
              variants={lineVariants as any}
              initial="hidden"
              animate="visible"
            >
              We Build Brands <br className="hidden md:block" />
            </motion.div>
          </div>
          <div className="overflow-visible pb-4">
            <motion.div
              custom={1}
              variants={lineVariants as any}
              initial="hidden"
              animate="visible"
              className="flex justify-center items-center flex-wrap gap-x-3 gap-y-2"
            >
              that <DynamicFlipText />
            </motion.div>
          </div>
        </h2>

        <div className="flex flex-col items-center gap-6 mt-0 w-full">
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
        </div>
      </div>
    </section>
  );
};
