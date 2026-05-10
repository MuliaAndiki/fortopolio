import React from 'react';

import { NeoButton } from '@/components/atoms/NeoButton';
import { NeoCard } from '@/components/atoms/NeoCard';

interface Props {
  title?: string;
  desc?: string;
}

const AboutHeroSection: React.FC<Props> = ({ title = 'About Me', desc = '' }) => {
  const techStack = [
    { name: 'Next.js', emoji: '⚡' },
    { name: 'React', emoji: '⚛️' },
    { name: 'Tailwind', emoji: '🎨' },
    { name: 'Bun', emoji: '🥖' },
    { name: 'ElysiaJS', emoji: '🚀' },
    { name: 'YOLO', emoji: '🤖' },
  ];

  return (
    <section className="w-full min-h-screen bg-pink-400 p-4 md:p-8 py-12 md:py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-7xl font-black text-black mb-4">{title}</h1>
          <p className="text-xl font-bold text-black max-w-2xl">{desc}</p>
        </div>

        {/* Digital ID Card */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <NeoCard shadow="lg" className="p-8 bg-white">
            <h2 className="text-3xl font-black text-black mb-4">DIGITAL ID</h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-bold text-gray-600">NAME</p>
                <p className="text-2xl font-black text-black">MULIA ANDIKI</p>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-600">ROLE</p>
                <p className="text-2xl font-black text-black">FRONTEND DEV</p>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-600">FOCUS</p>
                <p className="text-lg font-bold text-black">Modern Web Tech & UI/UX Design</p>
              </div>
              <div className="pt-4">
                <p className="text-sm font-bold text-gray-600 mb-2">BIO</p>
                <p className="text-base font-semibold text-black">
                  Passionate about building beautiful, brutalist web experiences. Specialized in creating
                  performant, accessible, and visually striking interfaces using modern web technologies.
                </p>
              </div>
            </div>
          </NeoCard>

          {/* Profile Stats */}
          <div className="space-y-4">
            <NeoCard shadow="md" className="p-6 bg-cyan-300">
              <p className="text-sm font-bold text-black mb-1">EXPERIENCE</p>
              <p className="text-4xl font-black text-black">3+ YRS</p>
            </NeoCard>
            <NeoCard shadow="md" className="p-6 bg-lime-400">
              <p className="text-sm font-bold text-black mb-1">PROJECTS</p>
              <p className="text-4xl font-black text-black">15+</p>
            </NeoCard>
            <NeoCard shadow="md" className="p-6 bg-orange-400">
              <p className="text-sm font-bold text-black mb-1">FOCUS AREA</p>
              <p className="text-2xl font-black text-black">UI/UX DESIGN</p>
            </NeoCard>
          </div>
        </div>

        {/* Tech Stack Grid */}
        <div>
          <h2 className="text-4xl font-black text-black mb-6">TECH STACK</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {techStack.map((tech) => (
              <NeoCard
                key={tech.name}
                shadow="md"
                className="p-6 bg-white flex flex-col items-center justify-center text-center hover:bg-yellow-100 transition-all"
              >
                <p className="text-4xl mb-2">{tech.emoji}</p>
                <p className="text-sm font-bold text-black">{tech.name}</p>
              </NeoCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
