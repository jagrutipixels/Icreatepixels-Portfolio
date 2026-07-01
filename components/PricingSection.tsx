import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

export const PricingSection: React.FC = () => {
  return (
    <section className="py-32 px-6 lg:px-12 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-full h-[500px] bg-[#ff4d00]/5 blur-[200px] -translate-y-1/2 pointer-events-none rounded-full"></div>

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
        <div className="lg:col-span-5 flex flex-col justify-center">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-6 leading-none">
            Simple & Honest <br />{" "}
            <span className="text-[#ff4d00]">Pricing.</span>
          </h2>
          <p className="text-zinc-400 max-w-sm mb-8 text-lg">
            No hidden fees. No ridiculous retainers. Just high-end production
            and development value.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="lg:col-span-7 bg-white text-black rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff4d00]/10 blur-[80px] rounded-full pointer-events-none"></div>

          <span className="text-xs font-bold tracking-widest text-[#ff4d00] uppercase mb-4 block">
            Premium Package
          </span>
          <div className="flex items-end gap-2 mb-10">
            <h3 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
              ₹50k
            </h3>
            <span className="text-zinc-500 font-bold mb-2">/ starting</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {[
              "Immersive Web Design",
              "Custom Animations & Lenis",
              "Next.js / React Build",
              "Responsive across all devices",
              "CMS Integration",
              "Technical SEO setup",
              "Cinematic Assets (if needed)",
              "Analytics integration",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#ff4d00]"></span>
                <span className="text-sm font-semibold tracking-wide text-zinc-800">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <Link
            to="/contact"
            className="block w-full py-6 bg-black text-white text-center rounded-xl font-black uppercase tracking-widest text-lg hover:bg-[#ff4d00] transition-colors"
            data-cursor="GO"
          >
            Start Your Project
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
