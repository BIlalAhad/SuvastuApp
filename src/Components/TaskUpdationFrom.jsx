import React, { useEffect, useState } from "react";
import { UseFirebase } from "../Context/Firebase";

export default function TaskUpdationFrom(props) {
  const [data,setData]=useState({
    task: '',
    description: '',
    dueDate : '',
    startingDate: '',
    assignTo: '',
    email:'',
  })
    // const [task, setTask] = useState("");
    // const [description, setDescription] = useState("");
    // const [startingDate, setStartingDate] = useState("");
    // const [dueDate, setDueDate] = useState("");
    // const [assignTo, setAssignTo] = useState("");
    const [email, setEmail] = useState([]);

    
    const Firebase=UseFirebase();
    const inputEvent=(e)=>{
      const {name,value } = e.target;
      setData({
        ...data,
        [name]: value
      })
      
    }
    
    // console.log(data)
    
    const HandleForm = (e) => {
      e.preventDefault()
      Firebase.updateTask(data)
    //  setAssignTo(email);
   };
    // console.log(props.index,props.documentId,props.sectionId);   
    useEffect(()=>{
    Firebase.listAllMembers().then((item) => {
        setEmail(item.docs);
      });
   },[])



  return (
    <div>
       
        {/* model */}
        {Firebase.showModal ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-25">
          <div className="relative w-1/2 bg-white rounded-lg">
            {/* Header */}
            <div className="flex justify-between p-4 border-b bg-gray-400">
              <h3 className="text-2xl font-semibold">Add Task</h3>
              <button
                onClick={() => Firebase.setShowModal(false)}
                className="text-2xl text-black opacity-50 hover:opacity-100 cursor-pointer"
              >
                ×
              </button>
            </div>
            {/* Body */}
            <div className="p-6">
              <form onSubmit={HandleForm}>
                <div className="mb-4">
                  <label className="block font-bold">Add Task:</label>
                  <input
                    type="text"
                    className="w-full border-b p-1 text-sm"
                    value={data.task}
                     name="task"  onChange={(e)=>inputEvent(e)}
                    placeholder="Add task"
                  />
                </div>
                <div className="mb-4">
                  <label className="block font-bold">Description:</label>
                  <input
                    type="text"
                    className="w-full border-b p-1 text-sm"
                    value={data.description}
                     name="description"  onChange={(e)=>inputEvent(e)}
                    placeholder="Add task"
                  />
                </div>
                <div className="flex justify-between mb-4">
                  <div className="w-1/2">
                    <label className="block font-bold">Starting Date:</label>
                    <input
                      type="date"
                      className="w-full border-b p-1 text-sm"
                      value={data.startingDate}
                       name="startingDate"  onChange={(e)=>inputEvent(e)}
                    />
                  </div>
                  <div className="w-1/2">
                    <label className="block font-bold">Due Date:</label>
                    <input
                      type="date"
                      className="w-full border-b p-1 text-sm"
                      value={data.dueDate}
                       name="dueDate"  onChange={(e)=>inputEvent(e)}
                    />
                  </div>
                  <div className="">
                    <ul></ul>
                  </div>
                </div>
                <div className="my-12 h-48 overflow-auto">
                  <input
                    type="search"
                    className="w-1/2 mb-4 flex items-center  mx-auto border p-2 text-sm text-center"
                    value={data.assignTo}
                     name="assigTo"  onChange={(e)=>inputEvent(e)}
                    placeholder="Add task"
                  />
                 {
                    email
                      .filter((item) =>
                        item.data().employemail.includes(data.assignTo)
                      )
                      .map((item) => {
                        return (
                          <>
                            <div className="flex justify-between border-b p-2  ">
                              <h2
                                className=""
                                onClick={(e) =>
                                  setData((prevData) => ({
                                    ...prevData,
                                    assignTo: item.data().employemail,
                                  }))
                                }
                              >
                                {item.data().employemail}
                              </h2>
                            </div>
                          </>
                        );
                      })
                   
                  }
                </div>
                <button
                  type="submit"
                  className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}
