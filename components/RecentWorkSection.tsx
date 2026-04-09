import React, { useRef } from 'react';
import { Reveal } from './Reveal.tsx';

const REELS = [
  {
    id: "DW1Nmz1jvTV",
    title: "BNI Inesh",
    subtitle: "Navi Mumbai • Reel 1",
    thumbnail: "https://scontent-sof1-1.cdninstagram.com/v/t51.82787-15/660718957_18078084794617281_16691492332433585_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=101&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=LofgPTnoJ7IQ7kNvwGVvnUK&_nc_oc=Adr9yYiPZM_BMD7_Y_6a_7_IJu8YWVn8PKkZnyIYjwb-1uuTPEqGiQsjdKCRgTvGXGc9ibFMe7nZ1lHH0ExeASqX&_nc_zt=23&_nc_ht=scontent-sof1-1.cdninstagram.com&_nc_gid=UKLqhrYNhirU4dUdTA5CYA&_nc_ss=7a30f&oh=00_Af0eXxwwEQvj27gN_WpklDHFbIs_OVuupn3kaQzq7FiC9w&oe=69DD692C",
    icon: "https://ui-avatars.com/api/?name=BNI&background=0D8ABC&color=fff"
  },
  {
    id: "DW0XwczjZYr",
    title: "BNI Inesh",
    subtitle: "Navi Mumbai • Reel 2",
    thumbnail: "https://scontent-sof1-1.cdninstagram.com/v/t51.82787-15/660307464_18078046850617281_1597950399976595915_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=104&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=iybKy6qzjboQ7kNvwHJ41-l&_nc_oc=AdpEiL9c0BejSPZbshIlKIdOsv5uB_81f3H_P3KIBgann63AKdLKs_yKxTZXadAkbL7zBj1tCZsTRObVAFZ1vUVL&_nc_zt=23&_nc_ht=scontent-sof1-1.cdninstagram.com&_nc_gid=npA-wzicL4_Lh8JPcrS-YQ&_nc_ss=7a30f&oh=00_Af2aJ8_ySH1_kfo_gmNQ7FjHk_iHK305seRVEHKq-0z0Ww&oe=69DD77BD",
    icon: "https://ui-avatars.com/api/?name=BNI&background=0D8ABC&color=fff"
  },
  {
    id: "DW0XN86jUbA",
    title: "BNI Inesh",
    subtitle: "Navi Mumbai • Reel 3",
    thumbnail: "https://scontent-sof1-2.cdninstagram.com/v/t51.82787-15/659645321_18078046427617281_7461407522340180075_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=111&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=q0hWH6t2n-IQ7kNvwEJYEhg&_nc_oc=AdrWrLVKt8CkH9ZUbziFtiD0K2LPwdobshusl-3sYp9Hes0DnJxWyCitGun-iEwYBtF9noeNeMfAavxI_SALCzC3&_nc_zt=23&_nc_ht=scontent-sof1-2.cdninstagram.com&_nc_gid=V1SudTMiTRgrUgQc2-mKkA&_nc_ss=7a30f&oh=00_Af0JHZpThSTs0DRNy3PbEUAYt3KftCsIcl79YoYuf-bjbQ&oe=69DD4A4C",
    icon: "https://ui-avatars.com/api/?name=BNI&background=0D8ABC&color=fff"
  },
  {
    id: "DW0VWcICV0R",
    title: "BNI Inesh",
    subtitle: "Navi Mumbai • Reel 4",
    thumbnail: "https://scontent-sof1-2.cdninstagram.com/v/t51.82787-15/660043216_18078045158617281_7189922613291350643_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=111&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=ADA1odx5d70Q7kNvwFJsmYg&_nc_oc=AdqcRIWSjt7N9ncKFoNRsHuyT8mNenZwO4U1-zZEo5kr7Ut4JUaMZ0wVOtHlw7CnxelJS-YU0l3L9x01H9l-TypY&_nc_zt=23&_nc_ht=scontent-sof1-2.cdninstagram.com&_nc_gid=G8bQGxxvId6Scmam6U3Kqg&_nc_ss=7a30f&oh=00_Af2Ar6XlkFGc9v8fgkgVm8TtqIkJMRNtTVA2o5wWJSPqIw&oe=69DD6F16",
    icon: "https://ui-avatars.com/api/?name=BNI&background=0D8ABC&color=fff"
  },
  {
    id: "DW0UvHPgKzq",
    title: "BNI Inesh",
    subtitle: "Navi Mumbai • Reel 5",
    thumbnail: "https://scontent-sof1-2.cdninstagram.com/v/t51.82787-15/659516550_18078044831617281_5770903138709368123_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=111&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=xraaKgZt0uAQ7kNvwGbCWcO&_nc_oc=AdrGbEr0NT1w-Wg1omQGSnYpypo1k9wEFXLVHZLgp57t2yacqeSymoJ9DfhYdV0KY513smScx3MK7KA-P-A46FsK&_nc_zt=23&_nc_ht=scontent-sof1-2.cdninstagram.com&_nc_gid=xfhjSkgk0MEQrXKzaQTd7w&_nc_ss=7a30f&oh=00_Af0mf0mn9JZJraHDyDDVNEt9EOQ5E7wyq53OU2mO_DPrkA&oe=69DD6D84",
    icon: "https://ui-avatars.com/api/?name=BNI&background=0D8ABC&color=fff"
  },
  {
    id: "DW0UEvDCNIj",
    title: "BNI Inesh",
    subtitle: "Navi Mumbai • Reel 6",
    thumbnail: "https://scontent-sof1-2.cdninstagram.com/v/t51.82787-15/662044006_18078044444617281_7712438655841822790_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=110&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=i91svdfZwJsQ7kNvwFoKPmh&_nc_oc=Adq5yVMOVOybsmKNGO4eotes-fgZRPdOXM44x5j5G53s3DepmkY5sOvwtdWFBNow6x2cRo95yo41RURpRvz0frBb&_nc_zt=23&_nc_ht=scontent-sof1-2.cdninstagram.com&_nc_gid=Cs7FT8xqGI4PfQ4G3gx2_Q&_nc_ss=7a30f&oh=00_Af2YgxmZErUtrAGGDTpNW528xiX5nVAHcmYqa-5I5VO_Ng&oe=69DD65FA",
    icon: "https://ui-avatars.com/api/?name=BNI&background=0D8ABC&color=fff"
  },
  {
    id: "DWjJ6sPCGND",
    title: "Savoir",
    subtitle: "Reel 1",
    thumbnail: "https://scontent-sof1-2.cdninstagram.com/v/t51.82787-15/656874346_17856316959632138_1264119576934329552_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=108&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=M5N8qJkUwdkQ7kNvwEd7Vic&_nc_oc=AdokRQWNyBsoUXtev3n7rI942IN78h_d_FNdCBXrHbHSW5vnoVb_0K3HHFrIYIW7Dd9iY7gEg_sgQztoKV3dRBAs&_nc_zt=23&_nc_ht=scontent-sof1-2.cdninstagram.com&_nc_gid=HV9t0Zslq7xrKY6FvTgNlQ&_nc_ss=7a30f&oh=00_Af2VhFYKqaqGTKVn1_R2W1svfNvttIvoeO15N2hyUn9bzg&oe=69DD7ABE",
    icon: "https://ui-avatars.com/api/?name=Savoir&background=E91E63&color=fff"
  },
  {
    id: "DVs9fzIk2YP",
    title: "Savoir",
    subtitle: "Reel 2",
    thumbnail: "https://scontent-sof1-1.cdninstagram.com/v/t51.82787-15/649225923_17853850362632138_2314744569192218689_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=102&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=phzPI0wbSioQ7kNvwEXp2so&_nc_oc=AdpcPnIH-7F4AYmYNKrA_1nnAY8IllKiVrnrfWZ4O9rDX_6d2nM02mRemYaw1p5u8Yr3r-Oa1iAgARuIPvH8vc85&_nc_zt=23&_nc_ht=scontent-sof1-1.cdninstagram.com&_nc_gid=H8HyupLQfQRDu8sq8Dr2GQ&_nc_ss=7a30f&oh=00_Af1Dyp2h1DZtYYLICNkQuKUojHtTadfeomyL3Y9EpDyh2w&oe=69DD7C89",
    icon: "https://ui-avatars.com/api/?name=Savoir&background=E91E63&color=fff"
  },
  {
    id: "DUGG14YiFlL",
    title: "Savoir",
    subtitle: "Reel 3",
    thumbnail: "https://scontent-sof1-2.cdninstagram.com/v/t51.82787-15/622332071_17849594673632138_8972016636574961264_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=109&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=nU6tbf5he2EQ7kNvwGHjfFF&_nc_oc=AdobFbQf-htopDWpAl-HzVqOY14BbFxPl_pTH6OClMfDxuZLulEK2HIzfrBWGeTyzA3yFssfh1_bErJoMJdFRgYw&_nc_zt=23&_nc_ht=scontent-sof1-2.cdninstagram.com&_nc_gid=mg5DvaRLzl8RWOG2PLHXyQ&_nc_ss=7a30f&oh=00_Af3kaMtcGD0x7SZsPpdHp3CZv1_7X2Y5AFVGQcuWlsO2FA&oe=69DD676D",
    icon: "https://ui-avatars.com/api/?name=Savoir&background=E91E63&color=fff"
  },
  {
    id: "DT2o0x2k7Kh",
    title: "Savoir",
    subtitle: "Reel 4",
    thumbnail: "https://scontent-sof1-2.cdninstagram.com/v/t51.82787-15/619695540_17849011782632138_198207594173831453_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=108&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=PECzoGUOFboQ7kNvwEarTL7&_nc_oc=Ado7SAWPOCOhsE0bL8xKENm-IN94dQC2_wniMSgb1PyM1_F2KDud3tn9HF5CR0z4YN15fs536kh2rEJe735Cp79y&_nc_zt=23&_nc_ht=scontent-sof1-2.cdninstagram.com&_nc_gid=clyzE8RxDiGQzoshvpmy9g&_nc_ss=7a30f&oh=00_Af1kNndPIpCy-v4Hz9F2dPc9QHBv-JOb-8fxJVGY57KxoA&oe=69DD6E20",
    icon: "https://ui-avatars.com/api/?name=Savoir&background=E91E63&color=fff"
  },
  {
    id: "DTuq0J6iIV5",
    title: "Savoir",
    subtitle: "Reel 5",
    thumbnail: "https://scontent-sof1-1.cdninstagram.com/v/t51.82787-15/642521991_17852530995632138_4699546489410857961_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=100&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=gj_AlNEIEUoQ7kNvwFbQhHT&_nc_oc=AdqMlZKYgzwZGITeNwBMrrum5YferNnACyG4_sITbdboycElEQEsRT64jds-l1dSu8JOA3n7MX4qT2Vg9k6y-9a9&_nc_zt=23&_nc_ht=scontent-sof1-1.cdninstagram.com&_nc_gid=vqMqa6MzczZRG_p37_ZUow&_nc_ss=7a30f&oh=00_Af17PEDZiWGN7-oP64Ui8dvUOhPRPfc-MoSE2Rap4PFN7w&oe=69DD4A06",
    icon: "https://ui-avatars.com/api/?name=Savoir&background=E91E63&color=fff"
  },
  {
    id: "DWoR5cluKYw",
    title: "Savoir",
    subtitle: "Reel 6",
    thumbnail: "https://scontent-sof1-2.cdninstagram.com/v/t51.82787-15/657484255_17856543654632138_7578838141300027460_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=107&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=_NTWqPm3CzUQ7kNvwE4YdAF&_nc_oc=AdoXm3LzAkD_v0JMS1CqkFA9zF3vy6ej4GkEwUbvOI4dnmrXFIJvgtezj_6OKfvMkENMNWVuNZxwpHpWTVNSDuCx&_nc_zt=23&_nc_ht=scontent-sof1-2.cdninstagram.com&_nc_gid=I0K8XoG84EvdlhHP9AFQyA&_nc_ss=7a30f&oh=00_Af0Vm3PDHok3hdU3jJxgnZGUX9S19_Dhexaain2pcoUuvg&oe=69DD4BCB",
    icon: "https://ui-avatars.com/api/?name=Savoir&background=E91E63&color=fff"
  }
];

export const RecentWorkSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = window.innerWidth < 768 ? 260 : 300;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="recent-work" className="py-20 md:py-28 px-6 md:px-12 lg:px-24 border-t border-zinc-500/10 relative overflow-hidden">
      {/* Background styling to match the cinematic theme */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-900/5 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-6">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-500 block mb-4">
                Latest Drops
              </span>
              <h2 className="text-4xl md:text-5xl font-serif mb-4 text-fluid-h2 font-bold">Recent Work</h2>
              <p className="text-zinc-500 max-w-xl text-sm md:text-base font-light leading-relaxed">
                A collection of high-retention, viral-engineered reels produced for BNI Inesh, Navi Mumbai.
              </p>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-4">
              <button 
                onClick={() => scroll('left')} 
                className="w-12 h-12 rounded-full border border-zinc-500/30 flex items-center justify-center hover:bg-[var(--text-color)] hover:text-[var(--bg-color)] transition-all duration-300 active:scale-95 group"
                aria-label="Scroll left"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="group-hover:-translate-x-1 transition-transform"><path d="M15 18l-6-6 6-6"/></svg>
              </button>
              <button 
                onClick={() => scroll('right')} 
                className="w-12 h-12 rounded-full border border-zinc-500/30 flex items-center justify-center hover:bg-[var(--text-color)] hover:text-[var(--bg-color)] transition-all duration-300 active:scale-95 group"
                aria-label="Scroll right"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="group-hover:translate-x-1 transition-transform"><path d="M9 18l6-6-6-6"/></svg>
              </button>
            </div>
          </div>
        </Reveal>

        <div className="relative -mx-6 px-6 md:mx-0 md:px-0">
          {/* Mobile Swipe Indicator */}
          <div className="md:hidden flex items-center gap-2 mb-6 text-zinc-500 text-[10px] uppercase tracking-widest font-bold">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="animate-pulse"><path d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            Swipe to explore
          </div>

          {/* Fade edges for desktop */}
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[var(--bg-color)] to-transparent z-20 pointer-events-none"></div>
          <div className="hidden md:block absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[var(--bg-color)] to-transparent z-20 pointer-events-none"></div>

          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-3 md:gap-4 pb-12 pt-4 [&::-webkit-scrollbar]:hidden scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {REELS.map((reel, index) => (
              <Reveal key={reel.id} delay={index * 100} direction="up" width="fit-content" className="snap-center shrink-0 first:ml-0 md:first:ml-12 last:mr-0 md:last:mr-12">
                <div className="w-[240px] sm:w-[250px] flex flex-col bg-zinc-900 rounded-md overflow-hidden relative shadow-lg group">
                  
                  {/* Image Area */}
                  <a href={`https://www.instagram.com/reel/${reel.id}/`} target="_blank" rel="noopener noreferrer" className="relative h-[360px] sm:h-[380px] w-full overflow-hidden block">
                    <img 
                      src={reel.thumbnail} 
                      alt={reel.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none"></div>
                    
                    {/* Overlay Content */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2.5 pointer-events-none">
                      <img src={reel.icon} alt="" className="w-8 h-8 rounded-sm border border-white/50 object-cover shadow-sm" />
                      <div className="flex flex-col">
                        <span className="text-white font-bold text-[13px] leading-tight drop-shadow-md">{reel.title}</span>
                        <span className="text-white/90 text-[11px] font-medium drop-shadow-md">{reel.subtitle}</span>
                      </div>
                    </div>
                  </a>

                  {/* Action Button Area - Exact match to reference */}
                  <div className="flex h-[42px] bg-[#E91E63] text-white">
                    <a 
                      href={`https://www.instagram.com/reel/${reel.id}/`} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex-1 flex items-center justify-center font-medium text-[13px] hover:bg-white/10 transition-colors"
                    >
                      Watch Reel
                    </a>
                    <button 
                      className="w-[42px] flex items-center justify-center border-l border-white/20 hover:bg-white/10 transition-colors"
                      onClick={() => window.open(`https://www.instagram.com/reel/${reel.id}/`, '_blank')}
                      aria-label="More options"
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M7 10l5 5 5-5z"/></svg>
                    </button>
                  </div>

                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
