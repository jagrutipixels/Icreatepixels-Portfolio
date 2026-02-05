import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import { Reveal } from './Reveal';
import { ProjectModal } from './ProjectModal';

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <Reveal key={index} delay={index * 100}>
            <div 
              onClick={() => openModal(project)}
              className="group h-full cursor-pointer relative overflow-hidden bg-zinc-900 border border-zinc-800/50 hover:border-zinc-500 transition-all duration-500 rounded-lg flex flex-col active:scale-[0.98]"
            >
              <div className="aspect-[4/5] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8 flex-grow flex flex-col relative">
                <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </div>
                
                <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-3 flex justify-between">
                    <span>{project.client}</span>
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4">{project.title}</h3>
                <p className="text-zinc-400 text-sm mb-6 leading-relaxed italic border-l-2 border-zinc-800 pl-4">
                  {project.deliverable}
                </p>
                <div className="mt-auto pt-6 border-t border-zinc-800/50">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-500 block mb-2">Impact</span>
                  <p className="text-xs text-white/80 font-medium">{project.impact}</p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </>
  );
};