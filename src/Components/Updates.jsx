import React from 'react'

export default function Updates() {
  return (
    <>
      <section className='py-20  bg-gray-800'>
        <div className='max-w-7xl mx-auto space-y-5'>
          <h2 className='text-2xl font-semibold text-center text-white'>
            Sign up and get started with Trello today. A world of productive
            teamwork awaits!
          </h2>
          <div className='flex justify-center gap-2'>
            <input
              className='w-1/2 p-2 border '
              type='text '
              placeholder='Email'
            />
            <button className='bg-[rgb(243,98,36)] p-2 px-5 text-white rounded-md bg-gradient-to-r  hover:from-pink-500 hover:to-yellow-500 hover:cursor-pointer'>
              SignUp
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
