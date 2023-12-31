import { initializeApp } from "firebase/app";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import 'firebase/messaging';
import { messaging } from "firebase/messaging";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import jsPDF from "jspdf";
import React, { createContext, useContext, useEffect, useState } from "react";
// import UserID from 'UserID';

export const FirebaseContext = createContext(null);
export const UseFirebase = () => useContext(FirebaseContext);
// const firebaseConfig = {
//   apiKey: 'AIzaSyDHBgbXifApU9CnGbsuSAqU-Jqrq14eHDI',
//   authDomain: 'test-e8e47.firebaseapp.com',
//   projectId: 'test-e8e47',
//   storageBucket: 'test-e8e47.appspot.com',
//   messagingSenderId: '367649107386',
//   appId: '1:367649107386:web:53e40c4ab4af7437dc8183',
//   measurementId: 'G-0L44XDR2PS',
// };

const firebaseConfig = {
  apiKey: "AIzaSyBKRm9Z97Tl-rHncqlSKfvcxDy4eLsp5TU",
  authDomain: "suvastutech-1e3c4.firebaseapp.com",
  projectId: "suvastutech-1e3c4",
  storageBucket: "suvastutech-1e3c4.appspot.com",
  messagingSenderId: "720367525810",
  appId: "1:720367525810:web:55d34f5e2d9396360bceab",
  measurementId: "G-6L5LNQ79CS",
};
// let ID = new UserID().getID();
const firebaseapp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseapp);
const db = getFirestore(firebaseapp);
const FirebaseAuth = getAuth(firebaseapp);
const provider = new GoogleAuthProvider(); 
const messagingInstance = getMessaging(firebaseapp);
// const messagingInstance = firebaseMessaging(firebaseapp);
// const firestore = db;
export const FirebaseProvider = (props) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, (user) => {
      if (user) {
        setUser(user);
        // console.log(user.email)
      } else {
        setUser(null);
      }
    });
  }, []);
  const isLoggedIn = user ? true : false;

  const SignupUserWithEmailAndPassword = async (email, password) => {
    return createUserWithEmailAndPassword(FirebaseAuth, email, password)
      .then((value) => {
        alert("successfully Signup");
      })
      .catch((err) => {
        alert("failed");
      });
  };
  const SignInWithGoogle = () => {
    signInWithPopup(FirebaseAuth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  const SigninUserWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(FirebaseAuth, email, password)
      .then((value) => {
        alert("successfully Login");
      })
      .catch((err) => {
        alert("failed");
      });
  };
  const AddEmploy = async (employname, employemail, employrank, employimg) => {
    const imageRef = ref(storage, `${Date.now()}${employimg.name}`);
    const uploadResult = await uploadBytes(imageRef, employimg);
    const docRef = await addDoc(collection(db, "TeamMembers"), {
      employname,
      employemail,
      employrank,
      imageURL: uploadResult.ref.fullPath,
    });
    alert("success");
  };
  const uploadLogo = async (Logo) => {
    const docRef = await addDoc(collection(db, "Logo"), {
      Logo,
    });
  };
  const postjob = async (
    jobtitle,
    jobDescription,
    skills,
    location,
    salleryfrom,
    salleryto,
    jobshift,
    gender,
    country
  ) => {
    const docRef = await addDoc(collection(db, "PostJobs"), {
      jobtitle,
      jobDescription,
      skills,
      location,
      salleryfrom,
      salleryto,
      jobshift,
      gender,
      country,
    });
    alert("success");
  };
  const PostApplicent = async (
    name,
    fname,
    location,
    skills,
    experience,
    education,
    CNIC,
    phone,
    email,
    ApplyFor
  ) => {
    const docRef = await addDoc(collection(db, "CV"), {
      name,
      fname,
      location,
      skills,
      experience,
      education,
      CNIC,
      phone,
      email,
      ApplyFor,
    });
    alert("success");
  };
  // const PostProjectTeam = async (
  //   projectname,
  //   ProjectDuration,
  //   ProjectType,
  //   Description,
  //   teamMembersEmail
  // ) => {
  //   console.log(teamMembersEmail)
  //   const docRef = await addDoc(collection(db, "Board"), {
  //     projectname,
  //     ProjectDuration,
  //     ProjectType,
  //     Description,
  //   });
  //   // console.log(teamMembersEmail)
  //   const documentId = docRef.id;

  //   // console.log('Document ID:', documentId)

  //   alert("success");
  //   await setDoc(doc(db, "Board", documentId), {
  //     documentId,
  //     projectname,
  //     ProjectDuration,
  //     ProjectType,
  //     Description,
  //     teamMembersEmail
  //   });
  //   console.log(teamMembersEmail)
  // };
  const PostProjectTeam = async (
    projectname,
    ProjectDuration,
    ProjectType,
    Description,
    teamMembersEmail
  ) => {
    // console.log("teamMembersEmail before posting:", teamMembersEmail);
    // console.log(teamMembersEmail);

    const docRef = await addDoc(collection(db, "Board"), {
      projectname,
      ProjectDuration,
      ProjectType,
      Description,
      teamMembersEmail, // Include teamMembersEmail in the Firestore document
    });

    const documentId = docRef.id;

    alert("Success");

    await setDoc(doc(db, "Board", documentId), {
      documentId,
      projectname,
      ProjectDuration,
      ProjectType,
      Description,
      teamMembersEmail,
    });

    // console.log(teamMembersEmail);
  };

  // sublevel collection

  const posttask = async (
    modelFormId,
    documentId,
    task,
    assignTo,
    description,
    startingDate,
    dueDate
  ) => {
    const newData = {
      task,
      assignTo,
      description,
      startingDate,
      dueDate,
    };
    try {
      const BoardRef = doc(db, "Board", modelFormId, "section", documentId);
      const Boardsnapshot = await getDoc(BoardRef);
      const existingtask = Boardsnapshot.data().tasks || [];
      existingtask.push(newData);
      await updateDoc(BoardRef, {
        tasks: existingtask,
      });
      toast.success("successfully move");
    } catch (error) {
      console.error("Error adding a like:", error);
      // Handle the error as needed
    }
    setLoopControll(LoopControll + 1);
  };

  const listtasks = async (documentId, id) => {
    getDocs(collection(db, `Board/${documentId}/section/${id}/task`));
  };

  // post achivement
  const postAchivement = async (img, link, description) => {
    const imageRef = ref(storage, `${Date.now()}${img.name}`);
    const uploadResult = await uploadBytes(imageRef, img);
    await addDoc(collection(db, "Achivement"), {
      link,
      description,
      img: uploadResult.ref.fullPath,
    });
    alert("success");
  };
  const [LoopControll, setLoopControll] = useState([0]);
  const moveTask = async (documentId, item, taskItem, index, itemid) => {
    const docRef = doc(db, `Board/${taskItem}/section/${item}`);
    const collectionRef = await getDoc(docRef);
    const existingTask = collectionRef.data().tasks || [];
    existingTask.push(documentId);
    await updateDoc(docRef, {
      tasks: existingTask,
    });
    const taskref = doc(db, `Board/${taskItem}/section/${itemid}`);
    const taskSnapshot = await getDoc(taskref);
    const existingTasksData = taskSnapshot.data().tasks || [];
    existingTasksData.splice(index, 1);
    await updateDoc(taskref, {
      tasks: existingTasksData,
    });
    setLoopControll(LoopControll + 1);
    // window.location.reload()
  };
  const dragmove = async (documentId, oneitemid, task, id, index) => {
    // console.log(documentId, oneitemid, task, id);
    const docRef = doc(db, `Board/${documentId}/section/${id}`);
    const collectionRef = await getDoc(docRef);
    const existingTask = collectionRef.data().tasks || [];
    await existingTask.push(task);
    await updateDoc(docRef, {
      tasks: existingTask,
    });
    const taskref = doc(db, `Board/${documentId}/section/${oneitemid}`);
    const taskSnapshot = await getDoc(taskref);
    const existingTasksData = taskSnapshot.data().tasks || [];
    await existingTasksData.splice(index, 1);
    await updateDoc(taskref, {
      tasks: existingTasksData,
    });

    toast.success("successfully move");
    setLoopControll(LoopControll + 1);
    //  window.location.reload()
  };

  // Perform tasklist update on task progress page

  // post Likes
  const [likes, setlike] = useState([0]);
  const postlikes = async (id) => {
    const newData = {
      user: user.email,
      datetime: Date.now(),
    };
    try {
      // Get the reference to the Achievement document
      const achievementRef = doc(db, "Achivement", id);

      // Fetch the current data first to avoid overwriting existing likes
      const achievementSnapshot = await getDoc(achievementRef);
      const existingLikes = achievementSnapshot.data().likes || [];
      // (existingLikes.map(item=>item).map(item=>{
      //   if(item.user!==newData.user){
      //     console.log('includes')
      //   }
      // }))
      // Add the new data to the existing likes array
      existingLikes.push(newData);

      // Update the Achievement document with the updated likes array
      await updateDoc(achievementRef, {
        likes: existingLikes,
      });
    } catch (error) {
      console.error("Error adding a like:", error);
      // Handle the error as needed
    }
  };

  const getlikes = async () => {
    const data = getDocs(collection(db, "Achivement"));
    // console.log(data.docs[0]);
  };

  const postComment = async (id, comment) => {
    const newData = {
      user: user.email,
      datetime: Date.now(),
      comment: comment,
    };
    try {
      // Get the reference to the Achievement document
      const achievementRef = doc(db, "Achivement", id);

      // Fetch the current data first to avoid overwriting existing likes
      const achievementSnapshot = await getDoc(achievementRef);
      const existingComments = achievementSnapshot.data().comments || [];

      // Add the new data to the existing likes array
      existingComments.push(newData);

      // Update the Achievement document with the updated likes array
      await updateDoc(achievementRef, {
        comments: existingComments,
      });
    } catch (error) {
      console.error("Error adding a like:", error);
      // Handle the error as needed
    }
  };

  const deletecomment = async (id, i) => {
    // console.log(id, i);
    try {
      // Get the reference to the Achievement document
      const achievementRef = doc(db, "Achivement", id);

      // Fetch the current data first to avoid overwriting existing likes
      const achievementSnapshot = await getDoc(achievementRef);
      const existingComments = achievementSnapshot.data().comments || [];

      // Add the new data to the existing likes array
      existingComments.splice(i, 1);

      // Update the Achievement document with the updated likes array
      await updateDoc(achievementRef, {
        comments: existingComments,
      });
    } catch (error) {
      console.error("Error adding a like:", error);
      // Handle the error as needed
    }
  };

  const getComment = async () => {
    return getDocs(db, "Achivement");
  };

  const deleteSingleTask = async (projectID, sectionID, index) => {
    // console.log(index)
    // console.log(projectID,sectionID,index)
    const TaskRef = doc(db, "Board", projectID, "section", sectionID);
    const TaskSnapshot = await getDoc(TaskRef);
    const existingTask = TaskSnapshot.data().tasks || [];
    // console.log(existingTask);
    existingTask.splice(index, 1);
    await updateDoc(TaskRef, {
      tasks: existingTask,
    });
    setLoopControll(LoopControll + 1);
    toast.info("Deleted");
  };

  const getAChivement = async () => {
    return getDocs(collection(db, "Achivement"));
  };

  const listAllCV = () => {
    return getDocs(collection(db, "CV"));
  };
  const listAllJobs = () => {
    return getDocs(collection(db, "PostJobs"));
  };
  const listAllMembers = () => {
    return getDocs(collection(db, "TeamMembers"));
  };
  const listProject = () => {
    return getDocs(collection(db, "Board"));
  };
  const deleteCV = async (path) => {
    await deleteDoc(doc(db, "CV", path));
  };
  const deleteAchivement = async (path) => {
    // console.log(path);
    await deleteDoc(doc(db, "Achivement", path));
  };
  const updateAchivement = async (path) => {
    updateDoc(doc(db, `Achivement/${path}`), {
      description: "description",
    });
  };
  const generatePDF = (props) => {
    var doc = new jsPDF("p", "pt");

    doc.text(20, 20, props.data().name);
    doc.addFont(props.data().fname);
    doc.text(20, 60, props.data().email);
    doc.text(20, 100, props.data().location);
    doc.text(20, 140, props.data().CNIC);
    doc.text(20, 180, props.data().education);
    doc.text(20, 220, props.data().skills);
    doc.text(20, 260, props.data().experience);
    doc.text(20, 300, props.data().phone);

    doc.save("demo.pdf");
  };
  const [CVdata, setCVData] = useState([]);
  const getsingleCV = (cv) => {
    setCVData(cv);
  };
  const [team, setTeam] = useState([]);
  const putteam = (data) => {
    setTeam(...team, data);
  };
  const [singleproject, setSingleproject] = useState([]);
  const handlesingleproject = (prop) => {
    setSingleproject(props);
    // console.log(singleproject)
  };
  const deleteEmploy = async (path) => {
    await deleteDoc(doc(db, "TeamMembers", path));
  };

  const createsection = async (id, name) => {
    addDoc(collection(db, "Board", id, "section"), {
      SectionName: name,
    });
    setLoopControll(LoopControll + 1);
  };

  const listSection = async (documentId) => {
    const documentref = doc(db, "Board", documentId);
    const collectionref = collection(documentref, "section");
    const snapshot = await getDocs(collectionref);
    return snapshot;
  };

  const [project, setProjectData] = useState(null);

  const boardData = (docId) => {
    const documentRef = doc(db, "Board", docId); // 'Board' is the collection name

    getDoc(documentRef)
      .then((docSnapshot) => {
        if (docSnapshot.exists()) {
          // Document exists, access its data
          setProjectData(docSnapshot.data());
        } else {
          // console.log('Document does not exist')
        }
      })
      .catch((error) => {
        console.error("Error getting document:", error);
      });
  };

  // state for model
  const [showModal, setShowModal] = useState(false);
  const [projectID,setProjectId]=useState();
  const [sectionID,setSectionId] = useState();
  const [TaskIndex,setTaskIndex] = useState();
  

  const updateTask = async(data) => {
    const TaskRef = doc(db, "Board", projectID, "section", sectionID);
    const TaskSnapshot = await getDoc(TaskRef);
    const existingTask = TaskSnapshot.data().tasks || [];
    existingTask.push(data);
    existingTask.splice(TaskIndex,1)
    // console.log(existingTask.length)
    await updateDoc(TaskRef, {
      tasks: existingTask,
    });
    setLoopControll(LoopControll + 1);
    toast.info("updated");

    // console.log(`testest`, data , projectID,sectionID,TaskIndex)

  };

  // useEffect(()=>{
  //   const key=getToken(messagingInstance, {vapidKey: "BN8qO0QHcZFy_q8_Vs6MnyLIAtvSmnlWJh-Mn7IBGv1LBSoaDkASCIdtt5_wmwte7sjmwh2Xvy9JZg2oOStrnoM"});
  //   console.log(`testkey`, key)
  // },[])



 

  return (
    <FirebaseContext.Provider
      value={{
        SignupUserWithEmailAndPassword,
        SignInWithGoogle,
        SigninUserWithEmailAndPassword,
        isLoggedIn,
        uploadLogo,
        AddEmploy,
        db,
        messagingInstance,
        project,
        listAllMembers,
        postjob,
        listAllJobs,
        PostApplicent,
        listAllCV,
        deleteCV,
        generatePDF,
        getsingleCV,
        CVdata,
        PostProjectTeam,
        singleproject,
        putteam,
        listProject,
        singleproject,
        setSingleproject,
        boardData,
        posttask,
        deleteEmploy,
        postAchivement,
        getAChivement,
        deleteAchivement,
        updateAchivement,
        likes,
        postlikes,
        getlikes,
        postComment,
        getComment,
        deletecomment,
        createsection,
        listSection,
        listtasks,
        moveTask,
        dragmove,
        LoopControll,
        showModal,
        setShowModal,
        updateTask,
        deleteSingleTask,
        setProjectId,
        setSectionId,
        setTaskIndex,
        projectID,
        sectionID,
        TaskIndex,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
