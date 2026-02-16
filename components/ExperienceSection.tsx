import React, { useState, useEffect } from 'react';
import { EXPERIENCES } from '../constants.ts';
import { Reveal } from './Reveal.tsx';

export const ExperienceSection: React.FC = () => {
  const [timecode, setTimecode] = useState("00:14:22:04");

  // Simple timecode simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setTimecode(prev => {
        const parts = prev.split(':').map(Number);
        parts[3]++; // Increment frames
        if (parts[3] >= 24) {
          parts[3] = 0;
          parts[2]++; // Increment seconds
        }
        return parts.map(p => p.toString().padStart(2, '0')).join(':');
      });
    }, 41); // Roughly 24fps
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative max-w-5xl mx-auto py-8 md:py-12">
      {/* Technical Metadata Overlays */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-20 sm:opacity-40 overflow-hidden">
        {/* REC Indicator */}
        <div className="absolute top-0 right-0 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></div>
          <span className="text-[10px] font-black uppercase tracking-widest">REC [●]</span>
        </div>
        
        {/* Camera Stats */}
        <div className="absolute top-0 left-0 text-[9px] font-black uppercase tracking-[0.4em] flex flex-col gap-1">
          <span>ISO 800</span>
          <span>F 2.8</span>
          <span className="hidden sm:inline">5600 K</span>
        </div>

        {/* Timecode */}
        <div className="absolute bottom-0 right-0 font-mono text-[10px] tracking-widest">
          TC {timecode}
        </div>

        {/* Format Stats */}
        <div className="absolute bottom-0 left-0 text-[9px] font-black uppercase tracking-[0.4em]">
          4K RAW <span className="hidden sm:inline">• 24 FPS • 48kHz</span>
        </div>

        {/* Viewfinder Corners */}
        <div className="absolute top-4 left-4 sm:top-10 sm:left-10 w-6 h-6 sm:w-8 sm:h-8 border-t border-l border-zinc-500/30"></div>
        <div className="absolute top-4 right-4 sm:top-10 sm:right-10 w-6 h-6 sm:w-8 sm:h-8 border-t border-r border-zinc-500/30"></div>
        <div className="absolute bottom-4 left-4 sm:bottom-10 sm:left-10 w-6 h-6 sm:w-8 sm:h-8 border-b border-l border-zinc-500/30"></div>
        <div className="absolute bottom-4 right-4 sm:bottom-10 sm:right-10 w-6 h-6 sm:w-8 sm:h-8 border-b border-r border-zinc-500/30"></div>
      </div>

      {/* Central Timeline Line (Desktop) & Left Line (Mobile) */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-zinc-500/30 to-transparent"></div>

      <div className="relative z-10 space-y-16 md:space-y-32">
        {EXPERIENCES.map((exp, index) => (
          <Reveal key={index} direction={index % 2 === 0 ? 'right' : 'left'} delay={index * 100}>
            <div className={`relative flex flex-col md:flex-row gap-6 md:gap-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Timeline Dot */}
              <div className={`absolute left-4 md:left-1/2 top-0 -translate-x-1/2 w-3 h-3 bg-[var(--text-color)] rounded-full border-4 border-[var(--bg-color)] z-10 shadow-[0_0_15px_rgba(255,255,255,0.1)]`}></div>

              {/* Content Side */}
              <div className={`pl-12 md:pl-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-20' : 'md:pr-20'} text-left`}>
                <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-md mb-4 backdrop-blur-sm">
                  <span className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-400">{exp.period}</span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mb-2 leading-tight group-hover:text-zinc-300 transition-colors">
                  {exp.company}
                </h3>
                
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="text-xs font-black uppercase tracking-widest text-zinc-500">{exp.role}</span>
                  <span className="w-1 h-1 bg-zinc-500/30 rounded-full"></span>
                  <span className="text-[10px] text-zinc-500 uppercase tracking-tighter">{exp.location}</span>
                </div>

                <ul className="space-y-4">
                  {exp.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-zinc-400 text-sm md:text-base leading-relaxed group/item">
                      <span className="mt-2.5 w-1 h-1 bg-zinc-600 rounded-full flex-shrink-0 group-hover/item:bg-white transition-colors"></span>
                      <span className="group-hover/item:text-white transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Empty Side (Desktop) */}
              <div className="hidden md:block md:w-1/2"></div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
};