import { SectionComponent } from '@/atoms/Section.component';
import AnimatedText from '@/organisms/AnimatedText.component';
import { ContactForm } from '@/organisms/ContactForm.component';
import TransitionEffect from '@/organisms/TransitionEffect.component';

export const metadata = {
  title: 'minademian.com | Contact',
  description:
    'Get in touch with Mina Demian - full-stack engineer, web developer, AI/ML engineer',
};

export default function Contact() {
  return (
    <>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center bg-light dark:bg-dark dark:text-light 2xs:w-full 2xs:p-0">
        <SectionComponent className="pt-16 2xs:p-4 2xs:mt-2">
          <AnimatedText
            text="Let's Connect"
            className="mb-8 lg:!text-7xl sm:!text-6xl xs:!text-4xl 2xs:!text-3xl"
          />
          <p className="text-lg text-dark/80 dark:text-light/80 text-center max-w-2xl mx-auto mb-12 md:text-base">
            Have a project in mind or want to discuss opportunities?
            I&apos;d love to hear from you. Fill out the form below and
            I&apos;ll get back to you as soon as possible.
          </p>
          <ContactForm />
        </SectionComponent>
      </main>
    </>
  );
}
