import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="w-fit animate-fade-right animate-once">
      <div className="w-full h-full p-20">
        <Image src="/icons/codeabout.svg" alt="code" width={1500} height={1300} objectFit="contain" className="w-fit h-fit"/>
      </div>
    </section>
  );
};

export default About;
