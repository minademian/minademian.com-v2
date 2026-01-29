'use client';

import Link from 'next/link';

import { SectionComponent } from '@/atoms/Section.component';
import { GitHubIcon } from '@/molecules/Icons.component';
import AnimatedText from '@/organisms/AnimatedText.component';
import TransitionEffect from '@/organisms/TransitionEffect.component';

import { FeaturedArticle } from '../components/organisms/FeaturedArticle.component';

export default function Articles() {
  return (
    <>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center mb-16 overflow-hidden 2xs:w-full 2xs:p-0">
        <SectionComponent className="pt-16 2xs:p-2 2xs:mt-2">
          <AnimatedText
            text="Writing"
            className="mb-16 2xs:!text-4xl 2xs:p-0 2xs:mt-4 2xs:mb-8"
          />
          <ul className="grid grid-cols-2 gap-16 lg:grid-cols-1 2xs:flex 2xs:flex-col 2xs:gap-20">
            <li className="relative col-span-2 lg:col-span-1 max-w-2xl mx-auto w-full p-6 bg-light dark:bg-dark border-2 border-solid border-primary dark:border-primaryDark rounded-2xl dark:text-light">
              <Link
                href="https://github.com/minademian/documentation-library"
                target="_blank"
                className="flex items-center gap-4 lg:flex-col lg:text-center"
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary dark:bg-primaryDark text-light">
                  <GitHubIcon className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-2 hover:underline text-dark dark:text-light">
                    Documentation Library
                  </h2>
                  <p className="text-base text-dark/80 dark:text-light/80 mb-2">
                    Explore my collection of in-depth technical guides covering CI/CD pipelines,
                    architecture deep-dives, and engineering best practices.
                  </p>
                  <span className="text-primary dark:text-primaryDark font-semibold block text-right">
                    View on GitHub →
                  </span>
                </div>
              </Link>
            </li>
            <li className="relative col-span-2 lg:col-span-1 max-w-2xl mx-auto w-full p-6 bg-light dark:bg-dark border-2 border-solid border-dark dark:border-light rounded-2xl dark:text-light">
              <Link
                href="https://blog.minademian.com"
                target="_blank"
                className="flex items-center gap-4 lg:flex-col lg:text-center"
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-dark dark:bg-light text-light dark:text-dark">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 19l7-7 3 3-7 7-3-3z" />
                    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                    <path d="M2 2l7.586 7.586" />
                    <circle cx="11" cy="11" r="2" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-2 hover:underline text-dark dark:text-light">
                    Blog
                  </h2>
                  <p className="text-base text-dark/80 dark:text-light/80 mb-2">
                    More short-form writing and findings from the industry.
                  </p>
                  <span className="text-dark dark:text-light font-semibold block text-right">
                    Visit Blog →
                  </span>
                </div>
              </Link>
            </li>
            <FeaturedArticle
              title="Lessons Learned from React Native App Production"
              summary="Insights and experiences gained from deploying a React Native app to production."
              time="3 min read"
              link="https://www.linkedin.com/pulse/lessons-learned-from-react-native-app-production-mina-demian-cd3cf/"
            />
            <FeaturedArticle
              title="Grafting TDD into a Legacy React Native Codebase"
              summary="A detailed exploration of integrating Test-Driven Development practices into an existing React Native project."
              time="3 min read"
              link="https://www.linkedin.com/pulse/grafting-tdd-legacy-react-native-codebase-mina-demian-iy5df/"
            />
            <FeaturedArticle
              title="Timeboxing Ideas with AI-Assisted Engineering"
              summary="An exploration of how AI-assisted engineering can help in effectively timeboxing ideas for rapid prototyping."
              time="4 min read"
              link="https://www.linkedin.com/pulse/timeboxing-ideas-ai-assisted-engineering-mina-demian-5z0mf/"
            />
            <FeaturedArticle
              title="Using the Adapter Pattern to Tame Wild React Native Upgrades"
              summary="A guide on leveraging the Adapter Pattern to manage and simplify React Native upgrades in complex applications."
              time="4 min read"
              link="https://www.linkedin.com/pulse/using-adapter-pattern-tame-wild-react-native-upgrades-mina-demian-jagmf/"
            />
            <FeaturedArticle
              title="Verifying Android Bundles Before Publishing"
              summary="Some scripts to sanity-check and validate Android bundles before uploading to Google Play Store (and having them rejected!)."
              time="3 min read"
              link="https://blog.minademian.com/2025/11/28/verifying-android-bundles-before-publishing/"
            />
            <FeaturedArticle
              title="Test Runners in Multi-Stage Docker Builds"
              summary="A how-to guide on integrating test runners into multi-stage Docker builds for efficient CI/CD pipelines."
              time="3 min read"
              link="https://blog.minademian.com/2025/07/16/test-runners-in-multi-stage-docker-builds/"
            />
          </ul>
        </SectionComponent>
      </main>
    </>
  );
}
