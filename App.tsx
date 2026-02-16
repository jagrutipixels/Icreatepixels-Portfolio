import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { Portfolio } from './components/Portfolio.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { BrandSection } from './components/BrandSection.tsx';
import { ExperienceSection } from './components/ExperienceSection.tsx';
import { SkillsSection } from './components/SkillsSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { LoadingScreen } from './components/LoadingScreen.tsx';
import { Reveal } from './components/Reveal.tsx';
import { ProjectModal } from './components/ProjectModal.tsx';
import { ScrollToTop } from './components/ScrollToTop.tsx';
import { Project } from './types.ts';

const CinematicAtmosphere: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-[var(--flare-opacity)] transition-opacity duration-1000">
      {/* Volumetric smoke/glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-blue-600/10 blur-[150px] rounded-full animate-drift"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-600/10 blur-[150px] rounded-full animate-drift" style={{ animationDelay: '-5s' }}></div>
      <div className="absolute top-[30%] right-[10%] w-[40%] h-[40%] bg-zinc-400/5 blur-[120px] rounded-full animate-float-slow"></div>
      
      {/* Anamorphic Lens Flares */}
      <div className="absolute top-[20%] left-0 w-[200%] h-[1px] bg-gradient-to-r from-transparent via-blue-400/20 to-transparent blur-[2px] animate-flare" style={{ animationDelay: '0s' }}></div>
      <div className="absolute top-[60%] left-0 w-[200%] h-[1px] bg-gradient-to-r from-transparent via-purple-400/20 to-transparent blur-[2px] animate-flare" style={{ animationDelay: '-10s' }}></div>
      <div className="absolute top-[85%] left-0 w-[200%] h-[1px] bg-gradient-to-r from-transparent via-blue-300/10 to-transparent blur-[2px] animate-flare" style={{ animationDelay: '-15s' }}></div>
    </div>
  );
};

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isStudioMode, setIsStudioMode] = useState(() => {
    const saved = localStorage.getItem('theme-mode');
    return saved === 'studio';
  });

  useEffect(() => {
    if (isLoading || selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isLoading, selectedProject]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isStudioMode) {
      document.body.classList.add('theme-studio');
      localStorage.setItem('theme-mode', 'studio');
    } else {
      document.body.classList.remove('theme-studio');
      localStorage.setItem('theme-mode', 'cinema');
    }
  }, [isStudioMode]);

  const toggleTheme = () => setIsStudioMode(!isStudioMode);

  return (
    <div className={`min-h-screen transition-colors duration-1000 ${isStudioMode ? 'bg-[#f5f5f7] text-[#050505]' : 'bg-[#050505] text-white'}`}>
      <LoadingScreen />
      
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
      
      <ScrollToTop />
      
      {/* Global Cinematic Atmosphere */}
      <CinematicAtmosphere />
      
      <div 
        className={`transition-all duration-1000 relative z-10 ${
          isLoading 
            ? 'opacity-0 scale-95 blur-md pointer-events-none' 
            : 'opacity-100 scale-100 blur-none'
        }`}
      >
        <Navbar isStudioMode={isStudioMode} toggleTheme={toggleTheme} />
        <main>
          <section id="home">
            <Hero />
          </section>

          <AboutSection />

          <section id="identity" className="py-20 md:py-28 px-6 md:px-12 lg:px-24 border-b border-zinc-500/10">
            <div className="max-w-7xl mx-auto">
              <Reveal>
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                  <div className="max-w-xl">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-fluid-h2">Brand Architect</h2>
                    <p className="text-zinc-500 text-base leading-relaxed italic">Developing full visual identities and digital ecosystems from scratch.</p>
                  </div>
                </div>
              </Reveal>
              <BrandSection />
            </div>
          </section>

          <section id="portfolio" className="py-20 md:py-28 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
              <Reveal>
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                  <div>
                    <h2 className="text-4xl md:text-5xl font-serif mb-3 text-fluid-h2 font-bold">Notable Projects</h2>
                    <p className="text-zinc-500 max-w-xl text-base font-light">A curated selection of commercial and creative works.</p>
                  </div>
                  <div className="text-[9px] font-black uppercase tracking-[0.4em] text-zinc-500">
                    Selects 2024—2025
                  </div>
                </div>
              </Reveal>
              <Portfolio onProjectSelect={setSelectedProject} />
            </div>
          </section>

          <section id="experience" className="py-20 md:py-28 px-6 md:px-12 lg:px-24 border-t border-zinc-500/10">
            <div className="max-w-7xl mx-auto">
              <Reveal>
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-16 text-center text-fluid-h2">Journey</h2>
              </Reveal>
              <ExperienceSection />
            </div>
          </section>

          <section id="skills" className="py-20 md:py-28 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto text-center">
              <Reveal>
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-16 tracking-tight text-fluid-h2">Technical Arsenal</h2>
              </Reveal>
              <SkillsSection />
            </div>
          </section>

          <section id="contact" className="py-20 md:py-28 px-6 md:px-12 lg:px-24 border-t border-zinc-500/10">
            <div className="max-w-7xl mx-auto text-center">
              <Reveal>
                <ContactSection />
              </Reveal>
            </div>
          </section>
        </main>

        <footer className="py-12 px-6 text-center text-zinc-500/50 border-t border-zinc-500/10">
          <p className="text-[9px] uppercase tracking-[0.4em]">© {new Date().getFullYear()} Abhishek Sanjay Gujar</p>
        </footer>
      </div>
    </div>
  );
};

export default App;