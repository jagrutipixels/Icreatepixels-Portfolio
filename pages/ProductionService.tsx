import React from 'react';
import { Reveal } from '../components/Reveal.tsx';
import { SEO } from '../components/SEO.tsx';
import { Link } from 'react-router-dom';
import { Video, Camera, Mic, PlaySquare } from 'lucide-react';

export const ProductionService: React.FC = () => {
  const structuredData = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Video Production & Photography",
    "provider": {
      "@type": "LocalBusiness",
      "name": "icreatepixels",
      "image": "https://raw.githubusercontent.com/jagrutipixels/pixels/2a4100de1fb6b50a220f0ca500322b2a91316285/logo_white.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Navi Mumbai",
        "addressRegion": "MH",
        "addressCountry": "IN"
      }
    },
    "description": "High-end video production, corporate films, product photography, and podcast production in Navi Mumbai."
  });

  return (
    <>
      <SEO 
        title="Video Production & Photography Services | Navi Mumbai"
        description="Premium video production house in Navi Mumbai. We specialize in corporate films, TVCs, product photography, and podcast production."
        keywords="Video Production Navi Mumbai, Corporate Films, Product Photography, Podcast Studio Navi Mumbai, Production House"
        schema={structuredData}
      />
      
      <div className="pt-32 pb-24 px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="inline-block border border-[#ff4d00]/30 bg-[#ff4d00]/10 px-4 py-1.5 rounded-full text-[#ff4d00] text-[10px] font-bold tracking-widest uppercase mb-6">
              Production House
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-black mb-8 text-white tracking-tight leading-tight max-w-4xl">
              Cinematic Visuals That Demand <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4d00] to-orange-400">Attention.</span>
            </h1>
            
            <div className="sr-only">
              <h2>icreatepixels is Navi Mumbai's premium production house, founded by Abhishek Sanjay Gujar. We specialize in cinematic video production, commercial videos, corporate films, product photography, drone videography, and podcast production.</h2>
              <p>icreatepixels delivers broadcast-quality production services that help businesses tell compelling brand stories and generate measurable results. From dramatic commercial videos to professional corporate films, high-end product photography, stunning aerial cinematography, and full-service podcast production—we handle it all with cinematic excellence.</p>
              <p>Our production philosophy: Use world-class equipment, expert creative direction, and meticulous attention to detail to create content that doesn't just look good—it converts.</p>
              <h3>What Sets Us Apart:</h3>
              <ul>
                <li>Founder-led creative direction (Abhishek Sanjay Gujar personally oversees all projects)</li>
                <li>Broadcast-grade equipment (RED, Sony Cinema, DaVinci Resolve)</li>
                <li>Results-focused approach (we measure success in business impact)</li>
                <li>Fast turnaround without compromising quality</li>
                <li>Transparent pricing (no hidden costs)</li>
                <li>Direct access to decision-makers</li>
              </ul>
              <p>Keywords: Production house Navi Mumbai, video production company, cinematic video production, commercial video production, corporate video production, product photography, drone videography, podcast production.</p>
            </div>

            <p className="text-zinc-400 max-w-2xl text-lg leading-relaxed mb-12">
              We don't just point and shoot. We architect visual stories. From lighting design to color grading, every frame we produce is engineered to elevate your brand's perceived value and drive ROI.
            </p>
            <Link to="/contact" className="bg-[#ff4d00] text-white px-8 py-4 rounded-2xl font-bold tracking-widest uppercase text-sm hover:bg-[#ff4d00]/90 transition-all inline-block">
              Book a Shoot
            </Link>
          </Reveal>
        </div>
      </div>

      <div className="py-24 px-6 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            <Reveal>
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 hover:border-[#ff4d00]/50 transition-colors h-full flex flex-col group">
                <Video size={48} className="text-[#ff4d00] mb-6" />
                <h3 className="text-3xl font-bold text-white mb-4">Corporate & Ad Films</h3>
                <p className="text-zinc-400 leading-relaxed mb-6">
                  High-ticket visuals meant to close deals. We handle end-to-end production: scripting, casting, location scouting, shooting, and Netflix-standard post-production.
                </p>
                <ul className="space-y-2 mb-8 text-zinc-500 flex-grow">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#ff4d00] rounded-full"></div> TVCs & Digital Ads</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#ff4d00] rounded-full"></div> Brand Manifestos</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#ff4d00] rounded-full"></div> Documentaries</li>
                </ul>
                <Link to="/production-house-navi-mumbai/corporate-ad-films" className="text-[#ff4d00] text-sm font-bold tracking-widest uppercase hover:text-white transition-colors flex items-center gap-2 mt-auto">
                  Know More <span>&rarr;</span>
                </Link>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 hover:border-[#ff4d00]/50 transition-colors h-full flex flex-col group">
                <Camera size={48} className="text-[#ff4d00] mb-6" />
                <h3 className="text-3xl font-bold text-white mb-4">Commercial Photography</h3>
                <p className="text-zinc-400 leading-relaxed mb-6">
                  First impressions happen in milliseconds. Our photography ensures your products, team, and facilities look undeniably premium.
                </p>
                <ul className="space-y-2 mb-8 text-zinc-500 flex-grow">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#ff4d00] rounded-full"></div> Product & E-Commerce</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#ff4d00] rounded-full"></div> Fashion & Editorial</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#ff4d00] rounded-full"></div> Architectural & Real Estate</li>
                </ul>
                <Link to="/production-house-navi-mumbai/commercial-photography" className="text-[#ff4d00] text-sm font-bold tracking-widest uppercase hover:text-white transition-colors flex items-center gap-2 mt-auto">
                  Know More <span>&rarr;</span>
                </Link>
              </div>
            </Reveal>

            <Reveal>
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 hover:border-[#ff4d00]/50 transition-colors h-full flex flex-col group">
                <Mic size={48} className="text-[#ff4d00] mb-6" />
                <h3 className="text-3xl font-bold text-white mb-4">Podcast Production</h3>
                <p className="text-zinc-400 leading-relaxed mb-6">
                  Build authority with long-form audio-visual content. We provide multi-cam setups, broadcast-quality audio, and professional set designs.
                </p>
                <ul className="space-y-2 mb-8 text-zinc-500 flex-grow">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#ff4d00] rounded-full"></div> Multi-Cam Video Podcasts</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#ff4d00] rounded-full"></div> Audio Engineering</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#ff4d00] rounded-full"></div> Micro-content extraction (Shorts/Reels)</li>
                </ul>
                <Link to="/production-house-navi-mumbai/podcast-production" className="text-[#ff4d00] text-sm font-bold tracking-widest uppercase hover:text-white transition-colors flex items-center gap-2 mt-auto">
                  Know More <span>&rarr;</span>
                </Link>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 hover:border-[#ff4d00]/50 transition-colors h-full flex flex-col group">
                <PlaySquare size={48} className="text-[#ff4d00] mb-6" />
                <h3 className="text-3xl font-bold text-white mb-4">Social First Content</h3>
                <p className="text-zinc-400 leading-relaxed mb-6">
                  Vertical format doesn't mean low quality. We shoot high-retention Reels, Shorts, and TikToks designed specifically for the algorithm.
                </p>
                <ul className="space-y-2 mb-8 text-zinc-500 flex-grow">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#ff4d00] rounded-full"></div> Instagram Reels / YouTube Shorts</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#ff4d00] rounded-full"></div> Founder Personal Branding</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#ff4d00] rounded-full"></div> Behind The Scenes</li>
                </ul>
                <Link to="/production-house-navi-mumbai/social-first-content" className="text-[#ff4d00] text-sm font-bold tracking-widest uppercase hover:text-white transition-colors flex items-center gap-2 mt-auto">
                  Know More <span>&rarr;</span>
                </Link>
              </div>
            </Reveal>

          </div>

          <div className="sr-only">
            <h3>Detailed Service Descriptions</h3>
            <div>
              <h4>COMMERCIAL VIDEO PRODUCTION</h4>
              <p>Description: High-impact advertising videos for TV, streaming platforms, YouTube, Instagram, and social media. We create dramatic, engaging commercials that capture attention and drive action.</p>
              <p>What's Included: Concept development and creative direction, Professional crew, Multi-camera setup, Location scouting, Post-production color grading, Music licensing.</p>
              <p>Price Range: ₹1,00,000 - ₹10,00,000+ | Timeline: 4-8 weeks</p>
              <p>Keywords: Commercial video production, advertising video, TV commercial, YouTube ad, commercial filmmaker.</p>
              <Link to="/portfolio">See commercial video case studies</Link>
            </div>
            
            <div>
              <h4>OUR PRODUCTION WORKFLOW</h4>
              <p>Phase 1: STRATEGY & PLANNING (1-2 weeks). Discover call, Concept development, Location scouting, Equipment and crew planning.</p>
              <p>Phase 2: PRE-PRODUCTION (1 week). Script approval, casting, permits, equipment testing.</p>
              <p>Phase 3: PRODUCTION (2-4 weeks). Professional filming, multiple takes, lighting and sound capture.</p>
              <p>Phase 4: POST-PRODUCTION (2-4 weeks). Editing, color grading, sound design, VFX, revisions.</p>
              <p>Phase 5: DELIVERY & OPTIMIZATION (1 week). Quality check, metadata optimization, upload to platforms.</p>
              <p>Keywords: Production process, video production timeline, how videos are made, production workflow.</p>
            </div>

            <div>
              <h4>PRODUCTION PRICING & PACKAGES</h4>
              <p>We believe in transparent pricing. COMMERCIAL VIDEO PRODUCTION: Starter ₹1,00,000, Standard ₹3,00,000, Premium ₹5,00,000+.</p>
              <p>CORPORATE VIDEO PRODUCTION: ₹50,000 - ₹3,00,000+.</p>
              <p>DRONE VIDEOGRAPHY: ₹50,000 - ₹2,50,000+.</p>
              <p>Keywords: Video production cost, production pricing, how much does video production cost, production packages.</p>
            </div>

            <div>
              <h4>FREQUENTLY ASKED QUESTIONS</h4>
              <p>Q: What makes icreatepixels different? A: We combine cinematic quality with founder-led creative direction and results focus.</p>
              <p>Q: How long does a project take? A: Most take 4-8 weeks from consultation to delivery.</p>
              <p>Q: Can you work within a budget? A: Yes, starting at ₹50,000 for corporate videos.</p>
              <p>Keywords: Video production FAQ, production questions, how to hire videographer, production process explained.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
