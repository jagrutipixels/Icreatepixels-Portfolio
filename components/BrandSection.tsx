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
        className="group relative flex flex-col h-full bg-zinc-900/10 border border-zinc-900/50 hover:border-zinc-700/50 transition-all duration-500 p-1 rounded-3xl block outline-none focus:ring-2 focus:ring-white/20"
      >
        {/* Visual Header */}
        <div className="relative aspect-square overflow-hidden rounded-[2.5rem] mb-8 bg-zinc-950">
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
            className={`w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-all duration-1000 ease-out grayscale group-hover:grayscale-0 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          />
          
          {/* Fading Overlay */}
          <div className="absolute inset-0 bg-black/60 group-hover:bg-black/0 transition-all duration-700 ease-in-out"></div>
          
          {/* Overlay Content */}
          <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end pointer-events-none">
            <span className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/10 text-white text-[9px] uppercase font-black tracking-widest rounded-full transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-500">
              {brand.category}
            </span>
            
            {/* View Live Link Icon */}
            <div className="flex flex-col items-end gap-2 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <span className="text-[8px] text-white font-black uppercase tracking-[0.2em] drop-shadow-md">View Live Site</span>
              <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-2xl">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="px-6 pb-8 flex flex-col flex-grow">
          <h3 className="text-3xl font-serif font-bold text-white mb-4 group-hover:translate-x-1 transition-transform duration-500">{brand.name}</h3>
          <p className="text-zinc-500 text-sm leading-relaxed mb-8 flex-grow">
            {brand.description}
          </p>

          {/* Deliverable Tags */}
          <div className="flex flex-wrap gap-2 pt-6 border-t border-zinc-900/50">
            {brand.deliverables.map((item: string, i: number) => (
              <span key={i} className="text-[8px] font-bold text-zinc-600 uppercase tracking-widest flex items-center gap-1.5">
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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      {BRAND_PROJECTS.map((brand, index) => (
        <BrandCard key={index} brand={brand} index={index} />
      ))}
    </div>
  );
};