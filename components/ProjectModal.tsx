import React, { useState } from 'react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

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
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 sm:p-4 md:p-8 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/98 backdrop-blur-xl transition-opacity duration-300" 
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className="relative bg-[#0a0a0a] border-y sm:border border-zinc-800 w-full max-w-6xl h-full sm:h-auto sm:max-h-[90vh] overflow-y-auto sm:rounded-2xl shadow-[0_0_80px_rgba(0,0,0,0.8)] flex flex-col md:flex-row animate-in fade-in zoom-in duration-300 ease-out scrollbar-hide">
        {/* Close Button Mobile Header-ish */}
        <div className="sticky top-0 right-0 z-50 flex justify-end p-4 md:absolute md:top-6 md:right-6 pointer-events-none">
          <button 
            onClick={onClose}
            className="pointer-events-auto p-2.5 bg-zinc-900/80 backdrop-blur-md border border-zinc-800 hover:bg-white text-white hover:text-black rounded-full transition-all duration-300 shadow-xl"
            aria-label="Close modal"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex-shrink-0 relative overflow-hidden bg-zinc-950">
          {!imageLoaded && (
            <div className="absolute inset-0 animate-pulse bg-zinc-900 flex items-center justify-center">
              <div className="w-10 h-10 border-2 border-zinc-800 border-t-zinc-600 rounded-full animate-spin"></div>
            </div>
          )}
          <img 
            src={project.image} 
            alt={project.title} 
            onLoad={() => setImageLoaded(true)}
            className={`w-full h-[350px] md:h-full object-cover transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#0a0a0a]/20"></div>
        </div>

        {/* Details Section */}
        <div className="md:w-1/2 p-6 md:p-12 lg:p-16 flex flex-col bg-[#0a0a0a]">
          <div className="mb-10">
             <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6">
              <span className="text-zinc-500 uppercase tracking-[0.3em] text-[10px] font-black">{project.client}</span>
              {project.liveLink && (
                <a 
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-white text-black text-[9px] font-black uppercase tracking-widest rounded-full hover:bg-zinc-200 transition-all flex items-center gap-2 shadow-[0_4px_15px_rgba(255,255,255,0.1)] active:scale-95"
                >
                  View Work
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                </a>
              )}
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight mb-2">{project.title}</h2>
          </div>
          
          <div className="space-y-10 flex-grow">
            <div>
              <h3 className="text-[10px] uppercase font-black tracking-[0.2em] text-zinc-600 mb-4 flex items-center gap-3">
                <span className="w-5 h-[1px] bg-zinc-800"></span> Summary
              </h3>
              <p className="text-zinc-400 text-base leading-relaxed font-light italic">
                {project.description || "Experimental visual exploration."}
              </p>
            </div>

            {project.challenges && project.challenges.length > 0 && (
              <div>
                <h3 className="text-[10px] uppercase font-black tracking-[0.2em] text-zinc-600 mb-4 flex items-center gap-3">
                  <span className="w-5 h-[1px] bg-zinc-800"></span> Challenges
                </h3>
                <ul className="space-y-3">
                  {project.challenges.map((challenge, i) => (
                    <li key={i} className="text-zinc-400 text-sm flex gap-3 leading-relaxed">
                      <span className="text-zinc-700 font-bold">/</span> {challenge}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.technologies && project.technologies.length > 0 && (
              <div>
                <h3 className="text-[10px] uppercase font-black tracking-[0.2em] text-zinc-600 mb-4 flex items-center gap-3">
                  <span className="w-5 h-[1px] bg-zinc-800"></span> Toolkit
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-2.5 py-1.5 bg-zinc-900 border border-zinc-800 text-zinc-500 text-[8px] font-bold uppercase tracking-widest rounded transition-colors hover:border-zinc-500">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="mt-12 pt-8 border-t border-zinc-900 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
            <div className="w-full sm:w-auto">
              <span className="text-[9px] uppercase font-black tracking-widest text-zinc-700 block mb-1">Deliverable</span>
              <p className="text-zinc-400 text-xs sm:text-sm font-medium">{project.deliverable}</p>
            </div>
            <div className="w-full sm:w-auto sm:text-right border-l sm:border-l-0 sm:border-r border-zinc-900 sm:pr-0 pl-4 sm:pl-0">
              <span className="text-[9px] uppercase font-black tracking-widest text-zinc-700 block mb-1">Impact</span>
              <p className="text-white text-xs sm:text-sm font-bold italic">{project.impact}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};