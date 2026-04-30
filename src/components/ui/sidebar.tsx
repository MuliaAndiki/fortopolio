'use client';

import { useSidebar } from '@/core/providers/sidebarProvinder';
import { usePathname } from 'next/navigation';
import React from 'react';

import SidebarSection from '../organisms/Sidebar';
import { SidebarMenuConfig } from '@/config/app.config';
import PlusIcon from '../atoms/icons/PlusIcon';
import User from '../organisms/User';

export const Sidebar = () => {
  const { isOpen, isMobile, close } = useSidebar();
  const pathname = usePathname();

  return (
    <div>
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-background  lg:hidden"
          onClick={close}
          aria-hidden="true"
        />
      )}

      <div
        className={`fixed top-0 left-0 h-screen  z-100 bg-neutral-01 text-neutral-02 p-4 border pt-20 lg:pt-24 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {isMobile && (
          <button
            onClick={close}
            className="absolute top-4 border-2  right-4 p-2 rounded-lg hover:bg-grey-stroke/50 lg:hidden"
            aria-label="Close sidebar"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
        <div className="w-full">
          <User />
        </div>
        <SidebarSection isCollapsed={false} items={SidebarMenuConfig} pathname={pathname} />
      </div>
    </div>
  );
};
