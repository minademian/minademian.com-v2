import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

import AnimatedText from '@/app/components/AnimatedText.component';
import { SectionComponent } from '@/app/page';
import NavBar from '@/app/components/NavBar.component';

import profilePhoto from '../../../public/images/developer_pic.jpg';
import Skills from '../components/Skills.component';
import Experience from '../components/Experience.component';

export default function About() {
  return (
    <>
      <Head>
        <title>minademian.com | Resume</title>
        <meta
          name="description"
          content="resume CV work working experience Mina Demian minademian.com fullstack engineer software engineer web development frontend engineer backend"
        />
      </Head>
      <NavBar></NavBar>
      <main className="flex w-full flex-col items-center justify-center">
        <SectionComponent>
          <AnimatedText text="Resume" className="mb-16" />
          <Experience />
        </SectionComponent>
      </main>
    </>
  );
}
