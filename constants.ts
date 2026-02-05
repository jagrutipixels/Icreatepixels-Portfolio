import { Project, Experience, SkillGroup, HardwareGroup, BrandProject } from './types';

export const PERSONAL_INFO = {
  name: "ABHISHEK SANJAY GUJAR",
  title: "Filmmaker • Editor • Creative Head",
  email: "abhishek.gujar1202@gmail.com",
  location: "Mumbai, Maharashtra, India",
  philosophy: "Make it feel real. Make it feel cinematic. Make it feel like a memory someone wants to watch again.",
  bio: "Accomplished filmmaker and creative professional with 6+ years of experience in cinematography, video editing, and creative direction. Passionate about turning brands and creators into visual stories that resonate with audiences, from script to final pixel.",
  stats: {
    views: "291k+",
    subscribers: "669",
    totalVideos: "61",
    musicVideoViews: "10M+"
  }
};

export const PROJECTS: Project[] = [
  {
    title: "Puppycuddles Dog Café",
    client: "F&B/Lifestyle brand",
    deliverable: "50+ short-form reels & static posts",
    impact: "Grew Instagram to 25k followers; increased foot traffic",
    image: "https://picsum.photos/seed/dogcafe/800/600",
    description: "End-to-end content engine development for Mumbai's favorite pet café, focusing on high-engagement short-form video.",
    challenges: [
      "Managing unpredictable 'actors' (dogs) in a live cafe setting.",
      "Developing a consistent brand voice across 50+ unique pieces of content.",
      "Optimizing for rapidly changing social media algorithms."
    ],
    technologies: ["iPhone 15 Pro", "Sony FX3 (Support)", "Adobe Premiere Pro", "Social Analytics Tools"],
    liveLink: "https://www.instagram.com/puppycuddlesdogcafe/"
  },
  {
    title: "Shivaji Maharaj Festival",
    client: "Event/cultural content",
    deliverable: "Travel vlog + event highlights",
    impact: "1M+ combined views across platforms",
    image: "https://picsum.photos/seed/festival/800/600",
    description: "Comprehensive documentation of a large-scale cultural festival, capturing the scale, devotion, and vibrant energy of the crowds.",
    challenges: [
      "Filming in extremely crowded and high-energy environments.",
      "Rapid turnaround time for daily highlight reels during the event.",
      "Protecting gear from dust and environmental factors."
    ],
    technologies: ["DJI Mavic Mini", "GoPro Hero 11", "External Audio Recording", "Fast-turnaround Proxy Workflow"]
  },
  {
    title: "Din Din Din (Music Video)",
    client: "Music artist / label",
    deliverable: "Short-form music video edits",
    impact: "10M+ views across Moj and YouTube combined",
    image: "https://picsum.photos/seed/music/800/600",
    description: "Fast-paced, high-energy edits for a trending music track designed to maximize reach on vertical video platforms.",
    challenges: [
      "Syncing complex beat drops with visual transitions.",
      "Integrating user-generated content into a professional edit.",
      "Creating a 'hook' in the first 3 seconds to drive viral potential."
    ],
    technologies: ["After Effects", "Adobe Premiere Pro", "VFX Plugins", "Color Grading"],
    liveLink: "https://www.youtube.com/@icreatepixels"
  }
];

export const BRAND_PROJECTS: BrandProject[] = [
  {
    name: "Savoir Studio",
    category: "Identity • Web • Space Design",
    description: "Developed the full visual ecosystem for Mumbai's premier creative studio, from the minimalist geometric logo to a high-conversion digital portfolio.",
    deliverables: ["Visual Identity", "Web Architecture", "Spatial Art Direction"],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000",
    link: "https://www.ssbykmw.com/" 
  },
  {
    name: "DBN Fruits",
    category: "E-commerce • Branding",
    description: "Revitalized a traditional fruit distribution business with a premium, organic-first identity and an intuitive B2B ordering interface.",
    deliverables: ["Brand Strategy", "UI/UX Design", "Packaging Systems"],
    image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=1000",
    link: "https://icretepixels.vercel.app/"
  },
  {
    name: "Tech Ev",
    category: "Corporate Identity • Web",
    description: "Crafting a forward-looking digital presence for a technology consultancy, emphasizing speed, modularity, and technical precision.",
    deliverables: ["Digital Identity", "Web Development", "Design System"],
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1000",
    link: "https://candid-pegasus-1f86d2.netlify.app/#/"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Creative Head",
    company: "Savoir Studio",
    location: "Mumbai, Maharashtra",
    period: "October 2025 – Present",
    highlights: [
      "Leading creative strategy, production, and post-production for client campaigns across photography, videography, and UGC content",
      "Designing and overseeing multi-color backdrop setups, podcast studios, and cyclorama installations",
      "Managing creative teams and vendors for end-to-end project delivery",
      "Building client portfolios and brand identity through cohesive visual storytelling"
    ]
  },
  {
    role: "Content Creator / Social Media Executive",
    company: "Puppycuddles Dog Café",
    location: "Bandra, Mumbai",
    period: "January 2025 – July 2025",
    highlights: [
      "Produced high-performing short-form reels and Instagram content",
      "Grew Instagram following from initial base to ~25k followers",
      "Managed influencer collaborations and brand partnership integration",
      "Analyzed platform metrics to optimize content themes and visual direction"
    ]
  },
  {
    role: "Video Editor (Social Media)",
    company: "Gulbadan Talkies / Bhadipa",
    location: "Mumbai, Maharashtra",
    period: "March 2024 – December 2024",
    highlights: [
      "Revitalized legacy content library by adapting classic film clips for trending formats",
      "Created BTS (behind-the-scenes) videos and live event promos",
      "Shot and edited 25+ short-form videos leveraging trend cycles",
      "Collaborated to maintain consistent brand voice across multiple series"
    ]
  },
  {
    role: "Assistant Art Director / Editor",
    company: "Various Productions (TV & Freelance)",
    location: "Mumbai, Maharashtra",
    period: "2019 – 2024",
    highlights: [
      "Provided art direction and set design support for 10+ television shows",
      "Executed final cut editing for episodic content managing multiple timelines",
      "Collaborated with directors to realize visual concepts within budget",
      "Conducted color grading and sound design to broadcast-quality standards"
    ]
  }
];

export const SKILLS: SkillGroup[] = [
  {
    category: "Video Editing",
    items: ["Adobe Premiere Pro (Expert)", "DaVinci Resolve (Intermediate)", "Multi-camera editing", "VFX basics"]
  },
  {
    category: "Graphics & Design",
    items: ["Adobe Photoshop (Expert)", "Adobe After Effects (Intermediate)", "Storyboarding tools"]
  },
  {
    category: "Photography & Workflow",
    items: ["Adobe Lightroom (Intermediate)", "Color Grading", "Sound Design", "Motion Graphics"]
  },
  {
    category: "Strategic Skills",
    items: ["Brand Storytelling", "Trend Awareness", "UGC Production", "Audience Strategy"]
  }
];

export const HARDWARE: HardwareGroup[] = [
  { category: "Cameras", items: "DJI Mavic Mini, Sony A7IV, GoPro Hero 11 Black, DJI Osmo 2" },
  { category: "Production", items: "Multi-color backdrops, Podcast mic & acoustic treatment, Cyclorama rigs" },
  { category: "Lighting", items: "Key/Fill/Backlight setups, Gel color theory, Practical application" }
];