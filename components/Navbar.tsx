
import React, { useState, useEffect } from 'react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Works', href: '#portfolio' },
    { name: 'Journey', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#home" className="text-xl font-serif font-bold tracking-tighter uppercase group">
          <span className="opacity-70 group-hover:opacity-100 transition-opacity italic mr-1 text-sm">A.</span>
          GUJAR
        </a>
        
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

        <div className="md:hidden">
            {/* Mobile simplified trigger */}
            <div className="w-6 h-[1px] bg-white mb-1.5"></div>
            <div className="w-6 h-[1px] bg-white"></div>
        </div>
      </div>
    </nav>
  );
};
