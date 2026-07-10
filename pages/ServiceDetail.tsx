import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Reveal } from '../components/Reveal.tsx';
import { SEO } from '../components/SEO.tsx';

interface ServiceInfo {
  title: string;
  description: string;
  benefits: string[];
  process: { phase: string; detail: string }[];
  ctaText: string;
  categoryName: string;
  backLink: string;
}

const SERVICES_DATA: Record<string, ServiceInfo> = {
  // Production Services
  "corporate-ad-films": {
    title: "Corporate & Ad Films",
    description: "High-ticket visuals meant to close deals. We handle end-to-end production: scripting, casting, location scouting, shooting, and Netflix-standard post-production.",
    benefits: [
      "TVCs & Digital Ads designed for maximum ROI",
      "Brand Manifestos that establish market authority",
      "Documentaries to tell your authentic story",
      "End-to-end production pipeline from concept to final cut"
    ],
    process: [
      { phase: "Pre-Production", detail: "Strategy, scripting, storyboarding, casting, and location scouting." },
      { phase: "Production", detail: "Professional crew, cinematic lighting, multi-cam setups, and on-set art direction." },
      { phase: "Post-Production", detail: "Retention-optimized editing, color grading, VFX, and sound design." }
    ],
    ctaText: "Book a Shoot",
    categoryName: "Production",
    backLink: "/production-house-navi-mumbai"
  },
  "commercial-photography": {
    title: "Commercial Photography",
    description: "First impressions happen in milliseconds. Our photography ensures your products, team, and facilities look undeniably premium.",
    benefits: [
      "Product & E-Commerce photography",
      "Fashion & Editorial shoots",
      "Architectural & Real Estate imagery",
      "High-end retouching and compositing"
    ],
    process: [
      { phase: "Consultation", detail: "Understanding brand guidelines, visual identity, and intended usage." },
      { phase: "The Shoot", detail: "Styling, lighting, and capturing high-resolution imagery." },
      { phase: "Retouching", detail: "Advanced color correction, blemish removal, and composite building." }
    ],
    ctaText: "Book a Shoot",
    categoryName: "Production",
    backLink: "/production-house-navi-mumbai"
  },
  "podcast-production": {
    title: "Podcast Production",
    description: "Build authority with long-form audio-visual content. We provide multi-cam setups, broadcast-quality audio, and professional set designs.",
    benefits: [
      "Multi-Cam Video Podcasts",
      "Audio Engineering and Mastering",
      "Micro-content extraction (Shorts/Reels)",
      "Set design and acoustic treatment"
    ],
    process: [
      { phase: "Setup", detail: "Studio configuration, lighting, and multi-cam arrangement." },
      { phase: "Recording", detail: "Live switching, high-fidelity audio capture, and direction." },
      { phase: "Delivery", detail: "Full-length episodes plus high-retention micro-clips for social media." }
    ],
    ctaText: "Book a Shoot",
    categoryName: "Production",
    backLink: "/production-house-navi-mumbai"
  },
  "social-first-content": {
    title: "Social First Content",
    description: "Vertical format doesn't mean low quality. We shoot high-retention Reels, Shorts, and TikToks designed specifically for the algorithm.",
    benefits: [
      "Instagram Reels & YouTube Shorts",
      "Founder Personal Branding",
      "Behind The Scenes and Vlogs",
      "Trend-jacking and viral hooks"
    ],
    process: [
      { phase: "Ideation", detail: "Hook writing, trend research, and scripting." },
      { phase: "Filming", detail: "Dynamic camera work optimized for vertical viewing." },
      { phase: "Editing", detail: "Fast-paced cuts, captions, sound effects, and retention psychology." }
    ],
    ctaText: "Book a Shoot",
    categoryName: "Production",
    backLink: "/production-house-navi-mumbai"
  },
  
  // Marketing Services
  "local-global-seo": {
    title: "Local & Global SEO",
    description: "If you aren't on page one, you don't exist. We optimize your digital presence to dominate search intent and conquer local map packs in Navi Mumbai and beyond.",
    benefits: [
      "Technical Audits & Fixes",
      "Keyword Dominance Strategy",
      "Google Business Profile Optimization",
      "Content strategy and link building"
    ],
    process: [
      { phase: "Audit", detail: "Comprehensive analysis of technical SEO, backlinks, and competitors." },
      { phase: "Optimization", detail: "On-page restructuring, meta enhancements, and speed optimization." },
      { phase: "Authority", detail: "Content creation, local citations, and acquiring high-DA backlinks." }
    ],
    ctaText: "Audit My Brand",
    categoryName: "Marketing",
    backLink: "/marketing"
  },
  "social-media-architecture": {
    title: "Social Media Architecture",
    description: "We don't just \"post.\" We build communities. From grid aesthetics to algorithmic hacks, we manage your social presence to drive authentic engagement.",
    benefits: [
      "End-to-End Grid Management",
      "Organic Growth Campaigns",
      "Influencer & Collaboration Outreach",
      "Community management and DM sales"
    ],
    process: [
      { phase: "Strategy", detail: "Content pillars, visual identity, and tone of voice." },
      { phase: "Creation", detail: "Designing graphics, writing copy, and scheduling posts." },
      { phase: "Growth", detail: "Community engagement, algorithmic optimization, and reporting." }
    ],
    ctaText: "Audit My Brand",
    categoryName: "Marketing",
    backLink: "/marketing"
  },
  "performance-marketing": {
    title: "Performance Marketing",
    description: "Stop burning money on bad ads. We deploy highly targeted, mathematically sound ad campaigns across Meta and Google to acquire customers profitably.",
    benefits: [
      "Paid Social & Search Ads",
      "Retargeting Funnels",
      "A/B Creative Testing",
      "ROAS-focused media buying"
    ],
    process: [
      { phase: "Setup", detail: "Pixel installation, audience building, and tracking configuration." },
      { phase: "Launch", detail: "Testing multiple creatives, ad copies, and audience segments." },
      { phase: "Scale", detail: "Killing losing ads, scaling winners, and optimizing cost-per-acquisition." }
    ],
    ctaText: "Audit My Brand",
    categoryName: "Marketing",
    backLink: "/marketing"
  },
  "conversion-rate-optimization": {
    title: "Conversion Rate Optimization",
    description: "Traffic is useless if it doesn't convert. We audit and rebuild digital touchpoints (landing pages, checkout flows) to maximize conversion percentages.",
    benefits: [
      "Landing Page Architecture",
      "Copywriting & Psychology",
      "User Journey Mapping",
      "A/B testing and heat mapping"
    ],
    process: [
      { phase: "Analysis", detail: "Analyzing user behavior via heatmaps and analytics." },
      { phase: "Hypothesis", detail: "Formulating tests for headlines, layouts, and CTAs." },
      { phase: "Implementation", detail: "Deploying variations and measuring statistical significance." }
    ],
    ctaText: "Audit My Brand",
    categoryName: "Marketing",
    backLink: "/marketing"
  }
};

export const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const service = slug ? SERVICES_DATA[slug] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <div className="min-h-screen pt-32 pb-24 px-6 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-serif font-black text-white mb-6">Service Not Found</h1>
        <button 
          onClick={() => navigate(-1)} 
          className="bg-[#ff4d00] text-white px-8 py-4 rounded-xl font-bold tracking-widest uppercase text-sm hover:bg-[#ff4d00]/90 transition-all"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <>
      <SEO 
        title={`${service.title} | icreatepixels`}
        description={service.description}
        keywords={`${service.title}, icreatepixels services, ${service.categoryName}`}
      />
      <div className="pt-32 pb-24 px-6 min-h-screen bg-[#050505]">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <Link 
              to={service.backLink}
              className="inline-flex items-center gap-2 text-zinc-400 hover:text-[#ff4d00] transition-colors mb-12 uppercase tracking-widest text-xs font-bold"
            >
              <ArrowLeft size={16} /> Back to {service.categoryName}
            </Link>
          </Reveal>
          
          <Reveal>
            <h1 className="text-4xl md:text-6xl font-serif font-black text-white mb-6 leading-tight">
              {service.title}
            </h1>
            <p className="text-zinc-400 text-lg md:text-xl leading-relaxed mb-12">
              {service.description}
            </p>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <Reveal>
              <div className="bg-[#050505] border border-white/10 p-8 rounded-2xl h-full">
                <h3 className="text-2xl font-bold text-white mb-6">What You Get</h3>
                <ul className="space-y-4">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-zinc-300">
                      <CheckCircle2 size={20} className="text-[#ff4d00] shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            
            <Reveal delay={100}>
              <div className="bg-[#050505] border border-white/10 p-8 rounded-2xl h-full">
                <h3 className="text-2xl font-bold text-white mb-6">Our Process</h3>
                <div className="space-y-6">
                  {service.process.map((step, idx) => (
                    <div key={idx} className="border-l-2 border-[#ff4d00] pl-4">
                      <h4 className="text-white font-bold mb-1">{step.phase}</h4>
                      <p className="text-zinc-400 text-sm leading-relaxed">{step.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </>
  );
};
