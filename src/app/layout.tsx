'use client';

import { Montserrat } from 'next/font/google';
import '@/styles/globals.css';

import NavBar from './components/NavBar.component';
import Footer from './components/Footer.component';
import Script from 'next/script';
import { AnimatePresence } from 'framer-motion';

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-mont' });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
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
