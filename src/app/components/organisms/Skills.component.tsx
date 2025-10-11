'use client';

import { motion } from 'framer-motion';
import React from 'react';

type SkillProps = {
  name: string;
  x: string;
  y: string;
};

const Skill = ({ name, x, y }: SkillProps) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light
      lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent
      xs:text-dark xs:dark:text-light xs:font-bold
      "
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x, y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32 2xs:mt-5 2xs:mb-5">
        Skills
      </h2>
      <div
        className="w-full h-screen relative flex items-center justify-center bg-circularLight dark:bg-circularDark
      lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
      lg:bg-circularLightLg lg:dark:bg-circularDarkLg
      md:bg-circularLightMd md:dark:bg-circularDarkMd
      sm:bg-circularLightSm sm:dark:bg-circularDarkSm
      "
      >
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="HTML" x="-30vw" y="2vw" />
        <Skill name="CSS" x="38vw" y="2vw" />
        <Skill name="TypeScript" x="30vw" y="5vw" />
        <Skill name="JavaScript" x="30vw" y="-15vw" />
        <Skill name="TailWind" x="34vw" y="-10vw" />
        <Skill name="MUI" x="22vw" y="-18vw" />
        <Skill name="SASS" x="38vw" y="-6vw" />
        <Skill name="React.js" x="-28vw" y="-12vw" />
        <Skill name="Next.js" x="-38vw" y="-5vw" />
        <Skill name="Angular" x="-34vw" y="-18vw" />
        <Skill name="Node.js" x="-15vw" y="-8vw" />
        <Skill name="Koa.js" x="12vw" y="-22vw" />
        <Skill name="Express.js" x="8vw" y="-26vw" />
        <Skill name="Kubernetes" x="12vw" y="22vw" />
        <Skill name="Google Cloud" x="8vw" y="26vw" />
        <Skill name="Postgres" x="12vw" y="12vw" />
        <Skill name="IaC" x="8vw" y="16vw" />
      </div>
    </>
  );
};

export default Skills;
