"use client";
import Image from 'next/image';
import { useState } from 'react';

interface DropdownProps {
    title: string;
    img: string;
}

const Dropdown: React.FC<DropdownProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="text-center">
      <div>
        <button
          type="button"
          className="bg-transparent flex Text items-center gap-2 pl-6 pt-3 w-full"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Image src='/icons/arrow-right.svg' alt='' className={` ${isOpen ? 'transform rotate-90' : ''}`} width={8} height={8} />
          <span className='flex items-center gap-2'>
            <Image src={props.img} alt="icon" width={18} height={18} />
            {props.title}
          </span>
        </button>
      </div>

      {isOpen && (
        <div className="mt-2 w-full animate-jump-in animate-once">
          <div role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <div className="Text flex justify-center gap-2 cursor-pointer" role="menuitem">
              <Image src="/icons/file.svg" alt="arrow" width={18} height={18} />
              <h2 className='Text'>High-school</h2>
            </div>
            <div className="flex justify-center gap-2 py-2 Text cursor-pointer" role="menuitem">
            <Image src="/icons/file.svg" alt="arrow" width={18} height={18} />
            <h2 className='Text'>University</h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
