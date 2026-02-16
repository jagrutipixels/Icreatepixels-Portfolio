import { Project, Experience, SkillGroup, HardwareGroup, BrandProject, Methodology } from './types';

export const PERSONAL_INFO = {
  name: "ABHISHEK GUJAR",
  title: "Creative Head • Filmmaker",
  email: "abhishek.gujar1202@gmail.com",
  phone: "+91 7400310443",
  location: "Mumbai, Maharashtra",
  philosophy: "Unifying the physical and digital worlds—crafting visually stunning sets and ensuring broadcast-quality stories.",
  bio: "Multidisciplinary Creative Head and BMM Graduate with a 360-degree perspective gained from working as an Assistant Art Director and Senior Video Editor. Currently leading creative operations at Karn Marketing Warfare, specializing in engineering viral content and establishing end-to-end production infrastructures.",
  stats: {
    views: "290k+",
    subscribers: "669",
    totalVideos: "60+",
    reach: "10M+"
  },
  socials: {
    youtube: "https://www.youtube.com/@icreatepixels",
    instagram: "https://www.instagram.com/icreatepixels",
    linkedin: "https://www.linkedin.com/in/icreatepixels/"
  }
};

export const METHODOLOGY: Methodology[] = [
  { label: "Viral Engineering", detail: "Applying advanced editing psychology and 'Retention Editing' to maximize audience hooks and shareability." },
  { label: "Studio Management", detail: "Establishing operational infrastructure and end-to-end production pipelines for premium creative arms." },
  { label: "Spatial Aesthetics", detail: "Leveraging set design expertise to ensure physical environments perfectly complement camera angles and lighting." },
  { label: "360° Creative Vision", detail: "Bridging the gap between commercial films, social assets, and client ROI through strategic storytelling." }
];

export const PROJECTS: Project[] = [
  {
    title: "Bhadipa Viral Content",
    client: "GULBADAN TALKIES",
    deliverable: "Viral Strategy • Retention Editing",
    impact: "India's premier Marathi digital network strategist",
    image: "https://img.youtube.com/vi/mtdVqpPFJkk/maxresdefault.jpg",
    description: "Applied advanced editing psychology to short-form content for Bhadipa, Vishay Khol, and Bha2pa to maximize retention and organic reach.",
    challenges: [
      "Optimizing hooks for Marathi regional audience.",
      "Adapting tone across diverse infotainment genres.",
      "Managing high-frequency content repurposing."
    ],
    technologies: ["Retention Psychology", "Adobe Premiere Pro", "Content Strategy"],
    liveLink: "https://www.youtube.com/watch?v=mtdVqpPFJkk&list=RDmtdVqpPFJkk&start_radio=1"
  },
  {
    title: "Puppycuddles Experience",
    client: "PUPPYCUDDLES DOG CAFE",
    deliverable: "Content Direction • Social Growth",
    impact: "Boosted cafe footfall through digital alignment",
    image: "https://images.unsplash.com/photo-1541591415600-d1e60f173bcc?auto=format&fit=crop&q=80&w=1200",
    description: "Transformed the brand’s digital presence by aligning daily reel content with the physical in-cafe experience.",
    challenges: [
      "Creating engaging frames within physical cafe constraints.",
      "Managing influencer collaborations.",
      "Strengthening customer loyalty through events."
    ],
    technologies: ["Set Design", "Daily Reels", "Influencer Strategy"],
    liveLink: "https://www.instagram.com/puppycuddles_mumbai/?hl=en"
  },
  {
    title: "Bharat Realty Showcase",
    client: "BHARAT REALTY",
    deliverable: "Visual Storytelling [UNDER CONSTRUCTION]",
    impact: "Production In-Progress",
    image: "https://images.unsplash.com/photo-1503387762-592dee58c160?auto=format&fit=crop&q=80&w=1200",
    description: "Revamping the digital property showcase for a real estate firm. This project involves a high-fidelity site-to-screen pipeline currently under development.",
    challenges: [
      "Translating physical architecture to cinematic digital tours.",
      "Developing high-impact visual lead magnets.",
      "Under production: Finalizing rendering and UI structure."
    ],
    technologies: ["Cinematography", "Lead Gen", "UI/UX Strategy"],
    liveLink: ""
  }
];

export const BRAND_PROJECTS: BrandProject[] = [
  {
    name: "Savoir Studio",
    category: "Studio Inception • Live",
    description: "Built the full-service content production arm for Karn Marketing Warfare from scratch. Live operational infrastructure.",
    deliverables: ["Operational Infrastructure", "Creative Leadership", "Production Pipeline"],
    image: "https://raw.githubusercontent.com/jagrutipixels/pixels/9acf4bd49cf1580f8e8d0cb4e4c49acf84e93880/savoir.jpg",
    link: "https://www.ssbykmw.com/" 
  },
  {
    name: "Tech EV Launch",
    category: "Electric Mobility • Live",
    description: "Designed the digital launch strategy and high-performance UI structure for a new EV scooter brand. Live site.",
    deliverables: ["Website Architecture", "Digital Strategy", "UI/UX Design"],
    image: "https://raw.githubusercontent.com/jagrutipixels/pixels/d83e7276207c5022b98a652205fd257d5e6d0449/tech.jpg",
    link: "https://candid-pegasus-1f86d2.netlify.app/#/"
  },
  {
    name: "DBN D2C Brand",
    category: "Premium D2C • Live",
    description: "Complete brand launch for premium Alphonso mango distribution. Covers naming, packaging, and digital infrastructure.",
    deliverables: ["Brand Identity", "Packaging Design", "D2C Logistics"],
    image: "https://raw.githubusercontent.com/jagrutipixels/pixels/2b0e06602bed3b04510ba467b5e0b5ab7e2d0bb1/dbn.jpg",
    link: "https://icretepixels.vercel.app/"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Creative Head & Project Lead",
    company: "Karn Marketing Warfare (Savoir Studio)",
    location: "Mumbai",
    period: "Sep 2025 – Present",
    highlights: [
      "Conceptualized and built Savoir Studio from scratch, established Hiring and production workflows",
      "Lead creative vision for key accounts, ensuring output aligns with client ROI and brand identity",
      "Mentor a multidisciplinary team of editors, designers, and strategists",
      "Spearheaded 'Pixel Craft' proprietary IP, managing pitch decks and GTM strategy"
    ]
  },
  {
    role: "Creative Lead & Social Media Manager",
    company: "Puppycuddles Dog Cafe",
    location: "Mumbai",
    period: "Jan 2025 – Aug 2025",
    highlights: [
      "Transformed digital presence by aligning online content with physical in-cafe experience",
      "Directed, shot, and edited daily reels, utilizing set design background for engaging frames",
      "Executed influencer collaborations and on-ground events boosting cafe footfall",
      "Maintained brand voice across high-frequency content schedules"
    ]
  },
  {
    role: "Social Media Content Strategist",
    company: "Bhadipa (Gulbadan Talkies)",
    location: "Mumbai",
    period: "Mar 2024 – Dec 2024",
    highlights: [
      "Key strategist for India’s premier Marathi digital network (Bhadipa, Vishay Khol, Bha2pa)",
      "Applied 'Retention Editing' psychology to optimize hooks and pacing for short-form content",
      "Successfully adapted editing styles across diverse genres proving tone versatility",
      "Managed content repurposing workflows for multi-platform distribution"
    ]
  },
  {
    role: "Assistant Art Director",
    company: "Vertex Set Designing",
    location: "Mumbai",
    period: "Apr 2023 – Feb 2024",
    highlights: [
      "Conceptualized and built physical sets for high-end commercial shoots",
      "Managed prop sourcing, set dressing, and on-set continuity",
      "Coordinated with vendors to ensure sets were delivered on time and within budget",
      "Ensured physical environments perfectly complemented camera lighting and angles"
    ]
  },
  {
    role: "Senior Video Editor",
    company: "eClerx",
    location: "Mumbai",
    period: "Feb 2022 – Mar 2023",
    highlights: [
      "Delivered high-volume, broadcast-standard video edits for global clients",
      "Mastered advanced workflows in Adobe Premiere Pro and After Effects",
      "Refined raw footage into coherent narratives with seamless color grading",
      "Troubleshot technical issues and strictly adhered to corporate brand guidelines"
    ]
  }
];

export const SKILLS: SkillGroup[] = [
  {
    category: "Leadership & Strategy",
    items: ["Creative Direction", "Studio Management", "Viral Content Strategy", "Team Leadership"]
  },
  {
    category: "Post-Production",
    items: ["Advanced Video Editing", "Color Grading", "Sound Design", "Motion Graphics"]
  },
  {
    category: "Digital Architecture",
    items: ["Website Structure", "UI/UX Strategy", "AI-Driven Workflows", "Retrospective Psychology"]
  },
  {
    category: "Production Design",
    items: ["Set Design", "Spatial Aesthetics", "Prop Sourcing", "Continuity Management"]
  }
];

export const HARDWARE: HardwareGroup[] = [
  { category: "Cameras & Aerial", items: "DJI Mavic Mini, GoPro Hero 11 Black, DJI Action 2, Sony Workflow" },
  { category: "Specialized Gear", items: "Action POV rigs, Studio Lighting setups, Spatial acoustics" },
  { category: "Post Hardware", items: "High-performance edit rigs, Color-accurate monitoring" }
];