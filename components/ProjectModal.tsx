import React, { useState, useEffect } from 'react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/95 backdrop-blur-2xl transition-opacity duration-300" 
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className="relative bg-[#0a0a0a] w-full h-full md:h-auto md:max-h-[85vh] md:max-w-6xl overflow-y-auto md:rounded-3xl shadow-[0_0_100px_rgba(0,0,0,0.8)] flex flex-col md:flex-row animate-in fade-in zoom-in duration-300 ease-out scrollbar-hide md:border md:border-zinc-800">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="fixed md:absolute top-6 right-6 z-[110] p-3 bg-white text-black rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all"
          aria-label="Close modal"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex-shrink-0 relative h-[45vh] md:h-auto overflow-hidden bg-zinc-950">
          {!imageLoaded && (
            <div className="absolute inset-0 animate-pulse bg-zinc-900 flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-zinc-700 border-t-zinc-400 rounded-full animate-spin"></div>
            </div>
          )}
          <img 
            src={project.image} 
            alt={project.title} 
            onLoad={() => setImageLoaded(true)}
            className={`w-full h-full object-cover transition-opacity duration-700 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#0a0a0a]/30"></div>
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 p-8 md:p-14 lg:p-16 flex flex-col bg-[#0a0a0a]">
          <div className="mb-10">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-6 mb-8">
              <span className="text-zinc-600 uppercase tracking-[0.4em] text-[10px] font-black">{project.client}</span>
              {project.liveLink && (
                <a 
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-3 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-zinc-200 transition-all text-center flex items-center justify-center gap-2"
                >
                  Launch Project
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                </a>
              )}
            </div>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white leading-[1.1] mb-6">{project.title}</h2>
            <p className="text-zinc-400 text-lg leading-relaxed font-light italic">
              {project.description}
            </p>
          </div>
          
          <div className="space-y-12">
            {project.challenges && (
              <div>
                <h3 className="text-[10px] uppercase font-black tracking-[0.4em] text-zinc-700 mb-5">Core Challenges</h3>
                <ul className="space-y-4">
                  {project.challenges.map((challenge, i) => (
                    <li key={i} className="text-zinc-400 text-sm flex gap-4 leading-relaxed">
                      <span className="text-zinc-800">•</span> {challenge}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="grid grid-cols-2 gap-8 pt-10 border-t border-zinc-900">
              <div>
                <span className="text-[9px] uppercase font-black tracking-widest text-zinc-700 block mb-2">Deliverable</span>
                <p className="text-zinc-400 text-xs font-medium">{project.deliverable}</p>
              </div>
              <div>
                <span className="text-[9px] uppercase font-black tracking-widest text-zinc-700 block mb-2">Impact</span>
                <p className="text-white text-xs font-bold">{project.impact}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};