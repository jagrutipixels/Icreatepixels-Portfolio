import React from 'react';
import { EXPERIENCES } from '../constants.ts';
import { Reveal } from './Reveal.tsx';

export const ExperienceSection: React.FC = () => {
  return (
    <div className="space-y-16 md:space-y-12">
      {EXPERIENCES.map((exp, index) => (
        <Reveal key={index} direction="left" delay={index * 100}>
          <div className="flex flex-col md:flex-row gap-4 md:gap-16 group">
            <div className="md:w-1/4">
              <div className="text-zinc-600 font-bold uppercase tracking-[0.2em] text-[10px] mb-2">
                {exp.period}
              </div>
              <div className="text-lg md:text-xl font-serif font-bold text-white group-hover:text-zinc-300 transition-colors">
                {exp.company}
              </div>
              <div className="text-zinc-700 text-[10px] uppercase font-bold mt-1 tracking-widest">{exp.location}</div>
            </div>
            
            <div className="md:w-3/4 pb-12 border-b border-zinc-900/50 last:border-0">
              <h4 className="text-xl md:text-2xl font-bold mb-6 text-zinc-100 uppercase tracking-tight">
                {exp.role}
              </h4>
              <ul className="space-y-4">
                {exp.highlights.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-zinc-400 text-sm md:text-base leading-relaxed">
                    <span className="mt-2 w-1 h-1 bg-zinc-800 rounded-full flex-shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
};