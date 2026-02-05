import React, { useState, useEffect, useRef } from 'react';
import { PERSONAL_INFO } from '../constants';

export const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [lensPos, setLensPos] = useState({ x: 0, y: 0, active: false });
  const imageContainerRef = useRef<HTMLDivElement>(null);

  // Reverting to original roles: cover as surface, base as reveal
  const baseImageUrl = "https://raw.githubusercontent.com/jagrutipixels/pixels/e28a8fddf87ed5b38a34d6c60d4be804132a2348/Hero_Image_base.jpg";
  const coverImageUrl = "https://raw.githubusercontent.com/jagrutipixels/pixels/58c0b1e5252344b7fd2c30e2b74dbcc0874b0870/Hero_Image_cover.jpg";

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    
    if (window.matchMedia('(min-width: 1024px)').matches) {
      window.addEventListener('mousemove', handleGlobalMouseMove);
    }
    
    return () => window.removeEventListener('mousemove', handleGlobalMouseMove);
  }, []);

  const handleImageInteraction = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!imageContainerRef.current) return;
    const rect = imageContainerRef.current.getBoundingClientRect();
    let clientX, clientY;

    if ('touches' in e && e.touches.length > 0) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else if ('clientX' in e) {
      clientX = (e as React.MouseEvent).clientX;
      clientY = (e as React.MouseEvent).clientY;
    } else {
      return;
    }

    setLensPos({
      x: clientX - rect.left,
      y: clientY - rect.top,
      active: true,
    });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505] px-6 py-24 lg:py-20">
      
      {/* Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140vw] h-[140vw] opacity-[0.07] animate-drift"
          style={{
            background: 'radial-gradient(circle, rgba(100,100,150,1) 0%, rgba(5,5,5,0) 70%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">
        
        {/* Hero Image Component */}
        <div className="relative w-full max-w-[420px] md:max-w-none md:w-1/2 lg:w-[42%] aspect-[3/4] group order-2 md:order-1">
          <div className="absolute -inset-4 bg-white/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 hidden md:block"></div>
          
          <div 
            ref={imageContainerRef}
            onMouseMove={handleImageInteraction}
            onTouchMove={handleImageInteraction}
            onMouseEnter={() => setLensPos(prev => ({ ...prev, active: true }))}
            onMouseLeave={() => setLensPos(prev => ({ ...prev, active: false }))}
            onTouchStart={() => setLensPos(prev => ({ ...prev, active: true }))}
            onTouchEnd={() => setLensPos(prev => ({ ...prev, active: false }))}
            className="relative w-full h-full overflow-hidden border border-zinc-800/50 bg-zinc-900 rounded-2xl shadow-2xl transition-transform duration-700 ease-out lg:cursor-none"
            style={{ 
              transform: `perspective(1000px) rotateX(${mousePos.y * 0.05}deg) rotateY(${mousePos.x * -0.05}deg)` 
            }}
          >
            {/* Background Layer: Sharp Photo */}
            <img 
              src={coverImageUrl} 
              alt="Abhishek Sanjay Gujar" 
              className="absolute inset-0 w-full h-full object-cover grayscale-[0.1]"
            />

            {/* Clipped Layer: Base Reveal */}
            <img 
              src={baseImageUrl} 
              alt="Revealed Detail" 
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                clipPath: lensPos.active 
                  ? `circle(100px at ${lensPos.x}px ${lensPos.y}px)` 
                  : 'circle(0% at 50% 50%)',
                WebkitClipPath: lensPos.active 
                  ? `circle(100px at ${lensPos.x}px ${lensPos.y}px)` 
                  : 'circle(0% at 50% 50%)',
              }}
            />

            {/* Clear Lens UI */}
            {lensPos.active && (
              <div 
                className="absolute pointer-events-none z-30 w-[200px] h-[200px] rounded-full border-2 border-white/30 shadow-[0_0_80px_rgba(255,255,255,0.2),inset_0_0_20px_rgba(255,255,255,0.1)] flex items-center justify-center"
                style={{
                  left: lensPos.x - 100,
                  top: lensPos.y - 100,
                }}
              >
                 <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-[8px] uppercase tracking-[0.5em] font-black text-white whitespace-nowrap bg-black/80 px-3 py-1.5 rounded-md border border-white/10 shadow-xl">
                  Focusing Detail
                </div>
                {/* Subtle lens reflection effect without blur */}
                <div className="absolute inset-0 rounded-full border border-white/5 bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-30"></div>
              </div>
            )}
            <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.5)] pointer-events-none z-20"></div>
          </div>

          <div className="absolute -bottom-4 -right-4 bg-black/90 backdrop-blur-xl border border-zinc-800 p-4 hidden sm:block z-30 rounded-lg shadow-2xl">
             <div className="text-[7px] uppercase tracking-[0.4em] font-black text-zinc-500 mb-0.5">Profile Status</div>
             <div className="text-[10px] text-white font-bold tracking-widest uppercase flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                Active Content
             </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-left order-1 md:order-2">
          <div className="mb-6">
            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] text-zinc-500 mb-3 block">
              Creative Head | Brand Strategist
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-serif font-bold mb-8 leading-[1] tracking-tighter text-white">
            Abhishek <br/> <span className="text-zinc-500">Sanjay Gujar</span>
          </h1>
          
          <div className="max-w-lg mb-12 border-l-2 border-zinc-900 pl-6 py-1">
            <p className="text-zinc-400 text-base md:text-xl font-light italic leading-relaxed">
              "{PERSONAL_INFO.philosophy}"
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 w-full sm:w-auto">
            <a 
              href="#portfolio" 
              className="px-10 py-5 bg-white text-black text-[11px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-zinc-200 transition-all flex items-center justify-center gap-3 active:scale-95 shadow-[0_10px_40px_rgba(255,255,255,0.15)]"
            >
              Explore Works
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
            </a>
            
            <a 
              href="#contact" 
              className="px-10 py-5 border border-zinc-800 text-white text-[11px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-white hover:text-black transition-all text-center active:scale-95"
            >
              Start Project
            </a>
          </div>

          <div className="grid grid-cols-2 gap-x-12 pt-12 border-t border-zinc-900/50 w-full max-w-sm mt-12">
            <div>
              <span className="text-[8px] font-black uppercase tracking-[0.4em] text-zinc-600 block mb-1">Based In</span>
              <span className="text-xs text-zinc-400">Mumbai, IN</span>
            </div>
            <div>
              <span className="text-[8px] font-black uppercase tracking-[0.4em] text-zinc-600 block mb-1">Current Focus</span>
              <span className="text-xs text-zinc-400">Digital Identity</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};