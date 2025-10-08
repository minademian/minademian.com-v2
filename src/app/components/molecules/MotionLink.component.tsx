'use client';

import { motion } from 'framer-motion';
import React, { FC } from 'react';


import { MotionLinkProps } from '@/app/types/NavBar.type';

const MotionLink: FC<MotionLinkProps> = ({
  href,
  className = '',
  children,
}: MotionLinkProps) => {
  return (
    <motion.a
      href={href}
      target={'_blank'}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.9 }}
      className={`${className} w-6 mr-3 sm:mx-1`}
    >
      {children}
    </motion.a>
  );
};

export default MotionLink;
