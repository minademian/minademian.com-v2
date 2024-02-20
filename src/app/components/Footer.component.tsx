import * as React from 'react';
import { SectionComponent } from '../page';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base">
      <SectionComponent className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <span>
          Built with{' '}
          <span className="text-primary text-2xl px-1 dark:text-primaryDark">
            &#9825;
          </span>{' '}
        </span>
        <span>
          Inspired by{' '}
          <Link
            href="https://devdreaming.com"
            className="underline underline-offset-2"
          >
            CodeBucks
          </Link>
        </span>
      </SectionComponent>
    </footer>
  );
};

export default Footer;
