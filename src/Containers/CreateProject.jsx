import React, { useEffect, useState } from 'react';
import DashboardSidebar from '../Components/DashboardSidebar';
import { UseFirebase } from '../Context/Firebase';

export default function CreateProject() {
  const [team, setTeam] = useState('');
  const [projectname, setProjectname] = useState('');
  const [ProjectDuration, setProjectDuration] = useState('');
  const [ProjectType, setProjectType] = useState('');
  const [Description, setDescription] = useState('');
  const [teamdata, setTeamdata] = useState([]);
  const [data, setData] = useState([]);
  const [teamMembers, setTeamMembers] = useState([]);
  const [teamMembersEmail, setTeamMembersEmail] = useState([1,2,3,4,5,6,]);

  const Firebase = UseFirebase();

  useEffect(() => {
    Firebase.listAllMembers().then((item) => {
      setData(item.docs);
    });
    Firebase.listAllMembers().then(item=>{
      setTeamMembers(item.docs);
    })
    // setTeamMembers([...teamMembers,teamMembersEmail])
  }, []);

  const handleSelection = (e) => {
    e.preventDefault();
    setTeamdata([...teamdata, team]);
    // console.log(teamMembersEmail );
    Firebase.PostProjectTeam(
      projectname,
      ProjectDuration,
      ProjectType,
      Description,
      teamdata,
      teamMembersEmail// Use the state directly here
    );
  
    setTeam('');
    setProjectname('');
    setProjectDuration('');
    setProjectType('');
    setDescription('');
    setTeamMembersEmail(''); // Clear the email array
  };
  

  const handleChange = (e, email) => {
    if(e.currentTarget.checked && !teamMembersEmail.includes(email)) {
        setTeamMembersEmail([...teamMembersEmail, email]);
        console.log(teamMembersEmail);
    }
    // console.log(teamMembersEmail);

    return;
  }
  

  return (
    <section className="flex">
      <DashboardSidebar />
      <div className="m-5 w-full">
        <form className="max-w-7xl bg-white shadow-lg my-20 mx-auto p-8 rounded-lg space-y-4">
          <h2 className="text-3xl font-semibold text-center my-4">New Project</h2>
          <div className="space-y-2">
            <label htmlFor="projectname" className="text-sm font-medium text-gray-600">
              Project Name
            </label>
            <input
              type="text"
              id="projectname"
              value={projectname}
              onChange={(e) => setProjectname(e.target.value)}
              placeholder="Enter project name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="ProjectDuration" className="text-sm font-medium text-gray-600">
              Project Duration
            </label>
            <input
              type="text"
              id="ProjectDuration"
              value={ProjectDuration}
              onChange={(e) => setProjectDuration(e.target.value)}
              placeholder="Enter project duration"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="ProjectType" className="text-sm font-medium text-gray-600">
              Project Type
            </label>
            <input
              type="text"
              id="ProjectType"
              value={ProjectType}
              onChange={(e) => setProjectType(e.target.value)}
              placeholder="Enter project type"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="Description" className="text-sm font-medium text-gray-600">
              Project Description
            </label>
            <textarea
              id="Description"
              value={Description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter project description"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              rows="4"
            />
          </div>
          <div className="space-y-2 h-48 overflow-auto">
            <label htmlFor="team" className="text-sm font-medium text-gray-600">
             Add Team
            </label>
           
              {
                teamMembers.map(item=>{
                  return (
                    <>
                    <div className='flex justify-between border-b p-2 '>
                    <h2 className=''>
                      {item.data().employemail}
                    </h2>
                    <input type="checkbox" value='1' onClick={(e)=>handleChange(e, item.data().employemail)} />
                    </div>
                    </>
                  )
                  
                })
              }
              
          </div>
         <div className='flex justify-center'>
         <button
            onClick={handleSelection}
            className=" bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            Create Project
          </button>
         </div>
        </form>
      </div>
      

    </section>
    
  );
}
