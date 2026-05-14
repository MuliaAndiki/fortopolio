import React from 'react';
import { NeoButton } from '@/components/atoms/NeoButton';
import { NeoCard } from '@/components/atoms/NeoCard';
import { articles } from '@/constant/dummy';
import Article from '@/components/organisms/Article';
import { SectionProps } from '@/types';

const SmartTalkHeroSection: React.FC<SectionProps> = ({ desc, title }) => {
  return (
    <section className="w-full min-h-screen bg-neo-white p-4 md:p-8 pt-24 pb-16">
      <div className="max-w-full mx-auto  ">
        <div className="mb-16">
          <h1 className="text-6xl md:text-9xl font-black text-neo-black mb-4 uppercase leading-none italic">
            {title}
          </h1>
          <p className="text-xl md:text-2xl font-bold text-neo-black max-w-2xl bg-neo-green neo-border-sm p-4 neo-shadow-sm inline-block">
            {desc}
          </p>
        </div>

        <Article articles={articles} />

        <div className="mt-24 pt-16 border-t-8 border-neo-black">
          <NeoCard shadow="xl" className="p-10 md:p-16 bg-neo-blue text-neo-white">
            <h2 className="text-5xl md:text-6xl font-black mb-6 uppercase leading-none italic">
              JOIN THE DIALOGUE
            </h2>
            <p className="text-xl font-bold mb-8 max-w-xl">
              Drop your email to get notified when new artifacts are published.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <input
                type="email"
                placeholder="YOUR EMAIL@VOXEL.NET"
                className="flex-1 px-6 py-4 border-4 border-neo-black bg-neo-white text-neo-black font-black uppercase focus:outline-none focus:bg-neo-yellow transition-colors placeholder:text-neo-black/40"
              />
              <NeoButton
                variant="primary"
                size="lg"
                className="bg-neo-white text-neo-black hover:bg-neo-green border-4"
              >
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
