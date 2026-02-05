
import React from 'react';
import { SKILLS, HARDWARE } from '../constants';
import { Reveal } from './Reveal';

export const SkillsSection: React.FC = () => {
  return (
    <div className="space-y-24">
      {/* Software Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {SKILLS.map((skill, index) => (
          <Reveal key={index} delay={index * 150} direction="none">
            <div className="h-full p-8 bg-zinc-900/40 rounded-2xl border border-zinc-800/50 hover:bg-zinc-900 transition-all text-left">
              <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-6 border-b border-zinc-800 pb-4">
                {skill.category}
              </h3>
              <ul className="space-y-3">
                {skill.items.map((item, i) => (
                  <li key={i} className="text-zinc-400 text-sm flex items-center gap-2">
                    <span className="w-1 h-1 bg-zinc-600 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Hardware / Gear Highlights */}
      <div className="border-t border-zinc-800 pt-16">
        <Reveal>
          <h3 className="text-xs font-bold uppercase tracking-[0.4em] text-zinc-500 mb-12">Production Gear & Hardware</h3>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {HARDWARE.map((hw, index) => (
            <Reveal key={index} delay={index * 200} direction="up">
              <div className="text-left px-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 block mb-3">{hw.category}</span>
                <p className="text-zinc-300 text-sm leading-relaxed">{hw.items}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};
