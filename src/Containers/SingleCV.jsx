import React, { useEffect } from 'react'
import { UseFirebase } from '../Context/Firebase'
import { usePDF } from 'react-to-pdf';
import { useRef } from 'react';
import generatePDF from 'react-to-pdf';

export default function SingleCV() {
  const Firebase=UseFirebase();
  useEffect(()=>{
    console.log(Firebase.CVdata)
  })
  const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});
  return (
    <div className='max-w-4xl shadow p-6 m-12 mx-auto bg-gray-50' ref={targetRef}>
      <h2 className='text-2xl font-semibold text-center p-12'>CV</h2>
      <div>
        <div className='flex justify-between items-center border-b p-2 '>
        <h2 className='text-lg font-bold'>Name:</h2><p>{Firebase.CVdata.name}</p>
        </div>
        <div className='flex justify-between items-center border-b p-2 '>
        <h2 className='text-lg font-bold'>F/Name:</h2><p>{Firebase.CVdata.fname}</p>
        </div>
        <div className='flex justify-between items-center border-b p-2 '>
        <h2 className='text-lg font-bold'>Email:</h2><p>{Firebase.CVdata.email}</p>
        </div>
        <div className='flex justify-between items-center border-b p-2 '>
        <h2 className='text-lg font-bold'>Address:</h2><p>{Firebase.CVdata.location}</p>
        </div>
        <div className='flex justify-between items-center border-b p-2 '>
        <h2 className='text-lg font-bold'>CNIC:</h2><p>{Firebase.CVdata.CNIC}</p>
        </div>
        <div className='flex justify-between items-center border-b p-2 '>
        <h2 className='text-lg font-bold'>Phone:</h2><p>{Firebase.CVdata.phone}</p>
        </div>
        <div className='flex justify-between items-center border-b p-2 '>
        <h2 className='text-lg font-bold'>Skills:</h2><p>{Firebase.CVdata.skills}</p>
        </div>
        <div className='flex justify-between items-center border-b p-2 '>
        <h2 className='text-lg font-bold'>Apply For:</h2><p>{Firebase.CVdata.ApplyFor}</p>
        </div>
        <div className='flex justify-between items-center border-b p-2 '>
        <h2 className='text-lg font-bold'>Experience:</h2><p>{Firebase.CVdata.experience}</p>
        </div>
        <h2 className='text-lg font-bold text-center p-10'>Description</h2>
        <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, aspernatur commodi libero dolore voluptatum veritatis facilis eveniet aliquam quae iure sed consequatur possimus quasi a, sapiente hic. Ratione, suscipit labore.</p>
      </div>
      <div className='flex  justify-center my-10 '>
              <button className='p-2 bg-blue-800 hover:bg-blue-700 hover:cursor-pointer rounded-md text-white ' onClick={() => generatePDF(targetRef, {filename: 'page.pdf'})}>Download</button>

      </div>
    </div>
  )
}
