import React from 'react';

import Head from 'next/head';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

import AnimatedText from '@/app/components/AnimatedText.component';
import { SectionComponent } from '@/app/page';
import NavBar from '@/app/components/NavBar.component';
import { GitHubIcon } from '../components/Icons.component';
import newssifter from '../../../public/images/projects/newssifter.png';
import TransitionEffect from '../components/TransitionEffect';

type ProjectProps = {
  type: string;
  title: string;
  summary: string;
  img: StaticImageData;
  link: string;
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
    <article className="w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light dark:bg-dark dark:border-light shadow-2xl p-12">
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
          <Link href={github} className="w-10" target="_blank">
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
      <main className="flex w-full flex-col items-center justify-center bg-light dark:bg-dark dark:text-light">
        <SectionComponent className="pt-16">
          <AnimatedText text="Projects" className="mb-16" />
          <div className="grid grid-cols-12 gap-24">
            <div className="col-span-12">
              <FeaturedProject
                title="News Sifter"
                summary="stuff."
                link="#"
                github="https://github.com/minademian/newssifter"
                type="Featured Project"
                img={newssifter}
              />
            </div>
            <div className="col-span-6">
              {' '}
              <Project
                title="Lärportalen (Teachers' Portal)"
                summary="The Swedish Education Authority's Teachers' Portal, built with Angular 11, NgRx, RxJs, and SCSS."
                link="https://larportalen.skolverket.se"
                type="Project"
                img={newssifter}
              />
            </div>
            <div className="col-span-6">
              {' '}
              <Project
                title="Lärportalen (Teachers' Portal)"
                summary="The Swedish Education Authority's Teachers' Portal, built with Angular 11, NgRx, RxJs, and SCSS."
                link="https://larportalen.skolverket.se"
                type="Project"
                img={newssifter}
              />
            </div>
          </div>
        </SectionComponent>
      </main>
    </>
  );
}
