import React from 'react';
import { SKILLS, HARDWARE } from '../constants.ts';
import { Reveal } from './Reveal.tsx';

export const SkillsSection: React.FC = () => {
  return (
    <div className="space-y-24">
      {/* Bento-style Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6">
        
        {/* Core: Video Editing (Big Card) */}
        <Reveal className="md:col-span-3 lg:col-span-5 h-full" direction="up">
          <div className="h-full p-8 md:p-10 bg-zinc-900/40 rounded-3xl border border-zinc-800/50 hover:bg-zinc-900/60 transition-all text-left group">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xs font-black uppercase tracking-[0.4em] text-white">Video Production</h3>
              <div className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></div>
              </div>
            </div>
            <ul className="space-y-6">
              {SKILLS[0].items.map((item, i) => (
                <li key={i} className="group/item">
                  <div className="flex justify-between text-zinc-300 text-sm mb-2 font-medium">
                    <span>{item.split('(')[0]}</span>
                    <span className="text-[10px] text-zinc-600 font-black uppercase tracking-tighter">{item.includes('Expert') ? 'Expert' : 'Advanced'}</span>
                  </div>
                  <div className="h-[2px] w-full bg-zinc-800/50 overflow-hidden rounded-full">
                    <div className={`h-full bg-white transition-all duration-1000 delay-500 ${item.includes('Expert') ? 'w-[95%]' : 'w-[80%]'}`}></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Graphics & Design */}
        <Reveal className="md:col-span-3 lg:col-span-4 h-full" delay={100} direction="up">
          <div className="h-full p-8 md:p-10 bg-zinc-900/40 rounded-3xl border border-zinc-800/50 hover:bg-zinc-900/60 transition-all text-left">
            <h3 className="text-xs font-black uppercase tracking-[0.4em] text-white mb-8">Visual Identity</h3>
            <ul className="space-y-4">
              {SKILLS[1].items.map((item, i) => (
                <li key={i} className="text-zinc-400 text-sm flex items-center gap-3 py-2 border-b border-zinc-800/30 last:border-0">
                  <span className="w-1 h-1 bg-zinc-600 rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Photography & Workflow (Vertical Stack) */}
        <div className="md:col-span-6 lg:col-span-3 flex flex-col gap-6">
          <Reveal className="h-full" delay={200} direction="up">
            <div className="h-full p-8 bg-zinc-900/40 rounded-3xl border border-zinc-800/50 hover:bg-zinc-900/60 transition-all text-left">
               <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 mb-4">Post-Process</h3>
               <div className="flex flex-wrap gap-2">
                 {SKILLS[2].items.map((item, i) => (
                   <span key={i} className="px-3 py-1.5 bg-zinc-800 text-zinc-400 text-[9px] font-black uppercase tracking-widest rounded-md border border-zinc-700/50">
                     {item}
                   </span>
                 ))}
               </div>
            </div>
          </Reveal>
          <Reveal className="h-full" delay={300} direction="up">
            <div className="h-full p-8 bg-white text-black rounded-3xl border border-zinc-800/50 transition-all text-left shadow-2xl">
               <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-black/50 mb-4">Strategy</h3>
               <ul className="space-y-2">
                 {SKILLS[3].items.map((item, i) => (
                   <li key={i} className="text-xs font-bold uppercase tracking-tighter">{item}</li>
                 ))}
               </ul>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Production Gear Locker */}
      <div className="pt-24">
        <Reveal>
          <div className="flex items-center gap-6 mb-16">
            <h3 className="text-xs font-black uppercase tracking-[0.5em] text-zinc-600 whitespace-nowrap">Production Gear</h3>
            <div className="w-full h-[1px] bg-zinc-900"></div>
          </div>
        </Reveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {HARDWARE.map((hw, index) => (
            <Reveal key={index} delay={index * 150} direction="none">
              <div className="text-left group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[10px] font-black text-zinc-500 group-hover:bg-white group-hover:text-black transition-all">
                    0{index + 1}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">{hw.category}</span>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed font-light pl-12 italic border-l border-zinc-900 group-hover:border-zinc-700 transition-colors">
                  {hw.items}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};