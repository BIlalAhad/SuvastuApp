import React from 'react'
import { AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import Updates from './Updates'

export default function Footer() {
  return (
    <>
      {/* <section className=' bg-blue-950'>
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
      </section> */}
      <Updates/>
      <footer class="bg-gray-800 text-white py-8">
  <div class="container mx-auto flex flex-wrap justify-between items-start">
    <div class="w-full md:w-1/4 text-center md:text-left mb-4 md:mb-0">
      <img src="logo.png" alt="Logo" class="s mx-auto md:ml-0"/>
    </div>

    <div class="w-full md:w-1/4 mb-4 md:mb-0">
      <h3 class="text-lg font-semibold mb-2">Pages</h3>
      <ul>
        <li><a href="#" class="text-gray-400 hover:text-white transition">Home</a></li>
        <li><a href="#" class="text-gray-400 hover:text-white transition">About</a></li>
        <li><a href="#" class="text-gray-400 hover:text-white transition">Services</a></li>
        <li><a href="#" class="text-gray-400 hover:text-white transition">Contact</a></li>
      </ul>
    </div>

    <div class="w-full md:w-1/4 mb-4 md:mb-0">
      <h3 class="text-lg font-semibold mb-2">Achievements</h3>
      <ul>
        <li><a href="#" class="text-gray-400 hover:text-white transition">Awards</a></li>
        <li><a href="#" class="text-gray-400 hover:text-white transition">Recognition</a></li>
        <li><a href="#" class="text-gray-400 hover:text-white transition">Testimonials</a></li>
      </ul>
    </div>

    <div class="w-full md:w-1/4">
      <h3 class="text-lg font-semibold mb-2">Privacy</h3>
      <ul>
        <li><a href="#" class="text-gray-400 hover:text-white transition">Terms of Use</a></li>
        <li><a href="#" class="text-gray-400 hover:text-white transition">Privacy Policy</a></li>
      </ul>
    </div>
  </div>
</footer>

    </>
  )
}
