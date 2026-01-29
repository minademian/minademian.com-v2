import { ReactNode } from 'react';

interface GridRowProps {
  children: ReactNode;
  className?: string;
}

export const GridRow = ({ children, className = '' }: GridRowProps) => {
  return (
    <div
      className={`grid grid-cols-2 gap-12 lg:grid-cols-1 lg:gap-10 md:gap-8 ${className}`}
    >
      {children}
    </div>
  );
};
