import React, { useEffect, useState } from 'react'
import DashboardSidebar from '../Components/DashboardSidebar'
import { UseFirebase } from '../Context/Firebase'

export default function CreateProject() {
  const [team, setteam] = useState([])
  const [projectname, setProjectname] = useState([])
  const [ProjectDuration, setProjectDuration] = useState([])
  const [ProjectType, setProjectType] = useState([])
  const [Description, setDescription] = useState([])
  const [teamdata, setTeamdata] = useState([])

  useEffect(() => {
    Firebase.listAllMembers().then((item) => {
      setData(item.docs)
    })
  }, [])
  const [data, setData] = useState([])
  const Firebase = UseFirebase()
  const handleselection = (e) => {
    e.preventDefault()
    setTeamdata(...teamdata, team)
    // console.log(teamdata)
    Firebase.PostProjectTeam(
      projectname,
      ProjectDuration,
      ProjectType,
      Description,
      teamdata
    )
    setProjectname('')
    setProjectDuration('')
    setProjectType('')
    setDescription('')
  }

  return (
    <section className='flex'>
      <DashboardSidebar />
      <div className='m-5 w-full'>
        <form className='max-w-4xl bg-gray-100 shadow-xl my-20 mx-auto p-8 space-y-6'>
          <h2 className='text-2xl font-semibold text-center my-10 '>
            New Project
          </h2>
          <div className='space-y-1'>
            <label htmlFor='' className='w-full'>
              Project Name
            </label>
            <input
              type='text'
              placeholder='...'
              value={projectname}
              onChange={(e) => setProjectname(e.target.value)}
              className='w-full p-2 rounded-md border text-sm'
            />
          </div>
          <div className='space-y-1'>
            <label htmlFor='' className='w-full'>
              Project Duration
            </label>
            <input
              type='text'
              placeholder='...'
              value={ProjectDuration}
              onChange={(e) => setProjectDuration(e.target.value)}
              className='w-full p-2 rounded-md border text-sm'
            />
          </div>
          <div className='space-y-1'>
            <label htmlFor='' className='w-full'>
              Project Type
            </label>
            <input
              type='text'
              placeholder='...'
              value={ProjectType}
              onChange={(e) => setProjectType(e.target.value)}
              className='w-full p-2 rounded-md border text-sm'
            />
          </div>
          <div className='space-y-1'>
            <label htmlFor='' className='w-full'>
              Project Description
            </label>
            <input
              type='text'
              placeholder='...'
              value={Description}
              onChange={(e) => setDescription(e.target.value)}
              className='w-full p-2 rounded-md border text-sm'
            />
          </div>
          <div className='space-y-1'>
            <div>
              <div className='space-y-1 flex justify-center'>
                <button
                  className='bg-blue-800 hover:bg-blue-700 text-white p-2 px-3 rounded-md '
                  onClick={handleselection}
                >
                  create
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}
