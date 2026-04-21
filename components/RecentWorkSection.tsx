import React, { useRef } from 'react';
import { Reveal } from './Reveal.tsx';
import reelsData from '../reels_data.json';

const BRAND_CONFIG: Record<string, { title: string, color: string, icon: string }> = {
  bni: { title: "BNI Inesh", color: "0D8ABC", icon: "https://ui-avatars.com/api/?name=BNI&background=0D8ABC&color=fff" },
  savoir: { title: "Savoir", color: "E91E63", icon: "https://ui-avatars.com/api/?name=Savoir&background=E91E63&color=fff" },
  luxe: { title: "Luxe Brow Clinic", color: "D4AF37", icon: "https://ui-avatars.com/api/?name=Luxe&background=D4AF37&color=fff" },
  bhadipa: { title: "Bhadipa & Bha2pa", color: "FF5722", icon: "https://ui-avatars.com/api/?name=Bhadipa&background=FF5722&color=fff" },
  vishaykhol: { title: "Vishaykhol", color: "9C27B0", icon: "https://ui-avatars.com/api/?name=Vishay&background=9C27B0&color=fff" },
  puppycuddles: { title: "PuppyCuddles", color: "FF9800", icon: "https://ui-avatars.com/api/?name=Puppy&background=FF9800&color=fff" }
};

const ReelRow: React.FC<{ categoryKey: string, reels: {url: string, thumb: string}[] }> = ({ categoryKey, reels }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const config = BRAND_CONFIG[categoryKey];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = window.innerWidth < 768 ? 260 : 600;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="mb-16 last:mb-0 relative">
      <div className="flex items-center justify-between mb-6 px-6 md:px-0">
        <div className="flex items-center gap-3">
          <img src={config.icon} alt={config.title} loading="lazy" decoding="async" className="w-8 h-8 rounded-sm object-cover shadow-sm" />
          <h3 className="text-2xl md:text-3xl font-serif font-bold">{config.title}</h3>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-2">
          <button 
            onClick={() => scroll('left')} 
            className="w-10 h-10 rounded-full border border-zinc-500/30 flex items-center justify-center hover:bg-[var(--text-color)] hover:text-[var(--bg-color)] transition-all duration-300 active:scale-95 group"
            aria-label="Scroll left"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="group-hover:-translate-x-1 transition-transform"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <button 
            onClick={() => scroll('right')} 
            className="w-10 h-10 rounded-full border border-zinc-500/30 flex items-center justify-center hover:bg-[var(--text-color)] hover:text-[var(--bg-color)] transition-all duration-300 active:scale-95 group"
            aria-label="Scroll right"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="group-hover:translate-x-1 transition-transform"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
      </div>

      <div className="relative -mx-6 px-6 md:mx-0 md:px-0">
        {/* Fade edges for desktop */}
        <div className="hidden md:block absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[var(--bg-color)] to-transparent z-20 pointer-events-none"></div>
        <div className="hidden md:block absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[var(--bg-color)] to-transparent z-20 pointer-events-none"></div>

        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-3 md:gap-4 pb-8 pt-2 [&::-webkit-scrollbar]:hidden scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {reels.map((reel, index) => {
            // Extract a shortcode or ID from URL for a unique key
            const idMatch = reel.url.match(/\/(?:reel|p)\/([a-zA-Z0-9_-]+)/);
            const id = idMatch ? idMatch[1] : index;
            
            return (
              <Reveal key={id} delay={index * 50} direction="up" width="fit-content" className="snap-center shrink-0 first:ml-0 md:first:ml-4 last:mr-0 md:last:mr-4">
                <div className="w-[240px] sm:w-[250px] flex flex-col bg-zinc-900 rounded-md overflow-hidden relative shadow-lg group">
                  
                  {/* Image Area */}
                  <a href={reel.url} target="_blank" rel="noopener noreferrer" className="relative h-[360px] sm:h-[380px] w-full overflow-hidden block">
                    <img 
                      src={reel.thumb} 
                      alt={`${config.title} Reel ${index + 1}`}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none"></div>
                    
                    {/* Overlay Content */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2.5 pointer-events-none">
                      <img src={config.icon} alt="" loading="lazy" decoding="async" className="w-8 h-8 rounded-sm border border-white/50 object-cover shadow-sm" />
                      <div className="flex flex-col">
                        <span className="text-white font-bold text-[13px] leading-tight drop-shadow-md">{config.title}</span>
                        <span className="text-white/90 text-[11px] font-medium drop-shadow-md">Reel {index + 1}</span>
                      </div>
                    </div>
                  </a>

                  {/* Action Button Area */}
                  <div className="flex h-[42px] text-white" style={{ backgroundColor: `#${config.color}` }}>
                    <a 
                      href={reel.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex-1 flex items-center justify-center font-medium text-[13px] hover:bg-white/10 transition-colors"
                    >
                      Watch Reel
                    </a>
                    <button 
                      className="w-[42px] flex items-center justify-center border-l border-white/20 hover:bg-white/10 transition-colors"
                      onClick={() => window.open(reel.url, '_blank')}
                      aria-label="More options"
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M7 10l5 5 5-5z"/></svg>
                    </button>
                  </div>

                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export const RecentWorkSection: React.FC = () => {
  return (
    <section id="recent-work" className="py-20 md:py-28 px-0 md:px-12 lg:px-24 border-t border-zinc-500/10 relative overflow-hidden">
      {/* Background styling to match the cinematic theme */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-900/5 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-6 px-6 md:px-0">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-500 block mb-4">
                Latest Drops
              </span>
              <h2 className="text-4xl md:text-5xl font-serif mb-4 text-fluid-h2 font-bold">Recent Work</h2>
              <p className="text-zinc-500 max-w-xl text-sm md:text-base font-light leading-relaxed">
                A collection of high-retention, viral-engineered reels produced across multiple brands.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="flex flex-col gap-12 md:gap-24">
          {/* Featured Cinematic Showcase */}
          <Reveal delay={200}>
            <div className="relative group rounded-xl overflow-hidden bg-zinc-950 border border-zinc-500/10 shadow-2xl mx-6 md:mx-0">
              <div className="aspect-[16/10] md:aspect-video w-full overflow-hidden relative">
                <img 
                  src="https://img.youtube.com/vi/UYhxcfgainM/maxresdefault.jpg" 
                  alt="BNI Inesh Featured Video" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                
                {/* Visual Label */}
                <div className="absolute top-4 left-4 md:top-6 md:left-6 flex items-center gap-2">
                  <div className="px-2 py-0.5 md:px-3 md:py-1 bg-[#0D8ABC] text-white text-[8px] md:text-[10px] font-black uppercase tracking-widest rounded-sm shadow-xl">
                    Featured Production
                  </div>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-10 flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6">
                  <div className="max-w-2xl px-2 md:px-0">
                    <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-4">
                      <img src={BRAND_CONFIG.bni.icon} alt="" className="w-8 h-8 md:w-10 md:h-10 rounded-sm border border-white/20" />
                      <span className="text-[#0D8ABC] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:xs">BNI Inesh</span>
                    </div>
                    <h4 className="text-xl sm:text-2xl md:text-4xl font-serif font-bold text-white mb-2 md:mb-3 leading-tight">The Vision of BNI Inesh</h4>
                    <p className="text-zinc-300 text-[11px] sm:text-xs md:text-base font-light max-w-lg line-clamp-3 md:line-clamp-none">
                      A cinematic showcase for the biggest networking group in Navi Mumbai. Captured the essence of collaboration, growth, and professional excellence.
                    </p>
                  </div>
                  
                  <a 
                    href="https://youtu.be/UYhxcfgainM" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="shrink-0 flex items-center justify-center gap-2 md:gap-3 bg-white text-black px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-[11px] md:text-sm tracking-wide hover:bg-[#0D8ABC] hover:text-white transition-all duration-500 shadow-xl active:scale-95 group/btn"
                  >
                    <svg width="16" height="16" md:width="20" md:height="20" viewBox="0 0 24 24" fill="currentColor" className="group-hover/btn:scale-110 transition-transform"><path d="M8 5v14l11-7z"/></svg>
                    WATCH FILM
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          {['bhadipa', 'vishaykhol', 'puppycuddles', 'savoir', 'bni', 'luxe'].map((key) => {
            const reels = (reelsData as Record<string, any>)[key];
            if (!reels) return null;
            return <ReelRow key={key} categoryKey={key} reels={reels} />;
          })}
        </div>
      </div>
    </section>
  );
};
