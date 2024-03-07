import { ReactNode } from 'react';

export type NavLinkProps = {
  href: string;
  title?: string;
  className?: string;
};

export type MobileNavLinkProps = NavLinkProps & { toggle: Function };

export type MotionLinkProps = {
  href: string | undefined;
  className?: string;
  children: ReactNode;
};
