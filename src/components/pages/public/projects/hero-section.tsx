import React from 'react';

import { NeoButton } from '@/components/atoms/NeoButton';
import { NeoCard } from '@/components/atoms/NeoCard';
import Image from 'next/image';
import { projects } from '@/constant/dummy';
import { tagIcons } from '@/utils';
import { SectionProps } from '@/types';

const ProjectHeroSection: React.FC<SectionProps> = ({ title = 'My Projects', desc = '' }) => {
  return (
    <section className="w-full min-h-screen bg-neo-white p-4 md:p-8 pt-24 pb-16">
      <div className="max-w-full mx-auto">
        <div className="mb-16 border-b-8 border-neo-black pb-8">
          <h1 className="text-6xl md:text-9xl font-black text-neo-black mb-4 uppercase leading-none italic">
            {title}
          </h1>
          <p className="text-xl md:text-2xl font-bold text-neo-black max-w-3xl">{desc}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, idx) => (
            <NeoCard
              key={idx}
              shadow="xl"
              className={`${project.bg} p-10 flex flex-col justify-between hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all group`}
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className={`text-4xl md:text-5xl font-black uppercase ${project.textColor}`}>
                    {project.name}
                  </h3>
                </div>
                <p
                  className={`text-lg md:text-xl font-bold mb-8 leading-tight ${project.textColor}`}
                >
                  {project.desc}
                </p>
              </div>

              <div>
                <div className="mb-8 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <div className="flex justify-start items-center flex-col  space-y-5">
                      <span
                        key={tag}
                        className=" bg-neo-black text-neo-white px-3 py-1 text-xs font-black uppercase tracking-widest"
                      >
                        {tag}
                      </span>
                      {tagIcons[tag] && (
                        <Image
                          alt={`${tag} icon`}
                          width={50}
                          height={50}
                          src={tagIcons[tag]}
                          className="object-cover "
                        />
                      )}
                    </div>
                  ))}
                </div>

                <NeoButton
                  variant="primary"
                  size="lg"
                  className="w-full bg-neo-white text-neo-black hover:bg-neo-yellow border-4"
                >
                  EXPLORE ARTIFACT
                </NeoButton>
              </div>
            </NeoCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectHeroSection;
