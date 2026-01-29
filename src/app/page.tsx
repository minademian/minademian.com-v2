'use client';

import Image from 'next/image';
import Link from 'next/link';

import { FluidCell } from '@/atoms/FluidCell.component';
import { FluidRow } from '@/atoms/FluidRow.component';
import { GridCell } from '@/atoms/GridCell.component';
import { GridRow } from '@/atoms/GridRow.component';
import { SectionComponent } from '@/atoms/Section.component';
import { ContactButton } from '@/molecules/ContactButton.component';
import { HomePageSection } from '@/molecules/HomePageSection.component';
import { ResumeButton } from '@/molecules/ResumeButton.component';
import AnimatedText from '@/organisms/AnimatedText.component';
import { TechStack } from '@/organisms/TechStack.component';
import TransitionEffect from '@/organisms/TransitionEffect.component';
import profilePic from '@/public/images/art/homepage-art-3.png';
import projectImg from '@/public/images/projects/dr/dr-preview.png';

export default function Page() {
  return (
    <>
      <TransitionEffect />
      <main className="flex flex-col bg-light dark:bg-dark dark:text-light
      w-full min-h-screen text-dark 2xs:w-full 2xs:p-1">
        <SectionComponent className="pt-0 md:p-8 sm:p-6 2xs:p-4">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full lg:w-full lg:mb-8 md:mb-6">
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
                text="I design and build production-grade web applications."
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-2xl font-medium lg:!text-3xl md:!text-2xl sm:!text-3xl 2xs:!text-sm 2xs:p-0">
                Full-stack engineer. I build web apps. I build AI/ML systems.
                I use AI agents to do both. I take the ethics seriously.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <ContactButton />
              </div>
            </div>
          </div>
        </SectionComponent>
        <HomePageSection>
          <FluidRow>
            <FluidCell variant="left">
              <h2
                className="text-xl font-bold uppercase tracking-wide text-primary dark:text-primaryDark
              mb-6 sm:mb-4 lg:text-center"
              >
              Featured Project
              </h2>
              <h3
                className="text-4xl font-bold text-dark dark:text-light
                  md:text-3xl sm:text-2xl"
              >
                  Driver Recommendations
              </h3>
              <p
                className="text-lg text-dark/80 dark:text-light/80 mb-6
                  md:text-base leading-relaxed"
              >
                  A full-stack system that provides machine-learning-driven trip
                  recommendations for taxi drivers, predicting supply and demand
                  in real-time.
              </p>
              <Link
                href="/projects"
                className="inline-flex items-center text-dark dark:text-light font-medium
                    border-b-2 border-dark dark:border-light pb-1
                    hover:border-primary dark:hover:border-primaryDark
                    transition-colors"
              >
                  View Case Study
              </Link>
              <div className="mt-6 sm:mt-4 lg:flex lg:justify-center">
                <TechStack techs={['React', 'TypeScript', 'MongoDB', 'Node']} />
              </div>
            </FluidCell>
            <FluidCell variant="right-auto">
              <Link href="/projects" className="block max-w-[280px] lg:max-w-[240px] sm:max-w-[200px]">
                <Image
                  src={projectImg}
                  alt="Driver Recommendations Project"
                  className="w-full h-auto rounded-2xl shadow-lg
                      hover:shadow-xl transition-shadow border border-dark/10 dark:border-light/10"
                  priority
                  sizes="(max-width: 640px) 200px, (max-width: 1024px) 240px, 280px"
                />
              </Link>
            </FluidCell>
          </FluidRow>
        </HomePageSection>
        <HomePageSection>
          <GridRow>
            {/* About */}
            <GridCell>
              <h3 className="text-lg font-bold mb-4 text-dark dark:text-light">
                Latest Publications
              </h3>
              <p className="text-base text-dark/80 dark:text-light/80 leading-relaxed">
                I&apos;m a senior full-stack engineer with years of experience
                in building scalable web applications and complex systems.
              </p>
            </GridCell>
            <GridCell>
              <h3 className="text-lg font-bold mb-4 text-dark dark:text-light">
                More Writing
              </h3>
              <div className="space-y-4">
                <article>
                  <Link
                    href="/articles"
                    className="text-base font-medium text-dark dark:text-light
                      hover:text-primary dark:hover:text-primaryDark transition-colors"
                  >
                    Optimising React Applications
                  </Link>
                  <p className="text-sm text-dark/60 dark:text-light/60 mt-1">
                    Master memory optimisation with the power of memoisation.
                  </p>
                </article>
              </div>
            </GridCell>
          </GridRow>
          <GridRow>
            <GridCell>
              <h3 className="text-lg font-bold mb-4 text-dark dark:text-light">
                Contact
              </h3>
              <ContactButton />
            </GridCell>
            <GridCell>
              <h3 className="text-lg font-bold mb-4 text-dark dark:text-light">
                Open to Collaboration and Opportunities
              </h3>
              <ResumeButton />
            </GridCell>
          </GridRow>
        </HomePageSection>
      </main>
    </>
  );
}
