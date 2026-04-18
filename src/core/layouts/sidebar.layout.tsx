'use client';

import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';

import { AppSidebar } from '../components/app-sidebar';

interface AppLayoutProps {
  children: React.ReactNode;
}

export function SidebarLayout({ children }: AppLayoutProps) {
  return (
    <SidebarProvider defaultOpen>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <SidebarInset>
          <div className="flex h-full flex-col w-full">
            <div className="flex items-center justify-end   gap-4">
              <div className="flex items-center gap-3">
                {/* <button className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors">
                  <Layers size={18} />
                </button> */}
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-hidden w-full">
              <div className=" h-full container max-w-full w-full ">{children}</div>
            </div>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
