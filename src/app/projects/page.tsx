
import { SectionComponent } from '@/atoms/Section.component';
import AnimatedText from '@/organisms/AnimatedText.component';
import TransitionEffect from '@/organisms/TransitionEffect.component';

import { FeaturedProjectVideo } from '../components/organisms/FeaturedProjectVideo.component';

const DRVideoUrl = 'https://d1n1dt082182bs.cloudfront.net/DR-showcase-2025.mp4';

export const metadata = {
  title: 'minademian.com | Projects',
  description:
    // eslint-disable-next-line max-len
    'Projects Mina Demian - minademian.com fullstack full-stack engineer software engineer web development frontend engineer backend',
};

export default function Projects() {
  return (
    <>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center bg-light
      dark:bg-dark dark:text-light 2xs:w-full 2xs:p-0">
        <SectionComponent className="pt-16 2xs:p-2 2xs:mt-2">
          <AnimatedText
            text="Projects"
            className="mb-16 2xs:!text-4xl 2xs:p-0 2xs:mt-4 2xs:mb-8"
          />
          <div className="col-span-6 2xs:col-span-6 2xs:mr-8">
            <FeaturedProjectVideo
              type="Featured Project"
              videoSrc={DRVideoUrl}
              title="Driver Recommendations"
              link="#"
              summary="A full-stack solution to provide recommendations for predicted trips to Cabonline taxi drivers,
              powered by a machine learning model to predict supply and demand."
            />
          </div>
        </SectionComponent>
      </main>
    </>
  );
}
