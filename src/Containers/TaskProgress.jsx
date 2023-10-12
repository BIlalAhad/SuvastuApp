import { doc, getDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { AiFillPlusSquare } from 'react-icons/ai'
import DashboardSidebar from '../Components/DashboardSidebar'
import { UseFirebase } from '../Context/Firebase'

export default function TaskProgress() {
  const [data, setData] = useState([])
  const [project, setProject] = useState([])
  const [task, setTask] = useState([])
  const [description, setDescription] = useState([])
  const [startingDate, setStartingDate] = useState([])
  const [dueDate, setDueDate] = useState([])
  const [assignTo, setAssignTo] = useState([])
  const [specificData, setSpecificData] = useState(null)
  const [doingData, setDoingData] = useState([]);
  const [showModal, setShowModal] = React.useState(false)
  const [todoData, setTodoData] = useState([])
  const [done,setDone]=useState([]);
  const Firebase = UseFirebase()
  const url = window.location.href.split('/')
  const documentId = url.pop()

  // console.log(documentId);

  // Firebase

  // ==========================================
useEffect(()=>{
Firebase.getTodos(documentId).then((item)=>{
  setTodoData(item.docs)
})
Firebase.getDoing(documentId).then((item)=>{
  setDoingData(item.docs)
})
Firebase.DoneData(documentId).then((item)=>{
  setDone(item.docs)
})
},[documentId,todoData,doingData,done])
// ===================================



    const documentRef = doc(Firebase.db, 'Board', documentId) // 'Board' is the collection name

    getDoc(documentRef)
      .then((docSnapshot) => {
        if (docSnapshot.exists()) {
          // Document exists, access its data
          setSpecificData(docSnapshot.data())
          // console.log(docSnapshot.data())
        } else {
          // console.log('Document does not exist')
        }
      })
      .catch((error) => {
        console.error('Error getting document:', error)
      })
 

  const handleForm = (e) => {
    e.preventDefault()
    // console.log(documentId)
    Firebase.posttask(
      documentId,
      task,
      description,
      assignTo,
      startingDate,
      dueDate
    )
    setAssignTo('')
    setTask('')
    setDescription('')
    setStartingDate('')
    setDueDate('')
    // console.log(task, description, startingDate, dueDate, assignTo)
  }
  

  return (
    <>
      <section className='flex bg-gray-100'>
        <DashboardSidebar />
        <div className='w-full my-20'>
          {specificData ? (
            <div>
              <div className='px-28 py-12'>
                <h2 className='text-2xl font-semibold'>
                  <span>Project Name : </span>
                  {specificData.projectname}
                </h2>
                <p>
                  <span className='font-semibold'>Project Duration : </span>
                  {specificData.ProjectDuration}
                </p>
                <p>
                  <span className='font-semibold'>Project Type : </span>
                  {specificData.ProjectType}
                </p>
              </div>
              <div className='grid grid-cols-3 gap-5 max-w-5xl mx-auto text-lg font-semibold '>
                <div className=' border p-2  bg-white'>
                  <div className=' border p-2 bg-blue-900 text-white text-center border-white'> Start </div>

                  <ul>
                    {todoData.map((item) => {
                      return (
                        
                        
                        <div className='mt-3  shadow border bg-blue-100'>
                            <p className='bg-blue-900 w-full  p-1 text-center text-white  '>
                              <span className='font-bold   py-4 '>Task :  </span>{item.data().task}
                            </p>
                           <div className='p-4'>
                           <p className='flex justify-between border-b'>
                              <span>To : </span> <span>
                              {item.data().assignTo}
                              </span>
                            </p>
                            <div className='flex justify-between my-2 border-b'>
                              <span>
                                {item.data().startingDate}
                              </span>
                              <span>-</span>
                              <span>
                                {item.data().dueDate}
                              </span>
                            </div>
                            <button className='' onClick={()=>Firebase.clearTodos(documentId,item)}>➡</button>
                           </div>
                            
                          </div>
                      )
                    })}
                  </ul>
                  <button
                    className='text-3xl text-blue-900 border p-2 float-right '
                    onClick={() => setShowModal(true)}
                  >
                    <AiFillPlusSquare />
                  </button>
                </div>
                <div className=' border p-2  bg-white'>
                  <div className=' border p-2 bg-blue-900 text-white text-center border-white'> Doing </div>

                  <ul>
                    {doingData.map((item) => {
                      return (
                        
                        
                        <div className='mt-3  shadow border bg-blue-100'>
                            <p className='bg-blue-900 w-full  p-1 text-center text-white  '>
                              {item.data().task}
                            </p>
                           <div className='p-4'>
                           <p className='flex justify-between border-b'>
                               <span>
                              {item.data().assignTo}
                              </span>
                            </p>
                            <div className='flex justify-between my-2 border-b'>
                              <span>
                                {item.data().startingDate}
                              </span>
                              <span>-</span>
                              <span>
                                {item.data().dueDate}
                              </span>
                            </div>
                            <button className='' onClick={()=>Firebase.movetoDone(documentId,item)}>➡</button>
                           </div>
                            
                          </div>
                      )
                    })}
                  </ul>

                </div>
                <div className=' border p-2  bg-white'>
                  <div className=' border p-2 bg-blue-900 text-white text-center border-white'> Done </div>

                  <ul>
                    {done.map((item) => {
                      return (
                        
                        
                        <div className='mt-3  shadow border bg-blue-100'>
                            <p className='bg-blue-900 w-full  p-1 text-center text-white  '>
                              <span className='font-bold   py-4 '>Task :  </span>{item.data().task}
                            </p>
                           <div className='p-4'>
                           <p className='flex justify-between border-b'>
                              <span>To : </span> <span>
                              {item.data().DoneBy}
                              </span>
                            </p>
                            <div className='flex justify-between my-2 border-b'>
                              <span>
                                {item.data().dueDate}
                              </span>
                              <span>-</span>
                              <span>
                                {item.data().dueDate}
                              </span>
                            </div>
                            <button className='text-green-600' onClick={()=>Firebase.clearTodos(documentId,item)}>✔ Completed</button>
                           </div>
                            
                          </div>
                      )
                    })}
                  </ul>

                </div>
               
              </div>
            </div>
          ) : (
            <div>Loading ...</div>
          )}
        </div>
      </section>

      {/* model */}
      {showModal ? (
        <>
          <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none '>
            <div className='relative  my-6 mx-auto w-[50%]'>
              {/*content*/}
              <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                {/*header*/}
                <div className='flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t bg-gray-400'>
                  <h3 className='text-3xl font-semibold'>Task</h3>
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
                  <p className='my-4 text-slate-500 leading-relaxed'>
                    <form action='' onSubmit={handleForm}>
                      <div className='flex items-center'>
                        <label
                          htmlFor=''
                          className='w-32 my-3 font-bold font-serif'
                        >
                          Add Task :{' '}
                        </label>
                        <input
                          className='w-full border-b p-1 text-sm'
                          type='text'
                          value={task}
                          onChange={(e) => setTask(e.target.value)}
                          placeholder='add task'
                        />
                      </div>
                      <div className='flex items-center'>
                        <label
                          htmlFor=''
                          className='w-32 my-3 font-bold font-serif'
                        >
                          Description :{' '}
                        </label>
                        <input
                          className='w-full border-b p-1 text-sm'
                          type='text'
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          placeholder='add task'
                        />
                      </div>
                      <div className='flex items-center justify-between'>
                        <div className='grid grid-cols-2 items-center'>
                          <label
                            htmlFor=''
                            className=' my-3 font-bold font-serif '
                          >
                            Starting Date :{' '}
                          </label>
                          <input
                            className='w-full border-b p-1 text-sm '
                            type='date'
                            value={startingDate}
                            onChange={(e) => setStartingDate(e.target.value)}
                            placeholder='add task'
                          />
                        </div>
                        <div className='grid grid-cols-2 items-center'>
                          <label
                            htmlFor=''
                            className=' my-3 font-bold font-serif '
                          >
                            Due Date :{' '}
                          </label>
                          <input
                            className='w-full border-b p-1 text-sm '
                            type='date'
                            value={dueDate}
                            onChange={(e) => setDueDate(e.target.value)}
                            placeholder='add task'
                          />
                        </div>
                        <div className='grid grid-cols-2 items-center'>
                          <label
                            htmlFor=''
                            className=' my-3 font-bold font-serif '
                          >
                            Assign To :{' '}
                          </label>
                          <input
                            className='w-full border-b p-1 text-sm '
                            type='text'
                            value={assignTo}
                            onChange={(e) => setAssignTo(e.target.value)}
                            placeholder='add task'
                          />
                        </div>
                      </div>
                      <button type='submit'>send</button>
                    </form>
                  </p>
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
                </div>
              </div>
            </div>
          </div>
          <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
        </>
      ) : null}
    </>
  )
}
