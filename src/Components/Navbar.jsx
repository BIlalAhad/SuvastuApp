import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import '../App.css'
import { UseFirebase } from '../Context/Firebase'

export default function Navbar() {
  const handlenav = () => {
    const nav = document.getElementById('nav')
    nav.classList.toggle('hidden')
  }
  const Firebase = UseFirebase()
  return (
    <>
      <nav className='  bg-gradient-to-b from-slate-300   border-b-2 border-blue-900 p-2 sticky top-0 z-10 '>
        <button
          className='text-xl float-right m-8 sm:hidden absolute top-0 right-0 bg-white p-3'
          onClick={handlenav}
        >
          <GiHamburgerMenu />
        </button>
        <div
          id='nav'
          className='hidden sm:flex flex-col sm:flex-row justify-between items-center  max-w-7xl mx-auto'
        >
          <Link to='/'>
            <img className='w-[150px] sm:w-[220px]' src='logo.png' alt='' />
          </Link>
          <ul className='sm:flex gap-3 items-center uppercase text-sm sm:gap-8  font-semibold '>
            <Link to='/'>
              <li className='p-2 border-b-2 border-blue-700'>Home</li>
            </Link>
            <Link to='#'>
              <li className='p-2 border-b-2 border-blue-700'>Achievement</li>
            </Link>
            <Link to='team'>
              <li className='p-2 border-b-2 border-blue-700'>Team</li>
            </Link>
            <Link to='jobs'>
              <li className='p-2 border-b-2 border-blue-700'>JOBS</li>
            </Link>
            <Link>
              <li className='bg-[rgb(243,98,36)] p-2 text-white rounded-md bg-gradient-to-r  hover:from-blue-500 hover:to-orange-500 hover:cursor-pointer'>
                LOGOUT
              </li>
            </Link>
            <Link to='Signin'>
              <li className='bg-[rgb(243,98,36)] p-2 text-white rounded-md bg-gradient-to-r  hover:from-blue-500 hover:to-orange-500 hover:cursor-pointer'>
                SignIn
              </li>
            </Link>
            <Link to='Signup'>
              <li className='bg-[rgb(243,98,36)] p-2 text-white rounded-md bg-gradient-to-r  hover:from-blue-500 hover:to-orange-500 hover:cursor-pointer'>
                SignUp
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </>
  )
}
