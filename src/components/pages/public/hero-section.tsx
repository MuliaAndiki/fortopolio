import Link from 'next/link';

import { NeoButton } from '@/components/atoms/NeoButton';
import { NeoCard } from '@/components/atoms/NeoCard';

const HeroSection = () => {
  return (
    <section className="w-full min-h-screen bg-neo-yellow flex items-center justify-center p-4 md:p-8 pt-20">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Bold Headline */}
        <div className="space-y-10">
          <div className="relative">
            <div className="absolute -top-10 -left-6 bg-neo-black text-neo-white px-4 py-1 text-xs font-black uppercase tracking-widest -rotate-2">
              STATUS: ACTIVE_DEVELOPER
            </div>
            <h1 className="text-7xl md:text-9xl font-black leading-[0.8] text-neo-black break-words uppercase italic">
              MULIA
              <br />
              ANDIKI
            </h1>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="text-xl md:text-3xl font-black bg-neo-white neo-border-sm px-4 py-2 neo-shadow-sm">
                FRONTEND_DEV
              </span>
              <span className="text-xl md:text-3xl font-black bg-neo-pink neo-border-sm px-4 py-2 neo-shadow-sm">
                UI/UX_DESIGNER
              </span>
            </div>
          </div>

          <p className="text-xl md:text-2xl font-bold text-neo-black max-w-xl leading-tight">
            6th-semester CS student based in Aceh, Indonesia. 
            Forging high-performance digital artifacts with 
            <span className="bg-neo-green px-2">Next.js</span>, 
            <span className="bg-neo-blue text-neo-white px-2 ml-1">React</span>, and 
            <span className="bg-neo-cyan px-2 ml-1">Tailwind CSS</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 pt-4">
            <Link href="/projects" className="w-full sm:w-auto">
              <NeoButton
                variant="primary"
                size="lg"
                className="w-full sm:w-auto text-2xl py-6 px-10 bg-neo-black text-neo-white hover:bg-neo-green hover:text-neo-black border-4 italic"
              >
                SEE_MY_WORKS
              </NeoButton>
            </Link>
            <Link href="/contacts" className="w-full sm:w-auto">
              <NeoButton
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto text-2xl py-6 px-10 bg-neo-white text-neo-black hover:bg-neo-pink border-4 italic"
              >
                INITIATE_CONTACT
              </NeoButton>
            </Link>
          </div>
        </div>

        {/* Right: Profile Image Placeholder */}
        <div className="flex justify-center md:justify-end relative">
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-neo-blue neo-border neo-shadow-sm animate-bounce"></div>
          <NeoCard
            shadow="xl"
            className="w-72 h-72 md:w-[450px] md:h-[450px] bg-neo-white border-8 border-neo-black flex items-center justify-center relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-neo-green opacity-0 group-hover:opacity-20 transition-opacity"></div>
            <div className="text-center z-10">
              <p className="text-[120px] md:text-[200px] leading-none select-none group-hover:scale-110 transition-transform">
                👨‍💻
              </p>
              <div className="bg-neo-black text-neo-white px-6 py-2 mt-4 font-black text-xl uppercase tracking-tighter group-hover:bg-neo-pink transition-colors">
                ARTIFACT_USER_01
              </div>
            </div>
            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-8 h-8 border-b-8 border-r-8 border-neo-black"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-t-8 border-l-8 border-neo-black"></div>
          </NeoCard>
          <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-neo-pink neo-border neo-shadow-sm -rotate-12"></div>
        </div>
      </div>
    </section>
  );
};


export default HeroSection;
