import About from '@/components/About';
import Code from '@/components/Code';
import Side from '@/components/Side';
import Sidebar from '@/components/Sidebar';
import React from 'react';

const AboutMe = () => {
  return (
    <section className="background">
      <section className="container flex hero-height">
        <div className="flex">
          <Side />
          <Sidebar />
          <About />
        </div>
        <div className="pt-10 BorderR animate-fade-right animate-once">
          <div className="w-5 h-2 bg-[#607B96] mx-1"></div>
        </div>
        <Code />
      </section>
    </section>
  );
};

export default AboutMe;
