export interface Project {
  id: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  techStack: string[];
  features: string[];
  challenges: string;
  learnings: string;
  githubUrl?: string;
  demoUrl?: string;
  category: "ai" | "data" | "web" | "automation";
  featured: boolean;
}

export interface Skill {
  name: string;
  category: "programming" | "data-science" | "dev-tools" | "ai-automation";
  proficiency: number; // Percentage
  desc: string;
}

export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  subtitle: string;
  description: string;
  type: "education" | "experience" | "achievement";
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credId?: string;
  url?: string;
  topics: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  skills: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  tags: string[];
}
