import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { AiFillPlusSquare } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import { BsClockHistory } from "react-icons/bs";
import DashboardSidebar from "../Components/DashboardSidebar";
import { UseFirebase } from "../Context/Firebase";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import TaskListView from "../Components/TaskListView";
import TaskUpdationFrom from "../Components/TaskUpdationFrom";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
// import { messagingInstance} from "firebase";
// import { getMessaging, getToken } from "firebase/messaging";

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
  const [singleSectionId, setSingleSectionId] = useState([]);
  const Firebase = UseFirebase();
  const url = window.location.href.split("/");
  const documentId = url.pop();
  const [movedData, setMoveData] = useState(null);
  const [email, setEmail] = useState([]);
  const [name, setName] = useState([]);
  const [projectData, setProjectData] = useState([]);
  const [taskItem, setTaskItem] = useState();
  const [sectionId, setSectionId] = useState([]);
  const [taskCard, setTaskCard] = useState([]);
  const [id, setid] = useState([]);
  const [oneitemid, setoneitemid] = useState([]);
  const [item, setitem] = useState([]);
  const [index, setindex] = useState([]);
  const [controlLoop, setcontrolloop] = useState([]);
  const [projectCard, setProjectCard] = useState([]);
  const [dragging, setDragging] = useState(false);
  const[sectionID, setSectionID] = useState([]);
  

  const dragmove = (documentId, item, task) => {
    console.log(documentId, item, task);
  };

  useEffect(() => {
    var data = [];
    Firebase.listSection(documentId).then((item) => {
      // setProject(item.docs);

      item.docs.map((card) => {
        data.push({
          sectionId: card.id,
          sectionName: card.data().SectionName,
          tasks: card.data().tasks,
        });
      });

      setProjectData(data);
      // setProjectCard()
    });

    Firebase.listAllMembers().then((item) => {
      setEmail(item.docs);
    });
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
  }, [Firebase.LoopControll]);
  // useEffect(()=>{
  //   setcontrolloop(Firebase.LoopControll)
  //   console.log(controlLoop)
  // },[controlLoop])

  // console.log( section, email);

  const handleForm = (e) => {
    e.preventDefault();
    Firebase.posttask(
      documentId,
      singleSectionId,
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

  // function handleDrop(event) {
  //   event.preventDefault();
  //   Firebase.clearTodos(documentId, movedData);
  //   console.log("drop");
  // }

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
    setAssignTo(email);
  };
  const drop = (id) => {
    setProjectCard(
      projectData.map((section) => {
        if (section.sectionId === oneitemid) {
          // Ensure section.tasks is an array before using push
          section.tasks = section.tasks || [];
          section.tasks.splice(index, 1);
        }
        if (section.sectionId === id) {
          // Ensure section.tasks is an array before using push
          section.tasks = section.tasks || [];
          section.tasks.push(task);
        }
        console.log(section.tasks);
      })
    );
    Firebase.dragmove(documentId, oneitemid, task, id, index);
  };

  const over = (e) => {
    e.preventDefault();
    // console.log("over");
  };

  const listView = () => {
    console.log("cardview");
    const card_view = document.getElementById("cardView");
    const Tasklist_view = document.getElementById("Tasklist");
    card_view.classList.toggle("hidden");
    Tasklist_view.classList.toggle("hidden");
  };

  const TaskEditingForm = (index,documentId,sectionId) => {   
   
   
    console.log(index, documentId, sectionId)
  };

  // request user for notification permission

 
  // const messaging = getMessaging();
  // useEffect(() => {
  //   const requestNotificationPermission = async () => {
  //     try {
  //       const permission = await Notification.requestPermission();
  //       if (permission === 'granted') {
  //         const deviceToken = getToken(messaging);
  //         console.log(deviceToken);
  //       } else {
  //         console.log('Notification permission denied');
  //       }
  //     } catch (error) {
  //       console.error('Error requesting notification permission:', error);
  //     }
  //   };
  
  //   requestNotificationPermission();
  // }, []);

  return (
    <>
      <section className="flex  backgroungimg">
        <DashboardSidebar />
        <div className="w-full my-20 ">
          {specificData ? (
            <div>
              <div className="flex items-center gap-10 text-gray-800">
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
                <label class="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    value=""
                    class="sr-only peer"
                    onClick={() => listView()}
                  />
                  <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                    ListView
                  </span>
                </label>
                <div className="flex gap-2">
                  <input
                    className="text-blue-800 px-2 shadow border"
                    type="text"
                    placeholder="add section"
                    onChange={(e) => setName(e.target.value)}
                  />
                  <span
                    className="text-2xl font-bold"
                    onClick={() => Firebase.createsection(documentId, name)}
                  >
                    <AiOutlinePlus />
                  </span>
                </div>
              </div>

              {/* new progress section */}
              <div
                className=" max-w-7xl mx-auto mt-5 flex  gap-7 overflow-y-auto"
                id="cardView"
              >
                {projectData.map((item) => {
                  return (
                    <>
                      <div className="  p-2 bg-white w-[400px] ">
                        {
                          <>
                            <div
                              className="relative w-full "
                              id="hold"
                              onDragEnter={() => console.log("entered")}
                              onDragOver={(e) => over(e)}
                              onDrop={(e) => {
                                // console.log(`itemid ${item.sectionId}`)
                                // const hold=document.getElementById('hold')
                                // const card=document.getElementById('card')
                                // e.target.append(card)

                                // e.preventDefault();
                                drop(item.sectionId);
                              }}
                            >
                              <h2 className="text-white bg-gray-800 p-4 w-[380px]">
                                {item.sectionName}
                              </h2>
                              <span
                                className="absolute top-2 right-2 text-white"
                                onClick={() => {
                                  setSingleSectionId(item.sectionId);
                                  setShowModal(true);
                                }}
                              >
                                <AiOutlinePlus />
                              </span>
                              <div>
                                {item.tasks &&
                                  item.tasks.map((task, index) => {
                                    return (
                                      <>
                                        <div
                                          id="card"
                                          className={`shadow border border-gray-300 p-2 text-sm space-y-4 mt-3 ${
                                            dragging ? "dragging" : ""
                                          }`}
                                          draggable={true}
                                          onDragStart={(e) => {
                                            dragmove(
                                              setindex(index),
                                              setoneitemid(item.sectionId),
                                              setTask(task)
                                            );
                                            //  e.currentTarget.style.visibility = 'hidden';
                                            console.log(
                                              documentId,
                                              oneitemid,
                                              task,
                                              index
                                            );
                                          }}
                                          onDragEnd={() => console.log("end")}
                                        >
                                          <h2 className="text-center p-2 text-white bg-gray-700 rounded-t-md flex items-center justify-between">
                                            <span>{task.task}</span>
                                            <div className="flex gap-3 items-center ">
                                            <span className="text-lg text-red-500"
                                              onClick={() => {Firebase.deleteSingleTask(documentId,item.sectionId,index)}}
                                            >
                                              <RiDeleteBin5Fill />
                                            </span>
                                            <span classtext-lg
                                              onClick={() => {
                                                Firebase.setProjectId(documentId);
                                                Firebase.setSectionId(item.sectionId);
                                                Firebase.setTaskIndex(index);
                                                Firebase.setShowModal(true);
                                               
                                              }}
                                            >
                                              <FaEdit />
                                            </span>
                                            </div>
                                          </h2>
                                          <p className="flex justify-between">
                                            <span className="font-semibold">
                                              {" "}
                                              assign to:
                                            </span>{" "}
                                            <span>{task.assignTo}</span>{" "}
                                          </p>
                                          <div className="flex justify-between items-center">
                                            <span>{task.startingDate}</span>
                                            <span className="">
                                              <BsClockHistory />
                                            </span>
                                            <span className="text-red-500">
                                              {task.dueDate}
                                            </span>
                                          </div>

                                          {
                                            // <div className="flex justify-between items-center gap-2">
                                            //   <select
                                            //     className="w-full border p-1"
                                            //     name=""
                                            //     id=""
                                            //     value={"test"}
                                            //     onChange={(e) =>
                                            //       setTaskItem(e.target.value)
                                            //     }
                                            //   >
                                            //     {projectData.map((section) => {
                                            //       return (
                                            //         <>
                                            //           <option value={section.sectionId}>
                                            //             {
                                            //               section.sectionName
                                            //             }
                                            //           </option>
                                            //         </>
                                            //       );
                                            //     })}
                                            //   </select>
                                            //   <button
                                            //     onClick={() =>
                                            //       Firebase.moveTask(
                                            //         task,
                                            //         taskItem,
                                            //         documentId,
                                            //         index,
                                            //         item.id
                                            //       )
                                            //     }
                                            //     className="bg-gray-600 p-1 text-white"
                                            //   >
                                            //     move
                                            //   </button>
                                            // </div>
                                          }
                                        </div>
                                      </>
                                    );
                                  })}
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
              {/* list view */}
              <div className=" max-w-7xl mx-auto mt-5 hidden " id="Tasklist">
                <TaskListView documentId={documentId} />
              </div>
              {/* list view */}
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
      <TaskUpdationFrom index={index} sectionID={singleSectionId} documentId={documentId} />
    </>
  );
}
