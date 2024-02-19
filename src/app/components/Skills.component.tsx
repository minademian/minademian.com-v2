'use client';

import React from 'react';
import { motion } from 'framer-motion';

type SkillProps = {
  name: string;
  x: string;
  y: string;
};

const Skill = ({ name, x, y }: SkillProps) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x, y }}
      transition={{ duration: 1.5 }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center bg-circularLight">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="HTML" x="-8vw" y="2vw" />
        <Skill name="CSS" x="8vw" y="2vw" />
        <Skill name="TypeScript" x="0vw" y="5vw" />
        <Skill name="JavaScript" x="0vw" y="-5vw" />
        <Skill name="TailWind" x="14vw" y="2vw" />
        <Skill name="MUI" x="2vw" y="-8vw" />
        <Skill name="SASS" x="8vw" y="-6vw" />
        <Skill name="React.js" x="-8vw" y="-2vw" />
        <Skill name="Next.js" x="-8vw" y="-5vw" />
        <Skill name="Angular" x="-14vw" y="-2vw" />
        <Skill name="Node.js" x="-5vw" y="-8vw" />
        <Skill name="Koa.js" x="2vw" y="-8vw" />
        <Skill name="Express.js" x="8vw" y="-6vw" />
      </div>
    </>
  );
};

export default Skills;
