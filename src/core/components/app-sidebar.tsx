'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';

import SidebarSection from '@/components/organisms/Sidebar';
import { Separator } from '@/components/ui/separator';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  useSidebar,
} from '@/components/ui/sidebar';
import { SidebarMenuConfig } from '@/config/app.config';

import LanguageDropdown from './language.dropdown';
import ThemeToggle from './theme-toggle';

export function AppSidebar() {
  const pathname = usePathname();
  const { state } = useSidebar();
  const isCollapsed = state === 'collapsed';

  return (
    <Sidebar collapsible="icon" className="border-r">
      <SidebarHeader className=" p-4 h-auto flex justify-center">
        {isCollapsed ? (
          // <LayoutDashboard className="size-4" />
          <Image
            src="/avatars/1.png"
            alt="Logo"
            width={100}
            height={100}
            className="rounded-full aspect-square object-cover"
          />
        ) : (
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
              <p className="text-xs font-light">@DikzyCode</p>
            </div>
            <div className="w-full  flex justify-between">
              <ThemeToggle />
              <LanguageDropdown />
            </div>
          </div>
        )}
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <Separator />
          <SidebarGroupContent>
            <SidebarSection
              isCollapsed={isCollapsed}
              pathname={pathname}
              items={SidebarMenuConfig}
            />
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
