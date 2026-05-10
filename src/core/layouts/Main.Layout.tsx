import React from 'react';

import { Sidebar } from '@/components';
import Topbar from '@/components/organisms/Topbar';

import ContentLayout from './Content.Layout';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full min-h-screen bg-white text-black flex flex-col relative overflow-x-hidden">
      <Topbar />
      <div className="flex flex-1 w-full">
        <Sidebar />
        <ContentLayout>{children}</ContentLayout>
      </div>
    </div>
  );
};

export default MainLayout;
