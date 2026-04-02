import { SectionComponent } from '@/atoms/Section.component';
import AnimatedText from '@/organisms/AnimatedText.component';
import TransitionEffect from '@/organisms/TransitionEffect.component';

export const metadata = {
  title: 'minademian.com | Privacy Policy',
  description: 'Privacy policy for minademian.com',
};

export default function PrivacyPolicy() {
  return (
    <>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center bg-light dark:bg-dark dark:text-light 2xs:w-full 2xs:p-0">
        <SectionComponent className="pt-16 2xs:p-2 2xs:mt-2">
          <AnimatedText
            text="Privacy Policy"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 2xs:!text-3xl 2xs:p-0 2xs:mb-8"
          />
          <div className="flex flex-col gap-12 w-full max-w-3xl mx-auto">
            <div className="flex flex-col items-start justify-start">
              <p className="my-4 font-light text-sm text-dark/60 dark:text-light/60">
                Last updated: April 02, 2026
              </p>
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light">
                Overview
              </h2>
              <p className="my-4 font-light">
              This privacy policy is for the <i>Which One?</i> mobile application, hereon the Application.
              The application is designed to respect your privacy. We do not
              collect, store, or share personal data beyond what is necessary to provide core functionality.
              </p>
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light">
                Location Data
              </h2>
              <p className="my-4 font-light">
              The Application uses your device’s location (both precise and
              approximate) to provide its core features.</p>
              <p className="my-4 font-light">
              Location data is
              accessed only while using the Application.</p>
              <p className="my-4 font-light">
              Location data is not stored, recorded, or transmitted to our servers. Location data
              remains on your device and is used solely in real time. You can
              enable or disable location access at any time through your device
              settings.
              </p>
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light">
                Data Collection
              </h2>
              <p className="my-4 font-light">
                We do not collect personal information such as:
              </p>
              <ul className="list-disc pl-6 my-4 font-light flex flex-col gap-2">
                <li>Names</li>
                <li>Email addresses</li>
                <li>Phone numbers</li>
              </ul>
              <p className="my-4 font-light">
                The Application does not require user registration or login.
              </p>
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light">
                Usage Data
              </h2>
              <p className="my-4 font-light">
                We do not use analytics, tracking tools, or advertising
                frameworks.
              </p>
              <p className="my-4 font-light">
                Basic technical data (such as IP address or device information)
                may be processed automatically by your device or network
                providers as part of standard internet operations. We do not use
                this data to identify users.
              </p>
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light">
                Third-Party Services
              </h2>
              <p className="my-4 font-light">
                The Application uses map data from <strong>OpenStreetMap</strong>.
              </p>
              <p className="my-4 font-light">
                When loading map data, your device may make requests to external
                servers (e.g. map tile providers), which may receive technical
                information such as your IP address. This data exchange is
                handled by your device and is not controlled or stored by us.
              </p>
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light">
                Cookies and Tracking
              </h2>
              <p className="my-4 font-light">
                The Application does not use cookies or similar tracking technologies.
              </p>
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light">
                Children’s Privacy
              </h2>
              <p className="my-4 font-light">
                The Application does not collect personal data from anyone, including children.
              </p>
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light">
                Changes to This Policy
              </h2>
              <p className="my-4 font-light">
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page with an updated date.
              </p>
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light">
                Contact
              </h2>
              <p className="my-4 font-light">
                If you have any questions about this privacy policy, You can
                contact us:
              </p>
              <ul className="list-disc pl-6 my-4 font-light">
                <li>By email: mina@minademian.com</li>
              </ul>
            </div>
          </div>
        </SectionComponent>
      </main>
    </>
  );
}
