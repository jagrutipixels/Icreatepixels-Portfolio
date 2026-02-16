
// Added React to imports to fix 'Cannot find namespace React' errors
import React, { useState, useEffect, useRef } from 'react';
import { PERSONAL_INFO } from '../constants.ts';
import { gsap } from 'https://esm.sh/gsap';

export const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [lensPos, setLensPos] = useState({ x: 0, y: 0, active: false });
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

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
    
    const ctx = gsap.context(() => {
      // Ensure the element starts at 0 opacity via GSAP rather than CSS classes
      gsap.fromTo(titleRef.current, 
        { 
          opacity: 0, 
          scale: 0.98, 
          y: 15 
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.5,
          ease: "expo.out",
          delay: 2.4, // Slightly adjusted to perfectly follow the loading screen fade
          clearProps: "all"
        }
      );
    });
    
    return () => {
      window.removeEventListener('mousemove', handleGlobalMouseMove);
      ctx.revert();
    };
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
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-24 sm:pt-32 md:pt-48 pb-12 md:pb-20 transition-colors duration-1000">
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140vw] h-[140vw] opacity-[0.05] animate-drift"
          style={{ background: 'radial-gradient(circle, rgba(100,100,150,1) 0%, rgba(5,5,5,0) 70%)' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">
        
        <div className="relative w-full max-w-[280px] sm:max-w-[400px] md:max-w-none md:w-1/2 lg:w-[42%] aspect-[3/4] group order-2 md:order-1">
          <div className="absolute -inset-4 bg-white/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 hidden lg:block"></div>
          
          <div 
            ref={imageContainerRef}
            onMouseMove={handleImageInteraction}
            onTouchMove={handleImageInteraction}
            onMouseEnter={() => setLensPos(prev => ({ ...prev, active: true }))}
            onMouseLeave={() => setLensPos(prev => ({ ...prev, active: false }))}
            onTouchStart={() => setLensPos(prev => ({ ...prev, active: true }))}
            onTouchEnd={() => setLensPos(prev => ({ ...prev, active: false }))}
            className="relative w-full h-full overflow-hidden border border-zinc-500/20 bg-zinc-900 rounded-[2.5rem] shadow-2xl transition-transform duration-700 ease-out lg:cursor-none touch-none"
            style={{ 
              transform: `perspective(1000px) rotateX(${mousePos.y * 0.05}deg) rotateY(${mousePos.x * -0.05}deg)` 
            }}
          >
            <div 
              className={`absolute top-6 left-6 z-40 transition-all duration-500 ease-in-out pointer-events-none ${
                lensPos.active ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
              }`}
            >
              <div className="flex items-center gap-2 px-3 py-1.5 bg-black/80 backdrop-blur-md rounded-full border border-white/10 shadow-2xl">
                <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></div>
                <span className="text-[8px] font-black uppercase tracking-[0.3em] text-white whitespace-nowrap">
                  {window.innerWidth < 1024 ? 'Tap to reveal' : 'Hover to reveal'}
                </span>
              </div>
            </div>

            <img 
              src={coverImageUrl} 
              alt={PERSONAL_INFO.name} 
              className="absolute inset-0 w-full h-full object-cover grayscale-[0.1]"
              loading="eager"
            />

            <img 
              src={baseImageUrl} 
              alt="Revealed Detail" 
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                clipPath: lensPos.active 
                  ? `circle(clamp(80px, 15vw, 110px) at ${lensPos.x}px ${lensPos.y}px)` 
                  : 'circle(0% at 50% 50%)',
                WebkitClipPath: lensPos.active 
                  ? `circle(clamp(80px, 15vw, 110px) at ${lensPos.x}px ${lensPos.y}px)` 
                  : 'circle(0% at 50% 50%)',
              }}
            />

            {lensPos.active && (
              <div 
                className="absolute pointer-events-none z-30 w-[clamp(160px,30vw,220px)] h-[clamp(160px,30vw,220px)] rounded-full border-2 border-white/20 shadow-[0_0_80px_rgba(255,255,255,0.2)] flex items-center justify-center"
                style={{ 
                  left: lensPos.x - (window.innerWidth < 768 ? 80 : 110), 
                  top: lensPos.y - (window.innerWidth < 768 ? 80 : 110) 
                }}
              >
                 <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-[7px] md:text-[8px] uppercase tracking-[0.4em] font-black text-white whitespace-nowrap bg-black/80 px-3 py-1.5 rounded-md border border-white/10 shadow-xl">
                  Focusing Detail
                </div>
                <div className="absolute inset-0 rounded-full border border-white/5 bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-30"></div>
              </div>
            )}
            <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,0.4)] pointer-events-none z-20"></div>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-start text-left order-1 md:order-2">
          <div className="mb-4 md:mb-6">
            <span className="text-[9px] sm:text-xs font-black uppercase tracking-[0.35em] sm:tracking-[0.5em] text-zinc-500 mb-2 sm:mb-3 block leading-relaxed">
              Creative Head | Filmmaker
            </span>
          </div>

          <h1 
            ref={titleRef}
            className="text-fluid-h1 font-serif font-bold mb-6 md:mb-8 leading-[0.95] tracking-tighter will-change-transform"
          >
            Abhishek <br/> <span className="text-zinc-500">Gujar</span>
          </h1>
          
          <div className="max-w-lg mb-8 md:mb-12 border-l-2 border-zinc-500/20 pl-6 py-1">
            <p className="text-zinc-500 text-sm sm:text-lg lg:text-xl font-light italic leading-relaxed">
              "{PERSONAL_INFO.philosophy}"
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 w-full sm:w-auto mb-10 md:mb-0">
            <a 
              href="#portfolio" 
              className="px-8 sm:px-10 py-4 sm:py-5 bg-[var(--text-color)] text-[var(--bg-color)] text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em] rounded-full hover:opacity-90 transition-all flex items-center justify-center gap-3 active:scale-95 shadow-xl touch-target"
            >
              Explore Works
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
            </a>
            
            <a 
              href="#contact" 
              className="px-8 sm:px-10 py-4 sm:py-5 border border-zinc-500/40 text-[var(--text-color)] text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-[var(--text-color)] hover:text-[var(--bg-color)] transition-all text-center active:scale-95 touch-target"
            >
              Start Project
            </a>
          </div>

          <div className="grid grid-cols-2 gap-x-8 sm:gap-x-12 pt-8 sm:pt-12 border-t border-zinc-500/10 w-full max-w-sm mt-8 sm:mt-12">
            <div>
              <span className="text-[8px] font-black uppercase tracking-[0.3em] text-zinc-500 block mb-1">Based In</span>
              <span className="text-xs text-zinc-500/80">Mumbai, IN</span>
            </div>
            <div>
              <span className="text-[8px] font-black uppercase tracking-[0.3em] text-zinc-500 block mb-1">Status</span>
              <span className="text-xs text-zinc-500/80">Available</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
