import React, { useState, useEffect, useRef } from 'react';
import { EXPERIENCES } from '../constants.ts';
import { Reveal } from './Reveal.tsx';

export const ExperienceSection: React.FC = () => {
  const [timecode, setTimecode] = useState("00:14:22:04");
  const scrollRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDraggingSlider, setIsDraggingSlider] = useState(false);

  // Simple timecode simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setTimecode(prev => {
        const parts = prev.split(':').map(Number);
        parts[3]++; // Increment frames
        if (parts[3] >= 24) {
          parts[3] = 0;
          parts[2]++; // Increment seconds
        }
        return parts.map(p => p.toString().padStart(2, '0')).join(':');
      });
    }, 41); // Roughly 24fps
    return () => clearInterval(interval);
  }, []);

  // Update progress on scroll
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll > 0) {
      setScrollProgress(scrollLeft / maxScroll);
    }
  };

  // Drag to scroll logic (on the container itself)
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  // Custom Slider Logic
  const updateScrollFromPointer = (clientX: number) => {
    if (!sliderRef.current || !scrollRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    let percent = (clientX - rect.left) / rect.width;
    percent = Math.max(0, Math.min(1, percent)); // Clamp between 0 and 1
    const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
    scrollRef.current.scrollLeft = percent * maxScroll;
  };

  const handleSliderPointerDown = (e: React.PointerEvent) => {
    setIsDraggingSlider(true);
    updateScrollFromPointer(e.clientX);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handleSliderPointerMove = (e: React.PointerEvent) => {
    if (!isDraggingSlider) return;
    updateScrollFromPointer(e.clientX);
  };

  const handleSliderPointerUp = (e: React.PointerEvent) => {
    setIsDraggingSlider(false);
    e.currentTarget.releasePointerCapture(e.pointerId);
  };

  return (
    <div className="relative w-full py-8 md:py-12 -mx-6 px-6 md:-mx-12 md:px-12 lg:-mx-24 lg:px-24">
      {/* Technical Metadata Overlays */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-20 sm:opacity-40 overflow-hidden">
        {/* REC Indicator */}
        <div className="absolute top-0 right-6 md:right-12 lg:right-24 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></div>
          <span className="text-[10px] font-black uppercase tracking-widest">REC [●]</span>
        </div>
        
        {/* Camera Stats */}
        <div className="absolute top-0 left-6 md:left-12 lg:left-24 text-[9px] font-black uppercase tracking-[0.4em] flex flex-col gap-1">
          <span>ISO 800</span>
          <span>F 2.8</span>
          <span className="hidden sm:inline">5600 K</span>
        </div>

        {/* Timecode */}
        <div className="absolute bottom-0 right-6 md:right-12 lg:right-24 font-mono text-[10px] tracking-widest">
          TC {timecode}
        </div>

        {/* Format Stats */}
        <div className="absolute bottom-0 left-6 md:left-12 lg:left-24 text-[9px] font-black uppercase tracking-[0.4em]">
          4K RAW <span className="hidden sm:inline">• 24 FPS • 48kHz</span>
        </div>

        {/* Viewfinder Corners */}
        <div className="absolute top-4 left-10 sm:top-10 sm:left-16 w-6 h-6 sm:w-8 sm:h-8 border-t border-l border-zinc-500/30 hidden md:block"></div>
        <div className="absolute top-4 right-10 sm:top-10 sm:right-16 w-6 h-6 sm:w-8 sm:h-8 border-t border-r border-zinc-500/30 hidden md:block"></div>
        <div className="absolute bottom-4 left-10 sm:bottom-10 sm:left-16 w-6 h-6 sm:w-8 sm:h-8 border-b border-l border-zinc-500/30 hidden md:block"></div>
        <div className="absolute bottom-4 right-10 sm:bottom-10 sm:right-16 w-6 h-6 sm:w-8 sm:h-8 border-b border-r border-zinc-500/30 hidden md:block"></div>
      </div>

      {/* Drag Indicator */}
      <Reveal>
        <div className="text-center mb-8 text-zinc-500 text-[10px] uppercase tracking-widest font-bold flex items-center justify-center gap-2 animate-pulse">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          Drag to explore timeline
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 16l-4-4m0 0l4-4m-4 4h18"/></svg>
        </div>
      </Reveal>

      {/* Horizontal Scroll Container */}
      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className={`relative z-10 flex overflow-x-auto gap-12 md:gap-20 pb-8 pt-8 [&::-webkit-scrollbar]:hidden ${isDragging ? 'cursor-grabbing' : 'cursor-grab'} select-none`}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {/* Horizontal Timeline Line */}
        <div className="absolute top-[42px] left-0 w-[200vw] h-[1px] bg-gradient-to-r from-transparent via-zinc-500/30 to-transparent pointer-events-none"></div>

        {EXPERIENCES.map((exp, index) => (
          <Reveal key={index} direction="up" delay={index * 100} width="fit-content" className="flex-shrink-0">
            <div className="relative w-[280px] md:w-[380px] flex flex-col pt-12">
              
              {/* Timeline Dot */}
              <div className="absolute left-0 top-2 w-3 h-3 bg-[var(--text-color)] rounded-full border-4 border-[var(--bg-color)] z-10 shadow-[0_0_15px_rgba(255,255,255,0.1)]"></div>

              {/* Content Side */}
              <div className="text-left">
                <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-md mb-4 backdrop-blur-sm">
                  <span className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-400">{exp.period}</span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-serif font-bold mb-2 leading-tight group-hover:text-zinc-300 transition-colors">
                  {exp.company}
                </h3>
                
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="text-xs font-black uppercase tracking-widest text-zinc-500">{exp.role}</span>
                  <span className="w-1 h-1 bg-zinc-500/30 rounded-full"></span>
                  <span className="text-[10px] text-zinc-500 uppercase tracking-tighter">{exp.location}</span>
                </div>

                <ul className="space-y-4">
                  {exp.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-zinc-400 text-sm leading-relaxed group/item">
                      <span className="mt-2.5 w-1 h-1 bg-zinc-600 rounded-full flex-shrink-0 group-hover/item:bg-white transition-colors"></span>
                      <span className="group-hover/item:text-white transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Custom Scrubber Slider */}
      <Reveal delay={400}>
        <div className="relative z-20 mt-8 max-w-md mx-auto px-4">
          <div 
            ref={sliderRef}
            onPointerDown={handleSliderPointerDown}
            onPointerMove={handleSliderPointerMove}
            onPointerUp={handleSliderPointerUp}
            onPointerCancel={handleSliderPointerUp}
            className="relative h-8 flex items-center cursor-pointer group touch-none"
          >
            {/* Track Background */}
            <div className="absolute left-0 right-0 h-1 bg-zinc-800 rounded-full overflow-hidden">
              {/* Track Fill */}
              <div 
                className="absolute top-0 bottom-0 left-0 bg-[var(--text-color)] opacity-50"
                style={{ width: `${scrollProgress * 100}%` }}
              ></div>
            </div>
            
            {/* Thumb */}
            <div 
              className="absolute w-4 h-4 bg-[var(--text-color)] rounded-full shadow-[0_0_10px_rgba(255,255,255,0.3)] transform -translate-x-1/2 transition-transform group-hover:scale-125"
              style={{ left: `${scrollProgress * 100}%` }}
            ></div>
          </div>
        </div>
      </Reveal>
    </div>
  );
};