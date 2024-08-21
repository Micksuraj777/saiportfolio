"use client";
import Image from "next/image";
import React, { useState } from "react";

const Code = () => {
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
    <section className="w-fit animate-fade-right animate-once BorderR">
      <div className="w-full Border h-[40px]"></div>
      <section className="mx-10">
        <h1 className="Text pt-2 text-sm pb-7">## Code Snippet Showcase:</h1>
        <div className="grid grid-cols-2 gap-4 items-center">
          <ul className="flex gap-2 items-center">
            <li>
              <Image src="/icons/user.svg" alt="user" width={24} height={24} />
            </li>
            <li>
              <h1 className="text-sm text-[#5565E8]">@username</h1>
              <h2 className="text-[10px] Text">Created 5 months ago</h2>
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
              <Image src="/icons/Star.svg" alt="star" width={15} height={15} />3
              stars
            </li>
          </ul>
        </div>
        <Image
          src="/images/code.svg"
          alt="code"
          object-fit="contain"
          width={350}
          height={100}
          className="pt-3"
        />
        {showDetail && (
          <div className="border-t border-t-[#607B96] relative mt-2 w-[350px]">
            <button onClick={closeDetail} className="absolute top-2 right-2">
              <Image
                src="/icons/close-icon.svg"
                alt="cross"
                width={10}
                height={10}
              />
            </button>
            <p className="text-[10px] Text mt-2">
              Here is some additional detail about the code snippet...
            </p>
          </div>
        )}
        <div className="grid grid-cols-2 gap-4 mt-2 items-center">
          <ul className="flex gap-2 items-center">
            <li>
              <Image src="/icons/user.svg" alt="user" width={24} height={24} />
            </li>
            <li>
              <h1 className="text-sm text-[#5565E8]">@username</h1>
              <h2 className="text-[10px] Text">Created 9 months ago</h2>
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
              <Image src="/icons/Starh.svg" alt="star" width={15} height={15} />
              0 stars
            </li>
          </ul>
        </div>
        <Image
          src="/images/code.svg"
          alt="code"
          object-fit="contain"
          width={350}
          height={100}
          className="pt-3"
        />
        {showDetails && (
          <div className="border-t border-t-[#607B96] relative mt-2 w-[350px]">
            <button onClick={closeDetails} className="absolute top-2 right-2">
              <Image
                src="/icons/close-icon.svg"
                alt="cross"
                width={10}
                height={10}
              />
            </button>
            <p className="text-[10px] Text mt-2">
              Here is some additional detail about the code snippet...
            </p>
          </div>
        )}
      </section>
    </section>
  );
};

export default Code;
