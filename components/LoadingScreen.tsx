import React, { useEffect, useState } from 'react';

export const LoadingScreen: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const logoUrl = "https://raw.githubusercontent.com/jagrutipixels/pixels/2a4100de1fb6b50a220f0ca500322b2a91316285/logo_white.png";

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => setIsVisible(false), 800);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#050505] transition-all duration-1000 ease-in-out ${
        isExiting ? 'opacity-0 translate-y-[-10px]' : 'opacity-100'
      }`}
    >
      <div className="relative flex flex-col items-center">
        {/* Animated Logo */}
        <div className={`transition-all duration-1000 ease-out transform ${
          isExiting ? 'scale-110 blur-sm' : 'scale-100 blur-0'
        }`}>
          <img 
            src={logoUrl} 
            alt="Abhishek Sanjay Gujar" 
            className="h-16 md:h-20 w-auto object-contain animate-pulse"
          />
        </div>

        {/* Cinematic Progress Line */}
        <div className="mt-12 w-32 h-[1px] bg-zinc-900 overflow-hidden relative">
          <div 
            className={`absolute inset-0 bg-white transition-all duration-[2000ms] ease-out ${
              isExiting ? 'translate-x-full' : '-translate-x-full'
            }`}
            style={{ transform: isExiting ? 'translateX(100%)' : 'translateX(0%)' }}
          ></div>
        </div>

        <div className="mt-6">
          <span className="text-[8px] font-black uppercase tracking-[1em] text-zinc-600 animate-pulse">
            Establishing Focus
          </span>
        </div>
      </div>

      {/* Background Ambience for Loader */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-white/5 blur-[120px] rounded-full"></div>
      </div>
    </div>
  );
};