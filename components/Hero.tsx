import React from 'react';
import { PERSONAL_INFO } from '../constants';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
      {/* Background Cinematic Overlay */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1920" 
          alt="Cinematic Background" 
          className="w-full h-full object-cover grayscale brightness-50"
        />
      </div>

      <div className="relative z-20 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-zinc-500 uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-sm font-bold mb-6 animate-fade-in px-4">
          {PERSONAL_INFO.title}
        </h2>
        <h1 className="text-4xl md:text-7xl lg:text-9xl font-serif font-bold mb-8 leading-[1.1] tracking-tighter text-white">
          Abhishek <br className="hidden md:block"/> Sanjay Gujar
        </h1>
        <p className="max-w-xl md:max-w-2xl mx-auto text-zinc-400 text-base md:text-xl font-light italic leading-relaxed mb-10 md:mb-12 px-4">
          "{PERSONAL_INFO.philosophy}"
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 px-4">
          <a 
            href="#portfolio" 
            className="w-full sm:w-auto px-10 py-4 bg-white text-black text-[10px] md:text-xs font-bold uppercase tracking-widest hover:bg-zinc-200 transition-all rounded-full text-center"
          >
            Explore Work
          </a>
          <a 
            href="#contact" 
            className="w-full sm:w-auto px-10 py-4 border border-zinc-700 text-white text-[10px] md:text-xs font-bold uppercase tracking-widest hover:border-white transition-all rounded-full text-center"
          >
            Get In Touch
          </a>
        </div>

        <div className="mt-16 md:mt-20 flex flex-wrap justify-center gap-6 md:gap-12 text-zinc-500 text-[9px] md:text-xs font-semibold uppercase tracking-widest px-4">
            <span className="flex items-center gap-2">
                <span className="hidden md:block w-8 h-[1px] bg-zinc-800"></span>
                Mumbai Based
            </span>
            <span className="flex items-center gap-2">
                <span className="hidden md:block w-8 h-[1px] bg-zinc-800"></span>
                6+ Years Exp
            </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <div className="w-[1px] h-10 md:h-12 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </div>
  );
};