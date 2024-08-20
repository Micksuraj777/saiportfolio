import Image from 'next/image';

const side = [
  { src: '/icons/terminal.svg', alt: 'terminal' },
  { src: '/icons/personal-info.svg', alt: 'personal' },
  { src: '/icons/hobbies.svg', alt: 'hobbies' },
];

const Side = () => {
  return (
    <section className="p-4 h-[73vh] Border gap-4 flex w-fit flex-col animate-fade-right animate-once">
      {side.map(item => (
        <div key={item.alt}>
          <Image src={item.src} alt={item.alt} width={24} height={24} />
        </div>
      ))}
    </section>
  );
};

export default Side;
