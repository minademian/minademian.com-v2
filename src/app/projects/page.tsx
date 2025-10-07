
import { SectionComponent } from '@/atoms/Section.component';
import AnimatedText from '@/organisms/AnimatedText.component';
import { Project } from '@/organisms/Projects.component';
import TransitionEffect from '@/organisms/TransitionEffect.component';
import newssifter from '@/public/images/projects/newssifter.png';

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
          <div className="grid grid-cols-12 gap-24 2xs:grid-cols-6 2xs:gap-20">
            <div className="col-span-12 2xs:col-span-6 2xs:mr-8">
              <Project
                title="News Sifter"
                summary="News Sifter will be a chatbot that will provide context for news articles. 
                The user sends a news article and the bot checks it against a publicly available spreadsheet. 
                Context returned is not provided as-is, a disclaimer will also be added. 
                Built with React, TypeScript, Express, and Tailwind."
                link="#"
                github="https://github.com/minademian/newssifter"
                type="Featured Project"
                img={newssifter}
              />
            </div>
          </div>
        </SectionComponent>
      </main>
    </>
  );
}
