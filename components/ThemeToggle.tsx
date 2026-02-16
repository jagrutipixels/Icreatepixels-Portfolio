import React from 'react';

interface ThemeToggleProps {
  isStudioMode: boolean;
  onToggle: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ isStudioMode, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="group relative flex items-center gap-3 focus:outline-none"
      aria-label="Switch Theme Mode"
    >
      <div className="hidden lg:flex flex-col items-end mr-1">
        <span className={`text-[8px] font-black uppercase tracking-[0.3em] transition-all duration-500 ${isStudioMode ? 'text-zinc-800' : 'text-zinc-500'}`}>
          {isStudioMode ? 'Studio' : 'Cinema'}
        </span>
        <span className="text-[6px] font-bold uppercase tracking-[0.1em] text-zinc-600">Mode</span>
      </div>

      <div className={`relative w-14 h-7 rounded-full transition-all duration-700 ease-in-out border ${
        isStudioMode 
          ? 'bg-zinc-200 border-zinc-300' 
          : 'bg-zinc-900 border-zinc-800'
      }`}>
        {/* Toggle Knob */}
        <div className={`absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) shadow-xl flex items-center justify-center ${
          isStudioMode 
            ? 'left-[calc(100%-1.5rem)] bg-white rotate-180' 
            : 'left-1 bg-black rotate-0'
        }`}>
          {isStudioMode ? (
             <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
          ) : (
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
          )}
        </div>
      </div>
    </button>
  );
};