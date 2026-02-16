'use client';

import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';

import { GitHubIcon } from '@/molecules/Icons.component';

import { TechStack } from './TechStack.component';

type ProjectVideoProps = {
  type: string;
  title: string;
  summary: string;
  videoSrc: string;
  img: StaticImageData;
  link: string | URL;
  github?: string | null;
  stack?: string[];
};

export const FeaturedProjectVideo = ({
  type,
  title,
  summary,
  videoSrc,
  img,
  link,
  github,
  stack,
}: ProjectVideoProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

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

  return (
    <article className="relative w-full p-6 bg-light dark:bg-dark border border-solid border-dark dark:border-light rounded-2xl dark:text-light">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
      <div className="flex items-center justify-between 2xs:flex-col">
        <div className="relative aspect-[9/19.5] max-w-[360px] mx-auto rounded-2xl overflow-hidden">
          {videoSrc ? (
            <>
              <video
                ref={videoRef}
                preload="metadata"
                className="w-full h-full object-contain block rounded-2xl"
                poster={img.src}
                muted
                loop
                onClick={handlePlay}
              >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {!isPlaying && (
                <button
                  onClick={handlePlay}
                  className="absolute inset-0 flex items-center justify-center text-white bg-black/30 text-[clamp(2rem,5vw,3rem)] rounded-2xl"
                  aria-label="Play video"
                >
                  ▶
                </button>
              )}
            </>
          ) : (
            <Image
              src={img}
              alt={title}
              className="w-full h-auto rounded-2xl"
              priority
              sizes="(max-width: 768px) 100vw, 360px"
            />
          )}
        </div>

        <div className="w-1/2 flex flex-col items-start justify-between pl-6">
          <span className="text-primary font-medium text-xl dark:text-primaryDark">
            {type}
          </span>

          <Link href={link} target="_blank" className="hover:underline underline-offset-2">
            <h2 className="my-2 w-full text-left text-4xl xl:text-xl md:text-2xl font-bold">{title}</h2>
          </Link>

          <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>

          <div className="mt-2 flex items-center">
            {github && (
              <Link href={github} className="w-10" target="_blank">
                <GitHubIcon />
              </Link>
            )}
            {link === '#' ? (
              <Link
                href=""
                className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark"
              >
                Coming Soon
              </Link>
            ) : (
              <Link
                href={link}
                target="_blank"
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