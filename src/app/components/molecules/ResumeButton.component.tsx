import Link from 'next/link';

import { LinkArrow } from '@/molecules/Icons.component';

interface ResumeButtonProps {
  href?: string;
  className?: string;
}

export const ResumeButton = ({
  href = 'https://linkedin.com/in/minademian',
  className = '',
}: ResumeButtonProps) => {
  return (
    <Link
      href={href}
      target="_blank"
      className={`inline-flex items-center text-light p-2.5 px-6 rounded-lg text-lg
        font-semibold border-2 border-solid bg-dark
        border-transparent dark:bg-light dark:text-dark
        hover:border-dark hover:bg-light hover:text-dark
        hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
        ${className}`}
    >
      Resume <LinkArrow className="w-6 ml-1" />
    </Link>
  );
};
