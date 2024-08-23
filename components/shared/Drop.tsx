"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

interface DropProps {
    title: string;
    type: 'contacts' | 'links'; 
}

interface DropItem {
    src: string;
    alt: string;
    cont: string;
}

const Drop: React.FC<DropProps> = (props) => {
  const [drop, setDrop] = useState<DropItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const importDropData = async () => {
      const dataModule = await import('@/lib/constants/index');
      if (props.type === 'contacts') {
        setDrop(dataModule.contact);
      } else {
        setDrop(dataModule.Links);
      }
    };

    importDropData();
  }, [props.type]);

  return (
    <div className="text-center">
      <div>
        <button
          type="button"
          className="bg-transparent flex text-white items-center gap-2 pl-6 py-2 w-full BorderB"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Image src='/icons/arrow-drop-down.svg' alt='' className={` ${isOpen ? 'transform -rotate-90' : ''}`} width={24} height={24} />
          <span className='flex items-center gap-2 text-sm'>
            {props.title}
          </span>
        </button>
      </div>

      {isOpen && (
        <div className="pb-2 w-full animate-jump-in animate-once">
          <div role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {drop.map((item) => (
              <Link href="/" key={item.alt} className='flex gap-2 pl-10 pt-2 text-sm'>
                <Image src={item.src} alt={item.alt} width={16} height={16} />
                <h2 className="Text hover:text-white">{item.cont}</h2>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Drop;
