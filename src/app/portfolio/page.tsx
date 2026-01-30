import { SectionComponent } from '@/atoms/Section.component';
import AnimatedText from '@/organisms/AnimatedText.component';
import { FeaturedSite } from '@/organisms/FeaturedSite.component';
import TransitionEffect from '@/organisms/TransitionEffect.component';
import voltaireImg from '@/public/images/projects/vs_2026.png';

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
            />
          </div>
        </SectionComponent>
      </main>
    </>
  );
}
