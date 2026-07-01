import React, { useEffect, useState } from "react";

export const LoadingScreen: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Lock body scroll
    document.body.style.overflow = "hidden";

    const handleLoad = () => {
      setIsLoaded(true);
    };

    if (document.readyState === "complete") {
      // Simulate minimal display time if already loaded
      setTimeout(handleLoad, 500);
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
      document.body.style.overflow = "auto"; // ensure it cleans up
    };
  }, []);

  useEffect(() => {
    if (isLoaded) {
      const timer = setTimeout(() => {
        document.body.style.overflow = "auto";
        setIsVisible(false);
      }, 1000); // Wait for the 1s slide-up animation

      return () => clearTimeout(timer);
    }
  }, [isLoaded]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#000000] w-full h-full pointer-events-none"
      style={{
        transition: "transform 1s cubic-bezier(0.76, 0, 0.24, 1)",
        transform: isLoaded ? "translateY(-100%)" : "translateY(0%)",
      }}
    >
      <div
        className="flex flex-col items-center"
        style={{
          transition: "all 0.6s cubic-bezier(0.76, 0, 0.24, 1)",
          transform: isLoaded ? "translateY(-20px)" : "translateY(0)",
          opacity: isLoaded ? 0 : 1,
        }}
      >
        <span className="text-white text-sm md:text-base font-medium tracking-[0.3em] uppercase">
          Calibrating Focus...
        </span>
      </div>
    </div>
  );
};
