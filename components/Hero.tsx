// Added React to imports to fix 'Cannot find namespace React' errors
import React, { useEffect, useRef, useState } from 'react';
import { PERSONAL_INFO } from '../constants.ts';
import gsap from 'gsap';

export const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const [showreelPlaying, setShowreelPlaying] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.5 }); // Sync with loading screen

      tl.fromTo(subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      )
      .fromTo(titleRef.current?.querySelectorAll('.char'),
        { opacity: 0, y: 40, rotateX: -90 },
        { opacity: 1, y: 0, rotateX: 0, duration: 1.2, stagger: 0.05, ease: 'expo.out' },
        "-=0.8"
      )
      .fromTo(ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
        "-=0.8"
      );
    });

    return () => ctx.revert();
  }, []);

  // Split text for animation
  const titleText = "Visually Stunning Stories.";
  const titleWords = titleText.split(" ");

  return (
    <div className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-[#050505]">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          src="https://assets.mixkit.co/videos/preview/mixkit-set-of-lights-in-a-video-studio-32400-large.mp4"
        />
        {/* Overlays for dark cinematic feel */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/40" />
        <div className="absolute inset-0 bg-black/40" />
        {/* Grain overlay for film look */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center mt-20">
        
        <div ref={subtitleRef} className="mb-6 overflow-hidden">
          <div className="inline-flex items-center gap-3 px-4 py-2 border border-white/10 rounded-full bg-black/40 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#ff4d00] animate-pulse"></span>
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-zinc-300">
              Creative Head & Filmmaker
            </span>
          </div>
        </div>

        <h1 
          ref={titleRef}
          className="text-fluid-h1 font-serif font-black text-white leading-[0.9] tracking-tighter mb-8 max-w-5xl"
          style={{ perspective: '1000px' }}
        >
          {titleWords.map((word, wordIndex) => (
            <span key={wordIndex} className="inline-block mr-[2vw]" style={{ paddingBottom: '0.1em' }}>
              {word.split('').map((char, charIndex) => (
                <span key={charIndex} className="char inline-block origin-bottom will-change-transform">
                  {char}
                </span>
              ))}
            </span>
          ))}
        </h1>

        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center gap-6 mt-4">
          <button 
            onClick={() => setShowreelPlaying(true)}
            className="group relative flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-white/20 bg-black/20 backdrop-blur-md hover:bg-white hover:border-white transition-all duration-500"
          >
            <div className="absolute inset-0 rounded-full border border-[#ff4d00]/30 scale-[1.3] group-hover:scale-100 group-hover:opacity-0 transition-all duration-700 ease-out"></div>
            <div className="absolute inset-0 rounded-full border border-[#ff4d00]/10 scale-[1.6] group-hover:scale-100 group-hover:opacity-0 transition-all duration-1000 ease-out delay-75"></div>
            <svg 
              className="w-6 h-6 sm:w-8 sm:h-8 text-white group-hover:text-black translate-x-0.5 transition-colors duration-500" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
            <span className="absolute -bottom-10 whitespace-nowrap text-[10px] font-black uppercase tracking-[0.3em] text-white/50 group-hover:text-white transition-colors duration-500">
              Play Showreel
            </span>
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-50 animate-bounce">
          <span className="text-[8px] font-black uppercase tracking-[0.4em] text-white rotate-90 translate-y-6">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white to-transparent mt-8"></div>
        </div>
      </div>

      {/* Video Modal */}
      {showreelPlaying && (
        <div className="fixed inset-0 z-[500] flex items-center justify-center bg-black/95 backdrop-blur-xl">
          <button 
            onClick={() => setShowreelPlaying(false)}
            className="absolute top-8 right-8 z-[510] text-white/50 hover:text-white uppercase text-[10px] tracking-[0.3em] font-black"
          >
            Close [X]
          </button>
          <div className="w-full max-w-6xl aspect-video bg-black relative shadow-[0_0_100px_rgba(255,77,0,0.1)]">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/mtdVqpPFJkk?autoplay=1" 
              title="Showreel" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};
