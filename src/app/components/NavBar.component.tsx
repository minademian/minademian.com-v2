'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState, FC, ReactElement, ReactNode } from 'react';

import { motion } from 'framer-motion';

import Logo from './Logo.component';
import {
  TwitterIcon,
  GitHubIcon,
  LinkedInComponent,
  SunIcon,
  MoonIcon,
} from './Icons.component';
import useThemeSwitcher from './hooks/useThemeSwitcher';

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light">
        <button
          className="flex flex-col justify-center items-center"
          onClick={handleClick}
        >
          <span
            className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm -translate-y.0.5 ${
              isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
            }`}
          ></span>
          <span
            className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm my-0.5 ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`}
          ></span>
          <span
            className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm translate-y.0.5  ${
              isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
            }
            `}
          ></span>
        </button>
        <nav>
          <NavLink href="/" title={'Home'} className="mr-4" />
          <NavLink href="/about" title={'About'} className="mx-4" />
          <NavLink href="/projects" title={'Projects'} className="mx-4" />
          <NavLink href="/articles" title={'Articles'} className="ml-4" />
        </nav>
        <div className="absolute left-[50%] top-2 translate-x-[-50%]">
          <Logo />
        </div>
        <nav className="flex items-center justify-center flex-wrap">
          <MotionLink href="https://twitter.com/minadimyan">
            <TwitterIcon />
          </MotionLink>
          <MotionLink href={'https://github.com/minademian'}>
            <GitHubIcon />
          </MotionLink>
          <MotionLink href="https://linkedin.com/in/minademian">
            <LinkedInComponent />
          </MotionLink>
          <button
            onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
            className={`ml-3 flex items-center justify-center rounded-full p-1
            ${mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'}
            `}
          >
            {mode === 'dark' ? (
              <SunIcon className="fill-dark" />
            ) : (
              <MoonIcon className="fill-dark" />
            )}
          </button>
        </nav>
      </header>
    </>
  );
};

export default NavBar;

type NavLinkProps = {
  href: URL | string;
  title?: string;
  className?: string;
};

const NavLink: FC<NavLinkProps> = ({
  href,
  title,
  className = '',
}: NavLinkProps): ReactElement => {
  const pathName = usePathname();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`
        h-[1px] inline-block bg-dark
        absolute left-0 -bottom-0.5 
        group-hover:w-full transition-[width] ease duration-300
        ${pathName === href ? 'w-full' : 'w-0'}
        dark:bg-light
        `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

type MotionLinkProps = {
  href: string | undefined;
  children: ReactNode;
};

const MotionLink: FC<MotionLinkProps> = ({
  href,
  children,
}: MotionLinkProps) => {
  return (
    <motion.a
      href={href}
      target={'_blank'}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.9 }}
      className="w-6 mr-3"
    >
      {children}
    </motion.a>
  );
};
