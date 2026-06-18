import React, { useEffect, useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Navbar } from './Navbar.tsx';
import { StickyCTA } from './StickyCTA.tsx';
import { ScrollToTop } from './ScrollToTop.tsx';

const CinematicAtmosphere: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-[var(--flare-opacity,0.15)] transition-opacity duration-1000">
      <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-orange-600/5 blur-[150px] rounded-full animate-drift"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#ff4d00]/5 blur-[150px] rounded-full animate-drift" style={{ animationDelay: '-5s' }}></div>
    </div>
  );
};

export const Layout: React.FC = () => {
  const { pathname } = useLocation();
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    if (isLightMode) {
      document.documentElement.classList.add('light-mode');
    } else {
      document.documentElement.classList.remove('light-mode');
    }
  }, [isLightMode]);

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col font-sans">
      <ScrollToTop />
      <CinematicAtmosphere />
      
      <div className="relative z-10 flex flex-col flex-1">
        <Navbar isLightMode={isLightMode} onToggleTheme={() => setIsLightMode(!isLightMode)} />
        
        <main className="flex-1">
          <Outlet />
        </main>
        
        <footer className="bg-[#0a0a0a] border-t border-white/10 pt-20 pb-10 px-6 mt-20 relative z-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-1">
              <Link to="/" className="text-2xl font-serif font-bold tracking-tight text-white mb-4 block">
                iCreate<span className="text-[#ff4d00]">Pixels</span>
              </Link>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Premium Production House and Growth Agency based in Navi Mumbai. We build cinematic brands that dominate.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Services</h4>
              <ul className="space-y-3 text-zinc-500 text-sm">
                <li><Link to="/production-house-navi-mumbai" className="hover:text-[#ff4d00] transition-colors">Video Production</Link></li>
                <li><Link to="/production-house-navi-mumbai" className="hover:text-[#ff4d00] transition-colors">Photography</Link></li>
                <li><Link to="/social-media-marketing-navi-mumbai" className="hover:text-[#ff4d00] transition-colors">Social Media Marketing</Link></li>
                <li><Link to="/social-media-marketing-navi-mumbai" className="hover:text-[#ff4d00] transition-colors">Local SEO</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Company</h4>
              <ul className="space-y-3 text-zinc-500 text-sm">
                <li><Link to="/about-us" className="hover:text-[#ff4d00] transition-colors">Our Story</Link></li>
                <li><Link to="/portfolio" className="hover:text-[#ff4d00] transition-colors">Portfolio</Link></li>
                <li><Link to="/blog" className="hover:text-[#ff4d00] transition-colors">Intelligence Hub</Link></li>
                <li><Link to="/contact" className="hover:text-[#ff4d00] transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Footprint</h4>
              <p className="text-zinc-500 text-sm mb-2">Navi Mumbai, Maharashtra</p>
              <p className="text-zinc-600 text-xs leading-relaxed">
                Serving Vashi, Nerul, CBD Belapur, Kharghar, Panvel & Beyond.
              </p>
              <a href="mailto:abhishek@icreatepixels.in" className="text-[#ff4d00] font-bold text-sm block mt-4 hover:underline">
                abhishek@icreatepixels.in
              </a>
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-zinc-600 uppercase tracking-widest mb-4 md:mb-0">
              © {new Date().getFullYear()} iCreatePixels | Abhishek Sanjay Gujar
            </p>
            <div className="flex gap-4">
              {/* social links placeholders */}
              <a href="https://www.instagram.com/icreatepixels/" target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-[#ff4d00]">IG</a>
              <a href="https://in.linkedin.com/in/icreatepixels" target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-[#ff4d00]">LI</a>
              <a href="https://www.youtube.com/@icreatepixels" target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-[#ff4d00]">YT</a>
            </div>
          </div>
        </footer>
        
        <StickyCTA />
      </div>
    </div>
  );
};
