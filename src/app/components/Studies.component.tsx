'use client';

import React, { useState, useRef } from 'react';
import { useMotionValueEvent, motion, useScroll } from 'framer-motion';
import ExperienceIcon from './ExperienceIcon.component';

type EntriesProps = {
  key: number;
  type: string;
  time: string;
  place: string;
  info: string;
};

const data: EntriesProps[] = [
  {
    key: 1,
    type: 'Google Project Management: Professional Certificate',
    time: '2023-present',
    place: 'Coursera',
    info: 'Completed the following modules: Foundations of Project Management, Project Initiation: Starting a Successful, Project Agile Project Management.',
  },
  {
    key: 2,
    type: 'Bachelor of Science in Software Engineering and Multimedia Systems, Joint Honors',
    time: '2004',
    place: 'Oxford Brookes University',
    info: 'Relevant courses included data structures, database design, computer networks, UI, multimedia networks, multimedia systems, and computer science',
  },
];

const Entries = ({ type, time, place, info }: EntriesProps) => {
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
        <h3 className="capitalize font-bold text-2xl">{type}</h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {place}
        </span>
        <p className="font-medium w-full">{info}</p>
      </motion.div>
    </li>
  );
};

const Studies = () => {
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
    <div className="my-8">
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          {data.map((role: EntriesProps) => (
            <Entries
              key={role.key}
              type={role.type}
              time={role.time}
              place={role.place}
              info={role.info}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Studies;
