import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

import AnimatedText from '@/app/components/AnimatedText.component';
import { SectionComponent } from '@/app/page';
import NavBar from '@/app/components/NavBar.component';

import profilePhoto from '../../../public/images/developer_pic.jpg';
import Skills from '../components/Skills.component';
import Experience from '../components/Experience.component';
import Studies from '../components/Studies.component';

export default function About() {
  return (
    <>
      <Head>
        <title>minademian.com | About</title>
        <meta
          name="description"
          content="about Mina Demian - minademian.com fullstack engineer software engineer web development frontend engineer backend"
        />
      </Head>
      <NavBar></NavBar>
      <main className="flex w-full flex-col items-center justify-center">
        <SectionComponent>
          <AnimatedText text="Passionate About Products" className="mb-16" />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-4 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                Profile
              </h2>
              <p className="my-4 font-light">placeholder</p>
              <p className="my-4 font-light">placeholder</p>
              <p className="my-4 font-light">placeholder</p>
            </div>
            <div className="col-span-4 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
              <Image
                src={profilePhoto}
                alt="Mina Demian"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
          <Skills />
        </SectionComponent>
        <SectionComponent>
          <AnimatedText text="Experience" className="mb-16" />
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
