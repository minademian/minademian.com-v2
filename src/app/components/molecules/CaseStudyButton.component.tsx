import Link from 'next/link';

import { LinkArrow } from '@/molecules/Icons.component';

interface CaseStudyButtonProps {
  href?: string;
  className?: string;
  label?: string;
}

export const CaseStudyButton = ({
  href = '/projects',
  className = '',
  label = 'View Case Study',
}: CaseStudyButtonProps) => {
  return (
    <Link
      href={href}
      className={`inline-flex items-center text-light p-2.5 px-6 rounded-lg text-lg
        font-semibold border-2 border-solid bg-dark
        border-transparent dark:bg-light dark:text-dark
        hover:border-dark hover:bg-light hover:text-dark
        hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
        ${className}`}
    >
      {label} <LinkArrow className="w-5 ml-2" />
    </Link>
  );
};
