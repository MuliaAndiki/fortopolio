'use client';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import NextTopLoader from 'nextjs-toploader';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { Toaster } from '@/components';
import { LanguageProvider } from '@/core';
import { LenisProvider } from '@/core';
import { ThemeProvider } from '@/core';
// import { AlertProvider } from "@/hooks/useAlert/costum-alert";
import { SidebarProvider } from '@/core';
import { ReactQueryClientProvider } from '@/pkg/react-query/query-client.pkg';
import { persistor, store } from '@/store/store/index';

import { composeProviders } from './composeProvinders';
const Providers = composeProviders([
  ({ children }) => <SidebarProvider>{children}</SidebarProvider>,
  ({ children }) => <Provider store={store}>{children}</Provider>,
  ({ children }) => <PersistGate persistor={persistor}>{children}</PersistGate>,
  ThemeProvider,
  // AlertProvider,
  ReactQueryClientProvider,
  LenisProvider,
  LanguageProvider,
]);

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <NextTopLoader
        color="#ffd600"
        initialPosition={0.08}
        crawlSpeed={200}
        height={3}
        crawl={true}
        showSpinner={false}
        easing="ease"
        speed={200}
        zIndex={99999}
      />
      {children}

      <ReactQueryDevtools initialIsOpen={false} />
      <Toaster position="top-center" richColors duration={900} />
    </Providers>
  );
}
