export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  challenge: string;
  solution: string;
  technologies: string[];
  category: 'Full Stack' | 'Frontend' | 'Mobile App' | 'Backend';
  githubUrl: string;
  liveUrl?: string;
  image: string;
  featured: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  content: string; // Markdown formatted content
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  category: 'Frontend' | 'Backend' | 'Mobile' | 'Tools & DevOps';
  iconName: string; // Key of LucideIcons
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  type: 'work' | 'education';
}

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
}
