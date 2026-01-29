import { ReactNode } from 'react';

interface FluidRowProps {
  children: ReactNode;
  className?: string;
}

export const FluidRow = ({ children, className = '' }: FluidRowProps) => {
  return (
    <div
      className={`flex justify-around items-center gap-12 lg:flex-col lg:gap-8 md:gap-6 ${className}`}
    >
      {children}
    </div>
  );
};
