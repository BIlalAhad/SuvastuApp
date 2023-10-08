import React, { useEffect, useState } from 'react'
import { UseFirebase } from '../Context/Firebase'

export default function Team() {
  const [page, setPage] = useState(1)
  const firebase = UseFirebase()
  const [member, setMember] = useState([])
  useEffect(() => {
    firebase.listAllMembers().then((item) => {
      setMember(item.docs)
    })
  }, [])

  const handlepagination = (selected) => {
    setPage(selected)
  }
  return (
    <>
      <img
        className='h-[50vh] sm:h-[600px] w-full object-cover brightness-75'
        src='team.jpeg'
        alt=''
      />
      <section className='max-w-7xl mx-auto my-20'>
        <h2 className='text-5xl text-center'>
          Meet the{' '}
          <span className='text-orange-600 font-semibold font-serif'>
            team...
          </span>
        </h2>
        <p className='text-center mt-5'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          sapiente quaerat cum impedit.
        </p>

        <section className='grid grid-cols-2 sm:grid-cols-4  gap-4 mt-28 p-2 relative'>
          {member.slice(page * 8 - 8, page * 8).map((item) => {
            return (
              <div className='shadow bg-gray-50 rounded-sm p-2 sm:p-4'>
                <img
                  className=' w-full h-32 sm:w-7h-72 sm:h-72 object-cover   mb-2'
                  src={`https://firebasestorage.googleapis.com/v0/b/suvastutech-1e3c4.appspot.com/o/${
                    item.data().imageURL
                  }?alt=media`}
                  alt=''
                />
                <h2 className='text-center text-2xl'>
                  {item.data().employname}
                </h2>
                <p className='text-center text-orange-600 text-sm font-semibold'>
                  {item.data().employrank}
                </p>
                <p className='text-center text-orange-600 text-sm font-semibold'>
                  {item.data().employemail}
                </p>
              </div>
            )
          })}
        </section>
        {
          <section className='text-center my-20 p-5 space-x-4'>
            <span className='text-2xl hover:cursor-pointer'>◀</span>
            {[...Array(member.length / 2)].map((_, i) => {
              return (
                <span
                  className='hover:cursor-pointer p-2'
                  onClick={() => handlepagination(i + 1)}
                >
                  {i + 1}
                </span>
              )
            })}
            <span className='text-2xl hover:cursor-pointer'>▶</span>
          </section>
        }
      </section>
    </>
  )
}
