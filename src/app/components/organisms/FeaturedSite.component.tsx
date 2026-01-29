'use client';

import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import { TechStack } from './TechStack.component';

type FeaturedSiteProps = {
  type: string;
  title: string;
  summary: string;
  img?: StaticImageData | string;
  link: string | URL;
  techs?: string[];
};

export const FeaturedSite = ({
  type,
  title,
  summary,
  img,
  link,
  techs = [],
}: FeaturedSiteProps) => {
  return (
    <article className="w-full flex items-center justify-between lg:flex-col relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light dark:bg-dark dark:border-light shadow-2xl p-12 lg:p-8 md:p-6 2xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />

      <div className="w-1/2 lg:w-full lg:mb-6 overflow-hidden rounded-2xl">
        {img ? (
          <Link href={link} target="_blank">
            <Image
              src={img}
              alt={title}
              className="w-full h-auto rounded-2xl hover:scale-105 transition-transform duration-300"
              priority
            />
          </Link>
        ) : (
          <div className="w-full aspect-video bg-dark/10 dark:bg-light/10 rounded-2xl flex items-center justify-center">
            <span className="text-dark/40 dark:text-light/40 text-lg">Screenshot coming soon</span>
          </div>
        )}
      </div>

      <div className="w-1/2 lg:w-full flex flex-col items-start justify-between pl-6 lg:pl-0">
        <span className="text-primary font-medium text-xl dark:text-primaryDark">
          {type}
        </span>

        <Link href={link} target="_blank" className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-4xl font-bold lg:text-3xl md:text-2xl">{title}</h2>
        </Link>

        <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>

        <div className="mt-2 flex items-center flex-wrap">
          {link !== '#' && (
            <Link
              href={link}
              target="_blank"
              className="rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark hover:bg-dark/80 dark:hover:bg-light/80 transition-colors"
            >
              Visit Site
            </Link>
          )}

          {techs.length > 0 && <TechStack techs={techs} />}
        </div>
      </div>
    </article>
  );
};
