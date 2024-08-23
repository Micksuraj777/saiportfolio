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
    <section className="background">
      <section className="container mx-auto grid grid-cols-12 hero-height p-0 gap-0">
        {/* Side Section */}
        <div className="col-span-3 flex">
          <div className="flex flex-col h-full">
            <section className="p-4 BorderR h-full gap-4 flex w-fit flex-col animate-fade-right animate-once">
              {side.map((item) => (
                <div key={item.alt}>
                  <Image src={item.src} alt={item.alt} width={24} height={24} />
                </div>
              ))}
            </section>
          </div>
          <div className="flex-1">
            <section className="flex-col animate-fade-left animate-once">
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
        <div className="col-span-4 border-x border-x-[#607B96] animate-fade-right animate-once">
          <section className="w-full h-full">
            <div className="BorderB">
              <div className="BorderR w-fit h-fit flex justify-center items-center gap-1 p-3">
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
              {content.map((item, index = 1) => (
                <li key={index} className="Text">
                  {index + 1}
                  <span className="pl-7">{item.cont}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Code Section */}
        <div className="col-span-5 BorderR animate-fade-right animate-once">
          <div className="w-full BorderB h-[45px]"></div>
          <section className="p-10">
            <h1 className="Text pb-4">&#47;&#47; Code Snippet Showcase:</h1>
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
                <li className="Text flex items-center">
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
              height={1200}
              className="pt-3 w-fit h-fit"
            />
            {showDetail && (
              <div className="border-t border-t-[#607B96] relative p-2 w-full">
                {/* <button onClick={closeDetail} className="absolute top-2 right-2">
                  <Image
                    src="/icons/close-icon.svg"
                    alt="cross"
                    width={10}
                    height={10}
                  />
                </button> */}
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
                <li className="Text flex items-center">
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
              height={1200}
              className="pt-3 w-fit h-fit"
            />
            {/* {showDetails && (
              <div className="border-t border-t-[#607B96] relative mt-2 w-[93%]">
                <button onClick={closeDetails} className="absolute top-2 right-2">
                  <Image
                    src="/icons/close-icon.svg"
                    alt="cross"
                    width={10}
                    height={10}
                  />
                </button>
                <p className="text-sm Text mt-2">
                  Here is some additional detail about the code snippet...
                </p>
              </div>
            )} */}
          </section>
        </div>
      </section>
    </section>
  );
};

export default AboutMe;
