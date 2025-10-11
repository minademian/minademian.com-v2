'use client';

import Link from 'next/link';
import { useRef, useState } from 'react';

import { GitHubIcon } from '@/molecules/Icons.component';

import { TechStack } from './TechStack.component';

type ProjectVideoProps = {
  type: string;
  title: string;
  summary: string;
  videoSrc: string;
  link: string | URL;
  github?: string | null;
};

export const FeaturedProjectVideo = ({
  type,
  title,
  summary,
  videoSrc,
  link,
  github,
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
    <article className="w-full flex items-center justify-between 2xs:flex-col relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light dark:bg-dark dark:border-light shadow-2xl p-12 2xs:p-3">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />

      <div className="relative aspect-[9/19.5] max-w-[360px] mx-auto rounded-2xl overflow-hidden">
        <video
          ref={videoRef}
          preload="metadata"
          className="w-full h-full object-contain block rounded-2xl"
          poster="/placeholder.jpg"
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
      </div>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark">
          {type}
        </span>

        <Link href={link} target="_blank" className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>

        <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>

        <div className="mt-2 flex items-center">
          {github && (
            <Link href={github} className="w-10" target="_blank">
              <GitHubIcon />
            </Link>
          )}

          {link != '#' && (
            <Link
              href=""
              className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark"
            >
              View on GitHub
            </Link>
          )}

          <TechStack techs={['React', 'Styled Components', 'TypeScript', 'MongoDB', 'HashiCorp Nomad', 'Docker', 'REST APIs', 'Microservices', 'Node', 'Express', 'Google Maps API']} />
        </div>
      </div>
    </article>
  );
};