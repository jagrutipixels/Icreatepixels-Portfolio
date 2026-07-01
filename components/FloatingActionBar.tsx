import React from "react";
import { Link } from "react-router-dom";

export const FloatingActionBar: React.FC = () => {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[8000] flex items-center justify-center pointer-events-none w-full px-4 max-w-[max-content]">
      <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-2 rounded-full flex items-center justify-between gap-2 pointer-events-auto shadow-2xl w-full">
        <Link
          to="/#services"
          className="px-4 sm:px-6 py-3 text-[10px] sm:text-xs font-bold tracking-widest text-white uppercase hover:text-[#ff4d00] transition-colors whitespace-nowrap"
          data-cursor="CLICK"
        >
          SERVICES
        </Link>
        <Link
          to="/contact"
          className="bg-white text-black px-4 sm:px-6 py-3 rounded-full flex items-center gap-2 sm:gap-3 hover:bg-[#ff4d00] hover:text-white transition-all group whitespace-nowrap"
          data-cursor="GO"
        >
          <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase">
            Book a Call
          </span>
          <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full overflow-hidden border border-black/20 group-hover:border-white/20 transition-colors hidden xs:block">
            <img
              src="https://raw.githubusercontent.com/jagrutipixels/pixels/main/abhisek-modified.png"
              alt="Avatar"
              className="w-full h-full object-cover filter grayscale"
              onError={(e) => {
                // simple fallback if image fails
                (e.target as HTMLImageElement).src =
                  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI2NjYyI+PHBhdGggZD0iTTEyIDJjNS41MjMgMCAxMCA0LjQ3NyAxMCAxMHMtNC40NzcgMTAtMTAgMTBTMiAxNy41MjMgMiAxMiA2LjQ3NyAyIDEyIDJ6bTAgNEExMSAxIDAgMSAwIDEyIDhBMSAxIDAgMCAwIDEyIDZ6Ii8+PC9zdmc+";
              }}
            />
          </div>
        </Link>
      </div>
    </div>
  );
};
