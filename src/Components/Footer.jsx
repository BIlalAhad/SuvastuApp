import React from 'react'
import { AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'

export default function Footer() {
  return (
    <>
      <section className=' bg-blue-950'>
        <div className='grid text-center sm:grid-cols-5 max-w-7xl mx-auto py-20'>
          <div>
            <img className='w-full p-5 sm:w-[200px]' src='logo.png' alt='' />
          </div>
          <div className=' text-white space-y-1 font-sans'>
            <h3 className='text-xl uppercase hover:text-orange-500 hover:cursor-pointer'>
              About Suvastu
            </h3>
            <p>what's about the boards</p>
          </div>
          <div className=' text-white space-y-1 font-sans'>
            <h3 className='text-xl uppercase hover:text-orange-500 hover:cursor-pointer'>
              Jobs
            </h3>
            <p>what's about the boards</p>
          </div>
          <div className=' text-white space-y-1 font-sans'>
            <h3 className='text-xl uppercase hover:text-orange-500 hover:cursor-pointer'>
              Apps
            </h3>
            <p>what's about the boards</p>
          </div>
          <div className=' text-white space-y-1 font-sans'>
            <h3 className='text-xl uppercase hover:text-orange-500 hover:cursor-pointer'>
              Contact Us
            </h3>
            <p>what's about the boards</p>
          </div>
        </div>
        <hr />
        <ul className='text-gray-300  grid grid-cols-4 p-2 sm:px-20'>
          <li>Privecy policy</li>
          <li>Terms</li>
          <li>Copyright &copy; </li>
          <li className='flex gap-4 text-2xl'>
            <span className='hover:text-orange-500 hover:cursor-pointer'>
              <BsFacebook />
            </span>
            <span className='hover:text-orange-500 hover:cursor-pointer'>
              <AiFillLinkedin />
            </span>
            <span className='hover:text-orange-500 hover:cursor-pointer'>
              <AiFillTwitterSquare />
            </span>
          </li>
        </ul>
      </section>
    </>
  )
}
