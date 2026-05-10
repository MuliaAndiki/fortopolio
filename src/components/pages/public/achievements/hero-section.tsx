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
      badge: '🍎',
      title: 'APPLE ACADEMY 2027 CANDIDATE',
      description: 'Currently building a high-impact portfolio for the 2027 cohort application.',
      year: 'TARGET: JUNE 2026',
      bg: 'bg-neo-pink',
    },
    {
      badge: '🏛️',
      title: '6th SEMESTER CS STUDENT',
      description: 'Active university student focusing on Software Engineering and AI.',
      year: '2023-PRESENT',
      bg: 'bg-neo-blue',
      textColor: 'text-neo-white',
    },
    {
      badge: '🧪',
      title: 'NATURAL SCIENCES BACKGROUND',
      description: 'Strong foundation in analytical thinking and problem solving from IPA background.',
      year: '2020-2023',
      bg: 'bg-neo-green',
    },
    {
      badge: '🏆',
      title: 'HACKATHON FINALIST',
      description: 'Developed innovative solutions for environmental monitoring using real-time data.',
      year: '2024',
      bg: 'bg-neo-yellow',
    },
  ];

  return (
    <section className="w-full min-h-screen bg-neo-white p-4 md:p-8 pt-24 pb-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-6xl md:text-9xl font-black text-neo-black mb-4 uppercase leading-none">
            {title}
          </h1>
          <p className="text-xl md:text-2xl font-bold text-neo-black max-w-3xl border-l-8 border-neo-black pl-6">
            {desc}
          </p>
        </div>

        {/* Timeline/Badge Board */}
        <div className="space-y-12">
          {achievements.map((achievement, idx) => (
            <div key={idx} className="flex gap-6 md:gap-12 items-stretch group">
              {/* Timeline Connector */}
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 flex items-center justify-center text-5xl bg-neo-white neo-border neo-shadow-sm group-hover:neo-shadow transition-all group-hover:bg-neo-yellow">
                  {achievement.badge}
                </div>
                {idx < achievements.length - 1 && (
                  <div className="flex-1 w-2 bg-neo-black my-4"></div>
                )}
              </div>

              {/* Achievement Card */}
              <NeoCard
                shadow="lg"
                className={`${achievement.bg} ${achievement.textColor || 'text-neo-black'} p-8 md:p-10 flex-1 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all`}
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-black uppercase leading-tight">
                      {achievement.title}
                    </h3>
                    <p className="text-sm font-black mt-2 opacity-80 bg-neo-black text-neo-white inline-block px-2 py-1">
                      {achievement.year}
                    </p>
                  </div>
                </div>
                <p className="text-lg md:text-xl font-bold leading-relaxed max-w-2xl">
                  {achievement.description}
                </p>
              </NeoCard>
            </div>
          ))}
        </div>

        {/* Roadmap Section */}
        <div className="mt-24 pt-16 border-t-8 border-neo-black">
          <h2 className="text-5xl md:text-6xl font-black text-neo-black mb-12 uppercase italic">MISSION LOG</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <NeoCard shadow="lg" className="p-8 bg-neo-cyan">
              <p className="text-sm font-black text-neo-black mb-4 uppercase">Phase 01: Portfolio</p>
              <p className="text-2xl font-black text-neo-black mb-4 leading-none">CORE ARTIFACTS ASSEMBLY</p>
              <p className="text-sm font-bold text-neo-black/80">Finalizing AERIS and MORA integration by Q1 2026.</p>
            </NeoCard>
            <NeoCard shadow="lg" className="p-8 bg-neo-green">
              <p className="text-sm font-black text-neo-black mb-4 uppercase">Phase 02: Application</p>
              <p className="text-2xl font-black text-neo-black mb-4 leading-none">APPLE ACADEMY TARGET</p>
              <p className="text-sm font-bold text-neo-black/80">Submission window open: June 2026. Objective: Acceptance.</p>
            </NeoCard>
            <NeoCard shadow="lg" className="p-8 bg-neo-orange">
              <p className="text-sm font-black text-neo-black mb-4 uppercase">Phase 03: Specialization</p>
              <p className="text-2xl font-black text-neo-black mb-4 leading-none">AI & 3D INTEGRATION</p>
              <p className="text-sm font-bold text-neo-black/80">Scaling NutriPlate with YOLOv8 optimization.</p>
            </NeoCard>
          </div>
        </div>
      </div>
    </section>
  );

};

export default AchievementsHeroSection;
