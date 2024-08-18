'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navbarLinks } from '@/constants/index';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="mx-auto max-w-[1500px] w-full h-[50px] items-center bg-[#011627] border border-[#607B96]">
      <div className="flex w-full h-full items-center">
        <div className='w-[20%] border-r border-r-[#607B96] h-full pl-2 items-center pt-3'>
          <Link href="/">
          <h1 className='text-[#607B96]'>sai_prasad</h1>
          </Link>
        </div>
        <div className='flex h-full'>
        {navbarLinks.map((item) => {
          const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);
          
          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn(
                'flex gap-4 items-center p-4 justify-start border-r border-r-[#607B96]',
                {
                  'text-white border-b-4 border-b-[#FEA55F]': isActive,
                  "text-[#607B96]": !isActive,
                }
              )}
            >
                {item.label}
            </Link>
          );
        })}
        </div>
        <div className='w-[45%] h-full border-r border-r-[#607B96]'></div>
        <div className='px-14'>
          <Link href="/">
          <h1 className='text-[#607B96]'>contact_us</h1>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

