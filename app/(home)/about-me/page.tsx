import About from '@/components/About'
import Side from '@/components/Side'
import Sidebar from '@/components/Sidebar'
import React from 'react'

const page = () => {
  return (
    <section className='h-screen pt-[50px] background'>
      <div className='container flex'>
      <Side/>
      <Sidebar/>
      <About/>
      </div>
    </section>
  )
}

export default page
