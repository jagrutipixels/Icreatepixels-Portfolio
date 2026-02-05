import React from 'react';
import { PERSONAL_INFO } from '../constants';

export const ContactSection: React.FC = () => {
  const socialLinks = [
    { label: 'Instagram', url: PERSONAL_INFO.socials.instagram },
    { label: 'YouTube', url: PERSONAL_INFO.socials.youtube },
    { label: 'LinkedIn', url: PERSONAL_INFO.socials.linkedin },
  ];

  return (
    <div className="max-w-6xl mx-auto py-6 sm:py-10">
      <div className="text-center mb-16 sm:mb-24">
        <h2 className="text-fluid-h2 font-serif font-bold mb-6 sm:mb-8 leading-[0.9] tracking-tighter">
          Let's create <br/> <span className="text-zinc-600 italic">pixels.</span>
        </h2>
        <div className="inline-block relative py-2 px-4 group">
           <a 
            href={`mailto:${PERSONAL_INFO.email}`} 
            className="text-base sm:text-xl font-light text-zinc-400 group-hover:text-white transition-colors duration-300 tracking-wide"
          >
            {PERSONAL_INFO.email}
          </a>
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-zinc-900 group-hover:bg-zinc-500 transition-all origin-center scale-x-50 group-hover:scale-x-100"></div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-12 items-center justify-center">
        {socialLinks.map((link) => (
          <div key={link.label} className="flex flex-col items-center group">
            <a 
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white mb-3 block text-center transition-all duration-500 hover:scale-105 active:scale-95"
            >
              <span className="relative z-10">{link.label}</span>
              <div className="absolute -bottom-1 left-0 w-full h-[1px] bg-zinc-900 group-hover:bg-white transition-all duration-700 scale-x-0 group-hover:scale-x-100 origin-center"></div>
            </a>
            
            <div className="flex items-center gap-3 text-zinc-900">
               <span className="w-6 sm:w-8 h-[1px] bg-zinc-900"></span>
               <span className="text-[7px] sm:text-[8px] font-black uppercase tracking-[0.4em] text-zinc-700 group-hover:text-zinc-500 transition-colors">
                Connect
               </span>
               <span className="w-6 sm:w-8 h-[1px] bg-zinc-900"></span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 sm:mt-28 pt-10 border-t border-zinc-900/50 text-center">
        <div className="inline-flex items-center gap-2 sm:gap-4 text-zinc-800 text-[7px] sm:text-[9px] uppercase tracking-[0.4em] sm:tracking-[0.6em] font-black">
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-900 animate-pulse"></span>
          CRAFTING NARRATIVES SINCE 2019
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-900 animate-pulse delay-200"></span>
        </div>
      </div>
    </div>
  );
};