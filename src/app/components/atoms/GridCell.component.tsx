import { ReactNode } from 'react';

interface GridCellProps {
  children: ReactNode;
  className?: string;
}

export const GridCell = ({ children, className = '' }: GridCellProps) => {
  return (
    <div
      className={`p-10 pr-12 border-r border-dark/10 dark:border-light/10
        shadow-[1px_0_3px_-1px_rgba(0,0,0,0.1)] pt-5 pb-5
        dark:shadow-[1px_0_3px_-1px_rgba(255,255,255,0.1)]
        lg:border-r-0 lg:border-b lg:pr-0 lg:shadow-none
        ${className}`}
    >
      {children}
    </div>
  );
};
