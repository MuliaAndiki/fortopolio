import React from 'react';
import { NeoCard } from '@/components/atoms/NeoCard';
import SkillMatric from '@/components/organisms/SkillMatric';
import CommitArchive from '@/components/organisms/CommitArchive';
import { SectionProps } from '@/types';

import { projects } from '@/constant/portfolio';

const DashboardHeroSection: React.FC<SectionProps> = ({ title = 'My Analytics', desc = '' }) => {
  const activeProjects = projects.filter((p) => p.period.includes('Sekarang')).length;

  const stats = [
    { label: 'TOTAL PROJECTS', value: String(projects.length), unit: 'COMPLETED & ACTIVE', bg: 'bg-neo-yellow' },
    { label: 'ACTIVE BUILDS', value: String(activeProjects), unit: 'IN PROGRESS', bg: 'bg-neo-pink' },
    { label: 'TECH STACK', value: '15+', unit: 'TOOLS MASTERED', bg: 'bg-neo-cyan' },
    { label: 'INNOVILLAGE', value: 'TOP 180', unit: 'NASIONAL 2025', bg: 'bg-neo-green' },
  ];

  return (
    <section className="w-full min-h-screen bg-neo-white p-4 md:p-8 pt-24 pb-16">
      <div className="max-w-full mx-auto">
        <div className="mb-16">
          <h1 className="text-6xl md:text-9xl font-black text-neo-black mb-4 uppercase leading-none italic">
            {title}
          </h1>
          <p className="text-xl md:text-2xl font-bold text-neo-black max-w-2xl border-l-8 border-neo-black pl-6 italic">
            {desc}
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, idx) => (
            <NeoCard
              key={idx}
              shadow="md"
              className={`${stat.bg} p-8 flex flex-col items-center justify-center text-center hover:translate-y-[-4px] hover:shadow-neo transition-all`}
            >
              <p className="text-xs font-black text-neo-black mb-2 uppercase tracking-tighter">
                {stat.label}
              </p>
              <p className="text-5xl md:text-6xl font-black text-neo-black leading-none">
                {stat.value}
              </p>
              <p className="text-xs font-black text-neo-black mt-2 uppercase">{stat.unit}</p>
            </NeoCard>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          <SkillMatric />

          <CommitArchive />
        </div>
      </div>
    </section>
  );
};

export default DashboardHeroSection;
