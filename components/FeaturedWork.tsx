import React from "react";
import { motion } from "motion/react";
import { PROJECTS, BRAND_PROJECTS } from "../constants";

export const FeaturedWork: React.FC = () => {
  const combinedWorks = [
    ...PROJECTS.map((p) => ({
      title: p.title,
      category: p.deliverable,
      image: p.image,
    })),
    ...BRAND_PROJECTS.map((p) => ({
      title: p.name,
      category: p.category,
      image: p.image,
    })),
  ].slice(0, 4);

  return (
    <section className="py-32 px-6 lg:px-12 bg-[#050505]">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-4xl md:text-6xl lg:text-8xl font-black uppercase tracking-tighter text-white mb-20 text-center">
          Featured <span className="text-[#ff4d00]">Work</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          {combinedWorks.map((work, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                ease: [0.76, 0, 0.24, 1],
                delay: i % 2 === 0 ? 0 : 0.2,
              }}
              className={`group flex flex-col gap-6 ${i % 2 !== 0 ? "md:mt-32" : ""}`}
            >
              <div
                className="w-full aspect-[4/5] bg-zinc-900 overflow-hidden relative cursor-none rounded-md"
                data-cursor="VIEW WORK"
              >
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.5s] ease-[0.76,0,0.24,1]"
                />
              </div>
              <div className="flex justify-between items-center px-2">
                <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white">
                  {work.title}
                </h3>
                <span className="text-[10px] sm:text-xs tracking-widest uppercase text-zinc-500 border border-white/10 px-2 sm:px-3 py-1 rounded-full text-center">
                  {work.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
