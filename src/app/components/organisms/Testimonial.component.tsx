'use client';

import { SinglePill } from '../atoms/SinglePill.component';
import { VerifiedIcon } from '../molecules/Icons.component';

type TestimonialProps = {
  text: string;
  contact: string;
  role: string;
  translation?: string;
};

export const Testimonial = ({
  text,
  contact,
  role,
  translation,
}: TestimonialProps) => {
  return (
    <div className="w-full mt-6 p-6 border border-solid border-slate-200 dark:border-primaryDark bg-light/50 dark:bg-dark/50 rounded-lg shadow-sm flex flex-col lg:flex-row lg:items-start lg:justify-start">
      <div className="w-full flex flex-col justify-between pl-6 lg:pl-0">
        <h2 className="font-bold text-dark dark:text-light flex items-center gap-2">
          <span>{contact}</span>
          <VerifiedIcon className="w-4 h-4" />
        </h2>
        <p className="font-medium text-gray-800 dark:text-light">{role}</p>
        <SinglePill classes="my-2" label="Counselling and Therapy" />
        <p className="my-2 font-medium text-gray-500 dark:text-light">{text}</p>
        <hr className="mt-4 mb-4 w-full border-t border-neutral-200 dark:border-white/10" />
        <p className="fmy-2 font-medium text-gray-500 dark:text-light italic">{translation}</p>
        {/* <div className="flex justify-end items-center gap-2">
          <GlobeIcon size={25} fill="fill-slate-400" />
          <span className="text-sm text-gray-400">Translate with AI</span>
        </div> */}
      </div>
    </div>
  );
};
