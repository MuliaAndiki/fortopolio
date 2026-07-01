import React from 'react';
import { NeoCard } from '@/components/atoms/NeoCard';
import { achievements, organizations, projects } from '@/constant/portfolio';
import { SectionProps } from '@/types';
import Image from 'next/image';

const AchievementsHeroSection: React.FC<SectionProps> = ({ title = 'Achievements', desc = '' }) => {
  const activeProjects = projects.filter((p) => p.period.includes('Sekarang')).length;

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
            <div key={achievement.title} className="flex gap-6 md:gap-12 items-stretch group">
              <div className="flex flex-col items-center">
                <Image
                  alt={achievement.title}
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
                className={`${achievement.bg} p-8 md:p-10 flex-1 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all`}
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
            ORGANISASI
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {organizations.map((org) => (
              <NeoCard key={org.name} shadow="lg" className={`p-8 ${org.bg}`}>
                <p className="text-sm font-black text-neo-black mb-2 uppercase">{org.period}</p>
                <p className="text-2xl font-black text-neo-black mb-2 leading-none">{org.name}</p>
                <p className="text-xs font-black text-neo-black/70 uppercase mb-4">{org.role}</p>
                <p className="text-sm font-bold text-neo-black/80">{org.description}</p>
              </NeoCard>
            ))}
          </div>
        </div>

        <div className="mt-24 pt-16 border-t-8 border-neo-black">
          <h2 className="text-5xl md:text-6xl font-black text-neo-black mb-12 uppercase italic">
            MISSION LOG
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <NeoCard shadow="lg" className="p-8 bg-neo-cyan">
              <p className="text-sm font-black text-neo-black mb-4 uppercase">Phase 01: Etno</p>
              <p className="text-2xl font-black text-neo-black mb-4 leading-none">
                3D LEARNING PLATFORM
              </p>
              <p className="text-sm font-bold text-neo-black/80">
                Full Stack Development dengan Next.js, Bun, ElysiaJS, dan PostgreSQL.
              </p>
            </NeoCard>
            <NeoCard shadow="lg" className="p-8 bg-neo-green">
              <p className="text-sm font-black text-neo-black mb-4 uppercase">
                Phase 02: GETSMART
              </p>
              <p className="text-2xl font-black text-neo-black mb-4 leading-none">
                EMOTION DETECTION CV
              </p>
              <p className="text-sm font-bold text-neo-black/80">
                Platform pembelajaran berbasis Computer Vision dengan Google OAuth.
              </p>
            </NeoCard>
            <NeoCard shadow="lg" className="p-8 bg-neo-orange">
              <p className="text-sm font-black text-neo-black mb-4 uppercase">
                Phase 03: Active Builds
              </p>
              <p className="text-2xl font-black text-neo-black mb-4 leading-none">
                {activeProjects} PROJECTS LIVE
              </p>
              <p className="text-sm font-bold text-neo-black/80">
                Etno, GETSMART, Loka-Loka, dan KostHub sedang dalam pengembangan aktif.
              </p>
            </NeoCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsHeroSection;
