import { ReactNode } from 'react';

interface FluidCellProps {
  children: ReactNode;
  className?: string;
  variant?: 'left' | 'right' | 'right-auto' | 'default';
}

const variantClasses = {
  default: 'w-1/2 lg:w-full',
  left: 'w-1/2 lg:w-full lg:mb-6 lg:text-center',
  right: 'w-1/2 lg:w-full flex justify-center',
  'right-auto': 'w-auto lg:w-full flex justify-center',
};

export const FluidCell = ({
  children,
  className = '',
  variant = 'default',
}: FluidCellProps) => {
  return (
    <div className={`${variantClasses[variant]} ${className}`}>
      {children}
    </div>
  );
};
