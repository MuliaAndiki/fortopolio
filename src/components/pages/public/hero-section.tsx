import Link from 'next/link';

import { NeoButton } from '@/components/atoms/NeoButton';
import { NeoCard } from '@/components/atoms/NeoCard';

const HeroSection = () => {
  return (
    <section className="w-full min-h-screen bg-yellow-300 flex items-center justify-center p-4 md:p-8">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8 items-center">
        {/* Left: Bold Headline */}
        <div className="space-y-6">
          <div>
            <h1 className="text-6xl md:text-8xl font-black leading-tight text-black break-words">
              MULIA
              <br />
              ANDIKI
            </h1>
            <p className="text-2xl md:text-3xl font-bold mt-4 text-black">
              FRONTEND DEVELOPER
              <br />
              & UI/UX DESIGNER
            </p>
          </div>

          <p className="text-lg md:text-xl font-semibold text-black max-w-md">
            Crafting bold, brutalist digital experiences with Next.js, React, and Tailwind CSS.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/projects" className="w-full sm:w-auto">
              <NeoButton
                variant="primary"
                size="lg"
                className="w-full sm:w-auto"
              >
                SEE MY WORK
              </NeoButton>
            </Link>
            <Link href="/contacts" className="w-full sm:w-auto">
              <NeoButton
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                LET&apos;S TALK
              </NeoButton>
            </Link>
          </div>
        </div>

        {/* Right: Profile Image Placeholder */}
        <div className="flex justify-center">
          <NeoCard
            shadow="xl"
            className="w-64 h-64 md:w-80 md:h-80 bg-pink-400 flex items-center justify-center"
          >
            <div className="text-center">
              <p className="text-6xl font-black text-black">👨‍💻</p>
              <p className="text-xl font-bold text-black mt-4">PROFILE</p>
            </div>
          </NeoCard>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
