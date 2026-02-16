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

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-white selection:text-black">
      <LoadingScreen />
      
      {/* 
        The Modal is rendered OUTSIDE the blurred container to prevent inheritance of filters 
      */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
      
      {/* 
        Floating Navigation Elements
      */}
      <ScrollToTop />
      
      <div 
        className={`transition-all duration-1000 ${
          isLoading 
            ? 'opacity-0 scale-95 blur-md pointer-events-none' 
            : 'opacity-100 scale-100 blur-none'
        }`}
      >
        <Navbar />
        <main>
          <section id="home">
            <Hero />
          </section>

          <AboutSection />

          <section id="portfolio" className="py-20 md:py-28 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
              <Reveal>
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                  <div>
                    <h2 className="text-4xl md:text-5xl font-serif mb-3 text-fluid-h2 font-bold">Notable Projects</h2>
                    <p className="text-zinc-500 max-w-xl text-base font-light">A curated selection of commercial and creative works.</p>
                  </div>
                  <div className="text-[9px] font-black uppercase tracking-[0.4em] text-zinc-700">
                    Selects 2024—2025
                  </div>
                </div>
              </Reveal>
              <Portfolio onProjectSelect={setSelectedProject} />
            </div>
          </section>

          <section id="identity" className="py-20 md:py-28 px-6 md:px-12 lg:px-24 border-y border-zinc-900/20">
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

          <section id="experience" className="py-20 md:py-28 px-6 md:px-12 lg:px-24 bg-zinc-900/5">
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

          <section id="contact" className="py-20 md:py-28 px-6 md:px-12 lg:px-24 border-t border-zinc-900/30">
            <div className="max-w-7xl mx-auto text-center">
              <Reveal>
                <ContactSection />
              </Reveal>
            </div>
          </section>
        </main>

        <footer className="py-12 px-6 text-center text-zinc-800 border-t border-zinc-900/30">
          <p className="text-[9px] uppercase tracking-[0.4em]">© {new Date().getFullYear()} Abhishek Sanjay Gujar</p>
        </footer>
      </div>
    </div>
  );
};

export default App;