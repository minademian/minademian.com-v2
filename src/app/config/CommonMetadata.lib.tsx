import { Viewport } from 'next';

export const CommonMetadata = {
  generator: 'Next.js',
  applicationName: 'minademian.com',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Mina Demian',
    'full-stack',
    'front-end',
    'Stockholm',
    'developer',
    'engineer',
    'Next.js',
    'React',
    'JavaScript',
  ],
  authors: [
    { name: 'Mina' },
    { name: 'Mina Demian', url: 'https://minademian.com' },
  ],
  creator: 'Mina Demian',
  publisher: 'Mina Demian',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};
