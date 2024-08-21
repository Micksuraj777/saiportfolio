"use client";
import Image from 'next/image';
import { useState } from 'react';
import Dropdown from './shared/Dropdown';
import Drop from './shared/Drop';

const Sidebar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <section className="Border gap-4 flex w-fit flex-col animate-fade-left animate-once">
      <section className="w-full mr-20">
        <div className=" BorderB">
          <div className="px-4 py-2 flex BorderB items-center gap-3 cursor-pointer" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            <Image
              src="/icons/arrow-drop-down.svg"
              alt="arrow"
              width={20}
              height={20}
              className={`transform ${isDropdownOpen ? '-rotate-90' : ''}`}
            />
            <h2 className="text-white text-sm">personal-info</h2>
          </div>
          {isDropdownOpen && (
            <div className="flex flex-col animate-jump-in animate-once">
              <Dropdown title="bio" img="/icons/peech-fold.svg" />
              <Dropdown title="interests" img="/icons/green-fold.svg" />
              <Dropdown title="education" img="/icons/purple-fold.svg" />
            </div>
          )}
        </div>
        <Drop title="Contacts" type="contacts" />
      </section>
    </section>
  );
};

export default Sidebar;
