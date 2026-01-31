import { SectionComponent } from '@/atoms/Section.component';
import AnimatedText from '@/organisms/AnimatedText.component';
import { FeaturedSite } from '@/organisms/FeaturedSite.component';
import TransitionEffect from '@/organisms/TransitionEffect.component';
import voltaireImg from '@/public/images/projects/vs_2026.png';
import { Testimonial } from '../components/organisms/Testimonial.component';

export const metadata = {
  title: 'minademian.com | Portfolio',
  description:
    'Portfolio Mina Demian - minademian.com fullstack full-stack engineer software engineer web development frontend engineer backend',
};

export default function Portfolio() {
  return (
    <>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center bg-light
      dark:bg-dark dark:text-light 2xs:w-full 2xs:p-0">
        <SectionComponent className="pt-16 2xs:p-2 2xs:mt-2">
          <AnimatedText
            text="Portfolio"
            className="mb-16 2xs:!text-4xl 2xs:p-0 2xs:mt-4 2xs:mb-8"
          />
          <div className="col-span-6 2xs:col-span-6 2xs:mr-8">
            <FeaturedSite
              type="Featured Site"
              title="Voltaire Stockholm"
              link="#"
              summary="A modern website for Voltaire Stockholm."
              techs={['Parcel', 'HTML', 'JavaScript', 'SCSS']}
              img={voltaireImg}
              testimonial={<Testimonial
              contact="Mattias Voltaire"
              role="Owner"
                text="Jag kan varmt rekommendera Mina Demian.
                Under hela processen var Mina lyhörd, engagerad och väldigt lätt att samarbeta med. Han tog sig verkligen tid att förstå mina behov och vision, och kombinerade det med egna genomtänkta idéer och värdefulla inputs som lyfte slutresultatet ytterligare. Jag är jättenöjd med både processen och den färdiga hemsidan, och skulle utan tvekan anlita Mina igen."
                translation="I can warmly recommend Mina Demian. Throughout the entire process, Mina was attentive, engaged, and very easy to collaborate with. He truly took the time to understand my needs and vision, and combined that with his own well-thought-out ideas and valuable input that elevated the final result even further. I am extremely satisfied with both the process and the finished website, and would not hesitate to hire Mina again."
              />}
            />
          </div>
        </SectionComponent>
      </main>
    </>
  );
}
