import React, { useState, useEffect } from 'react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Works', href: '#portfolio' },
    { name: 'Identity', href: '#identity' },
    { name: 'Journey', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  // Using the raw GitHub URL for direct image embedding
  const logoUrl = "https://raw.githubusercontent.com/jagrutipixels/pixels/2a4100de1fb6b50a220f0ca500322b2a91316285/logo_white.png";

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled || isMobileMenuOpen ? 'bg-black/95 backdrop-blur-md py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a 
          href="#home" 
          className="block transition-transform duration-300 hover:scale-105 active:scale-95 z-50" 
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <img 
            src={logoUrl} 
            alt="Abhishek Sanjay Gujar" 
            className="h-10 md:h-16 w-auto object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
          />
        </a>
        
        {/* Desktop Links */}
        <div className="hidden md:flex space-x-10 text-xs uppercase tracking-widest font-semibold text-zinc-400">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="hover:text-white transition-colors duration-300 relative group"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Trigger */}
        <button 
          className="md:hidden z-50 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <div className={`w-6 h-[1px] bg-white mb-1.5 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-6 h-[1px] bg-white mb-1.5 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-[1px] bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></div>
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-black transition-all duration-500 md:hidden flex flex-col items-center justify-center space-y-8 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-2xl font-serif text-white uppercase tracking-widest"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-8 border-t border-zinc-900 w-2/3 text-center">
            <p className="text-zinc-600 text-[10px] uppercase tracking-[0.3em]">Mumbai • Worldwide</p>
          </div>
        </div>
      </div>
    </nav>
  );
};