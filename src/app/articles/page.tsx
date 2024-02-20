'use client';

import React, { useRef } from 'react';
import Head from 'next/head';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import { motion, useMotionValue } from 'framer-motion';

import AnimatedText from '@/app/components/AnimatedText.component';
import { SectionComponent } from '@/app/page';
import NavBar from '@/app/components/NavBar.component';

import newssifter from '../../../public/images/projects/newssifter.png';

const FramerImage = motion(Image);

type FeaturedArticleProps = {
  title: string;
  img: StaticImageData;
  link: string;
  time: string;
  summary: string;
};

type ArticleProps = Omit<FeaturedArticleProps, 'time' | 'summary'> & {
  date: string;
};

type MovingImageProps = Omit<FeaturedArticleProps, 'summary' | 'time'>;

const FeaturedArticle = ({
  img,
  title,
  time,
  summary,
  link,
}: FeaturedArticleProps) => {
  return (
    <li className="relative col-span-1 w-full p-4 bg-light  dark:bg-dark dark:border-light  border border-solid border-dark rounded-2xl dark:text-light">
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark"
        rounded-br-3xl
      />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 hover:underline">
          {title}
        </h2>
        <p className="text-sm mb-2">{summary}</p>
        <span className="text-primary dark:text-primaryDark font-semibold">
          {time}
        </span>
      </Link>
    </li>
  );
};

const MovingImage = ({ title, img, link }: MovingImageProps) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = 'inline-block';
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = 'none';
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl dark:text-light font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        style={{ x, y }}
        ref={imgRef}
        src={img}
        alt={title}
        className="w-96 h-auto hidden absolute rounded-lg z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </Link>
  );
};

const Article = ({ img, title, date, link }: ArticleProps) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4
       dark:bg-dark dark:border-light
      "
    >
      <MovingImage img={img} title={title} link={link} />
      <span className="text-primary dark:text-primaryDark font-semibold pl-4">
        {date}
      </span>
    </motion.li>
  );
};

export default function About() {
  return (
    <>
      <Head>
        <title>minademian.com | Articles</title>
        <meta
          name="description"
          content="articles Mina Demian - minademian.com fullstack engineer software engineer web development frontend engineer backend"
        />
      </Head>
      <main className="flex w-full flex-col items-center justify-center mb-16 overflow-hidden">
        <SectionComponent className="pt-16">
          <AnimatedText text="Articles" className="mb-16" />
          <ul className="grid grid-cols-2 gap-16">
            <FeaturedArticle
              title="test"
              summary="test"
              time="9 min read"
              link="/"
              img={newssifter}
            />
            <FeaturedArticle
              title="test"
              summary="test"
              time="9 min read"
              link="/"
              img={newssifter}
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 dark:text-light">
            All Articles
          </h2>
          <ul>
            <Article
              title="test"
              img={newssifter}
              date="hello"
              link="mina"
            ></Article>
            <Article
              title="test"
              img={newssifter}
              date="hello"
              link="mina"
            ></Article>
            <Article
              title="test"
              img={newssifter}
              date="hello"
              link="mina"
            ></Article>
            <Article
              title="test"
              img={newssifter}
              date="hello"
              link="mina"
            ></Article>
            <Article
              title="test"
              img={newssifter}
              date="hello"
              link="mina"
            ></Article>
          </ul>
        </SectionComponent>
      </main>
    </>
  );
}
