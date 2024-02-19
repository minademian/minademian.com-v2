import { Montserrat } from 'next/font/google';
import '@/styles/globals.css';

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-mont' });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} font-mont bg-light w-full min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
