'use client';

import React, { useState, useRef } from 'react';
import { useMotionValueEvent, motion, useScroll } from 'framer-motion';
import ExperienceIcon from './ExperienceIcon.component';

type DetailsProps = {
  key: number;
  position: string;
  company: string;
  companyLink: string;
  time: string;
  address: string;
  work: string;
};

const data: DetailsProps[] = [
  {
    key: 1,
    position: 'Full-Stack Engineer',
    company: 'Fondo',
    companyLink: 'https://fondo.se',
    time: 'Jan 2023-Feb 2024',
    address: 'Stockholm, Sweden',
    work: 'Reduced time spent on internal back-office system by 70% after overhauling system. Built a TypeScript micro-service to implement an audit trail for the new back-office system. Took the initiative to update documentation for both on-boarding and the API documentation for core micro-services.',
  },
  {
    key: 2,
    position: 'Front-End Developer',
    company: 'Consid',
    companyLink: 'https://consid.se',
    time: 'Sep 2021-Dec 2022',
    address: 'Stockholm, Sweden',
    work: 'Worked for Swedish government: led the front-end team (3 people) to implement two effectual and important web applications that vastly improved the job-seeking process for those in long-time unemployment. Implemented the build and deployment chain in Redhat Openshift from scratch for the front-end Angular application. Decreased time spent on ineffective local testing by mirroring the Openshift environment locally with Docker. Took over the overhaul of skolverket.se and brought it over the finish line.',
  },
  {
    key: 3,
    position: 'Software Developer',
    company: 'One Agency',
    companyLink: 'https://oneagency.se',
    time: 'Jan 2019-Feb 2020',
    address: 'Stockholm, Sweden',
    work: 'Spearheaded the front-end team (3 people) to build a CSS Grid-based dashboard for a monitoring web application. Improved the CI/CD flow in CircleCI to avoid unnecessary failed builds and reduced unnecessary resource wastage in AWS. Took ownership and resolved critical bugs that had been threatened the relationship with the client’s top influencer bloggers..',
  },
  {
    key: 4,
    position: 'Front-End Developer',
    company: 'Kivra',
    companyLink: 'https://kivra.se',
    time: 'Aug 2016-Dec 2018',
    address: 'Stockholm, Sweden',
    work: 'Worked on core features in app.kivra.com, such as the phone and e-mail verification flows. Built the "Print" feature for app.kivra.com.  Built the first PoC of Kivra’s mobile iOS app in Swift 3 when the company was considering moving away from hybrid mobile apps, powered by Ionic. Built an internal tool that generated SVG files of company logos, sent into the Kivra back office. This enabled back office to reduce time and effort by 70%, spent on manually editing and uploading logos to the Kivra system.',
  },
];

const Details = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
}: DetailsProps) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-cemnter justify-between"
    >
      <ExperienceIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  });

  const [hookedYPostion, setHookedYPosition] = useState(0);

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    setHookedYPosition(latest);
  });

  return (
    <div className="my-8 2xs:p-0">
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          {data.map((role: DetailsProps) => (
            <Details
              key={role.key}
              position={role.position}
              company={role.company}
              companyLink={role.companyLink}
              time={role.time}
              address={role.address}
              work={role.work}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
