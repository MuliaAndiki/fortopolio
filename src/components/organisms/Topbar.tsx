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

 

  return (
    <div className="w-full h-20 fixed top-0 z-[60] bg-neo-white border-b-8 border-neo-black flex items-center px-4 md:px-8">
      <div className="max-w-7xl w-full mx-auto flex justify-between items-center">
        {/* Logo/Brand */}
        <Link href="/home" className="font-black text-3xl text-neo-black hover:bg-neo-yellow px-2 transition-colors border-4 border-neo-black neo-shadow-sm hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
          MA
        </Link>

        {/* Desktop Navigation */}
       


        {/* Date and Toggle */}
        <div className="flex items-center gap-4">
          <p className="hidden sm:block text-xs font-black text-black">{currentDate}</p>
          <button
            onClick={toggle}
            className="font-black border-4 border-neo-black bg-neo-white text-neo-black px-4 py-2 hover:bg-neo-yellow shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all lg:hidden"
          >
            MENU
          </button>

        </div>
      </div>
    </div>
  );
};

export default Topbar;
