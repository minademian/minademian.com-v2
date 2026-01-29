'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';


import useThemeSwitcher from '../../hooks/useThemeSwitcher';
import {
  GitHubIcon,
  LinkedInComponent,
  MoonIcon,
  SunIcon,
  TwitterIcon,
} from '../molecules/Icons.component';
import MobileNavLink from '../molecules/MobileNavLink.component';
import MotionLink from '../molecules/MotionLink.component';
import NavLink from '../molecules/NavLink.component';

import Logo from './Logo.component';

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <header className="w-full px-12 py-6 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-8 md:px-6 sm:px-4">
        <Logo />
        <button
          className="flex-col justify-center items-center hidden lg:flex"
          onClick={handleClick}
          aria-label="Toggle mobile menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
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
        <nav className="flex items-center gap-8 lg:hidden">
          <NavLink href="/" title={'Home'} />
          <NavLink href="/about" title={'About'} />
          <NavLink href="/projects" title={'Projects'} />
          <NavLink href="/portfolio" title={'Portfolio'} />
          <NavLink href="/articles" title={'Writing'} />
        </nav>

        {isOpen ? (
          <motion.div
            initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
            animate={{ scale: 1, opacity: 1 }}
            className="min-w-[70vw] flex flex-col justify-between z-30
         items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
         bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32
         "
            id="mobile-menu"
            role="dialog"
            aria-label="Mobile navigation menu"
          >
            <nav className="flex items-center flex-col justify-center" aria-label="Mobile navigation">
              <MobileNavLink
                href="/"
                title={'Home'}
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
                title={'Writing'}
                className=""
                toggle={handleClick}
              />
              <MobileNavLink
                href="/contact"
                title={'Contact'}
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
      </header>
    </>
  );
};

export default NavBar;
