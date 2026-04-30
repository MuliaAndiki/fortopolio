import { Icon } from '@iconify/react/dist/iconify.js';
import Link from 'next/link';

import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { SidebarContentType } from '@/types/app';
import { cn } from '@/utils/classname';

interface SidebarSectionProps {
  isCollapsed: boolean;
  items: any;
  pathname: string;
}

const SidebarSection: React.FC<SidebarSectionProps> = ({ isCollapsed, items, pathname }) => {
  return (
    <SidebarMenu>
      {items.map((item: SidebarContentType) => {
        const isActive = pathname === item.url;
        return (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton asChild tooltip={isCollapsed ? item.title : undefined}>
              <Link
                href={item.url}
                className={cn(
                  'flex items-center gap-3 rounded-lg p-6  text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 h-10',
                  isActive && 'bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50'
                )}
              >
                <Icon icon={item.icon} className="h-4 w-4 lg:h-8 lg:w-8" />
                <span className="text-base font-semibold lg:text-lg">
                  {!isCollapsed && item.title}
                </span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        );
      })}
    </SidebarMenu>
  );
};

export default SidebarSection;
