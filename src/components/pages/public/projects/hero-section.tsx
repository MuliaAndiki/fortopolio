import React from 'react';

import { NeoButton } from '@/components/atoms/NeoButton';
import { NeoCard } from '@/components/atoms/NeoCard';

interface Props {
  title?: string;
  desc?: string;
}

const ProjectHeroSection: React.FC<Props> = ({ title = 'My Projects', desc = '' }) => {
  const projects = [
    {
      name: 'MORA (FLUXO)',
      desc: 'Project management platform with real-time collaboration',
      tags: ['Next.js', 'React', 'Tailwind', 'WebSocket'],
      bg: 'bg-cyan-300',
    },
    {
      name: 'AERIS',
      desc: 'Environmental dashboard tracking air quality metrics',
      tags: ['Next.js', 'Charts', 'API Integration', 'Data Viz'],
      bg: 'bg-lime-400',
    },
    {
      name: 'NUTRIPLATE',
      desc: 'Meal planning and nutrition tracking application',
      tags: ['React', 'Tailwind', 'Database', 'Mobile'],
      bg: 'bg-pink-400',
    },
    {
      name: 'GETSMART',
      desc: 'Educational platform for online learning and certifications',
      tags: ['Next.js', 'Auth', 'Video Streaming', 'Analytics'],
      bg: 'bg-orange-400',
    },
  ];

  return (
    <section className="w-full min-h-screen bg-yellow-400 p-4 md:p-8 py-12 md:py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-7xl font-black text-black mb-4">{title}</h1>
          <p className="text-xl font-bold text-black">{desc}</p>
        </div>

        {/* Projects Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <NeoCard
              key={idx}
              shadow="xl"
              className={`${project.bg} p-8 flex flex-col justify-between hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all`}
            >
              <div>
                <h3 className="text-3xl font-black text-black mb-3">{project.name}</h3>
                <p className="text-lg font-bold text-black mb-6">{project.desc}</p>
              </div>

              {/* Tags */}
              <div className="mb-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-white text-black px-3 py-1 text-sm font-bold border border-black"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <NeoButton
                variant="destructive"
                size="md"
                className="w-full"
              >
                VIEW DETAILS
              </NeoButton>
            </NeoCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectHeroSection;
