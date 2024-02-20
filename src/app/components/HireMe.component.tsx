import React from 'react';
import Link from 'next/link';

import { HireMeIcon } from './Icons.component';

const HireMe = () => {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden">
      <div className="w-48 h-auto flex items-center justify-center relative">
        <HireMeIcon className="fill-dark dark:fill-light animate-spin-slow" />
        <Link
          href="mailto:mina@minademian.com"
          className="flex items-center justify-center absolute left-1/2 top-1/2 
          -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
