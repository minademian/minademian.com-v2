import { ReactNode } from 'react';

import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

import NavBar from './components/NavBar.component';
import AnimatedText from './components/AnimatedText.component';
import { LinkArrow } from './components/Icons.component';
import HireMe from './components/HireMe.component';
import Footer from './components/Footer.component';

import profilePic from '../../public/images/art/homepage-art-3.png';
import lightBulb from '../../public/images/miscellaneous_icons_1.svg';

type ComponentProps = {
  children: ReactNode[] | ReactNode;
  className?: string;
};

export const SectionComponent = ({
  children,
  className = '',
}: ComponentProps) => {
  return (
    <div
      className={`w-full h-full inline-block z-0 bg-light p-32 ${className}`}
    >
      {children}
    </div>
  );
};

export default function Page() {
  return (
    <>
      <Head>
        <title>Minademian.com</title>
        <meta
          name="description"
          content="Minademian.com personal website and portfolio"
        ></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar></NavBar>
      <main className="flex items-center text-dark w-full min-h-screen">
        <SectionComponent className="pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2">
              <Image
                src={profilePic}
                alt="minademian.com digital art"
                className="w-full h-auto"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center">
              <AnimatedText
                text="Turning Ideas Into Scaleable Products"
                className="!text-6xl !text-left"
              />
              <p className="my-4 text-base font-medium">
                As an experienced full-stack engineer, I am committed to making
                great products. Explore my latest projects and blog posts,
                showcasing my skills in modern web development.
              </p>
              <div className="flex items-center self-start mt-2">
                <Link
                  href="/dummy.pdf"
                  target={'_blank'}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
                  download={true}
                >
                  Resume <LinkArrow className={'w-6 ml-1'} />
                </Link>
                <Link
                  href="mailto:mina@minademian.com"
                  target={'_blank'}
                  className="ml-4 text-lg font-medium capitalize text-dark underline"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </SectionComponent>
        <HireMe></HireMe>
        <div className="absolute right-8 bottom-8 inline-block w-24">
          <Image
            src={lightBulb}
            alt="minademian.com"
            className="w-full h-auto"
          />
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}
