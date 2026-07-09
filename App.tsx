import React, { useEffect, Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import { Layout } from './components/Layout.tsx';

// Lazy load pages
const Home = lazy(() => import('./pages/Home.tsx').then(module => ({ default: module.Home })));
const ProductionService = lazy(() => import('./pages/ProductionService.tsx').then(module => ({ default: module.ProductionService })));
const MarketingService = lazy(() => import('./pages/MarketingService.tsx').then(module => ({ default: module.MarketingService })));
const PortfolioPage = lazy(() => import('./pages/PortfolioPage.tsx').then(module => ({ default: module.PortfolioPage })));
const AboutUs = lazy(() => import('./pages/AboutUs.tsx').then(module => ({ default: module.AboutUs })));
const Blog = lazy(() => import('./pages/Blog.tsx').then(module => ({ default: module.Blog })));
const BlogPost = lazy(() => import('./pages/BlogPost.tsx').then(module => ({ default: module.BlogPost })));
const Contact = lazy(() => import('./pages/Contact.tsx').then(module => ({ default: module.Contact })));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail.tsx').then(module => ({ default: module.ServiceDetail })));

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
      <Suspense fallback={<div className="min-h-screen bg-[#050505] flex items-center justify-center"><div className="w-8 h-8 border-2 border-[#ff4d00] border-t-transparent rounded-full animate-spin"></div></div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="production-house-navi-mumbai" element={<ProductionService />} />
            <Route path="production-house-navi-mumbai/:slug" element={<ServiceDetail />} />
            <Route path="social-media-marketing-navi-mumbai" element={<MarketingService />} />
            <Route path="social-media-marketing-navi-mumbai/:slug" element={<ServiceDetail />} />
            <Route path="portfolio" element={<PortfolioPage />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:slug" element={<BlogPost />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;