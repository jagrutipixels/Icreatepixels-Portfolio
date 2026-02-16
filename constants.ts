import { Project, Experience, SkillGroup, HardwareGroup, BrandProject, Methodology } from './types';

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
  },
  socials: {
    youtube: "https://www.youtube.com/@icreatepixels",
    instagram: "https://www.instagram.com/icreatepixels",
    linkedin: "https://www.linkedin.com/in/icreatepixels/"
  }
};

export const METHODOLOGY: Methodology[] = [
  { label: "Narrative First", detail: "Every shot must serve the story. I don't just capture visuals; I capture intentions and emotions." },
  { label: "Technical Precision", detail: "Leveraging industry-standard gear and software to ensure broadcast-quality output across all platforms." },
  { label: "Brand Synergy", detail: "Aligning creative vision with corporate goals to drive real-world engagement and organic growth." },
  { label: "Infinite Iteration", detail: "Refining the edit until the rhythm matches the soul of the subject, ensuring a lasting impact." }
];

export const PROJECTS: Project[] = [
  {
    title: "Puppycuddles Dog Café",
    client: "F&B/Lifestyle brand",
    deliverable: "50+ short-form reels & static posts",
    impact: "Grew Instagram to 25k followers; increased foot traffic",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=1200",
    description: "End-to-end content engine development for Mumbai's favorite pet café, focusing on high-engagement short-form video.",
    challenges: [
      "Managing unpredictable 'actors' (dogs) in a live cafe setting.",
      "Developing a consistent brand voice across 50+ unique pieces of content.",
      "Optimizing for rapidly changing social media algorithms."
    ],
    technologies: ["iPhone 15 Pro", "Sony FX3 (Support)", "Adobe Premiere Pro", "Social Analytics Tools"],
    liveLink: "https://www.instagram.com/puppycuddles_mumbai/?hl=en"
  },
  {
    title: "Shivaji Maharaj Art Festival 2025",
    client: "EVENT/CULTURAL CONTENT",
    deliverable: "Cinematic Vlog • Drone Documentation",
    impact: "5.0K+ Impressions • 2.4% CTR • 230+ Organic Views",
    image: "https://img.youtube.com/vi/73OewayWrQQ/maxresdefault.jpg",
    description: "Comprehensive documentation of the grand Chattrapati Shivaji Maharaj Art festival at Shivaji Park, Dadar. Capturing high-stakes cultural performances, ancient weaponry displays, and grand fort replicas with drone and ground-level cinematography.",
    challenges: [
      "Filming in extremely crowded and high-energy environments.",
      "Rapid turnaround time for daily highlight reels during the event.",
      "Protecting gear from dust and environmental factors."
    ],
    technologies: ["DJI Mavic Mini", "GoPro Hero 11", "External Audio Recording", "Fast-turnaround Proxy Workflow"],
    liveLink: "https://www.youtube.com/watch?v=73OewayWrQQ"
  },
  {
    title: "Bhadipa x Moti Soap Campaign",
    client: "BHADIPA / MOTI SOAP",
    deliverable: "Art Direction • Set Design",
    impact: "Seamless brand integration for premium commercial content",
    image: "https://img.youtube.com/vi/mtdVqpPFJkk/maxresdefault.jpg",
    description: "Served as Assistant Art Director for a major collaboration between Bhadipa and Moti Soap. Bridged the gap between the creative team and the sponsor brand, ensuring the production-ready setup met high visual standards and brand requirements.",
    challenges: [
      "Coordinating between creators and corporate sponsors to maintain creative integrity.",
      "Developing a 'shoot-ready' setup that balanced aesthetics with functional requirements.",
      "Ensuring consistent product placement within a fast-paced production environment."
    ],
    technologies: ["Art Direction", "Set Design", "Production Management", "Brand Strategy"],
    liveLink: "https://www.youtube.com/watch?v=mtdVqpPFJkk"
  }
];

export const BRAND_PROJECTS: BrandProject[] = [
  {
    name: "Savoir Studio",
    category: "Identity • Web • Space Design",
    description: "Developed the full visual ecosystem for Mumbai's premier creative studio, from the minimalist geometric logo to a high-conversion digital portfolio.",
    deliverables: ["Visual Identity", "Web Architecture", "Spatial Art Direction"],
    image: "https://raw.githubusercontent.com/jagrutipixels/pixels/9acf4bd49cf1580f8e8d0cb4e4c49acf84e93880/savoir.jpg",
    link: "https://www.ssbykmw.com/" 
  },
  {
    name: "DBN Fruits",
    category: "E-commerce • Branding",
    description: "Revitalized a traditional fruit distribution business with a premium, organic-first identity and an intuitive B2B ordering interface.",
    deliverables: ["Brand Strategy", "UI/UX Design", "Packaging Systems"],
    image: "https://raw.githubusercontent.com/jagrutipixels/pixels/2b0e06602bed3b04510ba467b5e0b5ab7e2d0bb1/dbn.jpg",
    link: "https://icretepixels.vercel.app/"
  },
  {
    name: "Tech Ev",
    category: "Corporate Identity • Web",
    description: "Architecting the 'Silent Revolution'. Developing a high-performance digital showroom for high-end electric mobility, featuring fireproof LFP battery tech.",
    deliverables: ["Product Visualization", "Web Ecosystem", "E-mobility Branding"],
    image: "https://raw.githubusercontent.com/jagrutipixels/pixels/d83e7276207c5022b98a652205fd257d5e6d0449/tech.jpg",
    link: "https://candid-pegasus-1f86d2.netlify.app/#/"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Creative Head",
    company: "KARN Marketing Warfare LLP",
    location: "On-site",
    period: "Aug 2025 – Present",
    highlights: [
      "Spearheading Creative Direction and Brand Strategy for comprehensive marketing campaigns",
      "Managing Marketing Campaign Management and Digital Marketing initiatives",
      "Expert execution of Visual Storytelling across various brand touchpoints",
      "Social Media Marketing leadership focused on organic and paid growth"
    ]
  },
  {
    role: "Social Media Manager",
    company: "Puppycuddles dog cafe",
    location: "Mumbai, Maharashtra",
    period: "Nov 2024 – Jun 2025",
    highlights: [
      "Developed and executed integrated Campaign Strategies and Marketing Campaign Plans",
      "Expert Online Campaign Management and Social Media Advertising oversight",
      "Utilized Meta-analysis for data-driven campaign optimization",
      "Led Social Media Marketing efforts resulting in sustained community growth"
    ]
  },
  {
    role: "Assistant Art Director",
    company: "Vertex Sets",
    location: "India • On-site",
    period: "Sep 2023 – Oct 2024",
    highlights: [
      "Supported Art Direction and set design utilizing SketchUp for spatial visualization",
      "Facilitated on-site Film Production workflows and logistical coordination",
      "Created high-fidelity visual assets using Adobe Photoshop for production pitches",
      "Collaborated with production teams to realize cinematic visual concepts"
    ]
  },
  {
    role: "Video Editor",
    company: "eClerx",
    location: "Maharashtra, India",
    period: "Jul 2022 – Aug 2023",
    highlights: [
      "Created appropriate structures and timelines from training raw data to ensure logical flow",
      "Designed custom graphics and icons for enhanced educational visualization",
      "Executed end-to-end video integration and publishing at peak broadcast quality",
      "Managed scheduled reporting and strictly adhered to project Turnaround Time (TAT)",
      "Performed comprehensive editing (cut/copy/paste) for training session recordings",
      "Visualized complex content for optimal audience presentation and engagement",
      "Analyzed recordings to enlist key topics and sub-topics for structured learning",
      "Proficient in Adobe Premiere Pro, Illustrator, Photoshop, Lightroom, and After Effects"
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