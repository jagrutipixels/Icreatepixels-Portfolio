
import React from 'react';
import { PERSONAL_INFO } from '../constants';

export const StatsSection: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
      <div className="text-center group p-6">
        <div className="text-4xl md:text-5xl font-serif font-bold mb-2 group-hover:scale-110 transition-transform">
          {PERSONAL_INFO.stats.views}
        </div>
        <div className="text-zinc-500 uppercase tracking-widest text-[10px] font-bold">Total YouTube Views</div>
      </div>
      <div className="text-center group p-6">
        <div className="text-4xl md:text-5xl font-serif font-bold mb-2 group-hover:scale-110 transition-transform">
          {PERSONAL_INFO.stats.musicVideoViews}
        </div>
        <div className="text-zinc-500 uppercase tracking-widest text-[10px] font-bold">Music Video Reach</div>
      </div>
      <div className="text-center group p-6">
        <div className="text-4xl md:text-5xl font-serif font-bold mb-2 group-hover:scale-110 transition-transform">
          25k
        </div>
        <div className="text-zinc-500 uppercase tracking-widest text-[10px] font-bold">Max IG Growth</div>
      </div>
      <div className="text-center group p-6">
        <div className="text-4xl md:text-5xl font-serif font-bold mb-2 group-hover:scale-110 transition-transform">
          6+
        </div>
        <div className="text-zinc-500 uppercase tracking-widest text-[10px] font-bold">Years Experience</div>
      </div>
    </div>
  );
};
