'use client';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { Toaster } from '@/components/molecules/sonner';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AuthProvider } from '@/core/providers/auth.provider';
import { LanguageProvider } from '@/core/providers/languageProvider';
import { LenisProvider } from '@/core/providers/lenis.provider';
import { ThemeProvider } from '@/core/providers/theme.provider';
// import { AlertProvider } from "@/hooks/useAlert/costum-alert";
import { ReactQueryClientProvider } from '@/pkg/react-query/query-client.pkg';
import { persistor, store } from '@/store/store/index';

import { composeProviders } from './composeProvinders';
const Providers = composeProviders([
  ({ children }) => <SidebarProvider defaultOpen={false}>{children}</SidebarProvider>,
  ({ children }) => <Provider store={store}>{children}</Provider>,
  ({ children }) => <PersistGate persistor={persistor}>{children}</PersistGate>,
  AuthProvider,
  ThemeProvider,
  // AlertProvider,
  ReactQueryClientProvider,
  LenisProvider,
  LanguageProvider,
]);

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      {children}

      <ReactQueryDevtools initialIsOpen={false} />
      <Toaster position="top-center" richColors duration={900} />
    </Providers>
  );
}
