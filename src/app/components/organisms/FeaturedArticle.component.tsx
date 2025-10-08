import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { FeaturedArticleProps } from '@/app/types/Articles.type';

const FramerImage = motion(Image);

export const FeaturedArticle = ({
  img,
  title,
  time,
  summary,
  link,
}: FeaturedArticleProps) => {
  return (
    <li className="relative col-span-1 w-full p-4 bg-light  dark:bg-dark dark:border-light  border border-solid border-dark rounded-2xl dark:text-light">
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark"
        rounded-br-3xl
      />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 hover:underline">
          {title}
        </h2>
        <p className="text-sm mb-2">{summary}</p>
        <span className="text-primary dark:text-primaryDark font-semibold">
          {time}
        </span>
      </Link>
    </li>
  );
};
