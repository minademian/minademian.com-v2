'use client';

import Image from 'next/image';
import Link from 'next/link';

import { FluidCell } from '@/atoms/FluidCell.component';
import { FluidRow } from '@/atoms/FluidRow.component';
import { GridCell } from '@/atoms/GridCell.component';
import { GridRow } from '@/atoms/GridRow.component';
import { SectionComponent } from '@/atoms/Section.component';
import { CaseStudyButton } from '@/molecules/CaseStudyButton.component';
import { ContactButton } from '@/molecules/ContactButton.component';
import { GitHubPill } from '@/molecules/GitHubPill.component';
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
      <main
        className="flex flex-col bg-light dark:bg-dark dark:text-light
      w-full min-h-screen text-dark 2xs:w-full 2xs:p-1"
      >
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
                Full-stack engineer. I build web apps. I build systems that interface with AI/ML. I
                use AI agents to do both. I take the ethics seriously.
              </p>
              <GridRow maxWidth="max-w-[1900px]">
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
              <CaseStudyButton label={'View Demo'} />
              <div className="mt-6 sm:mt-4 lg:flex lg:justify-center">
                <TechStack techs={['React', 'TypeScript', 'MongoDB', 'Node']} />
              </div>
              <div className="mt-4 text-right lg:text-center">
                <Link
                  href="/projects"
                  className="inline-block px-4 py-2 rounded-lg text-dark dark:text-light font-semibold hover:bg-primary hover:text-light dark:hover:bg-primaryDark dark:hover:text-dark transition-all"
                >
                  See more projects →
                </Link>
              </div>
            </FluidCell>
            <FluidCell variant="right-auto">
              <Link
                href="/projects"
                className="block max-w-[280px] lg:max-w-[240px] sm:max-w-[200px]"
              >
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
          <GridRow maxWidth="max-w-[1900px]">
            {/* About */}
            <GridCell className="border-l-4 border-primary dark:border-primaryDark pl-6">
              <h3 className="text-lg font-bold mb-4 text-dark dark:text-light">
                Latest Publications
              </h3>
              <ul className="space-y-4 text-base text-dark/80 dark:text-light/80 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-primary dark:text-primaryDark">•</span>
                  <span>
                    I&apos;ve launched my{' '}
                    <GitHubPill
                      href="https://github.com/minademian/documentation-library"
                      label="documentation-library"
                    />
                    !
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary dark:text-primaryDark">•</span>
                  <span>
                    My first two open-source packages!
                    <table className="mt-2 text-sm">
                      <tbody>
                        <tr>
                          <td className="pr-3 py-1 align-top">
                            <GitHubPill
                              href="https://github.com/minademian/server-utilities"
                              label="server-utilities"
                            />
                          </td>
                          <td className="py-1">
                            Server utilities for auditing remote servers
                          </td>
                        </tr>
                        <tr>
                          <td className="pr-3 py-1 align-top">
                            <GitHubPill
                              href="https://github.com/ursine-code/yarn-shell-completion"
                              label="yarn-shell-completion"
                            />
                          </td>
                          <td className="py-1">
                            Yarn shell completion for ohmyzsh and bash
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </span>
                </li>
              </ul>
            </GridCell>
            <GridCell>
              <h3 className="text-lg font-bold mb-4 text-dark dark:text-light">
                More Writing
              </h3>
              <table className="text-sm text-dark/80 dark:text-light/80 w-full rounded-lg overflow-hidden">
                <tbody>
                  <tr className="bg-primary/5 dark:bg-primaryDark/5">
                    <td className="px-3 py-2">
                      <Link
                        href="https://www.linkedin.com/pulse/lessons-learned-from-react-native-app-production-mina-demian-cd3cf/"
                        target="_blank"
                        className="text-primary dark:text-primaryDark underline underline-offset-2 hover:text-dark dark:hover:text-light transition-colors"
                      >
                        Lessons Learned from React Native App Production
                      </Link>
                    </td>
                  </tr>
                  <tr className="bg-dark/5 dark:bg-light/5">
                    <td className="px-3 py-2">
                      <Link
                        href="https://www.linkedin.com/pulse/grafting-tdd-legacy-react-native-codebase-mina-demian-iy5df/"
                        target="_blank"
                        className="text-primary dark:text-primaryDark underline underline-offset-2 hover:text-dark dark:hover:text-light transition-colors"
                      >
                        Grafting TDD into a Legacy React Native Codebase
                      </Link>
                    </td>
                  </tr>
                  <tr className="bg-primary/5 dark:bg-primaryDark/5">
                    <td className="px-3 py-2">
                      <Link
                        href="https://www.linkedin.com/pulse/timeboxing-ideas-ai-assisted-engineering-mina-demian-5z0mf/"
                        target="_blank"
                        className="text-primary dark:text-primaryDark underline underline-offset-2 hover:text-dark dark:hover:text-light transition-colors"
                      >
                        Timeboxing Ideas with AI-Assisted Engineering
                      </Link>
                    </td>
                  </tr>
                  <tr className="bg-dark/5 dark:bg-light/5">
                    <td className="px-3 py-2">
                      <Link
                        href="https://www.linkedin.com/pulse/using-adapter-pattern-tame-wild-react-native-upgrades-mina-demian-jagmf/"
                        target="_blank"
                        className="text-primary dark:text-primaryDark underline underline-offset-2 hover:text-dark dark:hover:text-light transition-colors"
                      >
                        Using the Adapter Pattern to Tame Wild React Native
                        Upgrades
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </GridCell>
          </GridRow>
        </HomePageSection>
      </main>
    </>
  );
}
