import React, { useState, useEffect } from 'react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ease-in-out ${
        isScrolled || isMobileMenuOpen 
          ? 'bg-[#050505]/95 backdrop-blur-xl py-4 md:py-5 border-b border-white/5 shadow-2xl' 
          : 'bg-transparent py-8 md:py-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#home" 
          className="relative z-[210] block transition-transform duration-300 hover:scale-105 active:scale-95" 
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <img 
            src={logoUrl} 
            alt="Abhishek" 
            className="h-10 sm:h-14 md:h-20 w-auto object-contain"
          />
        </a>
        
        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 lg:space-x-10 text-[10px] uppercase tracking-[0.3em] font-black text-zinc-400">
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
          className="md:hidden relative z-[210] p-2 flex flex-col items-end gap-1.5 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <span className={`h-[2px] bg-white transition-all duration-300 origin-center ${isMobileMenuOpen ? 'w-8 rotate-45 translate-y-[8px]' : 'w-8'}`}></span>
          <span className={`h-[2px] bg-white transition-all duration-300 ${isMobileMenuOpen ? 'w-0 opacity-0 scale-x-0' : 'w-6'}`}></span>
          <span className={`h-[2px] bg-white transition-all duration-300 origin-center ${isMobileMenuOpen ? 'w-8 -rotate-45 -translate-y-[8px]' : 'w-4'}`}></span>
        </button>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 bg-[#050505] z-[200] transition-all duration-700 ease-in-out md:hidden flex flex-col items-center justify-center h-screen w-screen ${
            isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
          }`}
        >
          <div className="flex flex-col items-center space-y-10 sm:space-y-12 w-full px-12">
            {navLinks.map((link, i) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-3xl sm:text-5xl font-serif text-white hover:text-zinc-500 transition-all duration-500 transform py-2 ${
                  isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <div className={`mt-24 pt-12 border-t border-zinc-900 w-full max-w-[280px] text-center transition-all duration-1000 delay-500 ${isMobileMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <p className="text-zinc-700 text-[9px] uppercase tracking-[0.6em] font-black">Mumbai • Worldwide</p>
          </div>
        </div>
      </div>
    </nav>
  );
};