import React, { useState } from 'react'
import DashboardSidebar from '../Components/DashboardSidebar'
import { UseFirebase } from '../Context/Firebase'

export default function Logo() {
    const [logo,setLogo]=useState([])
    console.log(logo)
    const Firebase=UseFirebase();
    const uploadlogo=(e)=>{
        e.preventDefault()
        Firebase.uploadLogo(Logo);
        setLogo('');
    }
  return (
    <div className='flex'>
      <DashboardSidebar/>
      <div className='mr-5  w-full'>
            <form action="" className='m-5 bg-gray-50 p-12 max-w-3xl shadow text-center mx-auto my-20'>
                <label htmlFor="" className='text-2xl font-semibold'>Logo</label>
                <div action="" className='mt-8'>
                    <input type="file" onChange={(e)=>setLogo(e.target.files[0])} />
                    <button className='bg-blue-800 text-white p-2 px-3 hover:bg-blue-700 hover:cursor-pointer rounded-md' onClick={uploadlogo}>
                        Upload
                    </button>
                </div>
            </form>
      </div>
    </div>
  )
}
