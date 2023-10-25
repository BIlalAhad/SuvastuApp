import React, { useEffect, useState } from 'react'
import DashboardSidebar from '../Components/DashboardSidebar'
import { UseFirebase } from '../Context/Firebase'

import { BsPersonPlusFill } from 'react-icons/bs'
import { RiDeleteBin5Line } from 'react-icons/ri'

export default function AddTeamMembers() {
  const Firebase = UseFirebase()
  const [employname, setEmployname] = useState([])
  const [employemail, setEmployemail] = useState([])
  const [employrank, setEmployrank] = useState([])
  const [employimg, setEmployimg] = useState([])
  const [member, setMember] = useState([])
  const [showModal, setShowModal] = React.useState(false)
  const handleemployForm = (e) => {
    e.preventDefault()
    console.log(employemail)
    Firebase.AddEmploy(employname, employemail, employrank, employimg)
    setEmployemail('')
    setEmployimg('')
    setEmployname('')
    setEmployrank('')
    const min = document.getElementById('form')
    min.classList.toggle('hidden')
  }
  const handleplus = () => {
    const form = document.getElementById('form')
    form.classList.toggle('hidden')
  }
  const cross = () => {
    const form = document.getElementById('form')
    form.classList.toggle('hidden')
  }

  const getImageUrl = (path) => {
    // console.log(path)
    return `https://firebasestorage.googleapis.com/v0/b/suvastuapp.appspot.com/o/${path}?alt=media&token=b992de0a-10fa-461b-9284-a8a5762785a1`
  }

  useEffect(() => {
    Firebase.listAllMembers().then((item) => {
      setMember(item.docs)
      console.log(member)
    })
  }, [])
  return (
    <>
      <section className='sm:flex '>
        <DashboardSidebar />

        <div className=' mr-5  w-full'>
          

          {/* model */}
          <div id='form' className=''>
            {showModal ? (
              <>
                <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
                  <div className='relative w-auto my-6 mx-auto max-w-3xl'>
                    {/*content*/}
                    <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                      {/*header*/}
                      <div className='flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t'>
                        <h3 className='text-3xl font-semibold'>Add Employ</h3>
                        <button
                          className='p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none'
                          onClick={() => setShowModal(false)}
                        >
                          <span className='bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none'>
                            ×
                          </span>
                        </button>
                      </div>
                      {/*body*/}
                      <div className='relative p-6 flex-auto'>
                        <form className=' space-y-2 text-center max-w-lg bg-gray-100 shadow-2xl p-4'>
                          <input
                            type='text'
                            className='w-full p-2 border-2'
                            value={employname}
                            name='employname'
                            placeholder='Employ Name'
                            onChange={(e) => setEmployname(e.target.value)}
                          />
                          <input
                            type='text'
                            className='w-full p-2 border-2'
                            value={employrank}
                            name='employRank'
                            placeholder='Employ Rank'
                            onChange={(e) => setEmployrank(e.target.value)}
                          />
                          <input
                            type='email'
                            className='w-full p-2 border-2'
                            value={employemail}
                            name='employEmail'
                            placeholder='Employ email'
                            onChange={(e) => setEmployemail(e.target.value)}
                          />
                          <input
                            type='file'
                            className='w-full p-2 border-2'
                            name='employimg'
                            placeholder='Employ email'
                            onChange={(e) => setEmployimg(e.target.files[0])}
                          />
                          {/* <button className='w-full p-2 hover:bg-blue-700 hover:cursor-pointer bg-blue-800 text-white' type='submit' onClick={}>Add</button> */}
                        </form>
                      </div>
                      {/*footer*/}
                      <div className='flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b'>
                        <button
                          className='text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                          type='button'
                          onClick={() => setShowModal(false)}
                        >
                          Close
                        </button>
                        <button
                          className='bg-blue-800 text-white active:bg-blue-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                          type='button'
                          onClick={handleemployForm}
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
              </>
            ) : null}
          </div>

          <section className='sm:m-9 mt-20'>
            <div
              className='text-3xl sm:text-4xl flex justify-end  p-2'
              onClick={() => setShowModal(true)}
            >
              <BsPersonPlusFill />
            </div>
            <table className='sm:w-full'>
              <thead>
                <tr className=' bg-gray-100 text-left'>
                  <th className='p-2 border-b-2'>
                    {' '}
                    <img src='' alt='' />
                  </th>
                  <th className='p-2 border-b-2'> Name</th>
                  <th className='p-2 border-b-2'> Email</th>
                  <th className='p-2 border-b-2'> Rank</th>
                  <td>
                    <button className='text-2xl text-red-700'>
                      <RiDeleteBin5Line />
                    </button>
                  </td>
                </tr>
              </thead>
              <tbody>
                {member.map((member) => {
                  return (
                    <>
                      <tr className='border-b-2'>
                        <td>
                          <img
                            className='w-20 h-16 object-cover p-1'
                            src={`https://firebasestorage.googleapis.com/v0/b/suvastutech-1e3c4.appspot.com/o/${
                              member.data().imageURL
                            }?alt=media&token=b992de0a-10fa-461b-9284-a8a5762785a1`}
                            alt=''
                          />
                        </td>
                        <td>{member.data().employname}</td>
                        <td>{member.data().employemail}</td>
                        <td>{member.data().employrank}</td>
                        <td>
                          <button
                            className='text-2xl text-red-700'
                            onClick={() => Firebase.deleteEmploy(member.id)}
                          >
                            <RiDeleteBin5Line />
                          </button>
                        </td>
                      </tr>
                    </>
                  )
                })}
              </tbody>
            </table>
          </section>
        </div>
      </section>
    </>
  )
}
