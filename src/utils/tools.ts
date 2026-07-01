export const skillLevels = [
  { name: 'NEXT.JS', level: 95, color: 'bg-neo-yellow' },
  { name: 'REACT', level: 93, color: 'bg-neo-cyan' },
  { name: 'TAILWIND CSS', level: 98, color: 'bg-neo-pink' },
  { name: 'BUN / ELYSIAJS', level: 85, color: 'bg-neo-green' },
  { name: 'PYTHON / FASTAPI', level: 80, color: 'bg-neo-orange' },
  { name: 'YOLOv8 / CNN', level: 75, color: 'bg-neo-purple' },
];

export const tagIcons: Record<string, string> = {
  'Next.js': '/images/svg/nextjs.svg',
  React: '/images/svg/react.svg',
  YOLO: '/images/svg/yolo.svg',
  Tailwind: '/images/svg/tailwind.svg',
  IoT: '/images/svg/iot.svg',
  PWA: '/images/svg/react.svg',
  Bun: '/images/svg/bun.svg',
  ElysiaJS: '/images/svg/elysiajs.svg',
  'Express.js': '/images/svg/expressjs.svg',
  PostgreSQL: '/images/svg/postgressql.svg',
};

// Backward-compatible alias
export const skills = skillLevels;
