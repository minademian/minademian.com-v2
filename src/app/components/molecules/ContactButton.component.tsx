import Link from 'next/link';

import { MailIcon } from '@/molecules/Icons.component';

interface ContactButtonProps {
  href?: string;
  className?: string;
}

export const ContactButton = ({
  href = 'mailto:mina@minademian.com',
  className = '',
}: ContactButtonProps) => {
  return (
    <Link
      href={href}
      className={`inline-flex items-center text-light p-2.5 px-6 rounded-lg text-lg
        font-semibold border-2 border-solid bg-primary
        border-transparent dark:bg-primaryDark dark:text-dark
        hover:border-primary hover:bg-light hover:text-primary
        hover:dark:bg-dark hover:dark:text-primaryDark hover:dark:border-primaryDark
        ${className}`}
    >
      Contact <MailIcon className="w-6 ml-1" />
    </Link>
  );
};
