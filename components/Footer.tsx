import Image from 'next/image';
import Link from 'next/link';

const socialMedia = [
  { src: '/icons/twitter.svg', alt: 'twitter' },
  { src: '/icons/facebook.svg', alt: 'facebook' },
  { src: '/icons/github.svg', alt: 'github' },
];

const Footer = () => {
  return (
    <footer className="w-full h-12 min-h-fit background Border rounded-b-lg grid grid-cols-8 flex-none">
      <div className="col-span-8 lg:col-span-2 flex items-center justify-end lg:justify-center gap-1">
        <h1 className="Text border-r border-[#607B96] h-full flex items-center justify-center px-2 min-w-fit text-nowrap">
          find me in :
        </h1>
        {socialMedia.map(item => (
          <Link
            href="/"
            target="_blank"
            key={item.alt}
            className="p-2 h-full flex items-center justify-center BorderR last:border-0 lg:last:hidden"
          >
            <Image src={item.src} alt={item.alt} width={24} height={24} />
          </Link>
        ))}
      </div>
      <div className="hidden lg:flex justify-end items-center px-8 gap-4 col-start-7 col-end-9">
        <h2 className="hidden text-[#607B96] lg:block min-w-fit text-nowrap">@sai-prasad-1</h2>
        <Image src="/icons/github.svg" alt="github" width={24} height={24} />
      </div>
    </footer>
  );
};

export default Footer;
