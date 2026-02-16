'use client';

import { StaticImageData } from 'next/image';
import { useState } from 'react';

import { ProjectToggle } from '@/molecules/ProjectToggle.component';

import { FeaturedProjectVideo } from './FeaturedProjectVideo.component';
import { Project } from './Projects.component';

export type ProjectCategory = 'web' | 'mobile' | 'oss';

export interface ProjectData {
  category: ProjectCategory;
  featured: boolean;
  type: string;
  title: string;
  summary: string;
  img: StaticImageData;
  videoSrc: string;
  link: string;
  stack: string[];
}

const CATEGORIES = [
  { key: 'web', label: 'Web Applications' },
  { key: 'mobile', label: 'Mobile Apps' },
  { key: 'oss', label: 'Open-Source Software' },
];

const DEFAULT_TYPE: Record<ProjectCategory, string> = {
  web: 'Web App',
  mobile: 'Mobile App',
  oss: 'Library',
};

interface ProjectsViewProps {
  projects: ProjectData[];
}

export const ProjectsView = ({ projects }: ProjectsViewProps) => {
  const [activeCategory, setActiveCategory] = useState('web');

  const filtered = projects.filter((p) => p.category === activeCategory);

  const resolveType = (project: ProjectData) =>
    project.type || DEFAULT_TYPE[project.category];

  return (
    <>
      <ProjectToggle
        categories={CATEGORIES}
        active={activeCategory}
        onChange={setActiveCategory}
      />
      <div className="col-span-6 2xs:col-span-6 2xs:mr-8 space-y-8">
        {filtered.length > 0 ? (
          filtered.map((project) =>
            project.featured ? (
              <FeaturedProjectVideo
                key={project.title}
                type={resolveType(project)}
                videoSrc={project.videoSrc}
                img={project.img}
                title={project.title}
                link={project.link}
                summary={project.summary}
                stack={project.stack}
              />
            ) : (
              <Project
                key={project.title}
                type={resolveType(project)}
                img={project.img}
                videoSrc={project.videoSrc}
                title={project.title}
                link={project.link}
                summary={project.summary}
                stack={project.stack}
              />
            ),
          )
        ) : (
          <p className="text-center text-dark/50 dark:text-light/50 py-12 text-lg">
            Projects coming soon.
          </p>
        )}
      </div>
    </>
  );
};
