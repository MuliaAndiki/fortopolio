import { NeoCard } from '../atoms';
import { skills } from '@/utils/tools';

const SkillMatric = () => {
  return (
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
  );
};

export default SkillMatric;
