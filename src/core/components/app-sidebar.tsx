'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { Separator } from '@/components/atoms/separator';
import CopyRight from '@/components/organisms/CopyRight';
import { useSidebar } from '@/core/providers/sidebarProvinder';

import LanguageDropdown from './language.dropdown';
import ThemeToggle from './theme-toggle';

export function AppSidebar() {
  const pathname = usePathname();
  const { isOpen } = useSidebar();

  return (
    <div className="flex flex-col h-full bg-neutral-01 text-neutral-02 border-r border-grey-stroke">
      <div className="p-4 h-auto flex justify-center">
        <div className="flex flex-col gap-2 items-center">
          <Image
            className="rounded-full aspect-square object-cover"
            src="/avatars/1.png"
            alt="Logo"
            width={100}
            height={100}
          />
          {isOpen && (
            <>
              <div className="w-full text-center font-semibold flex flex-col items-center">
                <h3>Mulia Andiki</h3>
                <p className="text-xs font-light">@DikzyCode</p>
              </div>
              <div className="w-full flex justify-between">
                <ThemeToggle />
                <LanguageDropdown />
              </div>
            </>
          )}
        </div>
      </div>
      <Separator />
      <div className="flex-1" />
      <CopyRight />
    </div>
  );
}
