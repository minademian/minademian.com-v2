import { usePathname, useRouter } from 'next/navigation';
import { FC, ReactElement } from 'react';

import { MobileNavLinkProps } from '@/app/types/NavBar.type';

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
    router.push(href);
  };

  return (
    <button
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

export default MobileNavLink;
