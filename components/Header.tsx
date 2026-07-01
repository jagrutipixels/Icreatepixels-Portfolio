import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Prevent scrolling when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  useEffect(() => {
    // Close menu when route changes
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Production', href: '/production-house-navi-mumbai' },
    { name: 'Marketing', href: '/social-media-marketing-navi-mumbai' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About', href: '/about-us' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];

  const socialLinks = [
    { name: 'Instagram', href: 'https://www.instagram.com/icreatepixels/' },
    { name: 'LinkedIn', href: 'https://in.linkedin.com/in/icreatepixels' },
    { name: 'YouTube', href: 'https://www.youtube.com/@icreatepixels' }
  ];

  const menuVariants = {
    closed: { y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
    open: { y: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }
  };

  const linkVariants = {
    closed: { y: 100, opacity: 0 },
    open: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: 0.2 + i * 0.1, duration: 0.6, ease: [0.76, 0, 0.24, 1] }
    })
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[9901] transition-all duration-500 flex justify-between items-center px-6 py-4 lg:px-12 ${
          isScrolled ? 'bg-[#050505]/70 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
        }`}
      >
        <Link to="/" className="text-xl font-bold tracking-tighter text-white uppercase" data-cursor="HOME">
          icreatepixels
        </Link>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-md px-5 py-2.5 rounded-full text-white text-xs font-semibold tracking-widest uppercase cursor-pointer"
          data-cursor="CLICK"
        >
          <span className="relative flex h-2 w-2">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${isMenuOpen ? 'bg-[#ff4d00]' : 'bg-white'} opacity-75`}></span>
            <span className={`relative inline-flex rounded-full h-2 w-2 ${isMenuOpen ? 'bg-[#ff4d00]' : 'bg-white'}`}></span>
          </span>
          {isMenuOpen ? 'CLOSE' : 'MENU'}
        </button>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-[9900] bg-[#050505] flex flex-col justify-end pt-32 pb-16 px-6 lg:px-12 overflow-hidden"
          >
            <div className="flex flex-col gap-2 h-full justify-center">
              {navLinks.map((link, i) => (
                <div key={link.name} className="overflow-hidden">
                  <motion.div custom={i} variants={linkVariants}>
                    <Link
                      to={link.href}
                      className="text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter text-white hover:text-[#ff4d00] transition-colors leading-[1.1] block w-max"
                      data-cursor="GO"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                </div>
              ))}
            </div>

            <div className="mt-auto grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-white/10">
              <div className="flex flex-col gap-4">
                <span className="text-zinc-500 text-xs tracking-widest uppercase">Socials</span>
                <div className="flex flex-col gap-2">
                  {socialLinks.map((social, i) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium hover:text-[#ff4d00] transition-colors"
                      data-cursor="OPEN"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 + i * 0.1 }}
                    >
                      {social.name}
                    </motion.a>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-zinc-500 text-xs tracking-widest uppercase">Say Hello</span>
                <a href="mailto:abhishek@icreatepixels.in" className="text-sm font-medium hover:text-[#ff4d00] transition-colors" data-cursor="MAIL">
                  abhishek@icreatepixels.in
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
