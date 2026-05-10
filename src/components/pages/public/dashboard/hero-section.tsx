import React from 'react';

import { NeoButton } from '@/components/atoms/NeoButton';
import { NeoCard } from '@/components/atoms/NeoCard';

interface Props {
  title?: string;
  desc?: string;
}

const DashboardHeroSection: React.FC<Props> = ({ title = 'My Analytics', desc = '' }) => {
  const stats = [
    { label: 'GitHub Commits', value: '2,847', unit: 'this year', bg: 'bg-yellow-300' },
    { label: 'Coding Hours', value: '1,256', unit: 'waka-time', bg: 'bg-pink-400' },
    { label: 'Projects Built', value: '45', unit: 'completed', bg: 'bg-cyan-300' },
    { label: 'Lines of Code', value: '1.2M', unit: 'written', bg: 'bg-lime-400' },
  ];

  const skills = [
    { name: 'React', level: 95 },
    { name: 'Next.js', level: 93 },
    { name: 'Tailwind CSS', level: 97 },
    { name: 'TypeScript', level: 90 },
    { name: 'UI/UX Design', level: 92 },
    { name: 'Performance', level: 85 },
  ];

  const ProgressBar = ({ level, color }: { level: number; color: string }) => (
    <div className="w-full h-4 bg-white border-2 border-black">
      <div
        className={`h-full ${color} transition-all`}
        style={{ width: `${level}%` }}
      ></div>
    </div>
  );

  return (
    <section className="w-full min-h-screen bg-orange-400 p-4 md:p-8 py-12 md:py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-7xl font-black text-black mb-4">{title}</h1>
          <p className="text-xl font-bold text-black">{desc}</p>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, idx) => (
            <NeoCard
              key={idx}
              shadow="lg"
              className={`${stat.bg} p-6 text-center hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all`}
            >
              <p className="text-sm font-black text-black mb-2">{stat.label}</p>
              <p className="text-4xl font-black text-black mb-2">{stat.value}</p>
              <p className="text-xs font-bold text-gray-700">{stat.unit}</p>
            </NeoCard>
          ))}
        </div>

        {/* Skills Section */}
        <NeoCard shadow="lg" className="p-8 md:p-12 bg-white mb-12">
          <h2 className="text-4xl font-black text-black mb-8">SKILL MATRIX</h2>

          <div className="space-y-6">
            {skills.map((skill, idx) => (
              <div key={idx}>
                <div className="flex justify-between mb-2">
                  <p className="font-black text-black text-lg">{skill.name}</p>
                  <p className="font-bold text-black">{skill.level}%</p>
                </div>
                <ProgressBar
                  level={skill.level}
                  color={idx % 3 === 0 ? 'bg-yellow-400' : idx % 3 === 1 ? 'bg-cyan-300' : 'bg-lime-400'}
                />
              </div>
            ))}
          </div>
        </NeoCard>

        {/* Activity Heatmap */}
        <div className="grid md:grid-cols-2 gap-8">
          <NeoCard shadow="lg" className="p-8 bg-cyan-300">
            <h3 className="text-3xl font-black text-black mb-6">YEARLY ACTIVITY</h3>
            <div className="grid grid-cols-7 gap-2 mb-4">
              {Array.from({ length: 52 }).map((_, week) => (
                <div key={week} className="space-y-2">
                  {Array.from({ length: 7 }).map((_, day) => (
                    <div
                      key={day}
                      className={`w-4 h-4 border-2 border-black ${
                        Math.random() > 0.3 ? 'bg-white' : 'bg-black'
                      }`}
                    ></div>
                  ))}
                </div>
              ))}
            </div>
            <p className="text-xs font-bold text-black">Less</p>
          </NeoCard>

          <NeoCard shadow="lg" className="p-8 bg-lime-400">
            <h3 className="text-3xl font-black text-black mb-6">TECH USAGE</h3>
            <div className="space-y-3">
              {[
                { tech: 'TypeScript', pct: 45 },
                { tech: 'React/JSX', pct: 30 },
                { tech: 'CSS/Tailwind', pct: 15 },
                { tech: 'Other', pct: 10 },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="flex-1 h-6 bg-white border-2 border-black">
                    <div
                      className="h-full bg-black"
                      style={{ width: `${item.pct}%` }}
                    ></div>
                  </div>
                  <p className="font-bold text-black text-sm w-12">{item.pct}%</p>
                </div>
              ))}
            </div>
          </NeoCard>
        </div>
      </div>
    </section>
  );
};

export default DashboardHeroSection;
