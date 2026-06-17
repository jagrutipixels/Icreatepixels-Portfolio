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

export const Home: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const structuredData = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "iCreatePixels",
    "image": "https://raw.githubusercontent.com/jagrutipixels/pixels/2a4100de1fb6b50a220f0ca500322b2a91316285/logo_white.png",
    "@id": "https://www.icreatepixels.com",
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
      <section className="relative pt-24 pb-16 lg:pt-36 lg:pb-24 border-b border-white/10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-start gap-6">
          <Reveal delay={100}>
            <div className="inline-block border border-[#ff4d00]/30 bg-[#ff4d00]/10 px-4 py-1.5 rounded-full text-[#ff4d00] text-[10px] font-bold tracking-widest uppercase mb-4">
              Premium Agency in Navi Mumbai
            </div>
          </Reveal>
          <Reveal delay={200}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-black leading-[1.05] tracking-tight text-white mb-6">
              We Build Brands <br className="hidden md:block"/>
              that <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4d00] to-orange-400">Dominate.</span>
            </h1>
          </Reveal>
          <div className="sr-only">
            <h2>iCreatePixels combines cinematic video production with data-driven digital marketing to help businesses in Navi Mumbai achieve measurable growth.</h2>
            <p>iCreatePixels is Navi Mumbai's premier production house and growth agency founded by Abhishek Sanjay Gujar. We specialize in broadcast-quality video production, professional photography, podcast production, social media marketing, and local SEO. We help businesses generate measurable results through integrated creative and marketing solutions.</p>
            <ul>
              <li>15+ years experience</li>
              <li>500+ projects completed</li>
              <li>4.8/5 client rating</li>
              <li>₹1Cr+ revenue generated for clients</li>
              <li>85% client retention rate</li>
            </ul>
          </div>
          <Reveal delay={300}>
            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed mb-8">
              iCreatePixels is a high-end production house and growth agency merging cinematic video production with ruthless, data-driven marketing.
            </p>
          </Reveal>
          <Reveal delay={400}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="bg-[#ff4d00] text-white px-8 py-4 rounded-sm font-bold tracking-widest uppercase text-sm hover:bg-[#ff4d00]/90 transition-all">
                Let's Build Together
              </Link>
              <Link to="/portfolio" className="border border-white/10 bg-white/5 text-white px-8 py-4 rounded-sm font-bold tracking-widest uppercase text-sm hover:bg-white/10 transition-all text-center">
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
                  <p className="text-zinc-400 text-sm leading-relaxed">{step.desc}</p>
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
      <section className="py-24 px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white text-center">Core Capabilities</h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Bento 1: Video Production */}
            <Reveal className="lg:col-span-2">
              <Link to="/production-house-navi-mumbai" className="block relative h-[320px] rounded-sm overflow-hidden group border border-white/10">
                <div className="absolute inset-0 bg-[#0a0a0a] transition-all duration-500 group-hover:scale-105 z-0">
                  <div className="absolute inset-0 opacity-40 bg-gradient-to-tr from-[#ff4d00]/20 to-transparent"></div>
                </div>
                <div className="relative z-10 p-8 flex flex-col h-full justify-between">
                  <Video size={36} className="text-[#ff4d00]" />
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Video Production</h3>
                    <p className="text-zinc-400 max-w-sm mb-4">Corporate films, TVCs, reels, and podcast production.</p>
                    <span className="text-[#ff4d00] font-bold text-sm tracking-wider uppercase flex items-center gap-2 group-hover:gap-4 transition-all">Explore Service <ArrowRight size={16} /></span>
                  </div>
                </div>
              </Link>
            </Reveal>

            {/* Bento 2: Marketing */}
            <Reveal delay={100}>
              <Link to="/social-media-marketing-navi-mumbai" className="block relative h-[320px] rounded-sm overflow-hidden group border border-white/10 bg-[#0a0a0a]">
                <div className="relative z-10 p-8 flex flex-col h-full justify-between">
                  <LineChart size={36} className="text-[#ff4d00]" />
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Social Marketing</h3>
                    <p className="text-zinc-400 mb-4">Data-backed social media management.</p>
                    <span className="text-[#ff4d00] font-bold text-sm tracking-wider uppercase flex items-center gap-2 group-hover:gap-4 transition-all">Explore Service <ArrowRight size={16} /></span>
                  </div>
                </div>
              </Link>
            </Reveal>

            {/* Bento 3: Web Dev */}
            <Reveal>
              <Link to="/social-media-marketing-navi-mumbai" className="block relative h-[320px] rounded-sm overflow-hidden group border border-white/10 bg-[#0a0a0a]">
                <div className="relative z-10 p-8 flex flex-col h-full justify-between">
                  <Globe size={36} className="text-[#ff4d00]" />
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Web Development</h3>
                    <p className="text-zinc-400 mb-4">High-performance digital storefronts and Local SEO.</p>
                    <span className="text-[#ff4d00] font-bold text-sm tracking-wider uppercase flex items-center gap-2 group-hover:gap-4 transition-all">Explore Service <ArrowRight size={16} /></span>
                  </div>
                </div>
              </Link>
            </Reveal>

            {/* Bento 4: Photography */}
            <Reveal delay={100} className="lg:col-span-2">
              <Link to="/production-house-navi-mumbai" className="block relative h-[320px] rounded-sm overflow-hidden group border border-white/10">
                <div className="absolute inset-0 bg-[#0a0a0a] transition-all duration-500 group-hover:scale-105 z-0">
                  <div className="absolute inset-0 opacity-40 bg-gradient-to-bl from-purple-500/10 to-transparent"></div>
                </div>
                <div className="relative z-10 p-8 flex flex-col h-full justify-between">
                  <Camera size={36} className="text-[#ff4d00]" />
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Commercial Photography</h3>
                    <p className="text-zinc-400 max-w-sm mb-4">Product shoots, fashion, and architectural captures.</p>
                    <span className="text-[#ff4d00] font-bold text-sm tracking-wider uppercase flex items-center gap-2 group-hover:gap-4 transition-all">Explore Service <ArrowRight size={16} /></span>
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
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">Why iCreatePixels?</h2>
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
