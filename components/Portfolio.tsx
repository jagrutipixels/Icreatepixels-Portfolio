import React, { useState } from 'react';
import { PROJECTS } from '../constants.ts';
import { Project } from '../types.ts';
import { Reveal } from './Reveal.tsx';

const ProjectCard: React.FC<{ project: Project; onClick: () => void; index: number }> = ({ project, onClick, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Reveal delay={index * 100}>
      <div 
        onClick={onClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onClick()}
        className="group h-full cursor-pointer relative overflow-hidden bg-zinc-900/50 border border-zinc-800/20 hover:border-zinc-700/50 transition-all duration-500 rounded-xl flex flex-col active:scale-[0.99] outline-none shadow-sm"
      >
        <div className="aspect-[4/3] relative overflow-hidden bg-zinc-950/10">
          {!imageLoaded && (
            <div className="absolute inset-0 animate-pulse bg-zinc-900/10 flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-zinc-700/30 border-t-zinc-500/50 rounded-full animate-spin"></div>
            </div>
          )}
          
          <img 
            src={project.image} 
            alt={project.title} 
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            className={`w-full h-full object-cover transform group-hover:scale-105 transition-all duration-1000 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>

        <div className="p-8 md:p-10 flex-grow flex flex-col relative transition-colors duration-800">
          <div className="absolute top-10 right-10 text-zinc-500 group-hover:text-current transition-colors duration-300">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </div>
          
          <div className="text-[10px] md:text-xs font-bold text-zinc-500 uppercase tracking-[0.15em] mb-4">
              {project.client}
          </div>

          <h3 className="text-2xl md:text-3xl font-serif font-bold mb-6 leading-tight">
            {project.title}
          </h3>

          <div className="mb-8 pl-4 border-l border-zinc-800/20">
            <p className="text-zinc-500 text-sm md:text-base italic leading-relaxed">
              {project.deliverable}
            </p>
          </div>

          <div className="mt-auto pt-8 border-t border-zinc-800/10">
            <span className="text-[9px] uppercase font-black tracking-widest text-zinc-400 block mb-2.5">Impact</span>
            <p className="text-xs md:text-sm font-bold leading-relaxed">{project.impact}</p>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export const Portfolio: React.FC<{ onProjectSelect: (project: Project) => void }> = ({ onProjectSelect }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
      {PROJECTS.map((project, index) => (
        <ProjectCard 
          key={index} 
          project={project} 
          onClick={() => onProjectSelect(project)} 
          index={index} 
        />
      ))}
    </div>
  );
};