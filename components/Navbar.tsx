'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navbarLinks } from '@/lib/constants/index';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="container w-full h-[50px] absolute top-0 right-0 left-0 items-center bg-[#011627] Border">
      <div className="flex w-full h-full items-center">
        <div className='w-[20%] BorderR h-full pl-2 items-center pt-3'>
          <Link href="/">
          <h1 className='Text'>sai_prasad</h1>
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
                'flex gap-4 items-center p-4 justify-start BorderR',
                {
                  'text-white border-b-4 border-b-[#FEA55F]': isActive,
                  "Text": !isActive,
                }
              )}
            >
                {item.label}
            </Link>
          );
        })}
        </div>
        <div className='w-[45%] h-full BorderR'></div>
        <div className='pl-16'>
          <Link href="/">
          <h1 className='Text'>contact_us</h1>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

