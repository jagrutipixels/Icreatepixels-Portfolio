import React from 'react';
import { Reveal } from '../components/Reveal.tsx';
import { SEO } from '../components/SEO.tsx';
import { ContactSection } from '../components/ContactSection.tsx';

export const Contact: React.FC = () => {
  const structuredData = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "iCreatePixels",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Navi Mumbai",
      "addressRegion": "MH",
      "addressCountry": "IN"
    },
    "telephone": "7400310443",
    "email": "abhishek@icreatepixels.in",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service"
    }
  });

  return (
    <>
      <SEO 
        title="Contact iCreatePixels | Let's Build Your Brand"
        description="Ready to scale? Contact our Navi Mumbai production and growth agency to request a strategy call or a quote."
        keywords="Contact iCreatePixels, Navi Mumbai agency contact, hire videographer, hire SEO expert"
        schema={structuredData}
      />
      
      <div className="pt-32 pb-24 px-6 border-b border-white/10 relative overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-[0.03] z-0" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-4xl md:text-6xl font-serif font-black mb-6 text-white tracking-tight">
                Secure Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4d00] to-orange-400">Position.</span>
              </h1>
              <p className="text-zinc-400 text-lg leading-relaxed">
                We only onboard a limited number of partners per quarter to maintain uncompromising quality. Drop your details, and our strategy team will reach out within 24 hours.
              </p>
            </div>
          </Reveal>
          
          <div className="bg-[#0a0a0a] border border-white/10 rounded-sm p-4 sm:p-6 md:p-12 shadow-2xl relative">
            <div className="absolute -top-[1px] left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-[#ff4d00] to-transparent opacity-50"></div>
            
            {/* Reusing existing sophisticated contact form */}
            <ContactSection />
            
          </div>
        </div>
      </div>

    </>
  );
};
