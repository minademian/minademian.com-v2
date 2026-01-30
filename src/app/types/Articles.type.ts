import { StaticImageData } from 'next/image';

export type FeaturedArticleProps = {
  title: string;
  img?: StaticImageData;
  link: string;
  time: string;
  summary: string;
};

export type ArticleProps = Omit<FeaturedArticleProps, 'time' | 'summary'> & {
  date: string;
};

export type MovingImageProps = Omit<FeaturedArticleProps, 'summary' | 'time'>;
