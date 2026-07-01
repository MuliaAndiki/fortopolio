import Link from 'next/link';

import { NeoButton } from '@/components/atoms/NeoButton';
import { NeoCard } from '@/components/atoms/NeoCard';

const HeroSection = () => {
  return (
    <section className="w-full min-h-screen bg-neo-white flex items-center justify-center p-4 md:p-8 pt-20">
      <div className="space-y-10">
        <div className="relative flex justify-end">
          <div className="absolute  w-24 h-24 rotate-12 bottom-0 bg-neo-blue neo-border neo-shadow-sm animate-bounce" />
        </div>
        <div className="relative">
          <div className="absolute -top-10 -left-6 bg-neo-black text-neo-white px-4 py-1 text-xs font-black uppercase tracking-widest -rotate-2">
            STATUS: ACTIVE
          </div>
          <h1 className="text-7xl md:text-9xl font-black leading-[0.8] text-neo-black break-words uppercase italic">
            MULIA ANDIKI
          </h1>
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="text-xl md:text-3xl text-neo-black font-extrabold bg-neo-orange text-primary neo-border-sm px-4 py-2 neo-shadow-sm">
              SOFTWARE ENGINEER
            </span>
          </div>
        </div>

        <p className="text-xl md:text-2xl font-bold text-neo-black max-w-xl leading-tight">
          Mahasiswa Semester 6 Informatika di USK, Banda Aceh. Membangun solusi AI, IoT, dan Full
          Stack dengan
          <span className="bg-neo-green px-2 border-2 ">Next.js</span>,
          <span className="bg-neo-blue text-neo-white px-2 ml-1 border-2">React</span>, dan
          <span className="bg-neo-cyan px-2 ml-1 border-2">Tailwind CSS</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-6 pt-4">
          <Link href="/projects" className="w-full sm:w-auto">
            <NeoButton
              variant="primary"
              size="lg"
              className="w-full sm:w-auto text-2xl py-6 px-10 bg-neo-black text-neo-white hover:bg-neo-green hover:text-neo-black border-4 italic"
            >
              SEE MY WORKS
            </NeoButton>
          </Link>
          <Link href="/contacts" className="w-full sm:w-auto">
            <NeoButton
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto text-2xl py-6 px-10 bg-neo-white text-neo-black hover:bg-neo-pink border-4 italic"
            >
              INITIATE CONTACT
            </NeoButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
