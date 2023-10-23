import React, { useEffect, useState } from 'react'
import DashboardSidebar from '../Components/DashboardSidebar'
import { UseFirebase } from '../Context/Firebase'

export default function Dashboard() {
  const [team, setTeam] = useState([])
  const [CV, setCV] = useState([])
  const Firebase = UseFirebase()
  useEffect(() => {
    Firebase.listAllMembers().then((item) => setTeam(item.docs.length))
    Firebase.listAllCV().then((item) => setCV(item.docs.length))
    console.log(team,CV)
  }, [])
  return (
    <>
      <section className='flex'>
        <DashboardSidebar />
        <section className='w-full m-5'>
          <div className='max-w-6xm mx-auto grid grid-cols-5 gap-7'>
            <div className='text-center p-8 bg-red-100 hover:brightness-90 hover:cursor-pointer relative border rounded-md'>
              <p className='text-3xl font-semibold'>{team}</p>
              <p>Team</p>
              <span className=' top-0 right-2 font-bold absolute text-2xl text-green-700'>
                +
              </span>
            </div>
            <div className='text-center p-8 bg-amber-100 hover:brightness-90 hover:cursor-pointer relative border rounded-md'>
              <p className='text-3xl font-semibold'>{CV}</p>
              <p>CV</p>
              <span className=' top-0 right-2 font-bold absolute text-2xl text-green-700'>
                +
              </span>
            </div>
            <div className='text-center p-8 bg-gray-100 hover:brightness-90 hover:cursor-pointer relative border rounded-md'>
              <p className='text-3xl font-semibold'>{CV}</p>
              <p>CV</p>
              <span className=' top-0 right-2 font-bold absolute text-2xl text-green-700'>
                +
              </span>
            </div>
            <div className='text-center p-8 bg-lime-100 hover:brightness-90 hover:cursor-pointer relative border rounded-md'>
              <p className='text-3xl font-semibold'>{CV}</p>
              <p>CV</p>
              <span className=' top-0 right-2 font-bold absolute text-2xl text-green-700'>
                +
              </span>
            </div>
            <div className='text-center p-8 bg-green-100 hover:brightness-90 hover:cursor-pointer relative border rounded-md'>
              <p className='text-3xl font-semibold'>{CV}</p>
              <p>CV</p>
              <span className=' top-0 right-2 font-bold absolute text-2xl text-green-700'>
                +
              </span>
            </div>
          </div>
        </section>
      </section>
    </>
  )
}
