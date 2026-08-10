const fs = require('fs');
const content = fs.readFileSync('components/Hero.tsx', 'utf8');

const search = `      </div>
    </section>
  );
};`;

const replace = `      </div>

      {/* Hero Bottom Ticker */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden border-t border-white/5 bg-black/50 backdrop-blur-sm z-20">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap items-center shrink-0 py-3"
        >
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center">
              <span className="text-white/40 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase px-8">
                Cinematic Video Production
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d00]/50"></span>
              <span className="text-white/40 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase px-8">
                Data-Driven Marketing
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d00]/50"></span>
              <span className="text-white/40 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase px-8">
                Brand Strategy
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d00]/50"></span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};`;

if (content.includes(search)) {
    fs.writeFileSync('components/Hero.tsx', content.replace(search, replace));
    console.log("Patched successfully");
} else {
    console.log("Could not find search string");
}
