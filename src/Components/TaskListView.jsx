import React, { useEffect, useState } from 'react'
import { UseFirebase } from '../Context/Firebase';
import { FcAlarmClock } from 'react-icons/fc';
import { PiClockClockwiseLight } from 'react-icons/fc';

export default function TaskListView(props) {
    const [sectionData, setSectionData] = useState([]);
    const Firebase = UseFirebase();
  
    useEffect(() => {
      Firebase.listSection(props.documentId)
        .then((response) => {
          // Log the response to see its structure and values
          console.log(response);
  
          // Assuming response is an object with a property 'docs' that contains the array
          setSectionData(response.docs);
        })
        .catch((error) => {
          console.error("Error fetching section data:", error);
        });
    }, []);
  
    return (
      <div>
        {sectionData.map((item) => (
          <div key={item.id} className='mt-10'>
                    <h2 className='w-full p-2 bg-gray-300 border border-gray-300 shadow font-semibold'>{item.data().SectionName}</h2>
                    <div className='overflow-x-auto'>
  <table className='min-w-full bg-white border shadow  text-center'>
    <thead>
      <tr>
        <th className='py-2 px-4 border-b'>Task</th>
        <th className='py-2 px-4 border-b'>Assign To</th>
        <th className='py-2 px-4 border-b text-green-500'>Starting Date</th>
        <th className='py-2 px-4 border-b text-red-500 flex items-center justify-center'><span><FcAlarmClock/></span><span>Due Date</span></th>
      </tr>
    </thead>
    <tbody>
      {item.data() && item.data().tasks && item.data().tasks.map((item, index) => (
        <tr key={index} className='border-b'>
          <td className='py-2 px-4'>{item.task}</td>
          <td className='py-2 px-4'>{item.assignTo}</td>
          <td className='py-2 px-4'>{item.startingDate}</td>
          <td className='py-2 px-4'>{item.dueDate}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


          </div>
        ))}
      </div>
    );
  }
  
