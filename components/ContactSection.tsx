
import React from 'react';
import { PERSONAL_INFO } from '../constants';

export const ContactSection: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-5xl md:text-7xl font-serif font-bold mb-8">Let's create pixels.</h2>
      <p className="text-zinc-400 text-xl mb-12 leading-relaxed">
        Currently based in Mumbai, available for creative direction, filmmaking, and strategic content consulting worldwide.
      </p>
      
      <div className="mb-16">
        <a 
          href={`mailto:${PERSONAL_INFO.email}`} 
          className="text-2xl md:text-4xl font-serif font-bold text-white hover:text-zinc-400 underline underline-offset-8 decoration-zinc-800 hover:decoration-white transition-all duration-300"
        >
          {PERSONAL_INFO.email}
        </a>
      </div>

      <div className="flex flex-wrap justify-center gap-8 md:gap-16">
        {[
          { label: 'Instagram', url: 'https://instagram.com/icreatepixels' },
          { label: 'YouTube', url: 'https://youtube.com/@icreatepixels' },
          { label: 'LinkedIn', url: 'https://linkedin.com/in/icreatepixels' },
        ].map((link) => (
          <a 
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-white uppercase tracking-widest text-xs font-bold flex items-center gap-3 group"
          >
            <span className="w-8 h-[1px] bg-zinc-800 group-hover:bg-white group-hover:w-12 transition-all"></span>
            {link.label}
          </a>
        ))}
      </div>

      <div className="mt-20 pt-12 border-t border-zinc-900 inline-block text-zinc-600 text-[10px] uppercase tracking-[0.5em] font-bold">
        Crafting cinematic narratives since 2019
      </div>
    </div>
  );
};
