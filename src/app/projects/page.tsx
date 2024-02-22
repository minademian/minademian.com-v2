import React from 'react';

import Head from 'next/head';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

import { SectionComponent } from '@/app/page';

import AnimatedText from '@/app/components/AnimatedText.component';
import { GitHubIcon } from '../components/Icons.component';
import TransitionEffect from '../components/TransitionEffect';

import newssifter from '../../../public/images/projects/newssifter.png';
import larportalen from '../../../public/images/projects/larportalen/larportalen-1.png';
import scania from '../../../public/images/projects/scania/scania.png';

type ProjectProps = {
  type: string;
  title: string;
  summary: string;
  img: StaticImageData;
  link: string | URL;
  github?: string | null;
};

const FeaturedProject = ({
  type,
  title,
  summary,
  img,
  link,
  github,
}: ProjectProps) => {
  return (
    <article className="w-full flex items-center justify-between 2xs:flex-col relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light dark:bg-dark dark:border-light shadow-2xl p-12 2xs:p-3">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github as string} className="w-10" target="_blank">
            <GitHubIcon />
          </Link>
          <Link
            href={link}
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light  dark:text-dark"
          >
            Coming Soon
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, summary, img, link, github }: ProjectProps) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light dark:text-light">
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark"
        rounded-br-3xl
      />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary dark:text-primaryDark font-medium text-xl">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>
        <div className="mt-2 flex items-center">
          {github ? (
            <Link href={github} className="w-10" target="_blank">
              <GitHubIcon />
            </Link>
          ) : null}
          <Link
            href={link}
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark"
          >
            View Project
          </Link>
        </div>
      </div>
    </article>
  );
};

export default function Projects() {
  return (
    <>
      <Head>
        <title>minademian.com | About</title>
        <meta
          name="description"
          content="about Mina Demian - minademian.com fullstack engineer software engineer web development frontend engineer backend"
        />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center bg-light dark:bg-dark dark:text-light 2xs:w-full 2xs:p-0">
        <SectionComponent className="pt-16 2xs:p-2 2xs:mt-2">
          <AnimatedText
            text="Projects"
            className="mb-16 2xs:!text-4xl 2xs:p-0 2xs:mt-4 2xs:mb-8"
          />
          <div className="grid grid-cols-12 gap-24 2xs:grid-cols-6 2xs:gap-20">
            <div className="col-span-12 2xs:col-span-6 2xs:mr-8">
              <Project
                title="News Sifter"
                summary="News Sifter will be a chatbot that will provide context for news articles. The user sends a news article and the bot checks it against a publicly available spreadsheet. Context returned is not provided as-is, a disclaimer will also be added. Built with React, TypeScript, Express, and Tailwind."
                link="#"
                github="https://github.com/minademian/newssifter"
                type="Featured Project"
                img={newssifter}
              />
            </div>
            <div className="col-span-6 2xs:col-span-6 2xs:mr-8">
              {' '}
              <Project
                title="Scania Driver Evaluation Dashboard"
                summary="A test case built for an interview process. Built with Angular 11 and WebComponents generated by Stencil.js."
                link="https://projects.minademian.com/scania-test-case"
                type="Project"
                img={scania}
                github="https://github.com/minademian/scania-testcase"
              />
            </div>
            <div className="col-span-6 2xs:col-span-6 2xs:mr-8 2xs:mb-4">
              {' '}
              <Project
                title="Lärportalen (Teachers' Portal)"
                summary="The Swedish Education Authority's Teachers' Portal, built with Angular 11, NgRx, RxJs, and SCSS."
                link="https://larportalen.skolverket.se"
                type="Project"
                img={larportalen}
              />
            </div>
          </div>
        </SectionComponent>
      </main>
    </>
  );
}
