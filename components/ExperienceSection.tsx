
import React from 'react';
import { EXPERIENCES } from '../constants';
import { Reveal } from './Reveal';

export const ExperienceSection: React.FC = () => {
  return (
    <div className="space-y-12">
      {EXPERIENCES.map((exp, index) => (
        <Reveal key={index} direction="left" delay={index * 100}>
          <div className="flex flex-col md:flex-row gap-6 md:gap-16 group">
            <div className="md:w-1/4">
              <div className="text-zinc-500 font-bold uppercase tracking-widest text-xs mb-2">
                {exp.period}
              </div>
              <div className="text-xl font-serif font-bold text-white group-hover:text-zinc-300 transition-colors">
                {exp.company}
              </div>
              <div className="text-zinc-600 text-sm mt-1">{exp.location}</div>
            </div>
            
            <div className="md:w-3/4 pb-12 border-b border-zinc-900 last:border-0">
              <h4 className="text-2xl font-bold mb-6 text-white uppercase tracking-tight">
                {exp.role}
              </h4>
              <ul className="space-y-4">
                {exp.highlights.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-zinc-400 leading-relaxed">
                    <span className="mt-2.5 w-1.5 h-1.5 bg-zinc-700 rounded-full flex-shrink-0"></span>
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
