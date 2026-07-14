import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

export const AgencyFooter: React.FC = () => {
  return (
    <footer className="bg-[#050505] pt-24 md:pt-32 pb-4 px-6 lg:px-12 relative overflow-hidden flex flex-col items-center">
      {/* Massive CTA Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className="w-full max-w-[1400px] bg-[#ff4d00] rounded-3xl p-8 md:p-12 lg:p-24 text-center relative overflow-hidden group cursor-none mb-16 md:mb-32"
        data-cursor="LETS GO"
      >
        <Link to="/contact" className="absolute inset-0 z-20"></Link>
        <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.76,0,0.24,1] z-0"></div>
        <div className="relative z-10 flex flex-col items-center gap-6 mix-blend-difference text-white">
          <h2 className="text-4xl xs:text-5xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-none">
            Ready to <br /> dominate?
          </h2>
          <span className="text-sm md:text-lg font-bold tracking-widest uppercase border-b-2 border-white pb-2 hover:opacity-50 transition-opacity">
            Book your free intro call
          </span>
        </div>
      </motion.div>

      {/* Standard Links */}
      <div className="w-full max-w-[1400px] grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-16 mb-24 z-10">
        <div className="flex flex-col gap-4">
          <span className="text-xs font-bold tracking-widest text-[#ff4d00] uppercase">
            Location
          </span>
          <p className="text-zinc-400 text-sm">
            Navi Mumbai, Maharashtra
            <br />
            Serving Vashi, Nerul, Belapur
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-xs font-bold tracking-widest text-[#ff4d00] uppercase">
            Contact
          </span>
          <a
            href="mailto:abhishek@icreatepixels.in"
            className="text-white text-lg font-medium hover:text-[#ff4d00] transition-colors"
          >
            abhishek@icreatepixels.in
          </a>
          <a
            href="tel:+917400310443"
            className="text-zinc-400 font-medium hover:text-white transition-colors"
          >
            +91 7400310443
          </a>
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-xs font-bold tracking-widest text-[#ff4d00] uppercase">
            Socials
          </span>
          <div className="flex flex-col gap-2">
            <a
              href="https://www.instagram.com/icreatepixels/"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://in.linkedin.com/in/icreatepixels"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://www.youtube.com/@icreatepixels"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              YouTube
            </a>
          </div>
        </div>
      </div>

      {/* Edge-to-edge typography */}
      <div className="w-full overflow-hidden text-center -mb-8 lg:-mb-16 select-none leading-none z-0">
        <div className="text-[15vw] font-black uppercase tracking-tighter text-white/5 whitespace-nowrap -mt-12 lg:-mt-24">
          ICREATEPIXELS
        </div>
      </div>
    </footer>
  );
};
