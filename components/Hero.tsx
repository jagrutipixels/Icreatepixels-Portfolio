
import React from 'react';
import { PERSONAL_INFO } from '../constants';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
      {/* Background Cinematic Overlay */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black z-10"></div>
        <img 
          src="https://picsum.photos/seed/cinema/1920/1080" 
          alt="Background" 
          className="w-full h-full object-cover grayscale brightness-50"
        />
      </div>

      <div className="relative z-20 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-zinc-500 uppercase tracking-[0.3em] text-xs md:text-sm font-bold mb-6 animate-fade-in">
          {PERSONAL_INFO.title}
        </h2>
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif font-bold mb-8 leading-tight tracking-tighter">
          Abhishek <br className="hidden md:block"/> Sanjay Gujar
        </h1>
        <p className="max-w-2xl mx-auto text-zinc-400 text-lg md:text-xl font-light italic leading-relaxed mb-12">
          "{PERSONAL_INFO.philosophy}"
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <a 
            href="#portfolio" 
            className="px-10 py-4 bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-zinc-200 transition-all rounded-full"
          >
            Explore Work
          </a>
          <a 
            href="#contact" 
            className="px-10 py-4 border border-zinc-700 text-white text-xs font-bold uppercase tracking-widest hover:border-white transition-all rounded-full"
          >
            Get In Touch
          </a>
        </div>

        <div className="mt-20 flex justify-center gap-12 text-zinc-500 text-xs font-semibold uppercase tracking-widest">
            <span className="flex items-center gap-2">
                <span className="w-8 h-[1px] bg-zinc-800"></span>
                Mumbai Based
            </span>
            <span className="flex items-center gap-2">
                <span className="w-8 h-[1px] bg-zinc-800"></span>
                6+ Years Exp
            </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </div>
  );
};
