import { NeoButton, NeoCard } from '../atoms';

const CommitArchive = () => {
  const contributionData = Array.from({ length: 365 }, (_, i) => ({
    level: Math.floor(Math.random() * 5),
  }));

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
  return (
    <NeoCard shadow="lg" className="lg:col-span-2 p-8 bg-neo-white flex flex-col">
      <h2 className="text-4xl font-black text-neo-black mb-10 uppercase border-b-4 border-neo-black pb-2 inline-block leading-none">
        COMMIT ARCHIVE
      </h2>

      <div className="flex-1 overflow-x-auto pb-4 custom-scrollbar">
        <div className="min-w-[500px]">
          <div className="grid grid-flow-col grid-rows-7 gap-1">
            {contributionData.map((data, idx) => (
              <div
                key={idx}
                className={`w-3 h-3 neo-border-sm ${getColorClass(data.level)}`}
                title={`Contribution Level: ${data.level}`}
              />
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
        <NeoButton
          variant="secondary"
          size="sm"
          className="neo-border-sm shadow-neo-sm hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
        >
          FETCH LIVE_DATA
        </NeoButton>
      </div>
    </NeoCard>
  );
};

export default CommitArchive;
