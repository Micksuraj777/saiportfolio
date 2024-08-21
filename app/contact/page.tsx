import Drop from '@/components/shared/Drop'
import React from 'react'

const Contact = () => {
  return (
    <section className='background'>
      <section className='w-full hero-height container'>
        <div className='w-[20%] h-full BorderR'>
          <div className='BorderB'>
          <Drop title='Contacts' type='contacts'/>
          </div>
        <Drop title='find-me-also-in' type='links'/>
        </div>
      </section>
    </section>
  )
}

export default Contact
