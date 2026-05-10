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
      title: 'Building Brutal UIs with Tailwind CSS',
      excerpt: 'A deep dive into creating hard-edged, bold interfaces using utility-first CSS',
      category: 'TECH',
      date: 'Mar 15, 2024',
      bg: 'bg-yellow-300',
      readTime: '8 min read',
    },
    {
      title: 'Workplace Diplomacy in Tech Teams',
      excerpt: 'Navigating conflicts and building strong relationships in engineering teams',
      category: 'SOFT SKILLS',
      date: 'Mar 10, 2024',
      bg: 'bg-pink-400',
      readTime: '6 min read',
    },
    {
      title: 'Silent Deep Work: The Art of Focus',
      excerpt: 'How to achieve flow state and maximize productivity in a noisy world',
      category: 'PRODUCTIVITY',
      date: 'Mar 5, 2024',
      bg: 'bg-cyan-300',
      readTime: '10 min read',
    },
    {
      title: 'Next.js 15 Performance Tips',
      excerpt: 'Optimization techniques that will make your Next.js applications lightning fast',
      category: 'TECH',
      date: 'Feb 28, 2024',
      bg: 'bg-lime-400',
      readTime: '12 min read',
    },
    {
      title: 'Design Systems at Scale',
      excerpt: 'Creating and maintaining design systems for enterprise applications',
      category: 'DESIGN',
      date: 'Feb 20, 2024',
      bg: 'bg-orange-400',
      readTime: '9 min read',
    },
    {
      title: 'The Psychology of Good UX',
      excerpt: 'Understanding user behavior to create more intuitive interfaces',
      category: 'UX',
      date: 'Feb 12, 2024',
      bg: 'bg-blue-400',
      readTime: '7 min read',
    },
  ];

  return (
    <section className="w-full min-h-screen bg-white p-4 md:p-8 py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-7xl font-black text-black mb-4">{title}</h1>
          <p className="text-xl font-bold text-black">{desc}</p>
        </div>

        {/* Articles Feed */}
        <div className="space-y-6">
          {articles.map((article, idx) => (
            <NeoCard
              key={idx}
              shadow="lg"
              className={`${article.bg} p-6 md:p-8 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer`}
            >
              <div className="flex flex-col md:flex-row justify-between md:items-start gap-4 mb-4">
                <div className="flex-1">
                  <div className="flex gap-2 mb-3 flex-wrap">
                    <span className="bg-white text-black px-3 py-1 text-xs font-black border-2 border-black">
                      {article.category}
                    </span>
                    <span className="text-sm font-bold text-black">{article.readTime}</span>
                  </div>
                  <h3 className="text-3xl font-black text-black mb-2">{article.title}</h3>
                  <p className="text-base font-semibold text-black mb-4">{article.excerpt}</p>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <p className="text-sm font-bold text-gray-700">{article.date}</p>
                <NeoButton variant="info" size="sm">
                  READ MORE
                </NeoButton>
              </div>
            </NeoCard>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 pt-12 border-t-4 border-black">
          <NeoCard shadow="xl" className="p-8 md:p-12 bg-yellow-300">
            <h2 className="text-4xl font-black text-black mb-4">SUBSCRIBE TO INSIGHTS</h2>
            <p className="text-lg font-bold text-black mb-6">Get weekly articles on tech, UX, and career growth</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 border-2 border-black font-bold focus:outline-none focus:ring-4 focus:ring-black"
              />
              <NeoButton variant="destructive" size="md">
                SUBSCRIBE
              </NeoButton>
            </div>
          </NeoCard>
        </div>
      </div>
    </section>
  );
};

export default SmartTalkHeroSection;
