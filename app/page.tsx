import React from 'react';
import Image from 'next/image';

const Page = () => {
  return (
    <section className="size-full bg-[#011627] *:container *:mx-auto">
      <div className="flex justify-evenly items-center size-full">
        <div className="animate-fade-down animate-once animate-duration-[3000ms]">
          <h1 className="text-white text-sm">Hi all . I am</h1>
          <h2 className="text-5xl text-white tracking-wider">Sai Prasad</h2>
          <h3 className="text-[#4D5BCE] text-xl">&gt; Full-Stack Developer</h3>
          <div>
            <p className="Text mt-10">
              <span className="text-gray-500 text-sm">##</span> complete the game to continue
            </p>
            <p className="Text">
              <span className="text-gray-500 text-sm">##</span> you can also see it on my Github page
            </p>
            <p className="text-[#4D5BCE] text-sm">
              const&nbsp;&nbsp;<span className="text-green-500">githublink</span>
              <span className="text-white">&nbsp;&nbsp;=&nbsp;&nbsp;</span>
              <a href="/" target="_blank" className="text-[#FEA55F]">
                “https://github.com/example/url”
              </a>
            </p>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="animate-fade-up animate-once relative space-y-5">
            <Image
              src="/images/code.svg"
              alt="code"
              width={1500}
              height={1300}
              className="h-28 w-fit"
            />
            <div className="relative z-10 flex place-items-center before:absolute before:h-[500px] before:w-full before:translate-x-1 before:rounded-full before:bg-gradient-radial before:from-green-400 before:to-[#0141ff] before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[250px] after:w-full after:-translate-y-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-[#0141ff] before:dark:opacity-10 after:dark:from-[#0141ff] after:dark:via-green-300 after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[500px]">
              <Image
                src="/images/code.svg"
                alt="code"
                width={1500}
                height={1300}
                className="z-20 h-28 w-fit"
              />
            </div>
            <Image
              src="/images/code.svg"
              alt="code"
              width={1500}
              height={1300}
              className="h-28 w-fit"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
