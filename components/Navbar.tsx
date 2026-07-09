import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  X,
  Menu,
  Sun,
  Moon,
} from "lucide-react";

const InstagramIcon = ({ size = 16 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

const LinkedinIcon = ({ size = 16 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const TwitterIcon = ({ size = 16 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
);

const DribbbleIcon = ({ size = 16 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path></svg>
);

export const Navbar: React.FC = () => {
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
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "PRODUCTION", href: "/production-house-navi-mumbai" },
    { name: "MARKETING", href: "/social-media-marketing-navi-mumbai" },
    { name: "PORTFOLIO", href: "/portfolio" },
    { name: "ABOUT", href: "/about-us" },
    { name: "BLOG", href: "/blog" },
    { name: "CONTACT", href: "/contact" },
  ];

  const logoUrl =
    "https://raw.githubusercontent.com/jagrutipixels/pixels/2a4100de1fb6b50a220f0ca500322b2a91316285/logo_white.png";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] pt-4 md:pt-6 pb-4 px-4 md:px-12 pointer-events-none ${
          isHidden && !isMenuOpen
            ? "-translate-y-full opacity-0"
            : "translate-y-0 opacity-100"
        } ${isScrolled ? "bg-[#050505]/80 backdrop-blur-md border-b border-white/5 pb-4 md:pt-4" : "bg-transparent"}`}
      >
        <div className="max-w-[1600px] mx-auto flex justify-between items-center pointer-events-auto">
          <Link
            to="/"
            className="relative z-[210] block group"
            onClick={() => setIsMenuOpen(false)}
          >
            <img
              src={logoUrl}
              alt="icreatepixels Logo"
              className={`w-auto object-contain transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] h-8 sm:h-10 md:h-[40px] group-hover:scale-[1.03] active:scale-95`}
            />
          </Link>

          {/* Desktop Inline Links */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-12 bg-black/50 backdrop-blur-md px-8 py-3.5 rounded-full border border-white/10 relative z-[210]">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-xs xl:text-sm font-bold tracking-widest uppercase transition-colors ${isActive ? "text-[#ff4d00]" : "text-white/80 hover:text-white"}`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="relative z-[210] flex items-center gap-4">
            {/* Desktop CTA Button */}
            <Link
              to="/contact"
              className="hidden lg:flex bg-white text-black py-4 px-8 rounded-full font-bold text-xs xl:text-sm tracking-widest uppercase items-center gap-3 hover:bg-black hover:text-white border border-transparent hover:border-white transition-colors"
            >
              BOOK A CALL
              <ArrowRight size={16} />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden flex items-center gap-3 rounded-full font-bold text-[13px] tracking-[0.2em] transition-all px-5 py-2.5 border ${isMenuOpen ? "border-transparent bg-white text-black" : "border-transparent bg-[#18181b] text-white hover:bg-black shadow-lg"}`}
            >
              {isMenuOpen ? (
                <>
                  CLOSE
                  <X size={16} strokeWidth={2} />
                </>
              ) : (
                <>
                  <div className="w-2 h-2 rounded-full bg-[#ff4d00] shadow-[0_0_8px_rgba(255,77,0,0.6)]"></div>
                  MENU
                </>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Full Screen Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 w-full h-[100dvh] bg-[#050505] z-[95] flex flex-col justify-between px-6 pt-24 pb-8 lg:hidden overflow-y-auto"
          >
            <div className="flex-1 flex flex-col justify-center gap-5 sm:gap-8 my-auto">
              {navLinks.map((link, idx) => {
                const isActive = location.pathname === link.href;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.05, duration: 0.4 }}
                  >
                    <Link
                      to={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`text-[2rem] sm:text-[3rem] md:text-[4rem] leading-none font-black tracking-tighter transition-colors block ${isActive ? "text-[#ff4d00]" : "text-white hover:text-[#ff4d00]"}`}
                      style={{
                        fontFamily: 'Impact, "Arial Black", sans-serif',
                        textTransform: "uppercase",
                      }}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-6 flex flex-col gap-6 border-t border-white/10 pt-6"
            >
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="bg-white text-black py-4 px-8 rounded-full font-bold text-sm tracking-widest uppercase flex items-center justify-center gap-4 hover:bg-black hover:text-white border border-transparent hover:border-white transition-colors w-full"
              >
                BOOK A CALL
                <ArrowRight size={18} />
              </Link>

              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] sm:text-xs font-bold tracking-widest text-zinc-500 uppercase">
                    SAY HELLO
                  </span>
                  <a
                    href="mailto:abhishek@icreatepixels.in"
                    className="text-xs sm:text-sm font-bold text-white hover:text-[#ff4d00] transition-colors"
                  >
                    abhishek@icreatepixels.in
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href="https://in.linkedin.com/in/icreatepixels"
                    className="w-10 h-10 bg-[#111] hover:bg-[#222] rounded-full flex justify-center items-center text-white/70 hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon size={16} />
                  </a>
                  <a
                    href="https://www.instagram.com/icreatepixels/"
                    className="w-10 h-10 bg-[#111] hover:bg-[#222] rounded-full flex justify-center items-center text-white/70 hover:text-white transition-colors"
                    aria-label="Instagram"
                  >
                    <InstagramIcon size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
