import '@/styles/globals.css';

import { metadata } from './metadata';
import { AppProviders } from './providers';
export { metadata };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
