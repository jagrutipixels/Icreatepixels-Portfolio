import React, { useState } from 'react';
import { BRAND_PROJECTS } from '../constants';
import { Reveal } from './Reveal';

const BrandCard: React.FC<{ brand: any; index: number }> = ({ brand, index }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Reveal delay={index * 150} direction="up" className="h-full">
      <a 
        href={brand.link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="group relative flex flex-col h-full bg-[#0a0a0a] border border-zinc-900 hover:border-zinc-700 transition-all duration-500 rounded-[2rem] sm:rounded-[2.5rem] block outline-none focus:ring-2 focus:ring-white/20 overflow-hidden shadow-xl"
      >
        <div className="relative aspect-video overflow-hidden bg-zinc-950">
          {!isLoaded && (
            <div className="absolute inset-0 animate-pulse bg-zinc-900 flex items-center justify-center">
               <div className="w-8 h-8 border-2 border-zinc-800 border-t-zinc-600 rounded-full animate-spin"></div>
            </div>
          )}
          
          <img 
            src={brand.image} 
            alt={brand.name} 
            loading="lazy"
            onLoad={() => setIsLoaded(true)}
            className={`w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          />
          
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/10 transition-all duration-700 ease-in-out"></div>
          
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 transform group-hover:translate-x-2 transition-transform duration-500 z-10">
            <div className="px-4 py-2 sm:px-5 sm:py-2.5 bg-black/60 backdrop-blur-xl border border-white/10 text-white text-[8px] sm:text-[10px] font-black uppercase tracking-[0.2em] rounded-full">
              {brand.category}
            </div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 pointer-events-none sm:pointer-events-auto">
            <div className="flex flex-col items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white text-black flex items-center justify-center shadow-2xl">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
              </div>
              <span className="text-[8px] sm:text-[10px] text-white font-black uppercase tracking-[0.3em] drop-shadow-2xl">Launch Site</span>
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-8 md:p-10 flex flex-col flex-grow">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white mb-3 sm:mb-4">{brand.name}</h3>
          <p className="text-zinc-500 text-xs sm:text-sm lg:text-base leading-relaxed mb-6 sm:mb-8 flex-grow font-light">
            {brand.description}
          </p>

          <div className="flex flex-wrap gap-x-4 gap-y-2 pt-5 sm:pt-6 border-t border-zinc-900">
            {brand.deliverables.map((item: string, i: number) => (
              <span key={i} className="text-[7px] sm:text-[9px] font-black text-zinc-700 uppercase tracking-widest flex items-center gap-1.5">
                <span className="w-1 h-1 bg-zinc-800 rounded-full"></span>
                {item}
              </span>
            ))}
          </div>
        </div>
      </a>
    </Reveal>
  );
};

export const BrandSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
      {BRAND_PROJECTS.map((brand, index) => (
        <BrandCard key={index} brand={brand} index={index} />
      ))}
    </div>
  );
};