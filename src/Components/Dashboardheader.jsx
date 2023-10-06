import React from 'react'
import { Link } from 'react-router-dom'

export default function Dashboardheader() {
  return (
        <>
        <nav className='bg-blue-900 hidden text-white p-2 text-2xl sm:flex'>
            <Link to='Dashboard'><h2>Dashboard</h2></Link>
        </nav>
        </>
    )
}
