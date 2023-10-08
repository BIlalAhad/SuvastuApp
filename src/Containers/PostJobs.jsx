import React, { useEffect, useState } from 'react'
import DashboardSidebar from '../Components/DashboardSidebar'
import { UseFirebase } from '../Context/Firebase'

export default function PostJobs() {
  const [jobtitle, setJobtitle] = useState([])
  const [jobDescription, setJobDescription] = useState([])
  const [skills, setSkills] = useState([])
  const [location, setLocation] = useState([])
  const [salleryfrom, setSalleryform] = useState([])
  const [salleryto, setSalleryto] = useState([])
  const [jobshift, setJobshift] = useState([])
  const [gender, setGender] = useState([])
  const [country, setCountry] = useState([])
  useEffect(() => {})
  const Firebase = UseFirebase()

  const handleform = (e) => {
    e.preventDefault()
    Firebase.postjob(
      jobtitle,
      jobDescription,
      skills,
      location,
      salleryfrom,
      salleryto,
      jobshift,
      gender,
      country
    )
    setJobtitle('')
    setJobDescription('')
    setSkills('')
    setLocation('')
    setSalleryform('')
    setSalleryto('')
    setJobshift('')
    setCountry('')
  }
  return (
    <div className='sm:flex '>
      <DashboardSidebar />
      <div className='m-5  w-full mt-1 py-20 rounded-lg bg-white  '>
        <form
          action=''
          className='p-8 shadow-md bg-slate-50 space-y-5 max-w-4xl mx-auto'
          onSubmit={handleform}
        >
          <h2 className='py-4 text-2xl font-semibold border-b-2'>
            Job Details
          </h2>
          <div className=''>
            <label className=' font-semibold '>Job Title</label>
            <input
              className='p-2 w-full mt-1 shadow rounded-lg bg-white '
              value={jobtitle}
              onChange={(e) => setJobtitle(e.target.value)}
              type=' text'
              required
              placeholder='job title'
            />
          </div>
          <div>
            <label className=' font-semibold '>Job Description</label>
            <textarea
              className='p-2  w-full mt-1 shadow rounded-lg bg-white   '
              name=''
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              required
              id=''
              cols='30'
              rows='5'
            ></textarea>
          </div>
          <div>
            <label className=' font-semibold '>Enter Skills</label>
            <input
              className='p-2  w-full mt-1 shadow rounded-lg bg-white  '
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              name=''
              placeholder='Enter Skills'
            />
          </div>
          <div className='grid grid-cols-2 gap-4'>
            <div className='text-sm'>
              <label className=' font-semibold '>Country</label>
              <select
                className='w-full mt-1 shadow rounded-lg bg-white  p-2'
                name=''
                id=''
                onChange={(e) => setCountry(e.target.value)}
              >
                <option value=''>...</option>
                <option value='pakistan'>pakistan</option>
                <option value='usa'>USA</option>
                <option value='dubai'>Dubai</option>
              </select>
            </div>
            <div>
              <label className=' font-semibold '>Location</label>
              <select
                className='w-full mt-1 shadow rounded-lg bg-white  p-2'
                name=''
                id=''
                onChange={(e) => setLocation(e.target.value)}
              >
                <option value=''>...</option>
                <option value='Township Mingora'>Township Mingora</option>
                <option value='Bypass'>Bypass</option>
                <option value='Qambar'>Qambar</option>
              </select>
            </div>
          </div>
          <div className='grid grid-cols-2 gap-4'>
            <div className='text-sm'>
              <label className=' font-semibold'>Sallery rang from</label>
              <select
                className='w-full mt-1 shadow rounded-lg bg-white  p-2'
                name=''
                id=''
                onChange={(e) => setSalleryform(e.target.value)}
              >
                <option value=''>...</option>
                <option value='10Thousand'>10Thousand</option>
                <option value='20Thousand'>20Thousand</option>
                <option value='30Thousand'>30Thousand</option>
                <option value='40Thousand'>40Thousand</option>
                <option value='50Thousand'>50Thousand</option>
                <option value='60Thousand'>60Thousand</option>
                <option value='70Thousand'>70Thousand</option>
                <option value='80Thousand'>80Thousand</option>
                <option value='90Thousand'>90Thousand</option>
                <option value='1 lack'>1Lack </option>
                <option value='1Lack 10 Thousand'>1Lack 10 Thousand </option>
                <option value='1Lack 20 Thousand'>1Lack 20 Thousand </option>
                <option value='1Lack 30 Thousand'>1Lack 30 Thousand </option>
                <option value='1Lack 40 Thousand'>1Lack 40 Thousand </option>
                <option value='1Lack 50 Thousand'>1Lack 50 Thousand </option>
                <option value='1Lack 60 Thousand'>1Lack 60 Thousand </option>
              </select>
            </div>
            <div className='text-sm'>
              <label className=' font-semibold '>To</label>
              <select
                className='w-full mt-1 shadow rounded-lg bg-white  p-2'
                name=''
                id=''
                onChange={(e) => setSalleryto(e.target.value)}
              >
                <option value=''>...</option>
                <option value='10Thousand'>10Thousand</option>
                <option value='20Thousand'>20Thousand</option>
                <option value='30Thousand'>30Thousand</option>
                <option value='40Thousand'>40Thousand</option>
                <option value='50Thousand'>50Thousand</option>
                <option value='60Thousand'>60Thousand</option>
                <option value='70Thousand'>70Thousand</option>
                <option value='80Thousand'>80Thousand</option>
                <option value='90Thousand'>90Thousand</option>
                <option value='1 lack'>1Lack </option>
                <option value='1Lack 10 Thousand'>1Lack 10 Thousand </option>
                <option value='1Lack 20 Thousand'>1Lack 20 Thousand </option>
                <option value='1Lack 30 Thousand'>1Lack 30 Thousand </option>
                <option value='1Lack 40 Thousand'>1Lack 40 Thousand </option>
                <option value='1Lack 50 Thousand'>1Lack 50 Thousand </option>
                <option value='1Lack 60 Thousand'>1Lack 60 Thousand </option>
              </select>
            </div>
          </div>
          <div className='text-sm'>
            <label className=' font-semibold '>Job Shift</label>
            <select
              className='w-full mt-1 shadow rounded-lg bg-white  p-2'
              onChange={(e) => setJobshift(e.target.value)}
              name=''
              id=''
            >
              <option value=''>...</option>
              <option value='Full Time'>Full Time</option>
              <option value='Part Time'>Part Time</option>
            </select>
          </div>
          <div className='text-sm'>
            <label className=' font-semibold '>Gender</label>
            <select
              className='w-full mt-1 shadow rounded-lg bg-white  p-2'
              onChange={(e) => setGender(e.target.value)}
              name=''
              id=''
            >
              <option value=''>...</option>
              <option value='Mail'>Mail</option>
              <option value='Female'>Female</option>
            </select>
          </div>
          <button
            className='bg-blue-800 hover:bg-blue-700 p-2 text-white rounded-md px-5 flex justify-center w-full'
            type='submit'
          >
            Submit{' '}
          </button>
        </form>
      </div>
    </div>
  )
}
