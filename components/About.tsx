import Image from "next/image";
import React from "react";

const content = [
  {cont: "/**" },
  {cont: "* About me" },
  {cont:"* I have 5 years of еxperience in web"},
  {cont:"* development lorem ipsum dolor sit amet," },
  {cont:"* consectetur adipiscing elit, sed do eiusmod"},
  {cont:"* tempor incididunt ut labore et dolore magna"},
  {cont:"* aliqua. Ut enim ad minim veniam, quis "},
  {cont:"* exercitation ullamco laboris nisi ut aliquip "},
  {cont:"* ea commodo consequat. Duis aute irure dolor"},
  {cont:"* reprehenderit in voluptate velit esse "},
  {cont:"* dolore eu fugiat nulla pariatur. Excepteur "},
  {cont:"* occaecat cupidatat non proident, sunt in "},
  {cont:"* qui officia deserunt mollit anim id est"},
  {cont:"*/"}
];

const About = () => {
  return (
    <section className="w-fit Border animate-fade-right animate-once">
      <section className="w-full h-full mr-10">
        <div className="BorderB">
          <div className="BorderR w-fit h-fit flex justify-center items-center gap-1 p-2">
            <h1 className="Text text-sm">personal-info</h1>
            <Image
              src="/icons/close-icon.svg"
              alt="close"
              width={20}
              height={20}
            />
          </div>
        </div>
        <ul className="p-4 text-sm">
          {content.map((item,index=1) => (
            <li key={index} className="Text">
              {index+1}
              <span className="pl-7">{item.cont}</span>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default About;
