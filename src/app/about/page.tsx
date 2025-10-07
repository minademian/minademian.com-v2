import Image from 'next/image';

import { SectionComponent } from '@/atoms/Section.component';
import AnimatedText from '@/organisms/AnimatedText.component';

import Experience from '@/organisms/Experience.component';
import Skills from '@/organisms/Skills.component';
import Studies from '@/organisms/Studies.component';
import TransitionEffect from '@/organisms/TransitionEffect.component';
import profilePhoto from '@/public/images/developer_pic.jpg';

export const metadata = {
  title: 'minademian.com | About',
  description:
    'about Mina Demian - minademian.com fullstack full-stack engineer software engineer web development frontend engineer backend',
};

export default function About() {
  return (
    <>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center bg-light dark:bg-dark dark:text-light 2xs:w-full 2xs:p-0">
        <SectionComponent className="pt-16 2xs:p-2 2xs:mt-2">
          <AnimatedText
            text="Products, Not Code"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 2xs:!text-3xl 2xs:p-0 2xs:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 2xs:gap-19 2xs:p-0">
            <div className="col-span-4 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8 2xs:col-span-8 2xs:mr-[5rem]">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light">
                Profile
              </h2>
              <p className="my-4 font-light">
                My name is Mina Demian and I&apos;m an experienced front-end
                engineer, with experience also in full-stack development. With 7
                years of experience in a modern web stack and 18 years overall
                in tech, I am passionate about building meaningful, high-impact
                products that scale.
              </p>
              <p className="my-4 font-light">
                I believe that code and technology are tools and not the end. I
                maintain agnosticism about technology, which helps me focus on
                using the right tool for the job. With the right tools, focus,
                and strategy, technology helps us build the right product!
              </p>
              <p className="my-4 font-light">
                Good products are for people by people, and I enjoy working with
                both types of people! Products are also built collegiately by
                people, and teamwork is where real magic happens.
              </p>
            </div>
            <div className="col-span-4 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 2xs:p-3 2xs:w-[90vw] md:order-1 md:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={profilePhoto}
                alt="Mina Demian"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
          <Skills />
        </SectionComponent>
        <SectionComponent className="pt-16 2xs:p-2 2xs:mt-2">
          <AnimatedText
            text="Experience"
            className="mb-32 md:text-6xl xs:text-4xl md:mb-16 2xs:!text-3xl 2xs:p-0 2xs:mt-4 2xs:mb-8"
          />
          <Experience />
        </SectionComponent>
        <SectionComponent className="pt-16 2xs:p-2 2xs:mt-2">
          <AnimatedText
            text="Education"
            className="mb-16  2xs:!text-3xl 2xs:p-0 2xs:mt-4 2xs:mb-8"
          />
          <Studies />
        </SectionComponent>
      </main>
    </>
  );
}
