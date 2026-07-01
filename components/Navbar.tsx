import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle.tsx';
import { motion, AnimatePresence } from 'motion/react';
import { Twitter, Linkedin, Instagram, Dribbble, ArrowRight, X, Menu } from 'lucide-react';

interface NavbarProps {
  isLightMode: boolean;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isLightMode, onToggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (Math.abs(currentScrollY - lastScrollY.current) < 5) return;

      setIsScrolled(currentScrollY > 50);

      // Header is locked (always visible)
      setIsHidden(false);
      
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'PRODUCTION', href: '/production-house-navi-mumbai' },
    { name: 'MARKETING', href: '/social-media-marketing-navi-mumbai' },
    { name: 'PORTFOLIO', href: '/portfolio' },
    { name: 'ABOUT', href: '/about-us' },
    { name: 'BLOG', href: '/blog' },
    { name: 'CONTACT', href: '/contact' }
  ];

  const logoUrl = "https://raw.githubusercontent.com/jagrutipixels/pixels/2a4100de1fb6b50a220f0ca500322b2a91316285/logo_white.png";

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[100] transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] pt-4 md:pt-6 pb-4 px-4 md:px-12 pointer-events-none ${
        isHidden && !isMenuOpen ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
      }`}
    >
      <div className="max-w-[1600px] mx-auto flex justify-between items-start pointer-events-auto">
        
        <Link 
          to="/" 
          className="relative z-[210] block group mt-2" 
        >
          <img 
            src={logoUrl} 
            alt="icreatepixels Logo" 
            className={`w-auto object-contain transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] h-10 sm:h-12 md:h-[50px] group-hover:scale-[1.03] active:scale-95`}
          />
        </Link>
        
        <div className="relative z-[210] flex justify-end">
          {/* Dropdown Menu Overlay */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="absolute top-14 right-0 w-[300px] sm:w-[340px] bg-[#f4f4f4] shadow-[0_15px_60px_-15px_rgba(0,0,0,0.5)] rounded-3xl origin-top-right overflow-hidden flex flex-col p-6 sm:p-8"
              >
                <div className="flex flex-col gap-5 mt-2">
                  {navLinks.map((link) => {
                    const isActive = location.pathname === link.href;
                    return (
                      <Link 
                        key={link.name} 
                        to={link.href} 
                        onClick={() => setIsMenuOpen(false)}
                        className={`text-2xl sm:text-[28px] leading-none font-black tracking-tighter transition-colors block ${isActive ? 'text-[#ff4d00]' : 'text-[#111] hover:text-[#ff4d00]'}`}
                        style={{ fontFamily: 'Impact, "Arial Black", sans-serif', textTransform: 'uppercase' }}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </div>

                <div className="mt-8 flex flex-col gap-4">
                  <Link 
                    to="/contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="bg-[#18181b] text-white hover:bg-black py-4 px-6 rounded-full font-bold text-sm tracking-widest uppercase flex items-center justify-between transition-colors w-full"
                  >
                    BOOK A CALL
                    <ArrowRight size={18} className="text-zinc-400 group-hover:text-white transition-colors" />
                  </Link>

                  <div className="flex items-center gap-2 w-full mt-2">
                     <a href="#" className="flex-1 bg-[#e4e4e4] hover:bg-[#d4d4d4] rounded-xl py-3 px-2 flex justify-center items-center text-black/70 hover:text-black transition-colors" aria-label="X">
                      <Twitter size={16} />
                     </a>
                     <a href="#" className="flex-1 bg-[#e4e4e4] hover:bg-[#d4d4d4] rounded-xl py-3 px-2 flex justify-center items-center text-black/70 hover:text-black transition-colors" aria-label="LinkedIn">
                      <Linkedin size={16} />
                     </a>
                     <a href="#" className="flex-1 bg-[#e4e4e4] hover:bg-[#d4d4d4] rounded-xl py-3 px-2 flex justify-center items-center text-black/70 hover:text-black transition-colors" aria-label="Instagram">
                      <Instagram size={16} />
                     </a>
                     <a href="#" className="flex-1 bg-[#e4e4e4] hover:bg-[#d4d4d4] rounded-xl py-3 px-2 flex justify-center items-center text-black/70 hover:text-black transition-colors" aria-label="Dribbble">
                      <Dribbble size={16} />
                     </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`flex items-center gap-3 rounded-full font-bold text-[13px] tracking-[0.2em] transition-all px-5 py-2.5 border relative z-[210] ${isMenuOpen ? 'border-transparent bg-[#18181b] text-white hover:bg-black shadow-lg' : 'border-transparent bg-[#18181b] text-white hover:bg-black shadow-lg'}`}
          >
            {isMenuOpen ? (
              <>
                <div className="w-2.5 h-2.5 flex items-center justify-center rounded-full bg-white text-black overflow-hidden relative">
                  <div className="absolute inset-0 bg-white shadow-[0_0_8px_rgba(255,255,255,0.5)]"></div>
                  <div className="w-1.5 h-full bg-black absolute left-0" style={{ borderRadius: '10px 0 0 10px' }}></div>
                </div>
                MENU
                <X size={16} strokeWidth={2} className="ml-1 text-zinc-400" />
              </>
            ) : (
              <>
                <div className="w-2.5 h-2.5 flex items-center justify-center rounded-full bg-white text-black overflow-hidden relative">
                  <div className="absolute inset-0 bg-white shadow-[0_0_8px_rgba(255,255,255,0.5)]"></div>
                  <div className="w-1.5 h-full bg-black absolute left-0" style={{ borderRadius: '10px 0 0 10px' }}></div>
                </div>
                MENU
              </>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};
