import React from 'react';
import { Reveal } from '../components/Reveal.tsx';
import { SEO } from '../components/SEO.tsx';
import { Link } from 'react-router-dom';
import { LineChart, Search, Smartphone, Target } from 'lucide-react';

export const MarketingService: React.FC = () => {
  const structuredData = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Marketing & SEO",
    "provider": {
      "@type": "LocalBusiness",
      "name": "iCreatePixels",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Navi Mumbai",
        "addressRegion": "MH",
        "addressCountry": "IN"
      }
    },
    "description": "Data-driven SEO, Social Media Marketing, and Performance Growth strategies in Navi Mumbai."
  });

  return (
    <>
      <SEO 
        title="Social Media Marketing & SEO Agency | Navi Mumbai"
        description="Data-driven marketing, Local SEO, and Social Media Management that scales. Transform traffic into revenue with iCreatePixels."
        keywords="Social Media Marketing Navi Mumbai, SEO Expert Navi Mumbai, Performance Marketing, Digital Marketing Agency"
        schema={structuredData}
      />
      
      <div className="pt-32 pb-24 px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="inline-block border border-[#ff4d00]/30 bg-[#ff4d00]/10 px-4 py-1.5 rounded-full text-[#ff4d00] text-[10px] font-bold tracking-widest uppercase mb-6">
              Growth Agency
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-black mb-8 text-white tracking-tight leading-tight max-w-4xl">
              Marketing Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4d00] to-orange-400">Revenue,</span> Not Just Likes.
            </h1>
            
            <div className="sr-only">
              <h2>iCreatePixels is Navi Mumbai's leading social media marketing and local SEO agency. We help businesses generate qualified leads and sustainable growth through data-driven strategies.</h2>
              <p>iCreatePixels provides comprehensive digital marketing solutions designed to help businesses in Navi Mumbai and beyond achieve measurable growth. Founded by Abhishek Sanjay Gujar, our agency specializes in social media marketing, local SEO, performance advertising, content strategy, website optimization, and brand architecture.</p>
              <p>We don't believe in vanity metrics. Our focus is on business results: leads, revenue, market share, and sustainable growth. We use data to guide every decision and continuously optimize for better outcomes.</p>
              <h3>What We Offer:</h3>
              <ul>
                <li>Social Media Marketing (Instagram, Facebook, LinkedIn, TikTok)</li>
                <li>Local SEO & Google Business Profile Optimization</li>
                <li>Performance Marketing & Paid Advertising</li>
                <li>Content Creation & Strategy</li>
                <li>Website Development & Optimization</li>
                <li>Brand Architecture & Positioning</li>
              </ul>
              <p>Target Result: 50-150 qualified leads per month, 3-5x ROI, top 3 rankings for 15-30 keywords.</p>
              <p>Keywords: Social media marketing Navi Mumbai, digital marketing agency, local SEO, performance marketing, lead generation, growth agency, Navi Mumbai marketing.</p>
            </div>

            <p className="text-zinc-400 max-w-2xl text-lg leading-relaxed mb-12">
              Vanity metrics are dead. We architect data-driven marketing systems, SEO pipelines, and social media ecosystems that convert awareness into actual cash flow.
            </p>
            <Link to="/contact" className="bg-[#ff4d00] text-white px-8 py-4 rounded-sm font-bold tracking-widest uppercase text-sm hover:bg-[#ff4d00]/90 transition-all inline-block">
              Audit My Brand
            </Link>
          </Reveal>
        </div>
      </div>

      <div className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            <Reveal>
              <div className="border border-white/10 p-10 bg-[#050505] hover:border-[#ff4d00]/50 transition-colors h-full group">
                <Search size={48} className="text-[#ff4d00] mb-6" />
                <h3 className="text-3xl font-bold text-white mb-4">Local & Global SEO</h3>
                <p className="text-zinc-400 leading-relaxed mb-6">
                  If you aren't on page one, you don't exist. We optimize your digital presence to dominate search intent and conquer local map packs in Navi Mumbai and beyond.
                </p>
                <ul className="space-y-2 mb-8 text-zinc-500">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#ff4d00] rounded-full"></div> Technical Audits & Fixes</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#ff4d00] rounded-full"></div> Keyword Dominance Strategy</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#ff4d00] rounded-full"></div> Google Business Profile Optimization</li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="border border-white/10 p-10 bg-[#050505] hover:border-[#ff4d00]/50 transition-colors h-full group">
                <Smartphone size={48} className="text-[#ff4d00] mb-6" />
                <h3 className="text-3xl font-bold text-white mb-4">Social Media Architecture</h3>
                <p className="text-zinc-400 leading-relaxed mb-6">
                  We don't just "post." We build communities. From grid aesthetics to algorithmic hacks, we manage your social presence to drive authentic engagement.
                </p>
                <ul className="space-y-2 mb-8 text-zinc-500">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#ff4d00] rounded-full"></div> End-to-End Grid Management</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#ff4d00] rounded-full"></div> Organic Growth Campaigns</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#ff4d00] rounded-full"></div> Influencer & Collaboration Outreach</li>
                </ul>
              </div>
            </Reveal>

            <Reveal>
              <div className="border border-white/10 p-10 bg-[#050505] hover:border-[#ff4d00]/50 transition-colors h-full group">
                <Target size={48} className="text-[#ff4d00] mb-6" />
                <h3 className="text-3xl font-bold text-white mb-4">Performance Marketing</h3>
                <p className="text-zinc-400 leading-relaxed mb-6">
                  Stop burning money on bad ads. We deploy highly targeted, mathematically sound ad campaigns across Meta and Google to acquire customers profitably.
                </p>
                <ul className="space-y-2 mb-8 text-zinc-500">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#ff4d00] rounded-full"></div> Paid Social & Search Ads</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#ff4d00] rounded-full"></div> Retargeting Funnels</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#ff4d00] rounded-full"></div> A/B Creative Testing</li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="border border-white/10 p-10 bg-[#050505] hover:border-[#ff4d00]/50 transition-colors h-full group">
                <LineChart size={48} className="text-[#ff4d00] mb-6" />
                <h3 className="text-3xl font-bold text-white mb-4">Conversion Rate Optimization</h3>
                <p className="text-zinc-400 leading-relaxed mb-6">
                  Traffic is useless if it doesn't convert. We audit and rebuild digital touchpoints (landing pages, checkout flows) to maximize conversion percentages.
                </p>
                <ul className="space-y-2 mb-8 text-zinc-500">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#ff4d00] rounded-full"></div> Landing Page Architecture</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#ff4d00] rounded-full"></div> Copywriting & Psychology</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#ff4d00] rounded-full"></div> User Journey Mapping</li>
                </ul>
              </div>
            </Reveal>

          </div>

          <div className="sr-only">
            <h3>Detailed Service Descriptions</h3>
            
            <div>
              <h4>SOCIAL MEDIA MARKETING & CONTENT CREATION</h4>
              <p>Description: Strategic social media management designed to grow your audience, build community, and generate qualified leads. We create content that resonates, engages, and converts.</p>
              <p>What We Do: Develop comprehensive social media strategy, Plan and create professional content, Manage daily engagement, Run paid social campaigns, Analyze performance.</p>
              <p>Investment: Starter: ₹30,000/month. Standard: ₹50,000/month. Premium: ₹80,000+/month.</p>
              <p>Results: 200-400% engagement increase, 50-100+ qualified leads per month.</p>
              <p>Keywords: Social media marketing, Instagram marketing, Facebook marketing, LinkedIn marketing, content creation, social media management, Navi Mumbai.</p>
            </div>

            <div>
              <h4>LOCAL SEO & GOOGLE BUSINESS PROFILE</h4>
              <p>Description: Dominate your local market with top 3 rankings for geo-specific keywords.</p>
              <p>What We Do: local SEO audit, Google Business Profile optimization, Local citation building, On-page SEO optimization, Local link building.</p>
              <p>Investment: Starter: ₹25,000/month. Standard: ₹40,000/month. Premium: ₹60,000+/month.</p>
              <p>Keywords: Local SEO, Google Business Profile, local ranking, local keywords, Navi Mumbai SEO, local business listings.</p>
            </div>

            <div>
              <h4>PERFORMANCE MARKETING & PAID ADVERTISING</h4>
              <p>Description: High-ROI paid campaigns across Meta (Instagram, Facebook), Google, LinkedIn, and other platforms. We optimize every rupee spent to maximize return on ad spend (ROAS).</p>
              <p>Keywords: Paid advertising, Google Ads, Facebook ads, performance marketing, ad management, paid social, digital advertising.</p>
            </div>

            <div>
              <h4>CONTENT CREATION & STRATEGY</h4>
              <p>Keywords: Content creation, blog writing, content strategy, copywriting, SEO content, content marketing.</p>
            </div>

            <div>
              <h4>WEBSITE DEVELOPMENT & OPTIMIZATION</h4>
              <p>Keywords: Website design, website development, web development, website builder, SEO website, responsive design.</p>
            </div>

            <div>
              <h4>OUR DATA-DRIVEN METHODOLOGY</h4>
              <p>Phase 1: AUDIT & DISCOVERY (Week 1-2). Phase 2: FOUNDATION & SETUP (Week 2-4). Phase 3: CONTENT & CAMPAIGNS (Month 1+). Phase 4: ANALYSIS & REPORTING (Ongoing). Phase 5: SCALING (Month 6+).</p>
            </div>

            <div>
              <h4>FREQUENTLY ASKED QUESTIONS</h4>
              <p>Q: How long before I see results? A: Social media: 4-8 weeks. Local SEO: 3-4 months. Paid ads: 2-4 weeks.</p>
              <p>Q: What if I only have a small budget? A: We work with businesses of all sizes. Starter packages start at ₹25,000/month.</p>
              <p>Keywords: Marketing FAQ, digital marketing questions, how to do social media marketing, local SEO questions, Navi Mumbai marketing.</p>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};
