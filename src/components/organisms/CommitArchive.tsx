'use client';

import React, { useState } from 'react';

import { NeoButton, NeoCard } from '../atoms';
import { initialGithubData, ContributionDay } from '@/constant/github';

interface CommitArchiveProps {
  contributions?: ContributionDay[];
  totalThisYear?: number;
  totalAllTime?: number;
  onRefresh?: () => Promise<void>;
  isRefreshing?: boolean;
}

const CommitArchive: React.FC<CommitArchiveProps> = ({
  contributions = initialGithubData.recentContributions,
  totalThisYear = initialGithubData.totalContributionsThisYear,
  totalAllTime = initialGithubData.totalContributionsAllTime,
  onRefresh,
  isRefreshing = false,
}) => {
  const [localContributions, setLocalContributions] = useState<ContributionDay[]>(contributions);
  const [loading, setLoading] = useState(false);
  const [btnText, setBtnText] = useState<'FETCH LIVE_DATA' | 'FETCHING...' | 'UPDATED!'>('FETCH LIVE_DATA');

  const getColorClass = (level: number) => {
    switch (level) {
      case 0:
        return 'bg-neo-white';
      case 1:
        return 'bg-neo-green opacity-30';
      case 2:
        return 'bg-neo-green opacity-60';
      case 3:
        return 'bg-neo-green opacity-80';
      case 4:
        return 'bg-neo-green';
      default:
        return 'bg-neo-white';
    }
  };

  const handleFetch = async () => {
    if (loading || isRefreshing) return;
    setLoading(true);
    setBtnText('FETCHING...');

    try {
      if (onRefresh) {
        await onRefresh();
      } else {
        const res = await fetch('https://github-contributions-api.jogruber.de/v4/MuliaAndiki');
        if (res.ok) {
          const data = await res.json();
          const sorted = [...data.contributions].sort((a, b) => a.date.localeCompare(b.date));
          setLocalContributions(sorted.slice(-365));
        }
      }
      setBtnText('UPDATED!');
    } catch {
      setBtnText('UPDATED!');
    } finally {
      setLoading(false);
      setTimeout(() => {
        setBtnText('FETCH LIVE_DATA');
      }, 2000);
    }
  };

  const currentList =
    contributions !== initialGithubData.recentContributions ? contributions : localContributions;

  return (
    <NeoCard shadow="lg" className="lg:col-span-2 p-8 bg-neo-white flex flex-col justify-between">
      <div>
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 border-b-4 border-neo-black pb-2">
          <h2 className="text-4xl font-black text-neo-black uppercase leading-none">
            COMMIT ARCHIVE
          </h2>
          <div className="flex items-center gap-2">
            <span className="bg-neo-yellow text-neo-black font-black text-xs px-3 py-1 neo-border-sm neo-shadow-sm uppercase">
              {totalThisYear.toLocaleString()} COMMITS (2026)
            </span>
            <span className="bg-neo-black text-neo-white font-black text-xs px-3 py-1 uppercase">
              {totalAllTime.toLocaleString()} ALL-TIME
            </span>
          </div>
        </div>

        <div className="flex-1 overflow-x-auto pb-4 custom-scrollbar">
          <div className="min-w-[500px]">
            <div className="grid grid-flow-col grid-rows-7 gap-1">
              {currentList.map((data, idx) => (
                <div
                  key={data.date || idx}
                  className={`w-3 h-3 neo-border-sm ${getColorClass(data.level)} hover:scale-125 transition-transform cursor-pointer`}
                  title={`${data.count} commit${data.count === 1 ? '' : 's'} on ${data.date}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-4 flex flex-wrap items-center justify-between gap-4 border-t-2 border-neo-black/20">
        <div className="flex items-center gap-4">
          <p className="text-xs font-black text-neo-black">LESS</p>
          <div className="flex gap-1">
            {[0, 1, 2, 3, 4].map((l) => (
              <div key={l} className={`w-3 h-3 neo-border-sm ${getColorClass(l)}`}></div>
            ))}
          </div>
          <p className="text-xs font-black text-neo-black">MORE</p>
        </div>
        <NeoButton
          variant="secondary"
          size="sm"
          onClick={handleFetch}
          disabled={loading || isRefreshing}
          className="neo-border-sm shadow-neo-sm hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
        >
          {btnText}
        </NeoButton>
      </div>
    </NeoCard>
  );
};

export default CommitArchive;
