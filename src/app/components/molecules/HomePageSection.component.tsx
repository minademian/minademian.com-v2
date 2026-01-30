import { ReactNode } from 'react';

import { SectionComponent } from '@/atoms/Section.component';

interface HomePageSectionProps {
  children: ReactNode;
  className?: string;
}

export const HomePageSection = ({
  children,
  className = '',
}: HomePageSectionProps) => {
  return (
    <SectionComponent className={`pt-0 md:p-8 sm:p-6 2xs:p-4 ${className}`}>
      {children}
    </SectionComponent>
  );
};
