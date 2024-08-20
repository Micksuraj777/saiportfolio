import Image from 'next/image'
import React from 'react'

const Animation = () => {
  return (
    <div className="hidden md:block">
      <div className="animate-fade-up animate-once animate-duration-[3000ms] relative">
        <Image 
          src="/images/code.svg" 
          alt='code' 
          width={400} 
          height={300} 
        />
        <div className="relative z-10 flex place-items-center before:absolute before:h-[500px] before:w-full before:translate-x-1 before:rounded-full before:bg-gradient-radial before:from-green-400 before:to-[#0141ff] before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[250px] after:w-full after:-translate-y-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-[#0141ff] before:dark:opacity-10 after:dark:from-[#0141ff] after:dark:via-green-300 after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[500px]">
          <Image 
            src="/images/code.svg" 
            alt='code' 
            width={400} 
            height={300} 
            className="z-20"
          />
        </div>
        <Image 
          src="/images/code.svg" 
          alt='code' 
          width={400} 
          height={300} 
        />
      </div>
    </div>
  )
}

export default Animation

