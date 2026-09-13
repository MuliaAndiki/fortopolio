'use client';

import React, { useState } from 'react';

import { NeoCard } from '@/components/atoms/NeoCard';
import CommitArchive from '@/components/organisms/CommitArchive';
import SkillMatric from '@/components/organisms/SkillMatric';
import { initialGithubData, GithubDashboardData } from '@/constant/github';
import { projects } from '@/constant/portfolio';
import { SectionProps } from '@/types';

const DashboardHeroSection: React.FC<SectionProps> = ({ title = 'My Analytics', desc = '' }) => {
  const [githubData, setGithubData] = useState<GithubDashboardData>(initialGithubData);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const activeProjects = projects.filter((p) => p.period.includes('Sekarang')).length;

  const handleRefresh = async () => {
    setIsRefreshing(true);
    try {
      const contribRes = await fetch(
        `https://github-contributions-api.jogruber.de/v4/${githubData.username}`
      );
      if (contribRes.ok) {
        const contribJson = await contribRes.json();
        const sorted = [...contribJson.contributions].sort((a, b) => a.date.localeCompare(b.date));
        const recent365 = sorted.slice(-365);
        const totalThisYear = contribJson.total?.['2026'] || githubData.totalContributionsThisYear;
        const totalAllTime =
          Object.values(contribJson.total || {}).reduce(
            (a: number, b: unknown) => a + Number(b),
            0
          ) || githubData.totalContributionsAllTime;

        setGithubData((prev) => ({
          ...prev,
          recentContributions: recent365,
          totalContributionsThisYear: totalThisYear,
          totalContributionsAllTime: totalAllTime,
        }));
      }

      try {
        const userRes = await fetch(`https://api.github.com/users/${githubData.username}`);
        if (userRes.ok) {
          const userJson = await userRes.json();
          if (userJson.public_repos) {
            setGithubData((prev) => ({
              ...prev,
              publicRepos: userJson.public_repos,
            }));
          }
        }
      } catch {
        // Ignore rate-limit errors from GitHub REST API
      }
    } finally {
      setIsRefreshing(false);
    }
  };

  const stats = [
    {
      label: 'GIT COMMITS',
      value: `${githubData.totalContributionsAllTime.toLocaleString()}+`,
      unit: `${githubData.totalContributionsThisYear.toLocaleString()} IN 2026`,
      bg: 'bg-neo-yellow',
    },
    {
      label: 'TOTAL REPOS',
      value: String(githubData.publicRepos),
      unit: 'GITHUB REPOSITORIES',
      bg: 'bg-neo-pink',
    },
    {
      label: 'ACTIVE BUILDS',
      value: String(activeProjects),
      unit: 'PROJECTS IN PROGRESS',
      bg: 'bg-neo-cyan',
    },
    {
      label: 'INNOVILLAGE',
      value: 'TOP 180',
      unit: 'NASIONAL 2025',
      bg: 'bg-neo-green',
    },
  ];

  return (
    <section className="w-full min-h-screen bg-neo-white p-4 md:p-8 pt-24 pb-16">
      <div className="max-w-full mx-auto">
        <div className="mb-16">
          <h1 className="text-6xl md:text-9xl font-black text-neo-black mb-4 uppercase leading-none italic">
            {title}
          </h1>
          <p className="text-xl md:text-2xl font-bold text-neo-black max-w-2xl border-l-8 border-neo-black pl-6 italic">
            {desc}
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, idx) => (
            <NeoCard
              key={idx}
              shadow="md"
              className={`${stat.bg} p-8 flex flex-col items-center justify-center text-center hover:translate-y-[-4px] hover:shadow-neo transition-all`}
            >
              <p className="text-xs font-black text-neo-black mb-2 uppercase tracking-tighter">
                {stat.label}
              </p>
              <p className="text-5xl md:text-6xl font-black text-neo-black leading-none">
                {stat.value}
              </p>
              <p className="text-xs font-black text-neo-black mt-2 uppercase">{stat.unit}</p>
            </NeoCard>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          <SkillMatric skills={githubData.skillMatrix} totalRepos={githubData.publicRepos} />

          <CommitArchive
            contributions={githubData.recentContributions}
            totalThisYear={githubData.totalContributionsThisYear}
            totalAllTime={githubData.totalContributionsAllTime}
            onRefresh={handleRefresh}
            isRefreshing={isRefreshing}
          />
        </div>
      </div>
    </section>
  );
};

export default DashboardHeroSection;
