import About from '@/components/About'
import Side from '@/components/Side'
import Sidebar from '@/components/Sidebar'
import React from 'react'

const page = () => {
  return (
    <section className='background'>
      <div className='container mx-auto flex'>
      <Side/>
      <Sidebar/>
      <About/>
      </div>
    </section>
  )
}

export default page
