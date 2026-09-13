import React from 'react';

import { NeoCard } from '../atoms';
import { initialGithubData, SkillStat } from '@/constant/github';

interface SkillMatricProps {
  skills?: SkillStat[];
  totalRepos?: number;
}

const SkillMatric: React.FC<SkillMatricProps> = ({
  skills = initialGithubData.skillMatrix,
  totalRepos = initialGithubData.publicRepos,
}) => {
  return (
    <NeoCard shadow="lg" className="lg:col-span-1 p-8 bg-neo-white border-neo-black flex flex-col justify-between">
      <div>
        <h2 className="text-4xl font-black text-neo-black mb-10 uppercase border-b-4 border-neo-black pb-2 inline-block leading-none">
          SKILL MATRIX
        </h2>
        <div className="space-y-8">
          {skills.map((skill, idx) => (
            <div key={idx}>
              <div className="flex justify-between items-baseline mb-2">
                <p className="font-black text-neo-black text-sm uppercase">{skill.name}</p>
                <p className="font-black text-neo-black text-xs">
                  {skill.count} REPOS ({skill.level}%)
                </p>
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
      </div>

      <div className="pt-6 mt-8 border-t-2 border-neo-black/20 flex justify-between items-center text-xs font-black text-neo-black/60 uppercase tracking-widest">
        <span>DATA SOURCE</span>
        <span>{totalRepos} GITHUB REPOS</span>
      </div>
    </NeoCard>
  );
};

export default SkillMatric;
