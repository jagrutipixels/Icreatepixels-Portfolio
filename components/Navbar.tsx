import React, { useState, useEffect } from 'react';
import { ThemeToggle } from './ThemeToggle.tsx';

interface NavbarProps {
  isStudioMode: boolean;
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isStudioMode, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Works', href: '#portfolio' },
    { name: 'Identity', href: '#identity' },
    { name: 'Journey', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const logoUrl = "https://raw.githubusercontent.com/jagrutipixels/pixels/2a4100de1fb6b50a220f0ca500322b2a91316285/logo_white.png";

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ease-in-out ${
        isScrolled || isMobileMenuOpen 
          ? `${isStudioMode ? 'bg-white/95 border-zinc-200 shadow-sm' : 'bg-[#050505]/95 border-white/5 shadow-2xl'} backdrop-blur-xl py-3 md:py-4 border-b` 
          : 'bg-transparent py-10 md:py-14'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Hero-to-Compact Logo Container */}
        <a 
          href="#home" 
          className="relative z-[210] block group" 
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {/* Subtle Glow Effect behind logo in Cinema Mode */}
          {!isStudioMode && (
            <div className={`absolute inset-0 bg-white/10 blur-2xl rounded-full transition-all duration-1000 ${isScrolled ? 'opacity-0 scale-50' : 'opacity-40 scale-125'}`}></div>
          )}
          
          <img 
            src={logoUrl} 
            alt="Abhishek" 
            className={`w-auto object-contain logo-invert transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] transform will-change-transform ${
              isScrolled 
                ? 'h-8 sm:h-10 md:h-12 translate-y-0' 
                : 'h-16 sm:h-24 md:h-32 -translate-y-2'
            } group-hover:scale-[1.03] active:scale-95`}
          />
        </a>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
          <div className="flex space-x-8 lg:space-x-10 text-[10px] uppercase tracking-[0.3em] font-black text-zinc-500">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`transition-colors duration-300 relative group py-2 ${isStudioMode ? 'hover:text-black' : 'hover:text-white'}`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-[1.5px] transition-all duration-500 group-hover:w-full ${isStudioMode ? 'bg-black' : 'bg-white'}`}></span>
              </a>
            ))}
          </div>
          
          <div className="w-[1px] h-6 bg-zinc-800/20 mx-4"></div>
          
          <ThemeToggle isStudioMode={isStudioMode} onToggle={toggleTheme} />
        </div>

        {/* Mobile Trigger & Theme Toggle */}
        <div className="flex items-center gap-6 md:hidden relative z-[210]">
          <ThemeToggle isStudioMode={isStudioMode} onToggle={toggleTheme} />
          
          <button 
            className="p-2 flex flex-col items-end gap-1.5 focus:outline-none touch-target"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span className={`h-[2px] transition-all duration-300 origin-center ${isMobileMenuOpen ? 'w-8 rotate-45 translate-y-[8px]' : 'w-8'} ${isStudioMode ? 'bg-black' : 'bg-white'}`}></span>
            <span className={`h-[2px] transition-all duration-300 ${isMobileMenuOpen ? 'w-0 opacity-0 scale-x-0' : 'w-6'} ${isStudioMode ? 'bg-black' : 'bg-white'}`}></span>
            <span className={`h-[2px] transition-all duration-300 origin-center ${isMobileMenuOpen ? 'w-8 -rotate-45 -translate-y-[8px]' : 'w-4'} ${isStudioMode ? 'bg-black' : 'bg-white'}`}></span>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 z-[200] transition-all duration-700 ease-in-out md:hidden flex flex-col items-center justify-center h-screen w-screen ${
            isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
          } ${isStudioMode ? 'bg-[#f5f5f7]' : 'bg-[#050505]'}`}
        >
          <div className="flex flex-col items-center space-y-10 sm:space-y-12 w-full px-12">
            {navLinks.map((link, i) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-3xl sm:text-5xl font-serif hover:text-zinc-500 transition-all duration-500 transform py-2 ${
                  isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                } ${isStudioMode ? 'text-black' : 'text-white'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <div className={`mt-24 pt-12 border-t w-full max-w-[280px] text-center transition-all duration-1000 delay-500 ${isMobileMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} ${isStudioMode ? 'border-zinc-200' : 'border-zinc-900'}`}>
            <p className="text-zinc-500 text-[9px] uppercase tracking-[0.6em] font-black">Mumbai • Worldwide</p>
          </div>
        </div>
      </div>
    </nav>
  );
};