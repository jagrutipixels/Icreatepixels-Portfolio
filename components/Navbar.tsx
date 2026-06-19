import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle.tsx';

interface NavbarProps {
  isLightMode: boolean;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isLightMode, onToggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      setIsHidden(false);
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Production', href: '/production-house-navi-mumbai' },
    { name: 'Marketing & SEO', href: '/social-media-marketing-navi-mumbai' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About', href: '/about-us' },
    { name: 'Blog', href: '/blog' }
  ];

  const logoUrl = "https://raw.githubusercontent.com/jagrutipixels/pixels/2a4100de1fb6b50a220f0ca500322b2a91316285/logo_white.png";

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
        isHidden && !isMobileMenuOpen ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
      } ${
        isScrolled || isMobileMenuOpen 
          ? `bg-[#050505]/95 backdrop-blur-xl py-3 md:py-4 ${isMobileMenuOpen ? 'border-b-0' : 'border-b border-white/10 shadow-2xl'}` 
          : 'bg-transparent py-3 md:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        <Link 
          to="/" 
          className="relative z-[210] block group" 
        >
          <div className={`absolute inset-0 bg-white/10 blur-2xl rounded-full transition-all duration-1000 ${isScrolled || isMobileMenuOpen ? 'opacity-0 scale-50' : 'opacity-40 scale-125'}`}></div>
          
          <img 
            src={logoUrl} 
            alt="icreatepixels Logo" 
            className={`w-auto object-contain transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] h-10 sm:h-12 md:h-16 group-hover:scale-[1.03] active:scale-95`}
          />
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <div className="flex space-x-6 xl:space-x-8 text-xs font-semibold text-zinc-400">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link 
                  key={link.name} 
                  to={link.href} 
                  className={`transition-colors duration-300 relative py-2 uppercase tracking-widest ${isActive ? 'text-[#ff4d00]' : 'hover:text-white'}`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#ff4d00]"></span>
                  )}
                </Link>
              );
            })}
          </div>
          
          <div className="w-[1px] h-6 bg-white/20 mx-4"></div>
          
          <ThemeToggle isStudioMode={isLightMode} onToggle={onToggleTheme} />

          <Link 
            to="/contact"
            className="bg-[#ff4d00] text-white px-5 py-2.5 rounded-sm font-bold text-sm tracking-wide hover:bg-[#ff4d00]/90 transition-all hover:scale-105 active:scale-95"
          >
            GET A QUOTE
          </Link>
        </div>

        {/* Mobile Trigger */}
        <div className="flex items-center gap-6 md:hidden relative z-[210]">
          <ThemeToggle isStudioMode={isLightMode} onToggle={onToggleTheme} />
          <button 
            className="p-2 flex flex-col items-end gap-1.5 focus:outline-none touch-target"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span className={`h-[2px] bg-white transition-all duration-300 origin-center ${isMobileMenuOpen ? 'w-8 rotate-45 translate-y-[8px]' : 'w-8'}`}></span>
            <span className={`h-[2px] bg-white transition-all duration-300 ${isMobileMenuOpen ? 'w-0 opacity-0 scale-x-0' : 'w-6'}`}></span>
            <span className={`h-[2px] bg-white transition-all duration-300 origin-center ${isMobileMenuOpen ? 'w-8 -rotate-45 -translate-y-[8px]' : 'w-4'}`}></span>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 z-[200] transition-all duration-700 ease-in-out md:hidden flex flex-col items-center justify-center ${
            isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
          } bg-[#050505]`}
        >
          <div className="flex flex-col items-center space-y-8 w-full px-12">
            {navLinks.map((link, i) => (
              <Link 
                key={link.name} 
                to={link.href} 
                className={`text-3xl font-serif text-white hover:text-[#ff4d00] transition-all duration-500 transform py-2 ${
                  isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {link.name}
              </Link>
            ))}
            
            <Link 
              to="/contact"
              className={`mt-4 bg-[#ff4d00] text-white px-8 py-4 rounded-sm font-bold text-lg tracking-wide transition-all duration-500 transform ${
                isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${navLinks.length * 100}ms` }}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
