import React from 'react';
import { PERSONAL_INFO } from '../constants';

export const ContactSection: React.FC = () => {
  const socialLinks = [
    { label: 'Instagram', url: PERSONAL_INFO.socials.instagram, handle: '@icreatepixels' },
    { label: 'YouTube', url: PERSONAL_INFO.socials.youtube, handle: 'icreatepixels' },
    { label: 'LinkedIn', url: PERSONAL_INFO.socials.linkedin, handle: 'abhishek-gujar' },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* High Impact Heading */}
      <div className="text-center mb-24 md:mb-40">
        <span className="text-[9px] font-black uppercase tracking-[0.8em] text-zinc-700 mb-8 block">Project Inquiry</span>
        <h2 className="text-[12vw] md:text-[8vw] font-serif font-bold text-white leading-[0.85] tracking-tighter mb-12">
          Let’s make <br/> <span className="text-zinc-500">History.</span>
        </h2>
        
        <div className="flex flex-col items-center">
          <a 
            href={`mailto:${PERSONAL_INFO.email}`} 
            className="group relative inline-flex flex-col items-center py-6"
          >
            <span className="text-2xl md:text-5xl font-light text-zinc-400 group-hover:text-white transition-all duration-500 tracking-tight">
              {PERSONAL_INFO.email}
            </span>
            <div className="mt-4 w-12 h-[2px] bg-zinc-800 group-hover:w-full group-hover:bg-white transition-all duration-700"></div>
          </a>
        </div>
      </div>
      
      {/* Social Credits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 border border-zinc-900 rounded-[3rem] overflow-hidden bg-zinc-950/30 backdrop-blur-sm">
        {socialLinks.map((link, i) => (
          <a 
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group p-10 md:p-16 flex flex-col items-center text-center transition-all duration-500 hover:bg-white hover:text-black border-zinc-900 ${i !== 2 ? 'md:border-r' : ''} ${i !== 2 ? 'border-b md:border-b-0' : ''}`}
          >
            <span className="text-[9px] font-black uppercase tracking-[0.4em] text-zinc-600 group-hover:text-black/40 mb-6 transition-colors">
              {link.label}
            </span>
            <span className="text-2xl font-serif font-bold mb-2 transition-transform duration-500 group-hover:scale-110">
              {link.handle}
            </span>
            <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-32 pt-12 border-t border-zinc-900/50 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-4">
           <div className="px-3 py-1 border border-zinc-800 rounded text-[8px] font-black text-zinc-600 tracking-widest uppercase">Mumbai Based</div>
           <div className="px-3 py-1 border border-zinc-800 rounded text-[8px] font-black text-zinc-600 tracking-widest uppercase">Global Reach</div>
        </div>
        
        <div className="text-[8px] font-black uppercase tracking-[0.5em] text-zinc-800 text-center md:text-right leading-relaxed">
          Establishing focus • Capturing detail <br/>
          Documenting the vision since 2019
        </div>
      </div>
    </div>
  );
};