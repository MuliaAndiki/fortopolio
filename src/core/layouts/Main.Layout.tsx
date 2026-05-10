import { Sidebar } from '@/components';
import React from 'react';
import ContentLayout from './Content.Layout';
import Topbar from '@/components/organisms/Topbar';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full min-h-screen flex relative overflow-x-hidden">
      <Topbar />
      <Sidebar />
      <ContentLayout>{children}</ContentLayout>
    </div>
  );
};

export default MainLayout;
