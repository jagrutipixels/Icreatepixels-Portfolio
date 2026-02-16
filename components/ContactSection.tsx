import React from 'react';
import { PERSONAL_INFO } from '../constants';

export const ContactSection: React.FC = () => {
  const socialLinks = [
    { label: 'Instagram', url: PERSONAL_INFO.socials.instagram, handle: '@icreatepixels' },
    { label: 'YouTube', url: PERSONAL_INFO.socials.youtube, handle: 'icreatepixels' },
    { label: 'LinkedIn', url: PERSONAL_INFO.socials.linkedin, handle: 'abhishek-gujar' },
  ];

  return (
    <div className="relative max-w-7xl mx-auto">
      <div className="absolute top-0 right-0 text-[10px] font-black uppercase tracking-[0.5em] text-zinc-500/10 sm:text-zinc-500/20 text-right space-y-2 pointer-events-none hidden xs:block">
        <div>PROD: PIXELS</div>
        <div className="hidden sm:block">ROLL: 2024</div>
        <div>SCENE: END</div>
        <div>TAKE: 01</div>
      </div>

      <div className="text-center mb-16 md:mb-40">
        <span className="text-[9px] font-black uppercase tracking-[0.8em] text-zinc-500 mb-8 block">Project Inquiry</span>
        <h2 className="text-[14vw] sm:text-[12vw] md:text-[8vw] font-serif font-bold leading-[0.85] tracking-tighter mb-12">
          Let’s make <br/> <span className="text-zinc-500">History.</span>
        </h2>
        
        <div className="flex flex-col items-center px-4 gap-4">
          <a 
            href={`mailto:${PERSONAL_INFO.email}`} 
            className="group relative inline-flex flex-col items-center py-4 w-full sm:w-auto"
          >
            <span className="text-lg xs:text-xl sm:text-2xl md:text-5xl font-light text-zinc-500 group-hover:text-current transition-all duration-500 tracking-tight break-all sm:break-normal">
              {PERSONAL_INFO.email}
            </span>
            <div className="mt-4 w-12 h-[2px] bg-zinc-500/20 group-hover:w-full group-hover:bg-current transition-all duration-700"></div>
          </a>
          
          <a 
            href={`tel:${PERSONAL_INFO.phone}`}
            className="text-zinc-500/80 hover:text-current transition-colors text-sm font-black uppercase tracking-[0.5em] mt-4"
          >
            {PERSONAL_INFO.phone}
          </a>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 border border-zinc-500/10 rounded-[2rem] sm:rounded-[3rem] overflow-hidden bg-zinc-500/5 backdrop-blur-sm">
        {socialLinks.map((link, i) => (
          <a 
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group p-8 sm:p-10 md:p-16 flex flex-col items-center text-center transition-all duration-500 hover:bg-current hover:text-[var(--bg-color)] border-zinc-500/10 ${i !== 2 ? 'md:border-r' : ''} ${i !== 2 ? 'border-b md:border-b-0' : ''} touch-target`}
          >
            <span className="text-[9px] font-black uppercase tracking-[0.4em] text-zinc-400 group-hover:text-inherit/40 mb-6 transition-colors">
              {link.label}
            </span>
            <span className="text-xl sm:text-2xl font-serif font-bold mb-2 transition-transform duration-500 group-hover:scale-110">
              {link.handle}
            </span>
            <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-16 sm:mt-32 pt-12 border-t border-zinc-500/10 flex flex-col md:flex-row items-center justify-between gap-8 pb-12">
        <div className="flex flex-wrap justify-center items-center gap-4">
           <div className="px-3 py-1 border border-zinc-500/20 rounded text-[8px] font-black text-zinc-400 tracking-widest uppercase">Mumbai Based</div>
           <div className="px-3 py-1 border border-zinc-500/20 rounded text-[8px] font-black text-zinc-400 tracking-widest uppercase">Global Reach</div>
        </div>
        
        <div className="text-[8px] font-black uppercase tracking-[0.5em] text-zinc-500/40 text-center md:text-right leading-relaxed max-w-[280px] sm:max-w-none">
          Establishing focus • Capturing detail <br className="hidden sm:block" />
          Documenting the vision since 2019
        </div>
      </div>
    </div>
  );
};