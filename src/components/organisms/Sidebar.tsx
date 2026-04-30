import Link from 'next/link';
import type { MouseEvent } from 'react';

import { SidebarContentType } from '@/types/app/core-types';
import { isActiveMenu, smoothScrolltoSection } from '@/utils';

interface SidebarSectionProps {
  isCollapsed: boolean;
  items: SidebarContentType[];
  pathname: string;
  onNavigate?: () => void;
}

const SidebarSection: React.FC<SidebarSectionProps> = ({
  isCollapsed,
  items,
  pathname,
  onNavigate,
}) => {
  const handleItemClick = (event: MouseEvent<HTMLAnchorElement>, url: string) => {
    if (url.startsWith('#')) {
      event.preventDefault();
      smoothScrolltoSection(url);
    }
    onNavigate?.();
  };

  return (
    <ul className="flex flex-col gap-2 px-5">
      {items.map((item) => {
        const isActive = isActiveMenu(item.url, pathname);
        const IconComponent = item.icon;

        return (
          <li key={item.title} className="text-xs w-full">
            <Link
              href={item.url}
              onClick={(event) => handleItemClick(event, item.url)}
              className={`flex items-center w-full gap-3 py-2.5 p-3 rounded-lg duration-200 transition-colors ${
                isActive
                  ? 'text-neutral-01 bg-charcoal-green-lighter font-medium'
                  : 'text-neutral-02 hover:bg-moss-stone/10'
              }`}
            >
              <IconComponent
                className="w-5 h-5 lg:w-6 lg:h-6 flex-shrink-0"
                variant={isActive ? 'filled' : 'outline'}
              />
              {!isCollapsed && <span className="text-sm font-medium">{item.title}</span>}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default SidebarSection;
