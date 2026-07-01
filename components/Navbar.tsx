import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  Twitter,
  Linkedin,
  Instagram,
  Dribbble,
  ArrowRight,
  X,
  Menu,
} from "lucide-react";

interface NavbarProps {
  isLightMode: boolean;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  isLightMode,
  onToggleTheme,
}) => {
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
        className={`fixed top-0 left-0 w-full z-[100] transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] pt-4 md:pt-6 pb-4 px-4 md:px-12 pointer-events-none ${
          isHidden && !isMenuOpen
            ? "-translate-y-full opacity-0"
            : "translate-y-0 opacity-100"
        }`}
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
              className="hidden lg:flex bg-[#ff4d00] text-white hover:bg-[#e64500] py-3.5 px-8 rounded-full font-bold text-xs xl:text-sm tracking-widest uppercase items-center gap-3 transition-colors shadow-[0_0_20px_rgba(255,77,0,0.3)]"
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
                className="bg-[#ff4d00] text-white hover:bg-[#e64500] py-3.5 sm:py-4 px-8 rounded-full font-bold text-sm tracking-widest uppercase flex items-center justify-center gap-4 transition-colors w-full"
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
                    href="#"
                    className="w-10 h-10 bg-[#111] hover:bg-[#222] rounded-full flex justify-center items-center text-white/70 hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={16} />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-[#111] hover:bg-[#222] rounded-full flex justify-center items-center text-white/70 hover:text-white transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={16} />
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
