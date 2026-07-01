type ProjectTag =
  | 'Next.js'
  | 'React'
  | 'IoT'
  | 'Tailwind'
  | 'PWA'
  | 'YOLO'
  | 'Bun'
  | 'ElysiaJS'
  | 'Express.js'
  | 'PostgreSQL';
type CategoryTag = 'CAREER' | 'SOFT SKILLS' | 'PRODUCTIVITY' | 'TECH';

export interface ProfileType {
  name: string;
  email: string;
  phone: string;
  location: string;
  role: string;
  linkedin: string;
  github: string;
  portfolio: string;
}

export interface Project {
  name: string;
  role: string;
  period: string;
  desc: string;
  tags: ProjectTag[];
  bg: string;
  textColor: string;
}

export interface OrganizationType {
  name: string;
  role: string;
  period: string;
  description: string;
  bg: string;
}

export interface SosialLinks {
  name: string;
  image: string;
  url: string;
  desc: string;
}

export interface ArticleType {
  title: string;
  excerpt: string;
  category: CategoryTag;
  date: string;
  bg: string;
  readTime: string;
}

export interface techStackType {
  name: string;
  image: string;
}

export interface AchievementsType {
  image: string;
  title: string;
  description: string;
  year: string;
  bg: string;
}

export interface SectionProps {
  title: string;
  desc: string;
}
