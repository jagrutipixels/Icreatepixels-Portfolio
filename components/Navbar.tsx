import React, { useState, useEffect } from 'react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
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
    { name: 'Works', href: '#portfolio' },
    { name: 'About', href: '#about' },
    { name: 'Identity', href: '#identity' },
    { name: 'Journey', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const logoUrl = "https://raw.githubusercontent.com/jagrutipixels/pixels/2a4100de1fb6b50a220f0ca500322b2a91316285/logo_white.png";

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${isScrolled || isMobileMenuOpen ? 'bg-black/95 backdrop-blur-xl py-4 shadow-2xl' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a 
          href="#home" 
          className="block transition-transform duration-300 hover:scale-105 active:scale-95 z-[60]" 
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <img 
            src={logoUrl} 
            alt="Abhishek" 
            className="h-10 sm:h-12 w-auto object-contain"
          />
        </a>
        
        {/* Desktop Links */}
        <div className="hidden md:flex space-x-10 text-[10px] uppercase tracking-[0.3em] font-black text-zinc-500">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="hover:text-white transition-colors duration-300 relative group py-2"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-white transition-all duration-500 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Trigger */}
        <button 
          className="md:hidden z-[60] p-3 -mr-3"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <div className="relative w-6 h-5">
            <span className={`absolute left-0 w-6 h-[2px] bg-white transition-all duration-300 ${isMobileMenuOpen ? 'top-2 rotate-45' : 'top-0'}`}></span>
            <span className={`absolute left-0 w-4 h-[2px] bg-white transition-all duration-300 top-2 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`absolute left-0 w-6 h-[2px] bg-white transition-all duration-300 ${isMobileMenuOpen ? 'top-2 -rotate-45' : 'top-4'}`}></span>
          </div>
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-black transition-all duration-700 md:hidden flex flex-col items-center justify-center p-12 ${isMobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
          <div className="flex flex-col items-center space-y-8 w-full">
            {navLinks.map((link, i) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-4xl font-serif text-white hover:text-zinc-500 transition-colors duration-500 transform ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <div className="mt-20 pt-12 border-t border-zinc-900 w-full max-w-[200px] text-center">
            <p className="text-zinc-700 text-[9px] uppercase tracking-[0.5em] font-black">Mumbai • Worldwide</p>
          </div>
        </div>
      </div>
    </nav>
  );
};