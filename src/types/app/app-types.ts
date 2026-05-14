type ProjectTag = 'Next.js' | 'React' | 'IoT' | 'Tailwind' | 'PWA' | 'YOLO' | 'ExpoJs';
type CategoryTag = 'CAREER' | 'SOFT SKILLS' | 'PRODUCTIVITY' | 'TECH';
export interface Project {
  name: string;
  desc: string;
  tags: ProjectTag[];
  bg: string;
  textColor: string;
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
