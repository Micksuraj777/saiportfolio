'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navbarLinks } from '@/lib/constants/index';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useState } from 'react';

const Navbar = () => {
  const pathname = usePathname();
  const isAction = pathname === '/contact' || pathname.startsWith('/contact/');
  const [open, isOpen] = useState(false);

  return (
    <nav className="w-full h-12 background Border rounded-t-lg grid grid-cols-[1fr,3fr,1fr,0.75fr] items-center">
      <div className="h-full pl-2 BorderR flex items-center">
        <Link href="/">
          <h1 className="Text">sai_prasad</h1>
        </Link>
      </div>
      <div className="h-full grid grid-flow-col auto-cols-max">
        {navbarLinks.map(item => {
          const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);
          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn('flex items-center px-4 justify-center h-full BorderR', {
                'text-white border-b-4 border-b-[#FEA55F]': isActive,
                Text: !isActive,
              })}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
      <Link
        href="/contact"
        className={cn(
          ' hidden lg:flex items-center justify-center col-span-1 h-full border-l-[1px] border-[#607B96]',
          {
            'border-b-4 border-b-[#FEA55F]': isAction,
          },
        )}
      >
        <span
          className={cn({
            'text-white': isAction,
            Text: !isAction,
          })}
        >
          contact_us
        </span>
      </Link>
      <div className="flex lg:hidden col-span-8 items-center justify-between">
        <Link href="/" className="pl-5 flex items-center col-span-2 h-full Text">
          sai_prasad
        </Link>
        <button onClick={() => isOpen(!open)}>
          <Image
            src={open ? '/icons/close-icon.svg' : '/icons/menu.svg'}
            alt="menu"
            width={50}
            height={50}
            className="p-4"
          />
        </button>
      </div>
      {open ? (
        <div className="h-[79.85vh] w-full absolute top-12 background z-50 flex items-start justify-start flex-col">
          {navbarLinks.map(item => (
            <Link href={item.route} key={item.label} className="text-white BorderB w-full p-2 pl-5" onClick={() => isOpen(false)}>
              {item.label}
            </Link>
          ))}
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;
