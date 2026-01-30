
import { SectionComponent } from '@/atoms/Section.component';
import AnimatedText from '@/organisms/AnimatedText.component';
import TransitionEffect from '@/organisms/TransitionEffect.component';
import DRImg from '@/public/images/projects/dr/dr-preview.png';
import RPImg from '@/public/images/projects/rpo/tn_2026.png';
import SSPImg from '@/public/images/projects/ssp/tn_1_2026.png';

import { FeaturedProjectVideo } from '../components/organisms/FeaturedProjectVideo.component';
import { Project } from '../components/organisms/Projects.component';

const DRVideoUrl = 'https://d1n1dt082182bs.cloudfront.net/DR-showcase-2025.mp4';
const SSPVideoUrl = 'https://d1n1dt082182bs.cloudfront.net/ssp-2026.mp4';
const RPVideoUrl = 'https://projects.minademian.com/docs-lib/route-planning.mp4';

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
          <div className="col-span-6 2xs:col-span-6 2xs:mr-8 space-y-8">
            <FeaturedProjectVideo
              type="Featured Project"
              videoSrc={DRVideoUrl}
              img={DRImg}
              title="Driver Recommendations"
              link="#"
              summary="A full-stack solution to provide recommendations for predicted trips to Cabonline taxi drivers,
              powered by a machine learning model to predict supply and demand."
              stack={['React', 'Styled Components', 'TypeScript', 'MongoDB', 'HashiCorp Nomad', 'Docker', 'REST APIs', 'Microservices', 'Node', 'Express', 'Google Maps API']}
            />
            <Project
              img={SSPImg}
              videoSrc={SSPVideoUrl}
              type="Project"
              title="Semantic Search Portal"
              summary="A semantic search engine that ingests and indexes audio recordings, video recordings, and text content. You can then search by keywords. The portal ingests content by upload, filesystem path, or API calls."
              link="#"
              stack={['Java 17', 'Spring Boot 3', 'JPA', 'Flyway', 'JUnit', 'React', 'TypeScript', 'Vite', 'Material-UI', 'Emotion', 'Python 3.12', 'FastAPI', 'faster-whisper', 'WhisperModel', 'ChromaDB', 'all-MiniLM-L6-v2', 'Docker', 'PostgreSQL', 'REST API']}
            />
            <Project
              img={RPImg}
              videoSrc={RPVideoUrl}
              type="Project"
              title="Route Planning Optimization Engine"
              summary="A concept route planning optimization engine built during a hackathon!"
              link="#"
              stack={['Java 23', 'Spring Boot 3', 'JPA', 'JavaScript', 'Vite', 'AWS Location Services API', 'REST API']}
            />
          </div>
        </SectionComponent>
      </main>
    </>
  );
}
