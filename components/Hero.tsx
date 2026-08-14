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
        {/* Enhanced animated gradient mesh instead of heavy video */}
        
        {/* Animated Glow Orbs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            x: ["0%", "5%", "0%"],
            y: ["0%", "5%", "0%"],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#ff4d00]/15 blur-[150px] pointer-events-none mix-blend-screen"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            x: ["0%", "-5%", "0%"],
            y: ["0%", "-5%", "0%"],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[-10%] right-[-10%] w-[70vw] h-[70vw] rounded-full bg-blue-600/15 blur-[180px] pointer-events-none mix-blend-screen"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            x: ["-5%", "5%", "-5%"],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[30%] left-[40%] w-[40vw] h-[40vw] rounded-full bg-purple-600/10 blur-[150px] pointer-events-none mix-blend-screen"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]" />
        
        {/* Subtle Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none" />
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

        {/* Floating Background Tags */}
        <div className="absolute inset-0 z-[-1] overflow-hidden pointer-events-none hidden md:block">
          <motion.div 
            animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }} 
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[30%] left-[10%] px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white/50 text-xs font-bold tracking-widest uppercase"
          >
            Video Production
          </motion.div>
          <motion.div 
            animate={{ y: [0, 20, 0], opacity: [0.3, 0.6, 0.3] }} 
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-[50%] right-[10%] px-4 py-2 rounded-full border border-[#ff4d00]/20 bg-[#ff4d00]/5 backdrop-blur-md text-[#ff4d00]/60 text-xs font-bold tracking-widest uppercase"
          >
            Growth Marketing
          </motion.div>
          <motion.div 
            animate={{ y: [0, -15, 0], opacity: [0.3, 0.6, 0.3] }} 
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-[40%] left-[15%] px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 backdrop-blur-md text-blue-400/60 text-xs font-bold tracking-widest uppercase"
          >
            VFX & Animation
          </motion.div>
          <motion.div 
            animate={{ y: [0, 15, 0], opacity: [0.2, 0.5, 0.2] }} 
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute top-[20%] right-[25%] px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 backdrop-blur-md text-purple-400/60 text-xs font-bold tracking-widest uppercase"
          >
            Brand Strategy
          </motion.div>
        </div>

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

      {/* Hero Bottom Ticker */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden border-t border-white/5 bg-black/50 backdrop-blur-sm z-20">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap items-center shrink-0 py-3"
        >
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center">
              <span className="text-white/40 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase px-8">
                Cinematic Video Production
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d00]/50"></span>
              <span className="text-white/40 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase px-8">
                Data-Driven Marketing
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d00]/50"></span>
              <span className="text-white/40 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase px-8">
                Brand Strategy
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d00]/50"></span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
