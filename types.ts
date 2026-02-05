export interface Project {
  title: string;
  client: string;
  deliverable: string;
  impact: string;
  image?: string;
  description?: string;
  challenges?: string[];
  technologies?: string[];
  liveLink?: string;
}

export interface BrandProject {
  name: string;
  category: string;
  description: string;
  deliverables: string[];
  link?: string;
  image: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface HardwareGroup {
  category: string;
  items: string;
}

export interface Methodology {
  label: string;
  detail: string;
}