import { motion } from 'framer-motion';

import { MovingImage } from '@/molecules/MovingImage.component';
import { ArticleProps } from '@/types/Articles.type';

export const Article = ({ img, title, date, link }: ArticleProps) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
      viewport={{ once: true }}
      // eslint-disable-next-line max-len
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4
       dark:bg-dark dark:border-light
      "
    >
      <MovingImage img={img} title={title} link={link} />
      <span className="text-primary dark:text-primaryDark font-semibold pl-4">
        {date}
      </span>
    </motion.li>
  );
};
