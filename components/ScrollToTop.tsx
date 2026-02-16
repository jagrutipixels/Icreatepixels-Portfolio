import React, { useState, useEffect } from 'react';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling down 300px (reduced from 400 for better accessibility)
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[120] p-4 md:p-5 bg-[var(--text-color)] text-[var(--bg-color)] rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.3)] backdrop-blur-md transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-110 active:scale-90 flex items-center justify-center group ${
        isVisible 
          ? 'opacity-100 translate-y-0 pointer-events-auto' 
          : 'opacity-0 translate-y-12 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <svg 
        width="22" 
        height="22" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="3.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        className="transform group-hover:-translate-y-1 transition-transform duration-300"
      >
        <path d="M18 15l-6-6-6 6" />
      </svg>
      
      {/* Tooltip for desktop users */}
      <span className="absolute right-full mr-4 bg-zinc-900 text-white text-[9px] font-black uppercase tracking-[0.3em] px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none border border-white/10 whitespace-nowrap translate-x-2 group-hover:translate-x-0 hidden lg:block">
        Back to top
      </span>
      
      {/* Pulse effect for subtle attention */}
      <span className="absolute inset-0 rounded-full bg-current opacity-0 group-hover:opacity-10 group-hover:scale-150 transition-all duration-700"></span>
    </button>
  );
};