import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

import AnimatedText from '@/app/components/AnimatedText.component';
import { SectionComponent } from '@/app/page';

import profilePhoto from '../../../public/images/developer_pic.jpg';
import Skills from '../components/Skills.component';
import Experience from '../components/Experience.component';
import Studies from '../components/Studies.component';
import TransitionEffect from '../components/TransitionEffect';

export default function About() {
  return (
    <>
      <Head>
        <title>minademian.com | About</title>
        <meta
          name="description"
          content="about Mina Demian - minademian.com fullstack full-stack engineer software engineer web development frontend engineer backend"
        />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center bg-light dark:bg-dark dark:text-light">
        <SectionComponent className="pt-16">
          <AnimatedText
            text="Passionate About Products"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-4 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
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
            <div className="col-span-4 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 md:order-1 md:col-span-8">
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
        <SectionComponent>
          <AnimatedText
            text="Experience"
            className="mb-32 md:text-6xl xs:text-4xl md:mb-16"
          />
          <Experience />
        </SectionComponent>
        <SectionComponent>
          <AnimatedText text="Education" className="mb-16" />
          <Studies />
        </SectionComponent>
      </main>
    </>
  );
}
