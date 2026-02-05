import React, { useState } from 'react';
import { BRAND_PROJECTS } from '../constants';
import { Reveal } from './Reveal';

const BrandCard: React.FC<{ brand: any; index: number }> = ({ brand, index }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Reveal delay={index * 200} direction="up">
      <a 
        href={brand.link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="group relative flex flex-col h-full bg-[#0a0a0a] border border-zinc-900 hover:border-zinc-700 transition-all duration-500 rounded-[2.5rem] block outline-none focus:ring-2 focus:ring-white/20 overflow-hidden"
      >
        {/* Visual Container - Set to 16:9 ratio */}
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
            className={`w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          />
          
          {/* Overlay gradient/shade - Fades out on hover */}
          <div className="absolute inset-0 bg-black/60 group-hover:bg-black/10 transition-all duration-700 ease-in-out"></div>
          
          {/* Bottom Left Pill - Category */}
          <div className="absolute bottom-6 left-6 transform group-hover:translate-x-2 transition-transform duration-500 z-10">
            <div className="px-5 py-2.5 bg-black/40 backdrop-blur-xl border border-white/10 text-white text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] rounded-full shadow-2xl">
              {brand.category}
            </div>
          </div>

          {/* Centered Action Reveal - Appears on hover */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
            <div className="flex flex-col items-center gap-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center shadow-[0_10px_40px_rgba(255,255,255,0.3)]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </div>
              <span className="text-[10px] text-white font-black uppercase tracking-[0.3em] drop-shadow-2xl">View Live Site</span>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-8 md:p-10 flex flex-col flex-grow">
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">{brand.name}</h3>
          <p className="text-zinc-500 text-sm md:text-base leading-relaxed mb-8 flex-grow">
            {brand.description}
          </p>

          {/* Deliverable Tags */}
          <div className="flex flex-wrap gap-x-5 gap-y-2 pt-6 border-t border-zinc-900">
            {brand.deliverables.map((item: string, i: number) => (
              <span key={i} className="text-[8px] md:text-[9px] font-black text-zinc-600 uppercase tracking-widest flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-zinc-800 rounded-full"></span>
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
      {BRAND_PROJECTS.map((brand, index) => (
        <BrandCard key={index} brand={brand} index={index} />
      ))}
    </div>
  );
};