const fs = require('fs');
let content = fs.readFileSync('components/Hero.tsx', 'utf8');

const searchVideo = `<video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity"
          src="https://assets.mixkit.co/videos/preview/mixkit-set-of-lights-in-a-video-studio-32400-large.mp4"
        />`;

const replaceVideo = `{/* Enhanced animated gradient mesh instead of heavy video */}`;
content = content.replace(searchVideo, replaceVideo);

const searchOrbs = `<motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] rounded-full bg-[#ff4d00]/20 blur-[120px] pointer-events-none mix-blend-screen"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-[10%] right-[10%] w-[50vw] h-[50vw] rounded-full bg-blue-600/10 blur-[150px] pointer-events-none mix-blend-screen"
        />`;

const replaceOrbs = `<motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            x: ["0%", "5%", "0%"],
            y: ["0%", "5%", "0%"],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#ff4d00]/15 blur-[150px] pointer-events-none mix-blend-screen"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            x: ["0%", "-5%", "0%"],
            y: ["0%", "-5%", "0%"],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[-10%] right-[-10%] w-[70vw] h-[70vw] rounded-full bg-blue-600/15 blur-[180px] pointer-events-none mix-blend-screen"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            x: ["-5%", "5%", "-5%"],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[30%] left-[40%] w-[40vw] h-[40vw] rounded-full bg-purple-600/10 blur-[150px] pointer-events-none mix-blend-screen"
        />`;

content = content.replace(searchOrbs, replaceOrbs);

const searchTags = `<div className="flex flex-col items-center gap-6 mt-0 w-full">`;
const replaceTags = `{/* Floating Background Tags */}
        <div className="absolute inset-0 z-[-1] overflow-hidden pointer-events-none hidden md:block">
          <motion.div 
            animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }} 
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[30%] left-[10%] px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white/50 text-xs font-bold tracking-widest uppercase"
          >
            Video Production
          </motion.div>
          <motion.div 
            animate={{ y: [0, 20, 0], opacity: [0.3, 0.6, 0.3] }} 
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-[50%] right-[10%] px-4 py-2 rounded-full border border-[#ff4d00]/20 bg-[#ff4d00]/5 backdrop-blur-md text-[#ff4d00]/60 text-xs font-bold tracking-widest uppercase"
          >
            Growth Marketing
          </motion.div>
          <motion.div 
            animate={{ y: [0, -15, 0], opacity: [0.3, 0.6, 0.3] }} 
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-[40%] left-[15%] px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 backdrop-blur-md text-blue-400/60 text-xs font-bold tracking-widest uppercase"
          >
            VFX & Animation
          </motion.div>
          <motion.div 
            animate={{ y: [0, 15, 0], opacity: [0.2, 0.5, 0.2] }} 
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute top-[20%] right-[25%] px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 backdrop-blur-md text-purple-400/60 text-xs font-bold tracking-widest uppercase"
          >
            Brand Strategy
          </motion.div>
        </div>

        <div className="flex flex-col items-center gap-6 mt-0 w-full">`;

content = content.replace(searchTags, replaceTags);

fs.writeFileSync('components/Hero.tsx', content);
console.log("Patched successfully");
