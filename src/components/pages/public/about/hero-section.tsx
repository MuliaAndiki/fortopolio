import React from 'react';
import { NeoCard } from '@/components/atoms/NeoCard';
import Image from 'next/image';
import { techStack } from '@/constant/dummy';
import { SectionProps } from '@/types';

const AboutHeroSection: React.FC<SectionProps> = ({ title = 'About Me', desc = '' }) => {
  return (
    <section className="w-full min-h-screen bg-neo-white p-4 md:p-8 pt-24 pb-16">
      <div className="max-w-full mx-auto">
        <div className="mb-12">
          <h1 className="text-5xl md:text-8xl font-black text-neo-black mb-4 uppercase leading-none">
            {title}
          </h1>
          <p className="text-xl md:text-2xl font-bold text-neo-black max-w-3xl bg-neo-yellow neo-border-sm p-4 neo-shadow-sm inline-block">
            {desc}
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <NeoCard shadow="lg" className="lg:col-span-2 p-8 bg-neo-white">
            <h2 className="text-3xl font-black text-neo-black mb-6 uppercase border-b-4 border-neo-black pb-2 inline-block">
              IDENTIFICATION
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-black text-neo-black/60">NAME</p>
                  <p className="text-3xl font-black text-neo-black">MULIA ANDIKI</p>
                </div>
                <div>
                  <p className="text-sm font-black text-neo-black/60">ORIGIN</p>
                  <p className="text-2xl font-black text-neo-black">ACEH, INDONESIA</p>
                </div>
                <div>
                  <p className="text-sm font-black text-neo-black/60">ACADEMICS</p>
                  <p className="text-xl font-bold text-neo-black">6th SEMESTER STUDENT</p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-black text-neo-black/60">PRIMARY ROLE</p>
                  <p className="text-2xl font-black text-neo-black">FRONTEND DEVELOPER</p>
                </div>
                <div>
                  <p className="text-sm font-black text-neo-black/60">INTERESTS</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    <span className="bg-neo-green neo-border-sm px-2 py-1 text-xs font-black">
                      AI/ML
                    </span>
                    <span className="bg-neo-blue text-neo-white neo-border-sm px-2 py-1 text-xs font-black">
                      WEB
                    </span>
                    <span className="bg-neo-orange neo-border-sm px-2 py-1 text-xs font-black">
                      MOBILE
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t-4 border-neo-black">
              <p className="text-sm font-black text-neo-black/60 mb-2">OPERATIONAL BIO</p>
              <p className="text-lg font-bold text-neo-black leading-relaxed">
                Obsessed with high-performance web applications and bold design systems. Currently
                bridging the gap between traditional Frontend development and the future of
                AI-integrated interfaces. Born in the Natural Sciences (IPA), built in the digital
                realm.
              </p>
            </div>
          </NeoCard>

          <div className="flex flex-col gap-6">
            <NeoCard shadow="md" className="p-6 bg-neo-cyan flex-1 flex flex-col justify-center">
              <p className="text-xs font-black text-neo-black mb-1 uppercase">Mission</p>
              <p className="text-3xl font-black text-neo-black">APPLE DEVELOPER ACADEMY 2027</p>
              <p className="text-sm font-bold mt-2 text-neo-black/80">
                Targeting Application before June 15, 2026.
              </p>
            </NeoCard>
            <NeoCard shadow="md" className="p-6 bg-neo-green flex-1 flex flex-col justify-center">
              <p className="text-xs font-black text-neo-black mb-1 uppercase">Current Status</p>
              <p className="text-3xl font-black text-neo-black">ACTIVE BUILDING</p>
            </NeoCard>
          </div>
        </div>

        <div>
          <h2 className="text-4xl font-black text-neo-black mb-8 uppercase">THE TOOLKIT</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {techStack.map((tech) => (
              <NeoCard
                key={tech.name}
                shadow="sm"
                className="p-4 bg-neo-white flex flex-col items-center justify-center text-center hover:bg-neo-yellow hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-neo transition-all cursor-default space-y-3"
              >
                <Image alt="image" src={tech.image} width={75} height={75} />
                <p className="text-xs font-black text-neo-black uppercase">{tech.name}</p>
              </NeoCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
