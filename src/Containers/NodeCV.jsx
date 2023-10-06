import React, { useEffect, useState } from 'react'
import DashboardSidebar from '../Components/DashboardSidebar'
import { UseFirebase } from '../Context/Firebase'

export default function NodeCV() {
  const Firebase = UseFirebase();
  const [data, setData] = useState([]);
  useEffect(() => {
    Firebase.listAllCV().then(item => { setData(item.docs) })
  }, [])
  return (
    <>
      <section className='sm:flex'>
        <DashboardSidebar className='' />
        <section className='w-full m-5'>
          <div class="max-w-screen-xl mx-auto px-5 bg-white min-h-sceen h-[80vh]">
            <div class="flex flex-col items-center">
              <h2 class="font-bold text-5xl mt-5 tracking-tight">
                Node.js
              </h2>
              <p class="text-neutral-500 text-xl mt-3">
                CV's
              </p>
            </div>
            <div class="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8 ">
              {
                data.map((item) => {
                  if (item.data().skills == 'nodejs') {
                    return (
                      <div class="py-5">
                        <details class="group">
                          <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                            <span>{item.data().name}</span>
                            <span class="transition group-open:rotate-180">
                              <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                              </svg>
                            </span>
                          </summary>
                          <div class="text-neutral-600 mt-3 group-open:animate-fadeIn p-4 shadow bg-slate-50">
                            <div className='grid p-2 grid-cols-2 items-center justify-between border-b'>
                              <span className='font-bold '>Name</span>
                              <p className=''>{item.data().name} </p>
                            </div>
                            <div className='grid p-2 grid-cols-2 items-center justify-between border-b'>
                              <span className='font-bold '>F/Name</span>
                              <p className=''>{item.data().fname} </p>
                            </div>
                            <div className='grid p-2 grid-cols-2 items-center justify-between border-b'>
                              <span className='font-bold '>CNIC</span>
                              <p className=''>{item.data().CNIC} </p>

                            </div>
                            <div className='grid p-2 grid-cols-2 items-center justify-between border-b'>
                              <span className='font-bold '>Phone</span>
                              <p className=''>{item.data().phone} </p>
                            </div>
                            <div className='grid p-2 grid-cols-2 items-center justify-between border-b'>
                              <span className='font-bold '>Education</span>
                              <p className=''>{item.data().education} </p>
                            </div>
                            <div className='grid p-2 grid-cols-2 items-center justify-between border-b'>
                              <span className='font-bold '>Address</span>
                              <p className=''>{item.data().location} </p>
                            </div>
                            <div className='grid p-2 grid-cols-2 items-center justify-between border-b'>
                              <span className='font-bold '>Skills</span>
                              <p className=''>{item.data().skills} </p>
                            </div>
                            <div className='grid p-2 grid-cols-2 items-center justify-between border-b'>
                              <span className='font-bold '>Experience</span>
                              <p className=''>{item.data().experience} </p>
                            </div>
                            <div className='grid p-2 grid-cols-2 items-center justify-between border-b'>
                              <span className='font-bold '>Email</span>
                              <p className=''>{item.data().email} </p>
                            </div>



                          </div>
                        </details>
                      </div>
                    )
                  }
                })
              }




            </div>
          </div>

        </section>
      </section>
    </>
  )
}
