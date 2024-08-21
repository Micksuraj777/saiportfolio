'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navbarLinks } from '@/lib/constants/index';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const pathname = usePathname();

  const isAction = pathname === '/contact' || pathname.startsWith('/contact/');

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
              className={cn('flex items-center px-4 justify-start BorderR', {
                'text-white border-b-4 border-b-[#FEA55F]': isActive,
                Text: !isActive,
              })}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
      <div className="h-full BorderR"></div>
      <div
        className={cn('h-full flex items-center justify-center', {
          'border-b-4 border-b-[#FEA55F]': isAction,
        })}
      >
        <Link href="/contact">
          <h1
            className={cn({
              'text-white': isAction,
              Text: !isAction,
            })}
          >
            contact_us
          </h1>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
