import React, { useState } from 'react';
import { Hero } from '../components/Hero.tsx';
import { AboutSection } from '../components/AboutSection.tsx';
import { BrandSection } from '../components/BrandSection.tsx';
import { Portfolio } from '../components/Portfolio.tsx';
import { ProjectModal } from '../components/ProjectModal.tsx';
import { Reveal } from '../components/Reveal.tsx';
import { Project } from '../types.ts';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO.tsx';
import { ArrowRight, Video, Camera, LineChart, Globe } from 'lucide-react';
import { ContactSection } from '../components/ContactSection.tsx';

import { DynamicFlipText } from '../components/DynamicFlipText.tsx';

export const Home: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const structuredData = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "icreatepixels",
    "image": "https://raw.githubusercontent.com/jagrutipixels/pixels/2a4100de1fb6b50a220f0ca500322b2a91316285/logo_white.png",
    "@id": "https://www.icreatepixels.in",
    "url": "https://www.icreatepixels.com",
    "telephone": "7400310443",
    "email": "hello@icreatepixels.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Navi Mumbai",
      "addressRegion": "MH",
      "addressCountry": "IN"
    },
    "description": "Premium production house and growth agency in Navi Mumbai specializing in video production, photography, marketing, and SEO",
    "founder": {
      "@type": "Person",
      "name": "Abhishek Sanjay Gujar"
    },
    "sameAs": ["https://www.instagram.com/icreatepixels/", "https://in.linkedin.com/in/icreatepixels"],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "80"
    }
  });

  return (
    <>
      <SEO 
        title="Production House Navi Mumbai | Video & Marketing Agency"
        description="Top Production House in Navi Mumbai offering video production, product photography, social media, SEO, and website development services."
        keywords="Production House Navi Mumbai, Video Agency, SEO Navi Mumbai, Social Media Marketing, Videographer"
        schema={structuredData}
      />
      
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 lg:pt-36 lg:pb-24 border-b border-white/10 px-6 overflow-hidden">
        {/* Background Video Layer */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity"
            src="https://assets.mixkit.co/videos/preview/mixkit-set-of-lights-in-a-video-studio-32400-large.mp4"
          />
          {/* Gradients to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/50" />
          
          {/* Subtle noise pattern */}
          <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-6 relative z-10 w-full">
          <Reveal delay={100}>
            <div className="inline-block border border-[#ff4d00]/30 bg-[#ff4d00]/10 px-4 py-1.5 rounded-full text-[#ff4d00] text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-4 backdrop-blur-md">
              Premium Agency in Navi Mumbai
            </div>
          </Reveal>
          
          <Reveal delay={200}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-black leading-[1.05] tracking-tight text-white mb-6">
              We Build Brands <br className="hidden md:block"/>
              that <DynamicFlipText />
            </h1>
          </Reveal>

          <Reveal delay={300}>
            <p className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-8">
              icreatepixels is a high-end production house and growth agency merging cinematic video production with ruthless, data-driven marketing.
            </p>
          </Reveal>

          <Reveal delay={400}>
            <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
              <Link to="/contact" className="bg-[#ff4d00] text-white px-8 py-4 rounded-sm font-bold tracking-widest uppercase text-sm hover:bg-[#ff4d00]/90 transition-all text-center">
                Let's Build Together
              </Link>
              <Link to="/portfolio" className="border border-white/20 bg-black/40 backdrop-blur-md text-white px-8 py-4 rounded-sm font-bold tracking-widest uppercase text-sm hover:bg-white/10 hover:border-white/40 transition-all text-center">
                Explore Our Work
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* The Blueprint Section */}
      <section className="py-20 bg-[#0a0a0a] border-b border-white/10 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="mb-12">
              <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-zinc-500 mb-2">The Blueprint</h2>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-white">How We Scale Your Brand</h3>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { num: "01", title: "Produce", desc: "Cinematic videos, premium photography, and undeniable visual identity.",
                features: ["Commercial Campaigns", "Brand Photography", "Visual Identity Design", "Motion & 3D Graphics"],
                hiddenContent: (
                  <div className="sr-only">
                    <h4>Strategy. Creativity. Foundation.</h4>
                    <p>What we do: Understand your business, market, and goals. Research your competitors and audience. Develop a strategic approach tailored to your unique situation. Create a detailed execution plan with timelines and deliverables.</p>
                    <p>Why it matters: 80% of project success comes from proper planning and strategy. We invest time upfront to ensure we're solving the right problem in the right way.</p>
                    <p>Timeline: 1-2 weeks. Deliverables: Strategy document, creative brief, content roadmap.</p>
                    <p>Keywords: Production strategy, video production planning, marketing strategy, content strategy.</p>
                  </div>
                )
              },
              { num: "02", title: "Develop", desc: "High-converting, brutalist websites that turn traffic into revenue.",
                features: ["Custom React/Next.js Apps", "High-Converting Landers", "E-Commerce Platforms", "Performance Optimization"],
                hiddenContent: (
                  <div className="sr-only">
                    <h4>Execution. Quality. Results.</h4>
                    <p>What we do: Create high-quality production assets (videos, photos, content). Implement marketing campaigns across all channels. Optimize content for search engines and conversions. Maintain quality standards and project timeline.</p>
                    <p>Why it matters: Excellent execution separates leaders from followers. Our team brings years of expertise to deliver world-class creative work and strategic implementations.</p>
                    <p>Timeline: 4-8 weeks (varies by project scope). Deliverables: Video production, photography, social content, SEO improvements, website optimization.</p>
                    <p>Keywords: Video production, commercial video, photography, content creation, digital marketing, SEO optimization.</p>
                  </div>
                )
              },
              { num: "03", title: "Dominate", desc: "Local SEO, targeted funnels, and aggressive social marketing.",
                features: ["Local & Technical SEO", "Data-Driven Ad Funnels", "Social Media Growth", "Conversion Rate Optimization"],
                hiddenContent: (
                  <div className="sr-only">
                    <h4>Growth. Optimization. Scaling.</h4>
                    <p>What we do: Measure results and analyze performance data. Optimize based on real metrics and insights. Scale winning strategies and campaigns. Maintain competitive advantage in your market.</p>
                    <p>Why it matters: Sustained growth comes from continuous optimization and strategic scaling. We don't set and forget—we actively work to improve results month over month.</p>
                    <p>Timeline: Ongoing (continuous optimization). Deliverables: Performance reports, strategy refinements, growth acceleration.</p>
                    <p>Keywords: Digital growth, marketing optimization, SEO rankings, lead generation, business growth.</p>
                  </div>
                )
              }
            ].map((step, idx) => (
              <Reveal key={step.num} delay={idx * 150}>
                <div className="border border-white/10 p-8 hover:border-[#ff4d00]/50 transition-colors h-full bg-[#050505] group">
                  <div className="text-5xl font-black text-white/5 mb-6 group-hover:text-[#ff4d00]/20 transition-colors">{step.num}</div>
                  <h4 className="text-xl font-bold text-white mb-3 tracking-tight">{step.title}</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">{step.desc}</p>
                  <ul className="space-y-1">
                    {step.features.map((feature, fIdx) => (
                      <li key={fIdx} className="text-xs text-zinc-500 flex items-center border-t border-white/5 py-2.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#ff4d00]/40 mr-3 group-hover:bg-[#ff4d00] transition-colors"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {step.hiddenContent}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Identity / Process Section */}
      <section className="py-24 px-6 border-b border-white/10 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white text-center">Brand Architect</h2>
              <p className="text-zinc-500 mt-4 text-center">Developing full visual identities and digital ecosystems from scratch.</p>
            </div>
          </Reveal>
          <BrandSection />
        </div>
      </section>

      {/* Portfolio Integration */}
      <section className="py-24 px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between items-start gap-4">
              <div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-2">Notable Projects</h2>
                <p className="text-zinc-500 max-w-xl text-base font-light">A curated selection of commercial and creative works.</p>
              </div>
              <div className="text-[9px] font-black uppercase tracking-[0.4em] text-[#ff4d00]">
                Selects 2024—2026
              </div>
            </div>
          </Reveal>
          <Portfolio onProjectSelect={setSelectedProject} />
        </div>
      </section>

      {/* Core Capabilities Bento Grid */}
      <section className="py-24 md:py-32 px-6 border-b border-white/10 relative overflow-hidden bg-[#050505]">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[800px] bg-[#ff4d00]/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <Reveal>
            <div className="mb-16 md:mb-20 text-center max-w-3xl mx-auto">
              <span className="text-[#ff4d00] font-bold tracking-widest uppercase text-xs sm:text-sm block mb-4">Our Expertise</span>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif font-black text-white leading-tight">Capabilities <br/><span className="text-zinc-500 font-light">& Integrations.</span></h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[340px]">
            {/* Bento 1: Video Production */}
            <Reveal className="lg:col-span-2 h-full">
              <Link to="/production-house-navi-mumbai" className="block relative h-full rounded-[2rem] overflow-hidden group border border-white/10 bg-[#0a0a0a]">
                <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105 z-0">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#ff4d00]/20 via-[#0a0a0a] to-[#0a0a0a] opacity-60"></div>
                  {/* Subtle noise pattern */}
                  <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
                </div>
                <div className="relative z-10 p-8 md:p-10 flex flex-col h-full justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm group-hover:-translate-y-2 transition-transform duration-500 shadow-2xl">
                    <Video size={28} className="text-[#ff4d00]" />
                  </div>
                  <div>
                    <h3 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-3 tracking-tight">Video Production</h3>
                    <p className="text-zinc-400 max-w-md mb-6 leading-relaxed">High-end TVCs, corporate films, and viral short-form content engineered for maximum retention.</p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-white uppercase tracking-widest group-hover:bg-[#ff4d00] group-hover:border-[#ff4d00] transition-colors duration-300">
                      Explore Service <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>

            {/* Bento 2: Marketing */}
            <Reveal delay={100} className="h-full">
              <Link to="/social-media-marketing-navi-mumbai" className="block relative h-full rounded-[2rem] overflow-hidden group border border-white/10 bg-gradient-to-b from-[#0a0a0a] to-[#050505]">
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff4d00]/10 blur-[50px] group-hover:bg-[#ff4d00]/20 transition-colors duration-700"></div>
                <div className="relative z-10 p-8 md:p-10 flex flex-col h-full justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-[#ff4d00]/10 border border-[#ff4d00]/20 flex items-center justify-center group-hover:-translate-y-2 transition-transform duration-500 shadow-[0_0_30px_rgba(255,77,0,0.1)]">
                    <LineChart size={28} className="text-[#ff4d00]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">Social & Growth</h3>
                    <p className="text-zinc-400 mb-6 leading-relaxed text-sm">Data-backed social media management and performance marketing.</p>
                    <div className="inline-flex items-center gap-2 text-xs font-bold text-[#ff4d00] uppercase tracking-widest">
                      Explore Service <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>

            {/* Bento 3: Web Dev */}
            <Reveal className="h-full">
              <Link to="/social-media-marketing-navi-mumbai" className="block relative h-full rounded-[2rem] overflow-hidden group border border-white/10 bg-gradient-to-b from-[#0a0a0a] to-[#050505]">
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-500/10 blur-[60px] group-hover:bg-blue-500/20 transition-colors duration-700"></div>
                <div className="relative z-10 p-8 md:p-10 flex flex-col h-full justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:-translate-y-2 transition-transform duration-500">
                    <Globe size={28} className="text-zinc-300" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">Web & Local SEO</h3>
                    <p className="text-zinc-400 mb-6 leading-relaxed text-sm">High-performance digital storefronts engineered for search visibility.</p>
                    <div className="inline-flex items-center gap-2 text-xs font-bold text-zinc-300 uppercase tracking-widest group-hover:text-white transition-colors">
                      Explore Service <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>

            {/* Bento 4: Photography */}
            <Reveal delay={100} className="lg:col-span-2 h-full">
              <Link to="/production-house-navi-mumbai" className="block relative h-full rounded-[2rem] overflow-hidden group border border-white/10 bg-[#0a0a0a]">
                <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105 z-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-[#0a0a0a] to-[#0a0a0a] opacity-60"></div>
                  {/* Subtle noise pattern */}
                  <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
                </div>
                <div className="relative z-10 p-8 md:p-10 flex flex-col h-full justify-between items-end text-right">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm group-hover:-translate-y-2 transition-transform duration-500 shadow-2xl">
                    <Camera size={28} className="text-zinc-300" />
                  </div>
                  <div className="flex flex-col items-end">
                    <h3 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-3 tracking-tight">Photography</h3>
                    <p className="text-zinc-400 max-w-sm mb-6 leading-relaxed">Commercial product shoots, brand portraits, and architectural captures defined by light.</p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-white uppercase tracking-widest group-hover:bg-white group-hover:text-black transition-colors duration-300">
                      Explore Service <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 border-b border-white/10 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2">
            <Reveal>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">Why icreatepixels?</h2>
              <p className="text-zinc-400 mb-8 leading-relaxed">
                Most agencies do marketing. Most videographers do videos. Very few do both exceptionally well. We bridge the gap between stunning cinematic visuals and ROI-obsessed marketing strategies.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Unified Strategy", desc: "No more silos. Your videos, website, and ads work together." },
                  { title: "Cinematic Quality", desc: "Netflix-approved gear and editing standards for local brands." },
                  { title: "10+ In-House Experts", desc: "A robust team of editors, marketers, and developers ready to scale." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#ff4d00]/20 flex items-center justify-center shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-[#ff4d00]"></div>
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-zinc-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
          <div className="w-full md:w-1/2">
            <Reveal delay={200}>
              <div className="border border-white/10 bg-[#050505] p-10 rounded-sm">
                 <h3 className="text-2xl font-serif font-bold text-white mb-6">Let's talk about your project</h3>
                 <Link to="/contact" className="block w-full text-center bg-[#ff4d00] text-white py-4 font-bold tracking-widest uppercase text-sm hover:bg-[#ff4d00]/90 transition-colors">
                   Request a Strategy Call
                 </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6 relative border-t border-white/10">
        <ContactSection />
      </section>
      
    </>
  );
};
