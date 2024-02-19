'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { FC, ReactElement, ReactNode } from 'react';

import { motion } from 'framer-motion';

import Logo from './Logo.component';
import { TwitterIcon, GitHubIcon, LinkedInComponent } from './Icons.component';

const NavBar = () => {
  return (
    <>
      <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
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
