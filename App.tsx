
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { StatsSection } from './components/StatsSection';
import { Reveal } from './components/Reveal';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-white selection:text-black">
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="stats" className="py-20 bg-zinc-900/30">
          <Reveal>
            <StatsSection />
          </Reveal>
        </section>

        <section id="portfolio" className="py-24 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <Reveal>
              <h2 className="text-4xl md:text-5xl font-serif mb-4">Notable Projects</h2>
              <p className="text-zinc-400 mb-12 max-w-2xl text-lg">A curated selection of commercial and creative works showcasing impact and visual storytelling.</p>
            </Reveal>
            <Portfolio />
          </div>
        </section>

        <section id="experience" className="py-24 px-6 md:px-12 lg:px-24 bg-zinc-900/20">
          <div className="max-w-7xl mx-auto">
            <Reveal>
              <h2 className="text-4xl md:text-5xl font-serif mb-12 text-center">Professional Journey</h2>
            </Reveal>
            <ExperienceSection />
          </div>
        </section>

        <section id="skills" className="py-24 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto text-center">
            <Reveal>
              <h2 className="text-4xl md:text-5xl font-serif mb-16">Technical Arsenal</h2>
            </Reveal>
            <SkillsSection />
          </div>
        </section>

        <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 bg-zinc-900/30 border-t border-zinc-800">
          <div className="max-w-7xl mx-auto text-center">
            <Reveal>
              <ContactSection />
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="py-12 px-6 text-center text-zinc-500 border-t border-zinc-900">
        <p className="text-sm">© {new Date().getFullYear()} Abhishek Sanjay Gujar. All Rights Reserved.</p>
        <p className="mt-2 text-xs italic">"Make it feel cinematic."</p>
      </footer>
    </div>
  );
};

export default App;
