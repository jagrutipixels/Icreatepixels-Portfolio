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
          ? 'bg-black/90 backdrop-blur-xl py-5 border-b border-white/5 shadow-2xl' 
          : 'bg-transparent py-8 md:py-12'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo - Increased size from h-8/10/12 to h-12/16/20 */}
        <a 
          href="#home" 
          className="relative z-[110] block transition-transform duration-300 hover:scale-105 active:scale-95" 
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <img 
            src={logoUrl} 
            alt="Abhishek" 
            className="h-12 sm:h-16 md:h-20 w-auto object-contain"
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
          className="md:hidden relative z-[110] p-2 flex flex-col gap-1.5 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <span className={`w-6 h-[2px] bg-white transition-all duration-300 origin-center ${isMobileMenuOpen ? 'rotate-45 translate-y-[8px]' : ''}`}></span>
          <span className={`w-6 h-[2px] bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 scale-x-0' : 'opacity-100'}`}></span>
          <span className={`w-6 h-[2px] bg-white transition-all duration-300 origin-center ${isMobileMenuOpen ? '-rotate-45 -translate-y-[8px]' : ''}`}></span>
        </button>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 bg-black z-[105] transition-all duration-700 ease-in-out md:hidden flex flex-col items-center justify-center ${
            isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
          }`}
        >
          <div className="flex flex-col items-center space-y-6 sm:space-y-8 w-full px-12">
            {navLinks.map((link, i) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-2xl sm:text-4xl font-serif text-white hover:text-zinc-500 transition-colors duration-500 transform ${
                  isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <div className={`mt-16 pt-8 border-t border-zinc-900 w-full max-w-[240px] text-center transition-all duration-1000 delay-500 ${isMobileMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <p className="text-zinc-700 text-[8px] uppercase tracking-[0.6em] font-black">Mumbai • Worldwide</p>
          </div>
        </div>
      </div>
    </nav>
  );
};