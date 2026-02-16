import React, { useState, useEffect } from 'react';
import { Project } from '../types.ts';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Esc key handling
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-0 md:p-6 lg:p-12 overflow-hidden isolation-auto">
      {/* Background Overlay */}
      <div 
        className="absolute inset-0 bg-black/90 md:bg-black/95 backdrop-blur-md transition-opacity duration-500 cursor-zoom-out" 
        onClick={onClose}
      />
      
      <div className="relative bg-[var(--bg-color)] text-[var(--text-color)] w-full h-full md:h-auto md:max-h-[90vh] md:max-w-6xl overflow-y-auto md:rounded-3xl shadow-[0_0_100px_rgba(0,0,0,0.5)] flex flex-col md:flex-row md:border md:border-zinc-500/10 z-10 transition-colors duration-800 scrollbar-hide">
        
        {/* Responsive Close Button */}
        <button 
          onClick={onClose}
          className="fixed top-6 right-6 md:absolute md:top-8 md:right-8 z-[1100] p-4 bg-current text-[var(--bg-color)] rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all touch-target flex items-center justify-center"
          aria-label="Close modal"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>

        {/* Modal Image Header (Mobile) / Left Side (Desktop) */}
        <div className="w-full md:w-1/2 flex-shrink-0 relative min-h-[40vh] md:h-auto overflow-hidden bg-zinc-950/20">
          {!imageLoaded && (
            <div className="absolute inset-0 animate-pulse bg-zinc-500/10 flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-zinc-500/20 border-t-current rounded-full animate-spin"></div>
            </div>
          )}
          <img 
            src={project.image} 
            alt={project.title} 
            onLoad={() => setImageLoaded(true)}
            className={`w-full h-full object-cover transition-all duration-1000 ${imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-color)] via-transparent to-transparent md:hidden"></div>
        </div>

        {/* Modal Content */}
        <div className="w-full md:w-1/2 p-6 sm:p-10 md:p-12 lg:p-16 flex flex-col">
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6 pt-4 md:pt-0">
              <span className="text-zinc-500 uppercase tracking-[0.3em] text-[10px] font-black">{project.client}</span>
              {project.liveLink && (
                <a 
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-2.5 bg-current text-[var(--bg-color)] text-[10px] font-black uppercase tracking-widest rounded-full hover:opacity-90 transition-all text-center flex items-center justify-center gap-2 touch-target"
                >
                  View Live
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                </a>
              )}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold leading-tight mb-4 sm:mb-6">{project.title}</h2>
            <p className="text-zinc-500 text-base sm:text-lg leading-relaxed font-light italic">
              {project.description}
            </p>
          </div>
          
          <div className="space-y-10 flex-grow">
            {project.challenges && (
              <div>
                <h3 className="text-[10px] uppercase font-black tracking-[0.4em] text-zinc-400 mb-4">The Challenge</h3>
                <ul className="space-y-3">
                  {project.challenges.map((challenge, i) => (
                    <li key={i} className="text-zinc-500 text-xs sm:text-sm flex gap-4 leading-relaxed">
                      <span className="text-zinc-500 flex-shrink-0 mt-1.5 w-1 h-1 rounded-full bg-current"></span> 
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-zinc-500/10 mb-8 md:mb-0">
              <div>
                <span className="text-[8px] uppercase font-black tracking-widest text-zinc-400 block mb-1.5">Deliverable</span>
                <p className="text-zinc-500 text-[10px] sm:text-xs font-medium uppercase tracking-tighter leading-tight">{project.deliverable}</p>
              </div>
              <div>
                <span className="text-[8px] uppercase font-black tracking-widest text-zinc-400 block mb-1.5">Key Impact</span>
                <p className="text-current text-[10px] sm:text-xs font-bold leading-tight">{project.impact}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};