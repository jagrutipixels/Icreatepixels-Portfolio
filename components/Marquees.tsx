import React from "react";
import { motion } from "motion/react";
import { PROJECTS, BRAND_PROJECTS } from "../constants";

const clients = [
  "GULBADAN TALKIES",
  "PUPPYCUDDLES",
  "BHARAT REALTY",
  "SAVOIR STUDIO",
  "DBN BRAND",
  "TECH EV",
  "BHADIPA",
];

export const Marquees: React.FC = () => {
  const images = [
    ...PROJECTS.map((p) => p.image).filter(Boolean),
    ...BRAND_PROJECTS.map((p) => p.image).filter(Boolean),
  ];

  return (
    <section className="py-20 flex flex-col gap-12 overflow-hidden bg-[#050505]">
      {/* Visual Marquee */}
      <div className="relative w-full flex overflow-hidden group">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-6 shrink-0 px-3"
        >
          {/* Double array for seamless loop */}
          {[...images, ...images, ...images, ...images].map((img, i) => (
            <div
              key={i}
              className="w-[320px] h-[180px] sm:w-[480px] sm:h-[270px] md:w-[640px] md:h-[360px] lg:w-[800px] lg:h-[450px] shrink-0 overflow-hidden bg-zinc-900 rounded-2xl"
              data-cursor="VIEW"
            >
              <img
                src={img}
                alt=""
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Tech / Clients Marquee */}
      <div className="relative w-full flex overflow-hidden bg-white/5 py-6 origin-center -rotate-2">
        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap items-center shrink-0"
        >
          {[...clients, ...clients, ...clients].map((client, i) => (
            <div
              key={i}
              className="px-12 text-2xl md:text-4xl font-black uppercase tracking-tighter text-white/20 shrink-0"
            >
              {client}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
