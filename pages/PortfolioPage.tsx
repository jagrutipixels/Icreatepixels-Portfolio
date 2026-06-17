import React, { useState } from 'react';
import { Portfolio } from '../components/Portfolio.tsx';
import { RecentWorkSection } from '../components/RecentWorkSection.tsx';
import { BrandSection } from '../components/BrandSection.tsx';
import { ProjectModal } from '../components/ProjectModal.tsx';
import { Reveal } from '../components/Reveal.tsx';
import { Project } from '../types.ts';
import { SEO } from '../components/SEO.tsx';

export const PortfolioPage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // We are migrating the existing video links, reels and project data here seamlessly
  // by utilizing the previously built components which load from `reels_data.json`

  return (
    <>
      <SEO 
        title="Our Work & Portfolio | Video Production & Marketing | iCreatePixels"
        description="Explore our cinematic video productions, branding projects, and social media reels. See how we've scaled businesses in Navi Mumbai."
        keywords="Portfolio, Video Production Portfolio, Product Shoots, Marketing Case Studies, Navi Mumbai"
      />
      
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}

      <div className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h1 className="text-5xl md:text-7xl font-serif font-black mb-6 text-white tracking-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4d00] to-orange-400">Works.</span>
            </h1>
            
            <div className="sr-only">
              <h2>Explore our portfolio of 100+ completed projects across production, photography, marketing, and branding. Each case study demonstrates our approach, execution, and measurable client results.</h2>
              <p>Browse by Service Type: Production (Video, Photography, Drone, Podcast), Marketing (Social Media, SEO, Paid Ads, Content), Branding & Strategy, Website Development.</p>
              <p>Browse by Industry: E-commerce, SaaS / Technology, Real Estate, Hospitality, Retail, Manufacturing, Professional Services, Education, Finance.</p>
              <p>Browse by Result Type: Lead Generation, Brand Awareness, Revenue Growth, Engagement, Rankings, Traffic.</p>
              <p>Keywords: Portfolio, case studies, our work, client projects, production portfolio, marketing results, industry work, service examples.</p>
            </div>

            <p className="text-zinc-400 max-w-2xl text-lg leading-relaxed mb-16">
              A curated selection of our highest-impact commercial and creative projects. From branding to full-service film production.
            </p>
          </Reveal>

          {/* Reusing existing Brand Section */}
          <div className="mb-24">
            <Reveal>
               <h2 className="text-2xl font-serif font-bold text-white mb-8 border-b border-white/10 pb-4">Brand Identites</h2>
            </Reveal>
            <BrandSection />
          </div>

          {/* Reusing existing Portfolio component */}
          <div className="mb-24">
            <Reveal>
               <h2 className="text-2xl font-serif font-bold text-white mb-8 border-b border-white/10 pb-4">Notable Projects</h2>
            </Reveal>
            <Portfolio onProjectSelect={setSelectedProject} />
          </div>
        </div>
      </div>

      {/* Reusing existing Recent Works (reels json data) */}
      <RecentWorkSection />
    </>
  );
};
