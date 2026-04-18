import '@/styles/globals.css';

import NextTopLoader from 'nextjs-toploader';

import { metadata } from './metadata';
import { AppProviders } from './providers';
export { metadata };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <NextTopLoader
          color="#c269da"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          zIndex={99999}
        />
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
