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
        className={`${montserrat.variable} font-mont bg-gradient-to-t from-gray-300 to-gray-100 dark:from-gray-950 dark:to-gray-800 w-full min-h-screen p-6 md:p-4 sm:p-3 2xs:p-2`}
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
        <div className="bg-light dark:bg-dark rounded-3xl shadow-lg min-h-[calc(100vh-3rem)] md:min-h-[calc(100vh-2rem)] sm:min-h-[calc(100vh-1.5rem)] 2xs:min-h-[calc(100vh-1rem)]">
          <NavBar></NavBar>
          <AnimatePresence mode="wait">{children}</AnimatePresence>
          <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
