import Animation from '@/components/Animation'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <section className="w-full mx-auto max-w-[1500px] h-screen bg-[#011627]">
      <div className='flex justify-around items-center h-screen'>
      <div className='animate-fade-down animate-once'>
        <h1 className='text-white'>Hi all . I am</h1>
        <h2 className='text-7xl text-white tracking-wider'>Sai Prasad</h2>
        <h3 className='text-[#4D5BCE] text-3xl'>&gt; Full-Stack Developer</h3>
        <div>
          <p className='text-[#607B96] mt-6'>
          // complete the game to continue
          </p>
          <p className='text-[#607B96]'>
          // you can also see it on my Github page
          </p>
          <p className='text-[#4D5BCE]'>const&nbsp;&nbsp;<span className='text-green-500'>githublink</span><span className='text-white'>&nbsp;&nbsp;=&nbsp;&nbsp;</span><a href="/" target="_blank" className='text-[#FEA55F]'>“https://github.com/example/url”</a></p>
        </div>
      </div>
      <Animation/>
      </div>
    </section>
  )
}

export default page
