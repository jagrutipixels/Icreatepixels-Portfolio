import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout.tsx';
import { Home } from './pages/Home.tsx';
import { ProductionService } from './pages/ProductionService.tsx';
import { MarketingService } from './pages/MarketingService.tsx';
import { PortfolioPage } from './pages/PortfolioPage.tsx';
import { AboutUs } from './pages/AboutUs.tsx';
import { Blog } from './pages/Blog.tsx';
import { Contact } from './pages/Contact.tsx';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="production-house-navi-mumbai" element={<ProductionService />} />
        <Route path="social-media-marketing-navi-mumbai" element={<MarketingService />} />
        <Route path="portfolio" element={<PortfolioPage />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default App;