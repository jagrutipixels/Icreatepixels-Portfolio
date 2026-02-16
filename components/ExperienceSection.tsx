import React from 'react';
import { EXPERIENCES } from '../constants.ts';
import { Reveal } from './Reveal.tsx';

export const ExperienceSection: React.FC = () => {
  return (
    <div className="relative max-w-5xl mx-auto">
      {/* Central Timeline Line */}
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-zinc-800 to-transparent hidden md:block"></div>

      <div className="space-y-24 md:space-y-32">
        {EXPERIENCES.map((exp, index) => (
          <Reveal key={index} direction={index % 2 === 0 ? 'right' : 'left'} delay={index * 100}>
            <div className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 top-0 -translate-x-1/2 w-3 h-3 bg-white rounded-full border-4 border-[#050505] z-10 hidden md:block shadow-[0_0_15px_rgba(255,255,255,0.5)]"></div>

              {/* Content Side */}
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-20' : 'md:pr-20'} text-left`}>
                <div className="inline-block px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-md mb-4">
                  <span className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-500">{exp.period}</span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-2 leading-tight group-hover:text-zinc-300 transition-colors">
                  {exp.company}
                </h3>
                
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs font-black uppercase tracking-widest text-zinc-500">{exp.role}</span>
                  <span className="w-1 h-1 bg-zinc-800 rounded-full"></span>
                  <span className="text-[10px] text-zinc-600 uppercase tracking-tighter">{exp.location}</span>
                </div>

                <ul className="space-y-4">
                  {exp.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-zinc-400 text-sm md:text-base leading-relaxed group">
                      <span className="mt-2.5 w-1 h-1 bg-zinc-700 rounded-full flex-shrink-0 group-hover:bg-white transition-colors"></span>
                      <span className="group-hover:text-zinc-200 transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Empty Side (Desktop) */}
              <div className="md:w-1/2"></div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
};