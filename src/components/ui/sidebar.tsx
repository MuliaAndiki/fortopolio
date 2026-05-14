'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSidebar } from '@/core/providers/sidebarProvinder';

export const Sidebar = () => {
  const { isOpen, isMobile, close } = useSidebar();
  const pathname = usePathname();

  const menuItems = [
    { name: 'HOME', path: '/home' },
    { name: 'ABOUT', path: '/about' },
    { name: 'PROJECTS', path: '/projects' },
    { name: 'ACHIEVEMENTS', path: '/achievements' },
    { name: 'SMART TALKS', path: '/smart-talks' },
    { name: 'DASHBOARDS', path: '/dashboards' },
    { name: 'CHAT ROOM', path: '/chat-room' },
    { name: 'CONTACTS', path: '/contacts' },
  ];

  return (
    <div>
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black/40 lg:hidden z-40"
          onClick={close}
          aria-hidden="true"
        />
      )}

      <div
        className={`fixed top-0 left-0 h-screen w-sidebar-width bg-neo-white border-r-8 border-neo-black text-neo-black pt-topbar-height transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {isMobile && (
          <button
            onClick={close}
            className="absolute top-4 right-4 p-2 font-black text-2xl border-2 border-black hover:bg-white"
            aria-label="Close sidebar"
          >
            ✕
          </button>
        )}

        <nav className="space-y-2 p-4">
          {menuItems.map((item) => {
            const isActive = pathname === item.path || pathname.startsWith(item.path);
            return (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => isMobile && close()}
                className={`block px-4 py-3 font-black border-2 border-black transition-all ${
                  isActive
                    ? 'bg-black text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                    : 'bg-white text-black hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};
