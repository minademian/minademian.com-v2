
import { SectionComponent } from '@/atoms/Section.component';
import AnimatedText from '@/organisms/AnimatedText.component';
import { ProjectsView } from '@/organisms/ProjectsView.component';
import TransitionEffect from '@/organisms/TransitionEffect.component';

import { PROJECTS } from './data';

export const metadata = {
  title: 'minademian.com | Projects',
  description:
    // eslint-disable-next-line max-len
    'Projects Mina Demian - minademian.com fullstack full-stack engineer software engineer web development frontend engineer backend',
};

export default function Projects() {
  return (
    <>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center bg-light
      dark:bg-dark dark:text-light 2xs:w-full 2xs:p-0">
        <SectionComponent className="pt-16 2xs:p-2 2xs:mt-2">
          <AnimatedText
            text="Projects"
            className="mb-16 2xs:!text-4xl 2xs:p-0 2xs:mt-4 2xs:mb-8"
          />
          <ProjectsView projects={PROJECTS} />
        </SectionComponent>
      </main>
    </>
  );
}
