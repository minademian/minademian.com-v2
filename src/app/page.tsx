'use client';

import Image from 'next/image';
import Link from 'next/link';

import { SectionComponent } from '@/atoms/Section.component';
import { LinkArrow } from '@/molecules//Icons.component';
import AnimatedText from '@/organisms/AnimatedText.component';
import HireMe from '@/organisms/HireMe.component';
import TransitionEffect from '@/organisms/TransitionEffect.component';

import profilePic from '@/public/images/art/homepage-art-3.png';
import lightBulb from '@/public/images/miscellaneous_icons_1.svg';

export default function Page() {
  return (
    <>
      <TransitionEffect />
      <main className="flex items-center bg-light dark:bg-dark dark:text-light w-full min-h-screen text-dark 2xs:w-full 2xs:p-1">
        <SectionComponent className="pt-0 md:p-16 sm:pt-8 2xs:p-0">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full lg:w-full md:mb-4">
              <Image
                src={profilePic}
                alt="minademian.com digital art"
                className="w-full h-auto md:w-full lg:w-full"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Turning Ideas Into Scaleable Products"
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-2xl font-medium lg:!text-3xl md:!text-2xl sm:!text-3xl 2xs:!text-sm 2xs:p-0">
                As an experienced full-stack engineer, I am committed to making
                great products. Explore my latest projects and blog posts,
                showcasing my skills in modern web development.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="https://files.minademian.com/MinaDemian-2024-website.pdf"
                  target={'_blank'}
                  className="flex items-center text-light p-2.5 px-6 rounded-lg text-lg 
                  font-semibold border-2 border-solid bg-dark
                  border-transparent  dark:bg-light dark:text-dark
                  hover:border-dark hover:bg-light hover:text-dark
                  hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
                  "
                  download={true}
                >
                  Resume <LinkArrow className={'w-6 ml-1'} />
                </Link>
                <Link
                  href="mailto:mina@minademian.com"
                  target={'_blank'}
                  className="ml-4 text-lg font-medium capitalize text-dark dark:text-light underline
                  "
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </SectionComponent>
        <HireMe className="md:hidden"></HireMe>
        <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
          <Image
            src={lightBulb}
            alt="minademian.com"
            className="w-full h-auto"
          />
        </div>
      </main>
    </>
  );
}
