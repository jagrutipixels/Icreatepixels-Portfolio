import React from "react";
import { motion } from "motion/react";

const services = [
  {
    title: "Video Production",
    description:
      "Cinematic quality storytelling bridging physical sets and digital screens.",
    tags: ["Direction", "Cinematography", "Set Design", "Editing"],
    colSpan: "md:col-span-2",
  },
  {
    title: "Local SEO & Growth",
    description: "Data-driven strategies to dominate local visibility.",
    tags: ["GMB Maps", "Search", "Conversion"],
    colSpan: "md:col-span-1",
  },
  {
    title: "Social Media Mgt",
    description: "Viral engineering and retention-focused content.",
    tags: ["Reels", "Grid Design", "Strategy"],
    colSpan: "md:col-span-1",
  },
  {
    title: "Web & Digital",
    description:
      "Lightning-fast, highly-converting digital infrastructure and UI.",
    tags: ["Design", "Webflow", "React", "Analytics"],
    colSpan: "md:col-span-2",
  },
];

export const BentoServices: React.FC = () => {
  return (
    <section id="services" className="py-24 px-6 lg:px-12 bg-[#050505]">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 relative">
        {/* Left Sticky Column */}
        <div className="lg:col-span-4 lg:sticky lg:top-32 h-max">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-6 leading-none">
            Everything <br />
            Your Brand <br />
            <span className="text-[#ff4d00]">Needs.</span>
          </h2>
          <p className="text-zinc-500 max-w-sm">
            We don't just produce videos. We architect complete digital
            experiences engineered for maximum conversion, audience retention,
            and aesthetic dominance.
          </p>
        </div>

        {/* Right Bento Grid */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                delay: i * 0.1,
                ease: [0.76, 0, 0.24, 1],
              }}
              className={`bg-[#0a0a0a] border border-white/10 rounded-xl p-8 flex flex-col justify-between hover:border-[#ff4d00]/50 transition-colors ${service.colSpan}`}
            >
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-zinc-400 text-sm">{service.description}</p>
              </div>

              <div className="flex flex-wrap gap-2 mt-8">
                {service.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="text-[10px] uppercase tracking-widest px-3 py-1 bg-white/5 border border-white/10 rounded-full text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
