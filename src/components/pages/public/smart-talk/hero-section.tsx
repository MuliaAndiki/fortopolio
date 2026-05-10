import React from 'react';

import { NeoButton } from '@/components/atoms/NeoButton';
import { NeoCard } from '@/components/atoms/NeoCard';

interface SmartTalkHeroSectionProps {
  title: string;
  desc: string;
}

const SmartTalkHeroSection: React.FC<SmartTalkHeroSectionProps> = ({ desc, title }) => {
  const articles = [
    {
      title: 'English Learning Roadmap for Engineers',
      excerpt: 'How to transition from technical proficiency to global communication excellence.',
      category: 'CAREER',
      date: 'MAY 10, 2026',
      bg: 'bg-neo-yellow',
      readTime: '12 min read',
    },
    {
      title: 'Workplace Diplomacy',
      excerpt: 'The unspoken rules of navigating complex engineering environments with grace.',
      category: 'SOFT SKILLS',
      date: 'APR 24, 2026',
      bg: 'bg-neo-pink',
      readTime: '8 min read',
    },
    {
      title: 'Silent Deep Work',
      excerpt: 'Strategies for achieving high-output focus sessions in an age of distraction.',
      category: 'PRODUCTIVITY',
      date: 'APR 12, 2026',
      bg: 'bg-neo-cyan',
      readTime: '10 min read',
    },
    {
      title: 'Implementing YOLOv8 in Web Apps',
      excerpt: 'A technical guide to integrating real-time object detection using TensorFlow.js.',
      category: 'TECH',
      date: 'MAR 30, 2026',
      bg: 'bg-neo-green',
      readTime: '15 min read',
    },
  ];

  return (
    <section className="w-full min-h-screen bg-neo-white p-4 md:p-8 pt-24 pb-16">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-6xl md:text-9xl font-black text-neo-black mb-4 uppercase leading-none italic">
            {title}
          </h1>
          <p className="text-xl md:text-2xl font-bold text-neo-black max-w-2xl bg-neo-green neo-border-sm p-4 neo-shadow-sm inline-block">
            {desc}
          </p>
        </div>

        {/* Articles Feed */}
        <div className="space-y-10">
          {articles.map((article, idx) => (
            <NeoCard
              key={idx}
              shadow="lg"
              className={`${article.bg} p-8 md:p-10 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer group`}
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <span className="bg-neo-black text-neo-white px-3 py-1 text-xs font-black uppercase tracking-widest">
                    {article.category}
                  </span>
                  <span className="text-xs font-black text-neo-black uppercase">{article.readTime}</span>
                </div>
                
                <h3 className="text-4xl md:text-5xl font-black text-neo-black uppercase leading-none group-hover:underline decoration-4">
                  {article.title}
                </h3>
                
                <p className="text-lg md:text-xl font-bold text-neo-black leading-tight max-w-2xl">
                  {article.excerpt}
                </p>

                <div className="flex justify-between items-end mt-4 pt-6 border-t-4 border-neo-black/20">
                  <p className="text-sm font-black text-neo-black uppercase italic">{article.date}</p>
                  <div className="text-4xl group-hover:translate-x-2 transition-transform">→</div>
                </div>
              </div>
            </NeoCard>
          ))}
        </div>

        {/* Guestbook CTA */}
        <div className="mt-24 pt-16 border-t-8 border-neo-black">
          <NeoCard shadow="xl" className="p-10 md:p-16 bg-neo-blue text-neo-white">
            <h2 className="text-5xl md:text-6xl font-black mb-6 uppercase leading-none italic">JOIN THE DIALOGUE</h2>
            <p className="text-xl font-bold mb-8 max-w-xl">Drop your email to get notified when new artifacts are published.</p>
            <div className="flex flex-col sm:flex-row gap-6">
              <input
                type="email"
                placeholder="YOUR_EMAIL@VOXEL.NET"
                className="flex-1 px-6 py-4 border-4 border-neo-black bg-neo-white text-neo-black font-black uppercase focus:outline-none focus:bg-neo-yellow transition-colors placeholder:text-neo-black/40"
              />
              <NeoButton variant="primary" size="lg" className="bg-neo-white text-neo-black hover:bg-neo-green border-4">
                TRANSMIT
              </NeoButton>
            </div>
          </NeoCard>
        </div>
      </div>
    </section>
  );

};

export default SmartTalkHeroSection;
