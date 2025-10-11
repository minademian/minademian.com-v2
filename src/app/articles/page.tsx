'use client';


import { SectionComponent } from '@/atoms/Section.component';
import AnimatedText from '@/organisms/AnimatedText.component';
import TransitionEffect from '@/organisms/TransitionEffect.component';
import devtalk from '@/public/images/articles/devtalk.png';
import githubp from '@/public/images/articles/github.png';

import { FeaturedArticle } from '../components/organisms/FeaturedArticle.component';

export default function Articles() {
  return (
    <>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center mb-16 overflow-hidden 2xs:w-full 2xs:p-0">
        <SectionComponent className="pt-16 2xs:p-2 2xs:mt-2">
          <AnimatedText
            text="Articles"
            className="mb-16 2xs:!text-4xl 2xs:p-0 2xs:mt-4 2xs:mb-8"
          />
          <ul className="grid grid-cols-2 gap-16 2xs:flex 2xs:flex-col 2xs:gap-20">
            <FeaturedArticle
              title="Addressing GitHub's Vulnerability Warning in Your Code Repository"
              summary="A guide on how to address GitHub's vulneravility warnings in your GitHub repositories"
              time="4 min read"
              link="https://blog.minademian.com/2018/06/26/addressing-githubs-vulnerability-warning-in-your-code-repository/"
              img={githubp}
            />
            <FeaturedArticle
              title="Lightning Talk - Openshift Container Platform"
              summary="A web presentation of a lightning talk given at a previous employer. A quick guide to how to deploy frontend apps with Redhat Openshift."
              time="5 min read"
              link="https://projects.minademian.com/talk/"
              img={devtalk}
            />
          </ul>
        </SectionComponent>
      </main>
    </>
  );
}
