"use client";
import Drop from "@/components/shared/Drop";
import Dropdown from "@/components/shared/Dropdown";
import Image from "next/image";
import { useState } from "react";
import { side, content } from "@/lib/constants/index";

const AboutMe = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetail = () => {
    setShowDetail(!showDetail);
  };

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const closeDetail = () => {
    setShowDetail(false);
  };

  const closeDetails = () => {
    setShowDetails(false);
  };

  return (
    <section className="background size-full overflow-y-scroll flex-grow md:overflow-auto md:flex-grow-0">
      <section className="md:grid md:grid-cols-8 md:min-h-full flex-col">
        {/* Side Section */}
        <div className="col-span-2 flex">
          <div className="md:flex flex-col h-full hidden">
            <section className="p-4 BorderR h-full gap-4 flex w-fit flex-col animate-fade-right animate-once">
              {side.map((item) => (
                <div key={item.alt}>
                  <Image src={item.src} alt={item.alt} width={24} height={24} />
                </div>
              ))}
            </section>
          </div>
          <div className="flex-1 BorderR">
            <section className="flex-col md:h-full h-fit animate-fade-left animate-once">
              <div className="BorderB">
                <div
                  className="p-3 flex BorderB items-center gap-3 cursor-pointer"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <Image
                    src="/icons/arrow-drop-down.svg"
                    alt="arrow"
                    width={20}
                    height={20}
                    className={`transform ${
                      isDropdownOpen ? "-rotate-90" : ""
                    }`}
                  />
                  <h2 className="text-white text-sm">personal-info</h2>
                </div>
                {isDropdownOpen && (
                  <div className="flex flex-col pb-2 animate-jump-in animate-once">
                    <Dropdown title="bio" img="/icons/peech-fold.svg" />
                    <Dropdown title="interests" img="/icons/green-fold.svg" />
                    <Dropdown title="education" img="/icons/purple-fold.svg" />
                  </div>
                )}
              </div>
              <Drop title="Contacts" type="contacts" />
            </section>
          </div>
        </div>
        {/* Sidebar Section */}

        {/* About Section */}
        <div className="col-span-3 BorderR animate-fade-right animate-once min-h-full flex flex-col">
          <section className="w-full flex-grow">
            <div className="BorderB">
              <div className="BorderR w-fit h-fit md:flex justify-center items-center gap-1 p-3 hidden">
                <h1 className="Text text-sm">personal-info</h1>
                <Image
                  src="/icons/close-icon.svg"
                  alt="close"
                  width={20}
                  height={20}
                />
              </div>
            </div>
            <ul className="p-4 text-sm flex-grow">
              <h1 className="text-white pb-4">&#47;&#47;&nbsp;personal-info&nbsp;<span className="Text">&#47;&nbsp;bio</span></h1>
              {content.map((item, index = 1) => (
                <li key={index} className="Text flex gap-10">
                  <span>{index + 1}</span>
                  <span className="text-left">{item.cont}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Code Section */}
        <div className="col-span-3 animate-fade-right animate-once min-h-full flex flex-col">
          <div className="w-full BorderB h-[45px] hidden md:block"></div>
          <section className="p-10 md:h-[400px] md:overflow-y-scroll md:flex-grow">
            <h1 className="text-white md:text-[#607B96] pb-4">&#47;&#47; Code Snippet Showcase:</h1>
            <div className="grid grid-cols-2 gap-4 items-center">
              <ul className="flex gap-2 items-center">
                <li>
                  <Image
                    src="/icons/user.svg"
                    alt="user"
                    width={24}
                    height={24}
                  />
                </li>
                <li>
                  <h1 className=" text-[#5565E8]">@username</h1>
                  <h2 className="text-sm Text">Created 5 months ago</h2>
                </li>
              </ul>
              <ul className="flex gap-7 justify-end items-center text-sm">
                <li
                  className="Text flex items-center cursor-pointer"
                  onClick={toggleDetail}
                >
                  <Image
                    src="/icons/comments-icon.svg"
                    alt="comment"
                    width={15}
                    height={15}
                  />
                  Detail
                </li>
                <li className="Text md:flex items-center hidden">
                  <Image
                    src="/icons/Star.svg"
                    alt="star"
                    width={15}
                    height={15}
                  />
                  3 stars
                </li>
              </ul>
            </div>
            <Image
              src="/images/code.svg"
              alt="code"
              object-fit="contain"
              width={1500}
              height={1300}
              className="pt-3 w-fit h-fit"
            />
            {showDetail && (
              <div className="border-t border-t-[#607B96] relative p-2 w-full">
                <p className="text-sm Text mt-2 px-2">
                  My work here was 5 months ago. It was for the project called
                  “...”. Some other text can be placed here.
                </p>
              </div>
            )}
            <div className="grid grid-cols-2 gap-4 mt-2 items-center">
              <ul className="flex gap-2 items-center">
                <li>
                  <Image
                    src="/icons/user.svg"
                    alt="user"
                    width={24}
                    height={24}
                  />
                </li>
                <li>
                  <h1 className=" text-[#5565E8]">@username</h1>
                  <h2 className="text-sm Text">Created 9 months ago</h2>
                </li>
              </ul>
              <ul className="flex gap-7 justify-end items-center text-sm">
                <li
                  className="Text flex items-center cursor-pointer"
                  onClick={toggleDetails}
                >
                  <Image
                    src="/icons/comments-icon.svg"
                    alt="comment"
                    width={15}
                    height={15}
                  />
                  Detail
                </li>
                <li className="Text md:flex items-center hidden">
                  <Image
                    src="/icons/Starh.svg"
                    alt="star"
                    width={15}
                    height={15}
                  />
                  0 stars
                </li>
              </ul>
            </div>
            <Image
              src="/images/code.svg"
              alt="code"
              object-fit="contain"
              width={1500}
              height={1300}
              className="pt-3 w-fit h-fit"
            />
            {showDetails && (
              <div className="border-t border-t-[#607B96] relative p-2 w-full">
                <p className="text-sm Text mt-2 px-2">
                  My work here was 9 months ago. It was for the project called
                  “...”. Some other text can be placed here.
                </p>
              </div>
            )}
          </section>
        </div>
      </section>
    </section>
  );
};

export default AboutMe;
