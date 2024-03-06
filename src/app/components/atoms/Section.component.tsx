import { ReactNode } from 'react';

type ComponentProps = {
  children: ReactNode[] | ReactNode;
  className?: string;
};

export const SectionComponent = ({
  children,
  className = '',
}: ComponentProps) => {
  return (
    <div className={`w-full h-full inline-block z-0 p-32 ${className}`}>
      {children}
    </div>
  );
};
