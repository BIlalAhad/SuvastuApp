import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { AiFillPlusSquare } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { BsClockHistory } from "react-icons/bs";
import DashboardSidebar from "../Components/DashboardSidebar";
import { UseFirebase } from "../Context/Firebase";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";

export default function TaskProgress() {
  const [data, setData] = useState([]);
  const [project, setProject] = useState([]);
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [startingDate, setStartingDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [specificData, setSpecificData] = useState(null);
  const [doingData, setDoingData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [todoData, setTodoData] = useState([]);
  const [done, setDone] = useState([]);
  const Firebase = UseFirebase();
  const url = window.location.href.split("/");
  const documentId = url.pop();
  const [movedData, setMoveData] = useState(null);
  const [email, setEmail] = useState([]);
  const [name, setName] = useState([]);
  const [section, setsection] = useState([]);
  const [tableId,setTableId]=useState();

  useEffect(() => {
    Firebase.getTodos(documentId).then((item) => {
      setTodoData(item.docs);
    });

    Firebase.listSection(documentId).then((item) => {
      setsection(item.docs);
    });

    // Firebase.listSection(documentId).then((item) => console.log(item.docs));

    Firebase.getDoing(documentId).then((item) => {
      setDoingData(item.docs);
    });
    Firebase.DoneData(documentId).then((item) => {
      setDone(item.docs);
    });
    Firebase.listAllMembers().then((item) => {
      setEmail(item.docs);
    });
    // console.log(todoData, doingData, done);
  }, []);

  const documentRef = doc(Firebase.db, "Board", documentId);

  getDoc(documentRef)
    .then((docSnapshot) => {
      if (docSnapshot.exists()) {
        setSpecificData(docSnapshot.data());
      } else {
        console.log("Document does not exist");
      }
    })
    .catch((error) => {
      console.error("Error getting document:", error);
    });

  const handleForm = (e, id) => {
    e.preventDefault();
    Firebase.posttask(
      documentId,
      id,
      task,
      assignTo,
      description,
      startingDate,
      dueDate
    );
    setAssignTo("");
    setTask("");
    setDescription("");
    setStartingDate("");
    setDueDate("");
  };

  const move = (documentId) => {
    console.log("moving");
    Firebase.clearTodos(documentId, movedData);
  };

  function handleDragEnter(event) {
    event.preventDefault();
    console.log("enter");
  }

  function handleDragOver(event) {
    event.preventDefault();
  }

  function handleDrop(event) {
    event.preventDefault();
    Firebase.clearTodos(documentId, movedData);
    console.log("drop");
  }

  function handleDrop2(event) {
    event.preventDefault();
    Firebase.movetoDone(documentId, movedData);
    console.log("drop");
  }
  const toggle = () => {
    const toggle = document.getElementById("progress");
    const list = document.getElementById("list");
    toggle.classList.toggle("hidden");
    list.classList.toggle("hidden");
    // console.log("toggle");
  };
  const handleChange = (e, email) => {
    // if(e.currentTarget.checked && !teamMembersEmail.includes(email)) {
    // const greenbg=document.getElementById('green')
    // email.classList.toggle('bg-green')
    setAssignTo(email);
    // console.log(assignTo);
  };
  console.log(tableId);

  return (
    <>
      <section className="flex  backgroungimg">
        <DashboardSidebar />
        <div className="w-full my-20 ">
          {specificData ? (
            <div>
              <div className="flex items-center gap-10 text-gray-200">
                <div className="px-8 py-4">
                  <h2 className="text-2xl font-semibold">
                    Project Name: {specificData.projectname}
                  </h2>
                  <p className="font-semibold">
                    Project Duration: {specificData.ProjectDuration}
                  </p>
                  <p className="font-semibold">
                    Project Type: {specificData.ProjectType}
                  </p>
                </div>
                <label
                  class="relative inline-flex items-center cursor-pointer"
                  onChange={toggle}
                >
                  <input type="checkbox" value="" class="sr-only peer" />
                  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300 text-white">
                    list view
                  </span>
                </label>
                <div>
                  <span
                    className="text-2xl font-bold"
                    onClick={() => Firebase.createsection(documentId, name)}
                  >
                    <AiOutlinePlus />
                  </span>
                  <input
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
             
              {/* new progress section */}
              <div className=" max-w-5xl mx-auto mt-5 flex  gap-7 overflow-y-auto">
                {section.map((item) => {
                  return (
                    <>
                    
                      <div className="  p-2 bg-white w-[400px]">
                        {
                          <>
                            <div className="relative w-full">
                              <h2 className="text-white bg-gray-800 p-4">
                                {item.data().SectionName}
                                
                              </h2>
                              <span
                                className="absolute top-2 right-2 text-white"
                                onClick={() => setShowModal(true)}
                              >
                                <AiOutlinePlus />
                              </span>
                              <div>
                               <form
                                  action=""
                                  className="text-sm p-2 "
                                  onSubmit={(e) => handleForm(e, item.id)}
                                >
                                  <label htmlFor="" className="text-sm">
                                    task
                                  </label>
                                  <input
                                    type="text"
                                    className="border w-full"
                                    onChange={(e) => setTask(e.target.value)}
                                  />
                                  <label htmlFor="">description</label>
                                  <input
                                    type="text"
                                    className="border w-full"
                                    onChange={(e) =>
                                      setDescription(e.target.value)
                                    }
                                  />
                                  <label htmlFor="">starting Date</label>
                                  <input
                                    type="text"
                                    className="border w-full"
                                    onChange={(e) =>
                                      setStartingDate(e.target.value)
                                    }
                                  />
                                  <label htmlFor="">Due Date</label>
                                  <input
                                    type="text"
                                    className="border w-full"
                                    onChange={(e) => setDueDate(e.target.value)}
                                  />
                                  <div className="mt-3 h-24 overflow-auto">
                                    <input
                                      type="search"
                                      className="w-1/2 mb-4 flex items-center  mx-auto border p-2 text-sm text-center"
                                      value={assignTo}
                                      onChange={(e) =>
                                        setAssignTo(e.target.value)
                                      }
                                      placeholder="Add task"
                                    />
                                     {
  email && email.length > 0 ? (
    email
      .filter((item) =>
        item.data().employemail.includes(assignTo)
      )
      .map((item) => {
        return (
          <>
            <div className="flex justify-between border-b p-2  ">
              <h2
                className=""
                onClick={(e) =>
                  handleChange(e, item.data().employemail)
                }
              >
                {item.data().employemail}
              </h2>
            </div>
          </>
        );
      })
  ) : null
}
                                   </div>
                                  <button
                                    className="bg-gray-800 p-1 rounded text-white"
                                    type="submit"
                                  >
                                    submit
                                  </button>
                                </form> 
                              

                               
   
   {
                                  item.data()&&item.data().tasks&&item.data().tasks.map(item=>{
                                    return(
                                      <>
                                          <div className=" shadow border border-gray-300 p-2 text-sm  space-y-2 mt-3">
                                  <h2 className="text-center p-2 text-white bg-gray-700 rounded-t-md">{item.task}</h2>
                                  <p className="flex justify-between"><span className="font-semibold"> assign to:</span> <span>{item.assignTo}</span> </p>
                                  <div className="flex justify-between items-center">
                                    <span>
                                      {item.startingDate}
                                    </span>
                                    <span className="">
                                          <BsClockHistory/>
                                    </span>
                                    <span className="text-red-500">
                                      {item.dueDate}
                                    </span>
                                  </div>

                                  {
                                    <div className="flex justify-between items-center gap-2">
                                  <select className="w-full border p-1" name="" id="">
                                  {section.map(item=>{
                                    return <>
                                      {/* <option value={123} onSelect={()=>setTableId(item.id)}>{item.data().SectionName}</option> */}
                                    </>
                                  })}
                                  </select>
                                  <button className="bg-gray-600 p-1 text-white" >move</button>
                                  </div>
                                  }
                                          </div>
                                      </>
                                    )
                                  })
                                }
                              </div>
                            </div>
                          </>
                        }
                      </div>
                    </>
                  );
                })}
              </div>
              {/* new progress section */}
            </div>
          ) : (
            <div>Loading ...</div>
          )}
        </div>
      </section>

      {/* model */}
      {showModal ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-25">
          <div className="relative w-1/2 bg-white rounded-lg">
            {/* Header */}
            <div className="flex justify-between p-4 border-b bg-gray-400">
              <h3 className="text-2xl font-semibold">Add Task</h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-2xl text-black opacity-50 hover:opacity-100 cursor-pointer"
              >
                ×
              </button>
            </div>
            {/* Body */}
            <div className="p-6">
              <form onSubmit={handleForm}>
                <div className="mb-4">
                  <label className="block font-bold">Add Task:</label>
                  <input
                    type="text"
                    className="w-full border-b p-1 text-sm"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Add task"
                  />
                </div>
                <div className="mb-4">
                  <label className="block font-bold">Description:</label>
                  <input
                    type="text"
                    className="w-full border-b p-1 text-sm"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Add task"
                  />
                </div>
                <div className="flex justify-between mb-4">
                  <div className="w-1/2">
                    <label className="block font-bold">Starting Date:</label>
                    <input
                      type="date"
                      className="w-full border-b p-1 text-sm"
                      value={startingDate}
                      onChange={(e) => setStartingDate(e.target.value)}
                    />
                  </div>
                  <div className="w-1/2">
                    <label className="block font-bold">Due Date:</label>
                    <input
                      type="date"
                      className="w-full border-b p-1 text-sm"
                      value={dueDate}
                      onChange={(e) => setDueDate(e.target.value)}
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
                    value={assignTo}
                    onChange={(e) => setAssignTo(e.target.value)}
                    placeholder="Add task"
                  />
                  {
                    email
                      .filter((item) =>
                        item.data().employemail.includes(assignTo)
                      )
                      .map((item) => {
                        return (
                          <>
                            <div className="flex justify-between border-b p-2  ">
                              <h2
                                className=""
                                onClick={(e) =>
                                  handleChange(e, item.data().employemail)
                                }
                              >
                                {item.data().employemail}
                              </h2>
                            </div>
                          </>
                        );
                      })
                    // email.map(item=>{
                    //   item.filter(item.data().employemail.includes('e').map(em=>{
                    //     return <li> {em.data().employemail}</li>
                    //   }))
                    // return <li>{item.employemail}</li>
                    // })
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
    </>
  );
}
