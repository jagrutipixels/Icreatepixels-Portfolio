import React from 'react';
import { Hero } from '../components/Hero.tsx';
import { Marquees } from '../components/Marquees.tsx';
import { BentoServices } from '../components/BentoServices.tsx';
import { MetricsBar } from '../components/MetricsBar.tsx';
import { FeaturedWork } from '../components/FeaturedWork.tsx';
import { PricingSection } from '../components/PricingSection.tsx';
import { InteractiveFAQ } from '../components/InteractiveFAQ.tsx';
import { AgencyFooter } from '../components/AgencyFooter.tsx';
import { SEO } from '../components/SEO.tsx';

export const Home: React.FC = () => {
  const structuredData = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "icreatepixels",
    "url": "https://www.icreatepixels.in",
    "description": "Premium production house and growth agency in Navi Mumbai."
  });

  return (
    <>
      <SEO 
        title="icreatepixels | Premium Production House & Growth Marketing Agency in Navi Mumbai"
        description="Navi Mumbai's leading creative production house and performance marketing agency. We specialize in cinematic video production, local SEO, social media marketing, and data-driven growth strategies."
        keywords="Production House Navi Mumbai, Top Marketing Agency Navi Mumbai, Video Production Services, Local SEO Expert Navi Mumbai, Performance Marketing Agency, Social Media Marketing Navi Mumbai, Brand Strategist"
        schema={structuredData}
      />
      <div className="w-full bg-[#050505] min-h-screen">
        <Hero />
        <Marquees />
        <BentoServices />
        <MetricsBar />
        <FeaturedWork />
        <PricingSection />
        <InteractiveFAQ />
        <AgencyFooter />
      </div>
    </>
  );
};
