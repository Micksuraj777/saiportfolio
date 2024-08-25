import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="w-fit h-full animate-fade-right animate-once">
      <div className="size-full p-20 border-l border-l-[#607B96]">
        <Image src="/icons/codeabout.svg" alt="code" width={1500} height={1300} objectFit="contain" className="w-fit h-fit"/>
      </div>
    </section>
  );
};

export default About;
