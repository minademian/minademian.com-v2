'use client';

import { motion } from 'framer-motion';
import React from 'react';

const TransitionEffect = () => {
  // Disabled: feels gimmicky. Remove this line to re-enable.
  const DISABLED = true;
  if (DISABLED) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-primary"
        initial={{ x: '100%', width: '100%' }}
        animate={{ x: '80%', width: '0%' }}
        exit={{ x: ['0%', '100%'], width: ['0%', '100%'] }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      />
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-light"
        initial={{ x: '100%', width: '100%' }}
        animate={{ x: '80%', width: '0%' }}
        exit={{ x: ['0%', '100%'], width: ['0%', '100%'] }}
        transition={{ delay: 0.2, duration: 0.8, ease: 'easeInOut' }}
      />
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-dark"
        initial={{ x: '100%', width: '100%' }}
        animate={{ x: '80%', width: '0%' }}
        exit={{ x: ['0%', '100%'], width: ['0%', '100%'] }}
        transition={{ delay: 0.4, duration: 0.8, ease: 'easeInOut' }}
      />
    </>
  );
};

export default TransitionEffect;
