'use client';

import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';

import { GitHubIcon } from '@/molecules//Icons.component';
import { TechStack } from './TechStack.component';

type ProjectProps = {
  type: string;
  title: string;
  summary: string;
  img: StaticImageData;
  link: string | URL;
  github?: string | null;
  stack?: string[];
  videoSrc?: string;
};

export const Project = ({
  type,
  title,
  summary,
  img,
  link,
  github,
  stack,
  videoSrc,
}: ProjectProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoError, setVideoError] = useState(false);

  const handlePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.play();
      setIsPlaying(true);
    }
  };

  const handleVideoError = () => {
    setVideoError(true);
  };

  return (
    <article className="relative w-full p-4 bg-light dark:bg-dark border border-solid border-dark dark:border-light rounded-2xl dark:text-light">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
      <div className="flex flex-row gap-6 lg:flex-col">
        <div className="block max-w-md overflow-hidden rounded-lg shrink-0">
          {videoSrc && !videoError ? (
            <div className="relative">
              <video
                ref={videoRef}
                preload="metadata"
                className="w-full h-auto rounded-lg"
                muted
                loop
                playsInline
                onClick={handlePlay}
                onError={handleVideoError}
                poster={img.src}
              >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {!isPlaying && (
                <button
                  onClick={handlePlay}
                  className="absolute inset-0 flex items-center justify-center text-white bg-black/30 text-4xl rounded-lg"
                  aria-label="Play video"
                >
                  ▶
                </button>
              )}
            </div>
          ) : (
            <Link href={link} target="_blank" className="cursor-pointer">
              <Image
                src={img}
                alt={title}
                className="w-full h-auto"
                priority
                sizes="(max-width: 768px) 100vw, 448px"
              />
            </Link>
          )}
        </div>
        <div className="flex flex-col items-start justify-between">
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
            {github && (
              <Link href={github} className="w-10" target="_blank">
                <GitHubIcon />
              </Link>
            )}
            {link == '#' ? (
              <Link
                href=""
                className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark"
              >
                Coming Soon
              </Link>
            ) : (
              <Link
                href={link}
                className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark"
              >
                View Project
              </Link>
            )}
          </div>
          {stack && stack.length > 0 && (
            <div className="mt-4">
              <TechStack techs={stack} />
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export const FeaturedProject = ({
  type,
  title,
  summary,
  img,
  link,
  github,
}: ProjectProps) => {
  return (
    // eslint-disable-next-line max-len
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
