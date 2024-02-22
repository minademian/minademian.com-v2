'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
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
      <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8">
        <button
          className="flex-col justify-center items-center hidden lg:flex"
          onClick={handleClick}
        >
          <span
            className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm -translate-y.0.5 ${
              isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
            }`}
          ></span>
          <span
            className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`}
          ></span>
          <span
            className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm translate-y.0.5  ${
              isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
            }
            `}
          ></span>
        </button>
        <div className="w-full flex justify-between items-center lg:hidden">
          <nav>
            <NavLink href="/" title={'Home'} className="mr-4" />
            <NavLink href="/about" title={'About'} className="mx-4" />
            <NavLink href="/projects" title={'Projects'} className="mx-4" />
            <NavLink href="/articles" title={'Articles'} className="ml-4" />
          </nav>
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
        </div>

        {isOpen ? (
          <motion.div
            initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
            animate={{ scale: 1, opacity: 1 }}
            className="min-w-[70vw] flex flex-col justify-between z-30
         items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
         bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32
         "
          >
            <nav className="flex items-center flex-col justify-center">
              <MobileNavLink
                href="/"
                title={'Home'}
                className=""
                toggle={handleClick}
              />
              <MobileNavLink
                href="/about"
                title={'About'}
                className=""
                toggle={handleClick}
              />
              <MobileNavLink
                href="/projects"
                title={'Projects'}
                className=""
                toggle={handleClick}
              />
              <MobileNavLink
                href="/articles"
                title={'Articles'}
                className=""
                toggle={handleClick}
              />
            </nav>
            <nav className="flex items-center justify-center flex-wrap mt-2">
              <MotionLink href="https://twitter.com/minadimyan">
                <TwitterIcon />
              </MotionLink>
              <MotionLink
                className="bg-light rounded-full dark:bg-dark"
                href={'https://github.com/minademian'}
              >
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
          </motion.div>
        ) : null}

        <div className="absolute left-[50%] top-2 translate-x-[-50%]">
          <Logo />
        </div>
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

type MobileNavLinkProps = NavLinkProps & { toggle: Function };

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

const MobileNavLink: FC<MobileNavLinkProps> = ({
  href,
  title,
  className = '',
  toggle,
}: MobileNavLinkProps): ReactElement => {
  const pathName = usePathname();
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href as string);
  };

  return (
    <button
      ref={href as string}
      className={`${className} relative group my-2 text-light dark:text-dark`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`
        h-[1px] inline-block bg-light
        absolute left-0 -bottom-0.5 
        group-hover:w-full transition-[width] ease duration-300
        ${pathName === href ? 'w-full' : 'w-0'}
        dark:bg-dark
        `}
      >
        &nbsp;
      </span>
    </button>
  );
};

type MotionLinkProps = {
  href: string | undefined;
  className?: string;
  children: ReactNode;
};

const MotionLink: FC<MotionLinkProps> = ({
  href,
  className = '',
  children,
}: MotionLinkProps) => {
  return (
    <motion.a
      href={href}
      target={'_blank'}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.9 }}
      className={`${className} w-6 mr-3 sm:mx-1`}
    >
      {children}
    </motion.a>
  );
};
