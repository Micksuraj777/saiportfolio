import Image from 'next/image'
import Link from 'next/link'

const socialMedia = [
  { src: '/icons/twitter.svg', alt: 'twitter' },
  { src: '/icons/facebook.svg', alt: 'facebook' }
]

const Footer = () => {
  return (
    <footer className='container w-full h-[50px] bg-[#011627] border Border absolute bottom-0 left-0 right-0'>
      <div className='flex w-full h-full'>
        <div className='BorderR items-center p-3'>
          <h1 className='Text'>find me in :</h1>
        </div>
        <div className='flex justify-center'>
          {socialMedia.map((item) => (
            <Link href="/" target='_blank' key={item.alt} className='p-3 BorderR'>
              <Image src={item.src} alt={item.alt} width={24} height={24} />
            </Link>
          ))}
        </div>
        <div className='w-[70%] BorderR'></div>
        <div className='flex justify-center items-center px-8 gap-4'>
          <h2 className='Text'>@sai-prasad-1</h2>
          <Image src='/icons/github.svg' alt='github' width={24} height={24} />
        </div>
      </div>
    </footer>
  )
}

export default Footer
