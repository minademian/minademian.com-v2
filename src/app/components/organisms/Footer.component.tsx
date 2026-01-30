import Link from 'next/link';
import * as React from 'react';

import { SectionComponent } from '@/components/atoms/Section.component';

const Footer = () => {
  return (
    <footer className="w-full shadow-[inset_0_1px_0_0_rgba(0,0,0,0.1)] dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] font-medium text-lg dark:text-light sm:text-base">
      <SectionComponent className="py-8 flex items-center justify-between lg:py-6 lg:flex-col xs:flex-col xs:p-0 2xs:flex-col 2xs:text-sm 2xs:leading-none 2xs:my-2">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <span>
          Built with{' '}
          <span className="text-primary text-2xl px-1 dark:text-primaryDark">
            &#9825;
          </span>
          {'- '}
          <Link
            href="https://github.com/minademian/minademian.com-v2"
            className="cursor-pointer underline underline-offset-2"
          >
            view code here
          </Link>
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
