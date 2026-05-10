'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect,useState } from 'react';

import { useSidebar } from '@/core/providers';

const Topbar = () => {
  const { isOpen, toggle } = useSidebar();
  const pathname = usePathname();
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const updateDate = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
      };
      const formattedDate = now.toLocaleDateString('id-ID', options);
      setCurrentDate(formattedDate);
    };

    updateDate();
    const interval = setInterval(updateDate, 60000);
    return () => clearInterval(interval);
  }, []);

  const pages = [
    { name: 'HOME', path: '/home' },
    { name: 'ABOUT', path: '/about' },
    { name: 'PROJECTS', path: '/projects' },
    { name: 'ACHIEVEMENTS', path: '/achievements' },
  ];

  return (
    <div className="w-full h-16 fixed top-0 z-50 bg-yellow-300 border-b-4 border-black flex items-center px-4 md:px-8">
      <div className="max-w-7xl w-full mx-auto flex justify-between items-center">
        {/* Logo/Brand */}
        <Link href="/home" className="font-black text-2xl text-black hover:text-gray-800 transition">
          MA
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-2">
          {pages.map((page) => (
            <Link
              key={page.path}
              href={page.path}
              className={`px-4 py-2 font-bold border-2 border-black transition-all ${
                pathname === page.path
                  ? 'bg-black text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                  : 'bg-white text-black hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
              }`}
            >
              {page.name}
            </Link>
          ))}
        </div>

        {/* Date and Toggle */}
        <div className="flex items-center gap-4">
          <p className="hidden sm:block text-xs font-black text-black">{currentDate}</p>
          <button
            onClick={toggle}
            className="font-bold border-2 border-black bg-white text-black px-4 py-2 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all md:hidden"
          >
            ☰
          </button>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
