import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout.tsx';
import { Home } from './pages/Home.tsx';
import { ProductionService } from './pages/ProductionService.tsx';
import { MarketingService } from './pages/MarketingService.tsx';
import { PortfolioPage } from './pages/PortfolioPage.tsx';
import { AboutUs } from './pages/AboutUs.tsx';
import { Blog } from './pages/Blog.tsx';
import { BlogPost } from './pages/BlogPost.tsx';
import { Contact } from './pages/Contact.tsx';

const App: React.FC = () => {
  // Phase 3: Scroll-Triggered Polish (Makora Studio style)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

    // Initial check
    document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));

    // Observe future DOM additions
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
          if (node instanceof HTMLElement) {
            if (node.classList.contains('reveal-on-scroll')) {
              observer.observe(node);
            }
            node.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
          }
        });
      });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="production-house-navi-mumbai" element={<ProductionService />} />
        <Route path="social-media-marketing-navi-mumbai" element={<MarketingService />} />
        <Route path="portfolio" element={<PortfolioPage />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:slug" element={<BlogPost />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default App;