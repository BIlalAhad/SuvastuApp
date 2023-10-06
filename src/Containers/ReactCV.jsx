import React, { useEffect, useState } from 'react'
import DashboardSidebar from '../Components/DashboardSidebar'
import { UseFirebase } from '../Context/Firebase'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { BiSolidEditAlt } from 'react-icons/bi'
import { FaDownload } from 'react-icons/fa'
import { useRef } from 'react';
import generatePDF from 'react-to-pdf';
import { Link } from 'react-router-dom'


export default function ReactCV() {
  const Firebase = UseFirebase();
  const [data, setData] = useState([]);
  const targetRef = useRef();
  useEffect(() => {
    Firebase.listAllCV().then(item => { setData(item.docs) })
  }, [data])
  const [searchdata, setSearchData] = useState([]);
  // const Delete=(path)=>{
  //   Firebase.deleteCV(path)
  // }

  // <th>Name</th>
  // <th>F/Name</th>
  // <th>Email</th>
  // <th>Address</th>
  // <th>Phone</th>
  // <th>CNIC</th>
  // <th>Education</th>
  // <th>Skills</th>
  // <th>Experience</th>
  return (
    <>
      <section className='sm:flex'>
        <DashboardSidebar className='' />
        <section className='w-full m-5'>

          <div class="max-w-screen-xl mx-auto px-5 bg-white min-h-sceen h-[80vh]">
            <button><Link to='../singleCV'>Single CV</Link></button>
            <input type="search" placeholder='Search by Name' className='border-2 p-2 w-full' onChange={e => setSearchData(e.target.value)} />
            <table id="example" class="table-auto w-full" ref={targetRef}>
              <thead className='bg-gray-100'>
                <tr className='text-left'>
                  <th class="px-4 py-2 border">Name</th>
                  <th class="px-4 py-2 border">F/Name</th>
                  <th class="px-4 py-2 border">Email</th>
                  <th class="px-4 py-2 border">Address</th>
                  <th class="px-4 py-2 border">CNIC</th>
                  <th class="px-4 py-2 border">Education</th>
                  <th class="px-4 py-2 border">Skills</th>
                  <th class="px-4 py-2 border">Experience</th>
                  <th class="px-4 py-2 border">Phone</th>
                  <th class="px-4 py-2 border">
                    <button className='text-xl text-red-700'>
                      < RiDeleteBin5Line />
                    </button>
                  </th>
                  <th class="px-4 py-2 border">
                    <button className='text-xl ' onClick={() => Firebase.generatePDF()}>
                      < FaDownload />
                    </button>
                  </th>

                </tr>
              </thead>
              <tbody>
                {data ?
                  data.filter((items) => {
                    if (searchdata == "") {
                      return items
                    } else if (items.data().ApplyFor.toLowerCase().includes(searchdata.toLocaleLowerCase())) {
                      return items
                    }
                  }).map(item => {
                    if (item.data().ApplyFor == 'Laravel') {
                      return (
                        <>
                          <tr>
                            <td class="border px-4 py-2">{item.data().name}</td>
                            <td class="border px-4 py-2">{item.data().fname}</td>
                            <td class="border px-4 py-2">{item.data().email}</td>
                            <td class="border px-4 py-2">{item.data().location}</td>
                            <td class="border px-4 py-2">{item.data().CNIC}</td>
                            <td class="border px-4 py-2">{item.data().education}</td>
                            <td class="border px-4 py-2">{item.data().skills}</td>
                            <td class="border px-4 py-2">{item.data().experience}</td>
                            <td class="border px-4 py-2">{item.data().phone}</td>
                            <td class="border px-4 py-2">
                              <button className='text-xl text-red-700' onClick={() => Firebase.deleteCV(item.id)}>
                                < RiDeleteBin5Line />
                              </button>
                            </td>
                            <td class="border px-4 py-2">
                              {/* <button className='text-xl ' onClick={() => generatePDF(targetRef, {filename: 'page.pdf'})}> */}
                              {/* <button className='text-xl ' onClick={() =>Firebase.setCVData(item.data())}>
                                < FaDownload />
                              </button> */}
                              <Link to='../singleCV' onClick={()=>Firebase.getsingleCV(item.data())}>View</Link>
                            </td>
                          </tr>
                        </>
                      )
                    }
                  }) : null
                }




              </tbody>
            </table>
          </div>

        </section>

      </section>

    </>
  )
}
