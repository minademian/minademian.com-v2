import React, { FC, useRef, ReactElement } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavLinkProps } from '@/app/types/NavBar.type';

const NavLink: FC<NavLinkProps> = ({
  href,
  title,
  className = '',
}: NavLinkProps): ReactElement => {
  const pathName = usePathname();
  const hreff = useRef<string | null>(null);
  let foo = hreff?.current;
  foo = href;

  return (
    <Link href={foo} className={`${className} relative group`}>
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

export default NavLink;
