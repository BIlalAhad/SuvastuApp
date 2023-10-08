import React from 'react'

export default function Herosection() {
  return (
    <>
      <div className='hero relative'>
        <img
          className='h-[50vh] sm:h-[600px] w-full object-cover brightness-75'
          src='hero.avif'
          alt=''
        />
        <div className='absolute top-[30%] sm:top-[40%] p-5 w-full text-center text-white space-y-4'>
          <h2 className=' font-bold text-xl  sm:text-4xl'>
            Suvastu App makes it easier for teams to manage projects and tasks
          </h2>
          <p>
            Simple, flexible, and powerful. All it takes are boards, lists, and
            cards to get a clear view of who’s doing what and what needs to get
            done.
          </p>
          <p className='text-8xl text-orange-600'>...</p>
        </div>
      </div>
    </>
  )
}
