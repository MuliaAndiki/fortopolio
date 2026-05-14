import React from 'react';
import { NeoCard } from '@/components/atoms/NeoCard';
import { AchievementsType, SectionProps } from '@/types';
import Image from 'next/image';

const AchievementsHeroSection: React.FC<SectionProps> = ({ title = 'Achievements', desc = '' }) => {
  const achievements: AchievementsType[] = [
    {
      image: '/images/svg/Innovillage.svg',
      title: 'Innovillage',
      description: 'Top 180 Best Team in Indonesia',
      year: 'DONE: JUNE 2026',
      bg: 'bg-neo-pink',
    },
    {
      image: '/images/svg/school.svg',
      title: '6th SEMESTER CS STUDENT',
      description: 'Active university student focusing on Software Engineering and AI.',
      year: '2023-PRESENT',
      bg: 'bg-neo-blue',
    },
    {
      image: '/images/svg/science.svg',
      title: 'NATURAL SCIENCES BACKGROUND',
      description:
        'Strong foundation in analytical thinking and problem solving from IPA background.',
      year: '2020-2023',
      bg: 'bg-neo-green',
    },
  ];

  return (
    <section className="w-full min-h-screen bg-neo-white p-4 md:p-8 pt-24 pb-16">
      <div className="max-w-full mx-auto">
        <div className="mb-16">
          <h1 className="text-6xl md:text-9xl font-black text-neo-black mb-4 uppercase leading-none">
            {title}
          </h1>
          <p className="text-xl md:text-2xl font-bold text-neo-black max-w-3xl border-l-8 border-neo-black pl-6">
            {desc}
          </p>
        </div>

        <div className="space-y-12">
          {achievements.map((achievement, idx) => (
            <div key={idx} className="flex gap-6 md:gap-12 items-stretch group">
              <div className="flex flex-col items-center">
                <Image
                  alt="svg"
                  src={achievement.image}
                  width={85}
                  height={85}
                  className="object-cover aspect-square"
                />
                {idx < achievements.length - 1 && (
                  <div className="flex-1 w-2 bg-neo-black my-4"></div>
                )}
              </div>

              <NeoCard
                shadow="lg"
                className={`${achievement.bg}  || 'text-neo-black'} p-8 md:p-10 flex-1 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all`}
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

        <div className="mt-24 pt-16 border-t-8 border-neo-black">
          <h2 className="text-5xl md:text-6xl font-black text-neo-black mb-12 uppercase italic">
            MISSION LOG
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <NeoCard shadow="lg" className="p-8 bg-neo-cyan">
              <p className="text-sm font-black text-neo-black mb-4 uppercase">
                Phase 01: Portfolio
              </p>
              <p className="text-2xl font-black text-neo-black mb-4 leading-none">
                CORE ARTIFACTS ASSEMBLY
              </p>
              <p className="text-sm font-bold text-neo-black/80">
                Finalizing Nutriplate integration by Q1 2026.
              </p>
            </NeoCard>
            <NeoCard shadow="lg" className="p-8 bg-neo-green">
              <p className="text-sm font-black text-neo-black mb-4 uppercase">
                Phase 02: Application
              </p>
              <p className="text-2xl font-black text-neo-black mb-4 leading-none">
                Build My Product
              </p>
              <p className="text-sm font-bold text-neo-black/80">
                Submission window open: June 2028. Objective: Acceptance.
              </p>
            </NeoCard>
            <NeoCard shadow="lg" className="p-8 bg-neo-orange">
              <p className="text-sm font-black text-neo-black mb-4 uppercase">
                Phase 03: Specialization
              </p>
              <p className="text-2xl font-black text-neo-black mb-4 leading-none">
                Machine Learning
              </p>
              <p className="text-sm font-bold text-neo-black/80">
                Scaling NutriPlate with YOLOv8 optimization.
              </p>
            </NeoCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsHeroSection;
