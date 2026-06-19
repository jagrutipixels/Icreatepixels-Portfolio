import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal.tsx';
import { SEO } from '../components/SEO.tsx';
import { ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '../blogs.ts';

export const Blog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Production", "Marketing", "SEO"];

  const filteredArticles = activeCategory === "All" 
    ? BLOG_POSTS 
    : BLOG_POSTS.filter(a => a.category === activeCategory);

  return (
    <>
      <SEO 
        title="Intelligence Hub | Marketing & Production Insights | icreatepixels"
        description="Read our latest insights on Video Production, Local SEO in Navi Mumbai, and Performance Marketing strategies."
        keywords="Blog, Marketing Insights, Production Setup, SEO Navi Mumbai"
      />
      
      <div className="pt-32 pb-16 px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h1 className="text-4xl md:text-6xl font-serif font-black mb-6 text-white tracking-tight">
              Intelligence <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4d00] to-orange-400">Hub.</span>
            </h1>
            
            <div className="sr-only">
              <h2>Actionable insights on video production, local SEO, social media marketing, and brand strategy for growing businesses.</h2>
              <p>Explore our library of technical breakdowns, behind-the-scenes production guides, and data-driven marketing strategies tailored for businesses in Navi Mumbai and beyond.</p>
              <h3>Blog Categories:</h3>
              <ul>
                 <li>Production & Video: Behind-the-scenes breakdowns, equipment reviews, pre-production planning, and post-production techniques.</li>
                 <li>SEO & Local Search: Actionable guides on local map packs, technical audits, content optimization, and link building.</li>
                 <li>Marketing & Growth: Paid advertising strategies, CRO (conversion rate optimization), social media algorithms, and lead gen.</li>
                 <li>Brand & Design: Logo creation, brand architecture, typography, and visual identity systems.</li>
              </ul>
              <p>Keywords: Marketing blog, video production blog, SEO tips, local SEO Navi Mumbai, marketing strategy, production techniques.</p>
            </div>

            <p className="text-zinc-400 max-w-2xl text-lg leading-relaxed">
              No fluff. Just highly technical breakdowns, production blueprints, and growth strategies from the trenches. 
            </p>
          </Reveal>
        </div>
      </div>

      <div className="py-12 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          
          {/* Sticky Filter Bar */}
          <div className="sticky top-20 z-40 bg-[#0a0a0a]/90 backdrop-blur-md py-4 mb-12 border-b border-white/5 overflow-x-auto">
            <div className="flex gap-4 min-w-max">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-full text-sm font-bold tracking-wider transition-all ${
                    activeCategory === cat 
                      ? 'bg-[#ff4d00] text-white' 
                      : 'bg-[#050505] text-zinc-500 hover:text-white border border-white/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, idx) => (
              <Reveal key={article.id} delay={idx * 50}>
                <Link to={`/blog/${article.slug}`} className="block border border-white/10 bg-[#050505] p-8 h-full flex flex-col justify-between group hover:border-[#ff4d00]/50 transition-colors">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-[#ff4d00] text-[10px] font-black uppercase tracking-widest bg-[#ff4d00]/10 px-3 py-1 rounded-sm">
                        {article.category}
                      </span>
                      <span className="text-zinc-600 text-xs font-medium">{article.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 leading-tight group-hover:text-[#ff4d00] transition-colors">
                      {article.title}
                    </h3>
                  </div>
                  <div className="pt-8 mt-auto border-t border-white/5 flex items-center justify-between text-zinc-500 group-hover:text-white transition-colors">
                    <span className="text-xs">{article.date}</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

        </div>
      </div>
    </>
  );
};
