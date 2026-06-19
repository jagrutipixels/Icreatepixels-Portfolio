import React from 'react';
import { Reveal } from '../components/Reveal.tsx';
import { SEO } from '../components/SEO.tsx';
import { ExperienceSection } from '../components/ExperienceSection.tsx';
import { PERSONAL_INFO } from '../constants.ts';

export const AboutUs: React.FC = () => {
  const structuredData = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Person",
      "name": "Abhishek Sanjay Gujar",
      "jobTitle": "Founder & Creative Director",
      "worksFor": {
        "@type": "Organization",
        "name": "icreatepixels"
      }
    }
  });

  return (
    <>
      <SEO 
        title="Our Story | icreatepixels | Abhishek Sanjay Gujar"
        description="Meet Abhishek Sanjay Gujar, Founder & Creative Director of icreatepixels. Bridging the gap between cinematic filmmaking and performance marketing."
        keywords="About icreatepixels, Abhishek Sanjay Gujar, Creative Director Mumbai, Agency Story"
        schema={structuredData}
      />
      
      <div className="pt-32 pb-24 px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2">
            <Reveal>
              <h1 className="text-4xl md:text-6xl font-serif font-black mb-8 text-white tracking-tight">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4d00] to-orange-400">Story.</span>
              </h1>
              
              <div className="sr-only">
                <h2>Meet Abhishek Sanjay Gujar, founder and director of icreatepixels—a production house and growth agency built on principles of creative excellence and measurable business results.</h2>
                <p>Abhishek Sanjay Gujar founded icreatepixels with a clear vision: help businesses in Navi Mumbai and beyond achieve measurable growth through world-class production and data-driven marketing.</p>
                <p>With 15+ years of experience in production, branding, and digital marketing, Abhishek has worked with 200+ brands across 50+ industries. He's directed hundreds of video productions, developed brand strategies for startups and enterprises, and built marketing campaigns generating millions of impressions and millions in revenue.</p>
                <p>Before founding icreatepixels, Abhishek consulted as Creative Head and Project Lead at Karn Marketing Warfare. He has directed hundreds of video productions, developed brand strategies for startups and enterprises, and built marketing campaigns generating millions in revenue.</p>
                <p>Philosophy: "Great creative work and smart marketing aren't separate. They work best when merged. That's what icreatepixels does."</p>
                <p>Keywords: About icreatepixels, Abhishek Sanjay Gujar, founder, production house, growth agency, Navi Mumbai.</p>
              </div>

              <h3 className="text-2xl font-bold text-white mb-6">Bridging the cinematic and the analytical.</h3>
              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                icreatepixels was born from a fundamental frustration: videographers didn't understand marketing funnels, and marketing agencies produced stale, uninspired visuals.
              </p>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Founded by Abhishek Sanjay Gujar, we set out to build a hybrid powerhouse. A place where Netflix-standard visual production meets ruthless, data-driven growth strategies. Over the last 4 years, we've scaled businesses across Navi Mumbai by ensuring their brand not only looks premium but performs exceptionally.
              </p>
              
              <div className="sr-only">
                <h3>EXPERTISE & EXPERIENCE</h3>
                <p>Video Production: 15+ years directing commercials. Brand Strategy & Marketing: 200+ brands positioned. Digital Marketing: Expert in SEO, social media. Business Development: Scaled multiple agencies.</p>
                <p>What Drives Abhishek: Results. Transparency. Partnership. Innovation.</p>
                <p>Keywords: Abhishek Sanjay Gujar background, production expertise, marketing strategy, founder experience, agency leadership.</p>
                
                <h3>THE TEAM</h3>
                <p>icreatepixels is a lean, expert team focused on delivering exceptional results for clients. Creative Direction & Strategy: Abhishek Sanjay Gujar.</p>
                <p>Combined experience: 50+ years. 500+ projects completed.</p>
                <p>Keywords: icreatepixels team, creative team, production team, marketing team.</p>

                <h3>OUR MISSION & APPROACH</h3>
                <p>Mission: Help businesses in Navi Mumbai and beyond achieve measurable growth through world-class production, strategic marketing, and data-driven optimization.</p>
                <p>Core Values: EXCELLENCE, RESULTS-FOCUSED, TRANSPARENCY, INNOVATION, PARTNERSHIP.</p>
                <p>Why Choose icreatepixels: Founder-led, 15+ years experience, 500+ projects completed, ₹1Cr+ revenue generated for clients, 4.8/5 client rating.</p>
                <p>Keywords: About icreatepixels, mission statement, our values, why choose us, agency philosophy.</p>
              </div>
            </Reveal>
          </div>
          
          <div className="w-full md:w-1/2">
            <Reveal delay={200}>
              <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-[#ff4d00] translate-x-4 translate-y-4 rounded-sm"></div>
                <img 
                  src={PERSONAL_INFO.image} 
                  alt="Abhishek Sanjay Gujar - Founder & Creative Director" 
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover rounded-sm grayscale contrast-125 hover:grayscale-0 transition-all duration-1000 z-10"
                />
                <div className="absolute bottom-6 left-6 z-20 bg-[#050505]/90 backdrop-blur-md px-6 py-4 border border-white/10">
                  <h4 className="text-white font-bold text-xl uppercase tracking-wider mb-1">Abhishek Gujar</h4>
                  <p className="text-[#ff4d00] font-bold text-xs uppercase tracking-widest">Founder & Creative Director</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="py-24 px-6 bg-[#0a0a0a]">
         <div className="max-w-7xl mx-auto">
            <Reveal>
              <div className="text-center mb-16">
                 <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">The Journey</h2>
                 <p className="text-zinc-500 mt-4 uppercase tracking-widest text-sm">4+ Years of Evolution</p>
              </div>
            </Reveal>
            
            {/* Re-using identical timeline from old site */}
            <ExperienceSection />
         </div>
      </div>

    </>
  );
};
