import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import DashboardSidebar from '../Components/DashboardSidebar'
import { UseFirebase } from '../Context/Firebase'

export default function Projects() {
  const [data, setData] = useState([])
  const [singleProject, setSingleproject] = useState([])
  const Firebase = UseFirebase()
  const handleproject = (path) => {
    Firebase.setSingleproject(path)
  }
  useEffect(() => {
    Firebase.listProject().then((item) => setData(item.docs))
  })
  return (
    <>
      <div className='flex'>
        <DashboardSidebar />
        <div className='max-w-6xl mx-auto my-20 grid grid-cols-4 gap-2'>
          {data.map((item) => {
            return (
              <>
                <Link to={`../project/${item.data().documentId}`}>
                  <h1 className='bg-slate-100 p-12 border rounded-md text-center text-lg font-semibold hover:brightness-75 uppercase'>
                    {item.data().projectname}
                  </h1>
                </Link>
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}
