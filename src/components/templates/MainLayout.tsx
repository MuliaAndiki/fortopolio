import type { ReactNode } from "react";
import { Header } from "../organisms";
import type { HeaderProps } from "../organisms";

export interface MainLayoutProps {
  children: ReactNode;
  headerProps?: HeaderProps;
  footerText?: string;
}

export function MainLayout({
  children,
  headerProps,
  footerText = "Copyright 2026 Forto. All rights reserved.",
}: MainLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
      <Header {...headerProps} />

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6">
        {children}
      </main>

      <footer className="border-t border-slate-200 bg-white py-6 text-center text-sm text-slate-500">
        {footerText}
      </footer>
    </div>
  );
}
