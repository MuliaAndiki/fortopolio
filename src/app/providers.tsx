"use client";

import { store, persistor } from "@/store/store/index";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "@/components/molecules/sonner";
// import { AlertProvider } from "@/hooks/useAlert/costum-alert";
import { ReactQueryClientProvider } from "@/pkg/react-query/query-client.pkg";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "@/core/providers/theme.provider";
// import { SidebarProvider } from "@/components/ui/sidebar";
import { composeProviders } from "./composeProvinders";
import { AuthProvider } from "@/core/providers/auth.provider";
import { LenisProvider } from "@/core/providers/lenis.provider";

const Providers = composeProviders([
  // ({ children }) => (
  //   <SidebarProvider defaultOpen={false}>{children}</SidebarProvider>
  // ),
  ({ children }) => <Provider store={store}>{children}</Provider>,
  ({ children }) => <PersistGate persistor={persistor}>{children}</PersistGate>,
  AuthProvider,
  ThemeProvider,
  // AlertProvider,
  ReactQueryClientProvider,
  LenisProvider,
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
