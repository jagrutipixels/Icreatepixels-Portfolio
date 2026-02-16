import React from 'react';
import { SKILLS, HARDWARE } from '../constants.ts';
import { Reveal } from './Reveal.tsx';

export const SkillsSection: React.FC = () => {
  return (
    <div className="relative">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10 opacity-30">
        <div className="absolute top-[20%] left-[10%] w-[40%] h-[40%] bg-blue-500/10 blur-[150px] rounded-full animate-drift"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[40%] h-[40%] bg-purple-500/10 blur-[150px] rounded-full animate-drift" style={{ animationDelay: '-8s' }}></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
        
        {/* Card 1: Video Production (Leadership & Strategy) */}
        <Reveal className="md:col-span-5" direction="up">
          <div className="h-full p-10 bg-zinc-900/40 backdrop-blur-md rounded-[2.5rem] border border-zinc-800/50 flex flex-col text-left">
            <div className="flex justify-between items-center mb-12">
              <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-100">Video Production</h3>
              <div className="w-8 h-8 rounded-full border border-zinc-700/50 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></div>
              </div>
            </div>
            
            <div className="space-y-8 flex-grow">
              {SKILLS[0].items.map((item, i) => (
                <div key={i} className="group">
                  <div className="flex justify-between items-end mb-3">
                    <span className="text-sm text-zinc-400 group-hover:text-zinc-100 transition-colors duration-500">{item}</span>
                    <span className="text-[9px] font-black uppercase tracking-tighter text-zinc-500">Advanced</span>
                  </div>
                  <div className="h-[1px] w-full bg-zinc-800 relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/20 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000"></div>
                    <div className="h-full w-full bg-zinc-400/10"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Card 2: Visual Identity (Post-Production) */}
        <Reveal className="md:col-span-4" direction="up" delay={100}>
          <div className="h-full p-10 bg-zinc-900/40 backdrop-blur-md rounded-[2.5rem] border border-zinc-800/50 flex flex-col text-left">
            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-100 mb-12">Visual Identity</h3>
            <ul className="space-y-6">
              {SKILLS[1].items.map((item, i) => (
                <li key={i} className="flex items-center gap-4 group">
                  <span className="w-1 h-1 bg-zinc-700 group-hover:bg-zinc-100 transition-colors"></span>
                  <span className="text-sm text-zinc-500 group-hover:text-zinc-300 transition-colors duration-500">{item}</span>
                  <div className="flex-grow h-[1px] bg-zinc-800/30 ml-4"></div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Card 3: Post-Process & Strategy Stack */}
        <div className="md:col-span-3 flex flex-col gap-6">
          {/* Post-Process Tags */}
          <Reveal className="flex-grow" direction="up" delay={200}>
            <div className="h-full p-8 bg-zinc-900/40 backdrop-blur-md rounded-[2.5rem] border border-zinc-800/50 text-left">
              <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500 mb-6">Post-Process</h3>
              <div className="flex flex-col gap-3">
                {SKILLS[2].items.map((item, i) => (
                  <div 
                    key={i} 
                    className="px-4 py-3 bg-zinc-800/30 border border-zinc-700/20 text-zinc-500 text-[9px] font-black uppercase tracking-widest rounded-xl hover:bg-zinc-100 hover:text-black transition-all duration-500 cursor-default"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* High Contrast Strategy Card */}
          <Reveal direction="up" delay={300}>
            <div className="p-8 bg-white text-black rounded-[2.5rem] shadow-2xl transition-transform duration-500 hover:scale-[1.02] text-left">
              <h3 className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40 mb-6">Strategy</h3>
              <ul className="space-y-3">
                {SKILLS[3].items.map((item, i) => (
                  <li key={i} className="text-[11px] font-black uppercase tracking-tight leading-none hover:translate-x-1 transition-transform cursor-default">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Hardware Gear Slider */}
      <div className="mt-24 pt-12 border-t border-zinc-800/30">
        <Reveal>
          <div className="flex items-center gap-6 mb-16">
            <h3 className="text-[10px] font-black uppercase tracking-[0.6em] text-zinc-500 whitespace-nowrap">Production Gear Locker</h3>
            <div className="h-[1px] w-full bg-gradient-to-r from-zinc-800/50 to-transparent"></div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {HARDWARE.map((hw, index) => (
            <Reveal key={index} delay={index * 150} direction="none">
              <div className="text-left group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[10px] font-black text-zinc-500 group-hover:bg-white group-hover:text-black transition-all duration-500">
                    0{index + 1}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 group-hover:text-white transition-colors">{hw.category}</span>
                </div>
                <p className="text-zinc-500 group-hover:text-zinc-400 text-sm leading-relaxed font-light pl-14 italic border-l border-zinc-800 transition-all duration-500">
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