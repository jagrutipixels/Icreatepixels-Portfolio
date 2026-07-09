import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "./Navbar.tsx";
import { ScrollToTop } from "./ScrollToTop.tsx";
import { Preloader } from "./Preloader.tsx";
import { CustomCursor } from "./CustomCursor.tsx";
import { FloatingActionBar } from "./FloatingActionBar.tsx";
import { AgencyFooter } from "./AgencyFooter.tsx";

const CinematicAtmosphere: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-[0.08] transition-opacity duration-1000">
      <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-orange-600/5 blur-[150px] rounded-full animate-drift"></div>
      <div
        className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#ff4d00]/5 blur-[150px] rounded-full animate-drift"
        style={{ animationDelay: "-5s" }}
      ></div>
    </div>
  );
};

export const Layout: React.FC = () => {
  const { pathname } = useLocation();
  const [isLightMode, setIsLightMode] = React.useState(() => {
    return localStorage.getItem('theme') !== 'dark';
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    if (isLightMode) {
      document.documentElement.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark');
    }
  }, [isLightMode]);

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col font-sans relative selection:bg-[#ff4d00] selection:text-white">
      <CustomCursor />
      <Preloader />
      <ScrollToTop />
      <CinematicAtmosphere />

      <div className="relative z-10 flex flex-col flex-1">
        <Navbar isLightMode={isLightMode} onToggleTheme={() => setIsLightMode(!isLightMode)} />

        <main className="flex-1 w-full relative">
          <Outlet />
        </main>

        <AgencyFooter />
        <FloatingActionBar />
      </div>
    </div>
  );
};
