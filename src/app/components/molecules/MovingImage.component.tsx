import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useMotionValue } from 'framer-motion';

import { MovingImageProps } from '@/types/Articles.type';

const FramerImage = motion(Image);

export const MovingImage = ({ title, img, link }: MovingImageProps) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef<HTMLImageElement | null>(null);

  function handleMouse(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    let display = imgRef?.current?.style.display;
    display = 'inline-block';
    x.set(e.pageX);
    y.set(-10);
  }

  function handleMouseLeave(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    let display = imgRef?.current?.style.display;
    display = 'none';
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl dark:text-light font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        style={{ x, y }}
        ref={imgRef}
        src={img}
        alt={title}
        className="w-96 h-auto hidden absolute rounded-lg z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </Link>
  );
};
