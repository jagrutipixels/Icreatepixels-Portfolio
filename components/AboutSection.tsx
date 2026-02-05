import React from 'react';
import { PERSONAL_INFO, METHODOLOGY } from '../constants';
import { Reveal } from './Reveal';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 px-6 md:px-12 lg:px-24 bg-zinc-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* Narrative Column */}
          <div className="lg:col-span-7">
            <Reveal direction="left">
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-700 block mb-6">
                The Narrative
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-8 leading-tight">
                Behind the Lens, <br/>
                <span className="text-zinc-500 italic">Across the Story.</span>
              </h2>
            </Reveal>

            <Reveal delay={200} direction="up">
              <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed mb-8 max-w-2xl">
                {PERSONAL_INFO.bio}
              </p>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
              {METHODOLOGY.map((item, idx) => (
                <Reveal key={idx} delay={300 + (idx * 100)} direction="up">
                  <div className="group">
                    <div className="text-[9px] font-black uppercase tracking-[0.4em] text-zinc-600 mb-2 flex items-center gap-3">
                      <span className="w-5 h-[1px] bg-zinc-800 group-hover:w-8 group-hover:bg-zinc-500 transition-all"></span>
                      0{idx + 1}
                    </div>
                    <h4 className="text-base font-bold text-white mb-1 uppercase tracking-tight">{item.label}</h4>
                    <p className="text-zinc-500 text-xs leading-relaxed">{item.detail}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Perspective Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <Reveal direction="right" delay={400}>
              <div className="relative p-8 md:p-10 border border-zinc-900 rounded-3xl bg-zinc-900/10 backdrop-blur-sm">
                <div className="absolute top-0 left-10 -translate-y-1/2 px-4 py-1 bg-zinc-900 border border-zinc-800 text-[8px] font-black uppercase tracking-[0.4em] text-zinc-500">
                  Director's Note
                </div>
                
                <div className="text-2xl md:text-3xl font-serif italic text-white leading-snug mb-6 opacity-90">
                  "{PERSONAL_INFO.philosophy}"
                </div>
                
                <div className="flex items-center gap-6 pt-6 border-t border-zinc-900/50">
                   <div className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></div>
                   </div>
                   <div>
                      <div className="text-[10px] font-bold text-white uppercase tracking-widest">In Production</div>
                      <div className="text-[9px] text-zinc-600 uppercase tracking-widest">Mumbai, IN</div>
                   </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={600} direction="none" className="mt-10">
               <div className="p-6 border-l border-zinc-900">
                  <div className="text-5xl font-serif font-bold text-zinc-800 mb-1">6+</div>
                  <div className="text-[9px] font-black uppercase tracking-[0.4em] text-zinc-600">
                    Years of Visual Storytelling
                  </div>
               </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};