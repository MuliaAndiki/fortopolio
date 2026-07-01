import type { Metadata, Viewport } from 'next';

export const siteConfig = {
  name: 'Fortopolio',
  shortName: 'Forto',
  description:
    'Portfolio resmi Mulia Andiki — Software Engineer dengan fokus Frontend, Backend, AI, dan IoT. Mahasiswa Informatika USK, Banda Aceh.',
  url: 'https://fortopolio-nu.vercel.app',
  locale: 'id_ID',
  themeColor: '#0EA5A4',
  backgroundColor: '#FFFFFF',
  keywords: [
    'Mulia Andiki',
    'Fortopolio',
    'Software Engineer',
    'Frontend Developer',
    'Full Stack Developer',
    'Informatika USK',
    'Next.js',
    'React',
    'YOLOv8',
    'IoT',
  ],
};

export const metadata: Metadata = {
  title: {
    default: 'Fortopolio — Mulia Andiki',
    template: '%s | Fortopolio',
  },

  description: siteConfig.description,
  keywords: siteConfig.keywords,
  metadataBase: new URL(siteConfig.url),

  applicationName: 'Fortopolio',
  authors: [{ name: 'Mulia Andiki' }],
  creator: 'Mulia Andiki',
  publisher: 'Mulia Andiki',

  manifest: '/favicon/site.webmanifest',

  icons: {
    icon: [
      { url: '/favicon/favicon.ico' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [{ url: '/favicon/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: '/favicon/favicon.ico',
  },

  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: siteConfig.url,
    title: 'Fortopolio — Mulia Andiki',
    description: siteConfig.description,
    siteName: 'Fortopolio',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Fortopolio — Mulia Andiki',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Fortopolio — Mulia Andiki',
    description: siteConfig.description,
    images: ['/images/og-image.png'],
  },

  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Fortopolio',
  },

  formatDetection: {
    telephone: false,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  other: {
    'msapplication-TileColor': siteConfig.themeColor,
    'msapplication-config': '/favicon/browserconfig.xml',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: siteConfig.themeColor,
};
