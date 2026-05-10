import React from 'react';

import { NeoButton } from '@/components/atoms/NeoButton';
import { NeoCard } from '@/components/atoms/NeoCard';

interface Props {
  title?: string;
  desc?: string;
}

const AchievementsHeroSection: React.FC<Props> = ({ title = 'Achievements', desc = '' }) => {
  const achievements = [
    {
      badge: '🏆',
      title: 'Hackathon Winner',
      description: 'Won first place at National Web Development Hackathon 2023',
      year: '2023',
      bg: 'bg-yellow-300',
    },
    {
      badge: '📚',
      title: 'Computer Science Degree',
      description: 'Graduated with honors from State University',
      year: '2021',
      bg: 'bg-cyan-300',
    },
    {
      badge: '⭐',
      title: 'Open Source Contributor',
      description: 'Active contributor to 10+ open-source projects',
      year: '2022-2024',
      bg: 'bg-lime-400',
    },
    {
      badge: '🎯',
      title: 'Apple Developer Academy 2027',
      description: 'Applying for the prestigious Apple Developer Academy cohort',
      year: '2025-2027',
      bg: 'bg-pink-400',
    },
    {
      badge: '🚀',
      title: 'Tech Speaker',
      description: 'Spoken at 5+ tech conferences about UI/UX design',
      year: '2023-2024',
      bg: 'bg-orange-400',
    },
    {
      badge: '💼',
      title: 'Senior Developer Role',
      description: 'Promoted to Senior Frontend Developer at Tech Corp',
      year: '2024',
      bg: 'bg-blue-400',
    },
  ];

  return (
    <section className="w-full min-h-screen bg-white p-4 md:p-8 py-12 md:py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-7xl font-black text-black mb-4">{title}</h1>
          <p className="text-xl font-bold text-black">{desc}</p>
        </div>

        {/* Timeline/Badge Board */}
        <div className="space-y-6">
          {achievements.map((achievement, idx) => (
            <div key={idx} className="flex gap-4 md:gap-8 items-start">
              {/* Timeline Connector */}
              <div className="flex flex-col items-center pt-2">
                <NeoCard
                  shadow="none"
                  className="w-16 h-16 flex items-center justify-center text-4xl border-4 border-black"
                >
                  {achievement.badge}
                </NeoCard>
                {idx < achievements.length - 1 && (
                  <div className="w-1 h-16 bg-black my-2"></div>
                )}
              </div>

              {/* Achievement Card */}
              <NeoCard
                shadow="lg"
                className={`${achievement.bg} p-6 md:p-8 flex-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-black text-black">{achievement.title}</h3>
                    <p className="text-sm font-bold text-gray-700 mt-1">{achievement.year}</p>
                  </div>
                </div>
                <p className="text-base font-semibold text-black">{achievement.description}</p>
              </NeoCard>
            </div>
          ))}
        </div>

        {/* Roadmap Section */}
        <div className="mt-16 pt-12 border-t-4 border-black">
          <h2 className="text-4xl font-black text-black mb-8">2025 ROADMAP</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <NeoCard shadow="lg" className="p-8 bg-cyan-300">
              <p className="text-sm font-bold text-black mb-2">Q1</p>
              <p className="text-2xl font-black text-black">MASTER NEXT.JS 15</p>
              <p className="text-sm font-semibold text-black mt-4">Deep dive into new features and performance optimizations</p>
            </NeoCard>
            <NeoCard shadow="lg" className="p-8 bg-lime-400">
              <p className="text-sm font-bold text-black mb-2">Q2-Q3</p>
              <p className="text-2xl font-black text-black">APPLE ACADEMY</p>
              <p className="text-sm font-semibold text-black mt-4">Apply and prepare for the prestigious developer program</p>
            </NeoCard>
            <NeoCard shadow="lg" className="p-8 bg-pink-400">
              <p className="text-sm font-bold text-black mb-2">Q4</p>
              <p className="text-2xl font-black text-black">LAUNCH STARTUP</p>
              <p className="text-sm font-semibold text-black mt-4">Build and launch my own SaaS product</p>
            </NeoCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsHeroSection;
