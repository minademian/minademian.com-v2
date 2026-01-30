import { ReactNode } from 'react';

interface GridRowProps {
  children: ReactNode;
  className?: string;
  maxWidth?: string;
  centered?: boolean;
}

export const GridRow = ({
  children,
  className = '',
  maxWidth = '',
  centered = true,
}: GridRowProps) => {
  return (
    <div
      className={`grid grid-cols-2 gap-6 lg:grid-cols-1 lg:gap-10 md:gap-8 ${maxWidth} ${centered ? 'mx-auto' : ''} ${className}`}
    >
      {children}
    </div>
  );
};
