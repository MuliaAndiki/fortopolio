import { ArticleType, Project, techStackType } from '@/types';
export const articles: ArticleType[] = [
  {
    title: 'English Learning Roadmap for Engineers',
    excerpt: 'How to transition from technical proficiency to global communication excellence.',
    category: 'CAREER',
    date: 'MAY 10, 2026',
    bg: 'bg-neo-yellow',
    readTime: '12 min read',
  },
  {
    title: 'Workplace Diplomacy',
    excerpt: 'The unspoken rules of navigating complex engineering environments with grace.',
    category: 'SOFT SKILLS',
    date: 'APR 24, 2026',
    bg: 'bg-neo-pink',
    readTime: '8 min read',
  },
  {
    title: 'Silent Deep Work',
    excerpt: 'Strategies for achieving high-output focus sessions in an age of distraction.',
    category: 'PRODUCTIVITY',
    date: 'APR 12, 2026',
    bg: 'bg-neo-cyan',
    readTime: '10 min read',
  },
  {
    title: 'Implementing YOLOv8 in Web Apps',
    excerpt: 'A technical guide to integrating real-time object detection using TensorFlow.js.',
    category: 'TECH',
    date: 'MAR 30, 2026',
    bg: 'bg-neo-green',
    readTime: '15 min read',
  },
];

export const techStack: techStackType[] = [
  { name: 'Next.js', image: '/images/svg/nextjs.svg' },
  { name: 'React', image: '/images/svg/react.svg' },
  { name: 'Tailwind', image: '/images/svg/tailwind.svg' },
  { name: 'Bun', image: '/images/svg/bun.svg' },
  { name: 'ElysiaJS', image: '/images/svg/elysiajs.svg' },
  { name: 'Pytorch', image: '/images/svg/pytorch.svg' },
  { name: 'TensorFlow', image: '/images/svg/tensorflow.svg' },
  { name: 'Prisma', image: '/images/svg/prisma.svg' },
  { name: 'Node', image: '/images/svg/nodejs.svg' },
  { name: 'Express', image: '/images/svg/expressjs.svg' },
  { name: 'Docker', image: '/images/svg/docker.svg' },
  { name: 'PostgresSQL', image: '/images/svg/postgressql.svg' },
  { name: 'ExpoJs', image: '/images/svg/expo.svg' },
  { name: 'Coolify', image: '/images/svg/coolify.svg' },
  { name: 'Vercel', image: '/images/svg/vercel.svg' },
  { name: 'Kaggle', image: '/images/svg/kaggle.svg' },
];

export const projects: Project[] = [
  {
    name: 'MORA',
    desc: 'Smart assistant and IoT platform for high-end residential markets. Frontend development lead.',
    tags: ['Next.js', 'React', 'IoT', 'Tailwind', 'ExpoJs'],
    bg: 'bg-neo-blue',
    textColor: 'text-neo-black',
  },
  {
    name: 'AERIS',
    desc: 'Real-time air quality, weather, and disaster risk dashboard. Integrated with Open-Meteo & API-Ninjas.',
    tags: ['Next.js'],
    bg: 'bg-neo-green',
    textColor: 'text-neo-black',
  },
  {
    name: 'NUTRIPLATE',
    desc: 'IoT/PWA platform using YOLOv8 for child nutrition classification and tracking.',
    tags: ['Next.js', 'React', 'YOLO', 'IoT'],
    bg: 'bg-neo-pink',
    textColor: 'text-neo-black',
  },
];
