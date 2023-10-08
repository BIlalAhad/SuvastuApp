import React from 'react'
import TaskManagementSideBar from '../Components/TaskManagementSideBar'

export default function TaskManagement() {
  return (
    <div className='flex'>
      <TaskManagementSideBar />
      <img
        className='w-full h-[80vh] object-cover brightness-75'
        src='task.avif'
        alt=''
      />
    </div>
  )
}
