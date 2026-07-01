import Image from 'next/image';

import LanguageDropdown from '@/core/components/language.dropdown';
import ThemeToggle from '@/core/components/theme-toggle';
export default function User() {
  return (
    <div className="flex flex-col gap-2 items-center">
      <Image
        className="rounded-full aspect-square object-cover"
        src="/avatars/1.png"
        alt="Logo"
        width={100}
        height={100}
      />
      <div className="w-full text-center font-semibold flex flex-col items-center">
        <h3>Mulia Andiki</h3>
        <p className="text-xs font-light">Software Engineer</p>
      </div>
      <div className="w-full  flex justify-between">
        <ThemeToggle />
        <LanguageDropdown />
      </div>
    </div>
  );
}
