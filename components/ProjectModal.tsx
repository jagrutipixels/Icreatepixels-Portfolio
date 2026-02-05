import React from 'react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Prevent scroll when modal is open
  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Close on Escape key
  React.useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/95 backdrop-blur-md transition-opacity duration-300" 
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-[#0a0a0a] border border-zinc-800 w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col md:flex-row animate-in fade-in zoom-in duration-300 ease-out">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-20 p-2.5 bg-black/50 hover:bg-white text-white hover:text-black rounded-full transition-all duration-300 shadow-lg"
          aria-label="Close modal"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>

        {/* Image Section */}
        <div className="md:w-1/2 min-h-[300px] md:min-h-full overflow-hidden relative">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent md:hidden"></div>
        </div>

        {/* Details Section */}
        <div className="md:w-1/2 p-8 md:p-14 lg:p-16 flex flex-col">
          <div className="mb-10 flex justify-between items-start gap-4">
            <div>
              <span className="text-zinc-500 uppercase tracking-[0.3em] text-[10px] font-black mb-3 block">{project.client}</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">{project.title}</h2>
            </div>
            {project.liveLink && (
              <a 
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 px-6 py-3 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-zinc-200 transition-all flex items-center gap-2 flex-shrink-0 shadow-[0_0_20px_rgba(255,255,255,0.1)] active:scale-95"
              >
                View Live
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
              </a>
            )}
          </div>
          
          <div className="space-y-10 flex-grow">
            <div>
              <h3 className="text-[10px] uppercase font-black tracking-[0.25em] text-zinc-600 mb-4 flex items-center gap-3">
                <span className="w-6 h-[1px] bg-zinc-800"></span> Overview
              </h3>
              <p className="text-zinc-400 text-base leading-relaxed font-light italic">
                {project.description || "No description provided for this work."}
              </p>
            </div>

            {project.challenges && project.challenges.length > 0 && (
              <div>
                <h3 className="text-[10px] uppercase font-black tracking-[0.25em] text-zinc-600 mb-4 flex items-center gap-3">
                  <span className="w-6 h-[1px] bg-zinc-800"></span> The Challenge
                </h3>
                <ul className="space-y-3">
                  {project.challenges.map((challenge, i) => (
                    <li key={i} className="text-zinc-400 text-sm flex gap-4 leading-relaxed">
                      <span className="text-zinc-700 mt-1 flex-shrink-0">/</span> {challenge}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.technologies && project.technologies.length > 0 && (
              <div>
                <h3 className="text-[10px] uppercase font-black tracking-[0.25em] text-zinc-600 mb-4 flex items-center gap-3">
                  <span className="w-6 h-[1px] bg-zinc-800"></span> Toolkit
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1.5 bg-zinc-900 border border-zinc-800 text-zinc-500 text-[9px] font-bold uppercase tracking-widest rounded-md hover:border-zinc-600 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="mt-12 pt-8 border-t border-zinc-900/50">
            <div className="flex justify-between items-end">
              <div>
                <span className="text-[10px] uppercase font-black tracking-widest text-zinc-700 block mb-2">Primary Deliverable</span>
                <p className="text-zinc-400 text-sm">{project.deliverable}</p>
              </div>
              <div className="text-right">
                <span className="text-[10px] uppercase font-black tracking-widest text-zinc-700 block mb-2">Impact Outcome</span>
                <p className="text-white text-sm font-bold italic tracking-tight">{project.impact}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};