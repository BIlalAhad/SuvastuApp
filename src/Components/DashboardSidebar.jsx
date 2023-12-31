import React from 'react'
import { Link } from 'react-router-dom'


export default function DashboardSidebar() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <section className=' sm:w-[30vh] sticky bg-gray-800 text-white  '>
        <nav className='p-3'>
          <ul className='text-sm font-semibold'>
            <Link to='../logo'>
              <li className='p-3 border-b-2 hover:bg-blue-900 hover:text-white hover:cursor-pointer'>
                Logo
              </li>
            </Link>
            <Link to='../teammembers'>
              <li className='p-3 border-b-2 hover:bg-blue-900 hover:text-white hover:cursor-pointer'>
                Add Team member
              </li>
            </Link>
            <Link to='../addachivement'>
              <button className='p-3 w-full text-start border-b-2 hover:bg-blue-900 hover:text-white hover:cursor-pointer'  onClick={() => setShowModal(true)}>
                Add Achivement
              </button>
            </Link>
            <Link to='../postjobs'>
              <li className='p-3 border-b-2 hover:bg-blue-900 hover:text-white hover:cursor-pointer'>
                Post a Job
              </li>
            </Link>
            <Link to='../cv'>
              <li className='p-3 border-b-2 hover:bg-blue-900 hover:text-white hover:cursor-pointer'>
                Manage CV
              </li>
            </Link>
            <Link to='../createProject'>
              <li className='p-3 border-b-2 hover:bg-blue-900 hover:text-white hover:cursor-pointer'>
                Create New Project
              </li>
            </Link>

            <Link to='../projects'>
              <li className='p-3 border-b-2 hover:bg-blue-900 hover:text-white hover:cursor-pointer'>
                Projects
              </li>
            </Link>

            

            <Link to='../projects'>
              <li className='p-3 border-b-2 hover:bg-blue-900 hover:text-white hover:cursor-pointer'>
                Contact
              </li>
            </Link>
          </ul>
        </nav>
        



      
      </section>
    </>
  )
}
