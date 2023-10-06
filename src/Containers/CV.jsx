import React, { useEffect, useState } from 'react'
import DashboardSidebar from  '../Components/DashboardSidebar'
import { UseFirebase } from '../Context/Firebase'
import { Link } from 'react-router-dom';

export default function CV() {
  const Firebase=UseFirebase();
  const [data,setdata]=useState([]);
  useEffect(()=>{
      Firebase.listAllCV().then(item=>setdata(item.docs))
  },[])
  return (
    <section className='flex'>
      <DashboardSidebar/>

      <section className=' mr-5  w-full'>
        <div className='max-w-6xl mx-auto my-20 grid grid-cols-4 gap-2'>
          {/* <ul>
          {
            data.map(item=>{
              if(item.data().name=='test'){
                return <li>{item.data().name}</li>
              }
            })
          }
          </ul> */}
          <Link to='../reactCV'><p className='bg-slate-100 p-12 border rounded-md text-center text-lg font-semibold hover:brightness-75 uppercase'>REACT</p></Link>
          <Link to='../laravelcv'><p className='bg-red-100 p-12 border rounded-md text-center text-lg font-semibold hover:brightness-75 uppercase'>laravel/php</p></Link>
          <Link to='../pythoncv'><p className='bg-orange-100 p-12 border rounded-md text-center text-lg font-semibold hover:brightness-75 uppercase'>Python</p></Link>
          <Link to='../nodejscv'><p className='bg-amber-100 p-12 border rounded-md text-center text-lg font-semibold hover:brightness-75 uppercase'>node.js</p></Link>
          <Link to='../worldpress'><p className='bg-yellow-100 p-12 border rounded-md text-center text-lg font-semibold hover:brightness-75 uppercase'>Worldpress</p></Link>
          <Link to='../managercv'><p className='bg-lime-100 p-12 border rounded-md text-center text-lg font-semibold hover:brightness-75 uppercase'>Manager</p></Link>
          <Link to='../hrcv'><p className='bg-green-100 p-12 border rounded-md text-center text-lg font-semibold hover:brightness-75 uppercase'>hr</p></Link>
          <Link to='../networking'><p className='bg-cyan-100 p-12 border rounded-md text-center text-lg font-semibold hover:brightness-75 uppercase'>Networking</p></Link>
          <Link to='../SEO'><p className='bg-blue-100 p-12 border rounded-md text-center text-lg font-semibold hover:brightness-75 uppercase'>SEO</p></Link>
          <Link to='../contentwritercv'><p className='bg-indigo-100 p-12 border rounded-md text-center text-lg font-semibold hover:brightness-75 uppercase'>Content Writers</p></Link>
          <Link to='../datascientestcv'><p className='bg-violet-100 p-12 border rounded-md text-center text-lg font-semibold hover:brightness-75 uppercase'>Data Scientest</p></Link>
          <Link to='../appdevcv'><p className='bg-rose-100 p-12 border rounded-md text-center text-lg font-semibold hover:brightness-75 uppercase'>App Developer</p></Link>
          <Link to='../uicv'><p className='bg-pink-100 p-12 border rounded-md text-center text-lg font-semibold hover:brightness-75 uppercase'>UI / UX</p></Link>


        </div>
      </section>
    </section>
  )
}
