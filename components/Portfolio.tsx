import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import { Reveal } from './Reveal';
import { ProjectModal } from './ProjectModal';

const ProjectCard: React.FC<{ project: Project; onClick: () => void; index: number }> = ({ project, onClick, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Reveal delay={index * 100}>
      <div 
        onClick={onClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onClick()}
        className="group h-full cursor-pointer relative overflow-hidden bg-[#121212] border border-zinc-800/50 hover:border-zinc-700 transition-all duration-500 rounded-xl flex flex-col active:scale-[0.99] outline-none"
      >
        <div className="aspect-[4/3] relative overflow-hidden bg-zinc-950">
          {!imageLoaded && (
            <div className="absolute inset-0 animate-pulse bg-zinc-900 flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-zinc-700 border-t-zinc-500 rounded-full animate-spin"></div>
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

        <div className="p-8 md:p-10 flex-grow flex flex-col relative bg-[#181818]">
          {/* External Link Icon in top right - Matches Reference */}
          <div className="absolute top-10 right-10 text-zinc-400 group-hover:text-white transition-colors duration-300">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </div>
          
          {/* Category Label - Matches Reference */}
          <div className="text-[10px] md:text-xs font-bold text-zinc-500 uppercase tracking-[0.15em] mb-4">
              {project.client}
          </div>

          {/* Title - Matches Reference serif style */}
          <h3 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-[#f8f8f8] leading-tight">
            {project.title}
          </h3>

          {/* Deliverable with vertical accent - Matches Reference */}
          <div className="mb-8 pl-4 border-l border-zinc-800">
            <p className="text-zinc-500 text-sm md:text-base italic leading-relaxed">
              {project.deliverable}
            </p>
          </div>

          {/* Impact Section - Matches Reference */}
          <div className="mt-auto pt-8 border-t border-zinc-800/60">
            <span className="text-[9px] uppercase font-black tracking-widest text-zinc-600 block mb-2.5">Impact</span>
            <p className="text-xs md:text-sm text-zinc-200 font-bold leading-relaxed">{project.impact}</p>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {PROJECTS.map((project, index) => (
          <ProjectCard 
            key={index} 
            project={project} 
            onClick={() => openModal(project)} 
            index={index} 
          />
        ))}
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </>
  );
};