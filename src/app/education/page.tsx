import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

import AnimatedText from '@/app/components/AnimatedText.component';
import { SectionComponent } from '@/app/page';
import NavBar from '@/app/components/NavBar.component';

import Studies from '@/app/components/Studies.component';

export default function Education() {
  return (
    <>
      <Head>
        <title>minademian.com | Education</title>
        <meta
          name="description"
          content="educaiton Mina Demian minademian.com fullstack engineer software engineer web development frontend engineer backend"
        />
      </Head>
      <NavBar></NavBar>
      <main className="flex w-full flex-col items-center justify-center">
        <SectionComponent>
          <AnimatedText text="Education" className="mb-16" />
          <Studies />
        </SectionComponent>
      </main>
    </>
  );
}
