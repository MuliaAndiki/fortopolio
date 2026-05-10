'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useSidebar } from '@/core/providers';

const SidebarSection = () => {
  const { isOpen } = useSidebar();
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

  if (!isOpen) return null;

  return (
    <aside className="fixed left-0 top-16 h-[calc(100vh-64px)] w-64 bg-cyan-300 border-r-4 border-black p-6 overflow-y-auto z-40">
      <nav className="space-y-3">
        {menuItems.map((item) => {
          const isActive = pathname === item.path || pathname.startsWith(item.path);
          return (
            <Link
              key={item.path}
              href={item.path}
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
    </aside>
  );
};

export default SidebarSection;
export { SidebarSection };
