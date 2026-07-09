import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import { Layout } from './components/Layout.tsx';
import { Home } from './pages/Home.tsx';
import { ProductionService } from './pages/ProductionService.tsx';
import { MarketingService } from './pages/MarketingService.tsx';
import { PortfolioPage } from './pages/PortfolioPage.tsx';
import { AboutUs } from './pages/AboutUs.tsx';
import { Blog } from './pages/Blog.tsx';
import { BlogPost } from './pages/BlogPost.tsx';
import { Contact } from './pages/Contact.tsx';

const ScrollToTopHelper = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 200);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

const App: React.FC = () => {
  useEffect(() => {
    // Basic Intersection Observer for some legacy reveals if needed
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));

    // Lenis Smooth Scroll Setup
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      observer.disconnect();
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <ScrollToTopHelper />
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
    </>
  );
};

export default App;