import React, { useState, useEffect } from 'react';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling down 400px
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
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
      className={`fixed bottom-8 right-8 z-[90] p-4 bg-white text-black rounded-full shadow-2xl transition-all duration-500 ease-in-out hover:scale-110 active:scale-90 flex items-center justify-center group ${
        isVisible 
          ? 'opacity-100 translate-y-0 pointer-events-auto' 
          : 'opacity-0 translate-y-12 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <svg 
        width="20" 
        height="20" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="3" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        className="transform group-hover:-translate-y-1 transition-transform"
      >
        <path d="M18 15l-6-6-6 6" />
      </svg>
      
      {/* Tooltip for desktop users */}
      <span className="absolute right-full mr-4 bg-black/80 backdrop-blur-md text-white text-[9px] font-black uppercase tracking-[0.3em] px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-white/10 whitespace-nowrap">
        Back to top
      </span>
    </button>
  );
};