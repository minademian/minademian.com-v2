'use client';
import { AnimatePresence } from 'framer-motion';
import { Montserrat } from 'next/font/google';
import { usePathname } from 'next/navigation';
import Script from 'next/script';
import { useEffect, useState } from 'react';


import '@/styles/globals.css';

import Footer from '@/organisms/Footer.component';
import NavBar from '@/organisms/NavBar.component';

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-mont' });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const path = usePathname();
  const [title, setTitle] = useState('');

  const rawPath = path === '/' ? 'Home' : path.replace('/', '');
  const final = rawPath
    .toLowerCase()
    .split(' ')
    .map((word) => {
      return word.charAt(0).toUpperCase().concat(word.substring(1));
    })
    .join(' ');
  const fullTitle = `minademian.com | ${final}`;

  useEffect(() => {
    setTitle(fullTitle);
  }, [fullTitle]);
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <title>{title}</title>
        <meta name="application-name" content="Next.js" />
        <meta name="author" content="Mina Demian" />
        <link rel="author" href="https://minademian.com" />
        <meta
          name="author"
          content="Mina Demian,full-stack, front-end, Stockholm,developer,engineer,Next.js,React,JavaScript,"
        />
        <meta name="generator" content="Next.js" />
        <meta name="keywords" content="Next.js,React,JavaScript" />
        <meta name="referrer" content="origin-when-cross-origin" />
        <meta name="color-scheme" content="light" />
        <meta name="creator" content="Mina Demian" />
        <meta name="publisher" content="Mina Demian" />
        <meta
          name="format-detection"
          content="telephone=no, address=no, email=no"
        />
      </head>
      <body
        className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen xl:p-24 lg:p-16 md:p-12 sm:p-8 2xs:p-0`}
      >
        <Script id="theme-switcher" strategy="beforeInteractive">
          {`
          // On page load or when changing themes, best to add inline in head to avoid FOUC
          if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
          } else {
            document.documentElement.classList.remove('dark')
          }
          `}
        </Script>
        <NavBar></NavBar>
        <AnimatePresence mode="wait">{children}</AnimatePresence>
        <Footer></Footer>
      </body>
    </html>
  );
}
