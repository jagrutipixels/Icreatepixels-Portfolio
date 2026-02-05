import React from 'react';
import { PERSONAL_INFO } from '../constants';

export const ContactSection: React.FC = () => {
  const socialLinks = [
    { label: 'Instagram', url: PERSONAL_INFO.socials.instagram },
    { label: 'YouTube', url: PERSONAL_INFO.socials.youtube },
    { label: 'LinkedIn', url: PERSONAL_INFO.socials.linkedin },
  ];

  return (
    <div className="max-w-6xl mx-auto py-10">
      <div className="text-center mb-20">
        <h2 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-none">Let's create <br/> pixels.</h2>
        <div className="inline-block relative py-2">
           <a 
            href={`mailto:${PERSONAL_INFO.email}`} 
            className="text-lg md:text-xl font-light text-zinc-400 hover:text-white transition-colors duration-300 tracking-wide"
          >
            {PERSONAL_INFO.email}
          </a>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-[1px] bg-zinc-900"></div>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24">
        {socialLinks.map((link) => (
          <div key={link.label} className="flex flex-col items-center group">
            <a 
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative text-3xl md:text-4xl font-serif font-bold text-white mb-4 block text-center transition-transform duration-500 hover:scale-105"
            >
              <span className="relative z-10">{link.label}</span>
              <div className="absolute -bottom-1.5 left-0 w-full h-[1px] bg-zinc-900 group-hover:bg-white transition-all duration-700 scale-x-50 group-hover:scale-x-100 origin-center"></div>
            </a>
            
            <div className="flex items-center gap-3 text-zinc-800">
               <span className="w-8 h-[1px] bg-zinc-900"></span>
               <span className="text-[8px] font-black uppercase tracking-[0.5em] text-zinc-700 group-hover:text-zinc-500 transition-colors">
                Connect
               </span>
               <span className="w-8 h-[1px] bg-zinc-900"></span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-24 pt-10 border-t border-zinc-900/50 text-center">
        <div className="inline-flex items-center gap-3 text-zinc-800 text-[8px] uppercase tracking-[0.6em] font-black">
          <span className="w-1.5 h-1.5 rounded-full border border-zinc-900 animate-pulse"></span>
          CRAFTING NARRATIVES SINCE 2019
          <span className="w-1.5 h-1.5 rounded-full border border-zinc-900 animate-pulse delay-150"></span>
        </div>
      </div>
    </div>
  );
};