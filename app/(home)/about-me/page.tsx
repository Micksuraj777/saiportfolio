import Side from '@/components/Side'
import Sidebar from '@/components/Sidebar'
import React from 'react'

const page = () => {
  return (
    <section className='h-screen container pt-[50px] background flex'>
      <Side/>
      <Sidebar/>
    </section>
  )
}

export default page
