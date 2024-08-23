'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

type ProjectType = {
  tech: {
    title: string;
    img: string;
  };
  title: string;
  description: string;
  href: string;
  img: string;
};

const projects: ProjectType[] = [
  {
    tech: {
      title: 'React',
      img: '/icons/react.svg', // Path to React icon
    },
    title: 'React Project',
    description: 'A project built with React.',
    href: '#',
    img: '/images/sample.png',
  },
  {
    tech: {
      title: 'Angular',
      img: '/icons/angular.svg', // Path to Angular icon
    },
    title: 'Angular Project',
    description: 'A project built with Angular.',
    href: '#',
    img: '/images/sample.png',
  },
  {
    tech: {
      title: 'Flutter',
      img: '/icons/flutter.svg', // Path to Flutter icon
    },
    title: 'Flutter Project',
    description: 'A project built with Flutter.',
    href: '#',
    img: '/images/sample.png',
  },
  {
    tech: {
      title: 'HTML',
      img: '/icons/html.svg', // Path to HTML icon
    },
    title: 'HTML Project',
    description: 'A project built with HTML.',
    href: '#',
    img: '/images/sample.png',
  },
  {
    tech: {
      title: 'CSS',
      img: '/icons/css.svg', // Path to CSS icon
    },
    title: 'CSS Project',
    description: 'A project built with CSS.',
    href: '#',
    img: '/images/sample.png',
  },
  {
    tech: {
      title: 'Vue',
      img: '/icons/vue.svg', // Path to Vue icon
    },
    title: 'Vue Project',
    description: 'A project built with Vue.',
    href: '#',
    img: '/images/sample.png',
  },
];

const Projects = () => {
  const [selectedProjects, setSelectedProjects] = useState<Set<string>>(new Set());
  const [drop, isDrop] = useState(true);

  const toggleSelection = (title: string) => {
    setSelectedProjects(prev => {
      const newSet = new Set(prev);
      if (newSet.has(title)) {
        newSet.delete(title);
      } else {
        newSet.add(title);
      }
      return newSet;
    });
  };

  const filteredProjects =
    selectedProjects.size === 0
      ? projects
      : projects.filter(project => selectedProjects.has(project.title));

  return (
    <div className="size-full background grid grid-cols-8">
      <section className="border border-[#607B96] border-y-0 border-l-0 flex min-h-full col-span-3 lg:col-span-2 flex-col animate-fade-left animate-once">
        <div
          className="text-white px-2 py-1 text-sm border-[#607B96] border-b-[1px] flex items-center justify-start cursor-pointer"
          onClick={() => isDrop(!drop)}
        >
          <Image
            src="./icons/arrow-drop-down.svg"
            width={1500}
            height={1500}
            alt="arrow"
            className={`size-8 rounded-sm ${drop ? '' : '-rotate-90'}`}
          />
          Projects
        </div>
        <div className={`p-5 gap-4 flex-col ${drop ? 'flex' : 'hidden'}`}>
          {projects.map(project => (
            <div key={project.title} className="bg-none flex items-center gap-2">
              <input
                type="checkbox"
                checked={selectedProjects.has(project.title)}
                onChange={() => toggleSelection(project.title)}
                className="bg-none border-[#607B96] border-[1px] rounded-sm checked:bg-[#607B96] appearance-none size-4 bg-transparent"
              />
              <Image
                src={project.tech.img}
                width={1500}
                height={1500}
                alt={project.tech.title}
                className="size-7 rounded-sm ml-3"
              />
              <span className="capitalize text-white">{project.tech.title}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="text-white p-5 xl:p-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 row-span-1 gap-20 items-start justify-start overflow-y-auto col-span-5 lg:col-span-6 flex-wrap size-full">
        {filteredProjects.map(project => (
          <Card key={project.title} {...project} />
        ))}
      </section>
    </div>
  );
};

const Card = ({ ...data }: ProjectType) => {
  return (
    <div className="space-y-3 col-span-1 row-span-1 min-w-76 min-h-fit h-52">
      <div className="text-[#607B96]">
        <span className="font-semibold text-[#5565E8]">Project {projects.indexOf(data)} </span>
        &#47;&#47; _<span>{data.title}</span>
      </div>
      <div className="Border rounded-xl w-full h-full min-h-fit relative">
        <Image
          src={data.img}
          width={1500}
          height={1500}
          alt="sample"
          className="w-full h-2/4 rounded-t-xl"
        />
        <Image
          src={data.tech.img}
          width={1500}
          height={1500}
          alt="sample"
          className="absolute top-2 right-2 size-8 rounded-sm"
        />
        <div className="flex flex-col gap-2 md:gap-5 md:py-3 md:px-5 w-full h-3/5 items-start min-h-fit p-2 border-[#607B96] border-t-[1px]">
          <p className="text-wrap text-sm text-[#607B96]">{data.description}</p>
          <Link className="bg-[#1C2B3A] w-fit p-1 rounded-lg cursor-pointer" href={data.href}>
            view-project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
