import React from 'react';

import { NeoButton } from '@/components/atoms/NeoButton';
import { NeoCard } from '@/components/atoms/NeoCard';

interface Props {
  title?: string;
  desc?: string;
}

const DashboardHeroSection: React.FC<Props> = ({ title = 'My Analytics', desc = '' }) => {
  const stats = [
    { label: 'GITHUB COMMITS', value: '1,422', unit: 'THIS YEAR', bg: 'bg-neo-yellow' },
    { label: 'CODING HOURS', value: '840+', unit: 'WAKA-TIME', bg: 'bg-neo-pink' },
    { label: 'ACTIVE PROJECTS', value: '4', unit: 'IN PRODUCTION', bg: 'bg-neo-cyan' },
    { label: 'UPTIME', value: '99.9%', unit: 'STABLE', bg: 'bg-neo-green' },
  ];

  const skills = [
    { name: 'NEXT.JS', level: 95, color: 'bg-neo-yellow' },
    { name: 'REACT', level: 93, color: 'bg-neo-cyan' },
    { name: 'TAILWIND', level: 98, color: 'bg-neo-pink' },
    { name: 'BUN/ELYSIA', level: 85, color: 'bg-neo-green' },
    { name: 'ML (YOLO/TF)', level: 75, color: 'bg-neo-orange' },
    { name: 'UI/UX DESIGN', level: 90, color: 'bg-neo-purple' },
  ];

  // Mock data for contribution graph
  const contributionData = Array.from({ length: 365 }, (_, i) => ({
    level: Math.floor(Math.random() * 5), // 0 to 4
  }));

  const getColorClass = (level: number) => {
    switch (level) {
      case 0: return 'bg-neo-white';
      case 1: return 'bg-neo-green opacity-30';
      case 2: return 'bg-neo-green opacity-60';
      case 3: return 'bg-neo-green opacity-80';
      case 4: return 'bg-neo-green';
      default: return 'bg-neo-white';
    }
  };

  return (
    <section className="w-full min-h-screen bg-neo-white p-4 md:p-8 pt-24 pb-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-6xl md:text-9xl font-black text-neo-black mb-4 uppercase leading-none italic">
            {title}
          </h1>
          <p className="text-xl md:text-2xl font-bold text-neo-black max-w-2xl border-l-8 border-neo-black pl-6 italic">
            {desc}
          </p>
        </div>

        {/* Key Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, idx) => (
            <NeoCard
              key={idx}
              shadow="md"
              className={`${stat.bg} p-8 flex flex-col items-center justify-center text-center hover:translate-y-[-4px] hover:shadow-neo transition-all`}
            >
              <p className="text-xs font-black text-neo-black mb-2 uppercase tracking-tighter">{stat.label}</p>
              <p className="text-5xl md:text-6xl font-black text-neo-black leading-none">{stat.value}</p>
              <p className="text-xs font-black text-neo-black mt-2 uppercase">{stat.unit}</p>
            </NeoCard>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Skill Matrix */}
          <NeoCard shadow="lg" className="lg:col-span-1 p-8 bg-neo-white border-neo-black">
            <h2 className="text-4xl font-black text-neo-black mb-10 uppercase border-b-4 border-neo-black pb-2 inline-block leading-none">
              SKILL MATRIX
            </h2>
            <div className="space-y-8">
              {skills.map((skill, idx) => (
                <div key={idx}>
                  <div className="flex justify-between mb-2">
                    <p className="font-black text-neo-black text-sm uppercase">{skill.name}</p>
                    <p className="font-black text-neo-black text-sm">{skill.level}%</p>
                  </div>
                  <div className="w-full h-6 bg-neo-white neo-border-sm neo-shadow-sm p-1">
                    <div
                      className={`h-full ${skill.color} transition-all duration-1000`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </NeoCard>

          {/* GitHub Graph */}
          <NeoCard shadow="lg" className="lg:col-span-2 p-8 bg-neo-white flex flex-col">
            <h2 className="text-4xl font-black text-neo-black mb-10 uppercase border-b-4 border-neo-black pb-2 inline-block leading-none">
              COMMIT ARCHIVE
            </h2>
            
            <div className="flex-1 overflow-x-auto pb-4 custom-scrollbar">
              <div className="min-w-[700px]">
                <div className="grid grid-flow-col grid-rows-7 gap-1">
                  {contributionData.map((data, idx) => (
                    <div
                      key={idx}
                      className={`w-3 h-3 neo-border-sm ${getColorClass(data.level)}`}
                      title={`Contribution Level: ${data.level}`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <p className="text-xs font-black text-neo-black">LESS</p>
                <div className="flex gap-1">
                  {[0, 1, 2, 3, 4].map((l) => (
                    <div key={l} className={`w-3 h-3 neo-border-sm ${getColorClass(l)}`}></div>
                  ))}
                </div>
                <p className="text-xs font-black text-neo-black">MORE</p>
              </div>
              <NeoButton variant="secondary" size="sm" className="neo-border-sm shadow-neo-sm hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
                FETCH LIVE_DATA
              </NeoButton>
            </div>
          </NeoCard>
        </div>

        {/* Technical Status Card */}
        <NeoCard shadow="lg" className="p-10 bg-neo-black text-neo-white">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
            <div>
              <p className="text-neo-green font-black mb-2 uppercase tracking-widest">SYSTEM_STATUS: OPERATIONAL</p>
              <h2 className="text-4xl md:text-5xl font-black uppercase leading-none italic">CURRENT_FOCUS: MACHINE_LEARNING_INTEGRATION</h2>
            </div>
            <div className="w-full md:w-auto">
              <p className="text-6xl font-black text-neo-yellow">0.02s</p>
              <p className="text-xs font-black uppercase tracking-widest opacity-60">LATENCY_CORE_PROCESS</p>
            </div>
          </div>
        </NeoCard>
      </div>
    </section>
  );

};

export default DashboardHeroSection;
