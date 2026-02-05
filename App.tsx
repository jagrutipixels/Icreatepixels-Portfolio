import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { AboutSection } from './components/AboutSection';
import { BrandSection } from './components/BrandSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { Reveal } from './components/Reveal';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-white selection:text-black">
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>

        {/* About section immediately after Hero */}
        <AboutSection />

        <section id="portfolio" className="py-20 md:py-28 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <Reveal>
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                <div>
                  <h2 className="text-4xl md:text-5xl font-serif mb-3">Notable Projects</h2>
                  <p className="text-zinc-500 max-w-xl text-base font-light">A curated selection of commercial and creative works.</p>
                </div>
                <div className="text-[9px] font-black uppercase tracking-[0.4em] text-zinc-700">
                  Selects 2024—2025
                </div>
              </div>
            </Reveal>
            <Portfolio />
          </div>
        </section>

        <section id="identity" className="py-20 md:py-28 px-6 md:px-12 lg:px-24 border-y border-zinc-900/20">
          <div className="max-w-7xl mx-auto">
            <Reveal>
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                <div className="max-w-xl">
                  <h2 className="text-4xl md:text-5xl font-serif mb-4">Brand Architect</h2>
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
              <h2 className="text-4xl md:text-5xl font-serif mb-16 text-center">Journey</h2>
            </Reveal>
            <ExperienceSection />
          </div>
        </section>

        <section id="skills" className="py-20 md:py-28 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto text-center">
            <Reveal>
              <h2 className="text-4xl md:text-5xl font-serif mb-16 tracking-tight">Technical Arsenal</h2>
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
  );
};

export default App;