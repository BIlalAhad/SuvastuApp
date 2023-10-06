import './App.css';
import Index from './Containers/Index';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Signup from './Containers/Signup';
import Signin from './Containers/Signin';
import Team from './Containers/Team';
import Footer from './Components/Footer';
import Dashboardheader from './Components/Dashboardheader';
import Dashboard from './Containers/Dashboard';
import AddTeamMembers from './Containers/AddTeamMembers';
import Jobs from './Containers/Jobs';
import PostJobs from './Containers/PostJobs';
import CV from './Containers/CV';
import ReactCV from './Containers/ReactCV';
import LaravelCV from './Containers/LaravelCV';
import PythonCV from './Containers/PythonCV';
import NodeCV from './Containers/NodeCV';
import WordpressCV from './Containers/WordpressCV';
import ManagerCV from './Containers/ManagerCV';
import HrCV from './Containers/HrCV';
import Networking from './Containers/Networking';
import SEOCV from './Containers/SEOCV';
import ContentCV from './Containers/ContentCV';
import DataScientestCV from './Containers/DataScientestCV';
import AppdeveloperCV from './Containers/AppdeveloperCV';
import UXCV from './Containers/UXCV';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import "primereact/resources/themes/lara-light-indigo/theme.css"; 
import "primereact/resources/primereact.min.css"; 
import SingleCV from './Containers/SingleCV';
import CreateProject from './Containers/CreateProject';
import Projects from './Containers/Projects';
import TaskProgress from './Containers/TaskProgress';
import Logo from './Containers/Logo';

function App() {
  return (
    <>
    <BrowserRouter>
    <PrimeReactProvider>
    <Dashboardheader/>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="Signup" element={<Signup/>}/>
        <Route path="Signin" element={<Signin/>}/>
        <Route path="team" element={<Team/>}/>
        <Route path="jobs" element={<Jobs/>}/>
        <Route path="postjobs" element={<PostJobs/>}/>
        <Route path="teammembers" element={<AddTeamMembers/>}/>
        <Route path="Dashboard" element={<Dashboard/>}/>
        <Route path="cv" element={<CV/>}/>
        <Route path="nodejscv" element={<NodeCV/>}/>
        <Route path="worldpress" element={<WordpressCV/>}/>
        <Route path="reactCV" element={<ReactCV/>}/>
        <Route path="laravelcv" element={<LaravelCV/>}/>
        <Route path="pythoncv" element={<PythonCV/>}/>
        <Route path="managercv" element={<ManagerCV/>}/>
        <Route path="hrcv" element={<HrCV/>}/>
        <Route path="networking" element={<Networking/>}/>
        <Route path="SEO" element={<SEOCV/>}/>
        <Route path="contentwritercv" element={<ContentCV/>}/>
        <Route path="datascientestcv" element={<DataScientestCV/>}/>
        <Route path="appdevcv" element={<AppdeveloperCV/>}/>
        <Route path="uicv" element={<UXCV/>}/>
        <Route path="singleCV" element={<SingleCV/>}/>
        <Route path="createProject" element={<CreateProject/>}/>
        <Route path="projects" element={<Projects/>}/>
        <Route path="project/:id" element={<TaskProgress/>}/>
        <Route path="logo" element={<Logo/>}/>
      </Routes>
      <Footer/>
      </PrimeReactProvider>
    </BrowserRouter>
    </>
  );
}

export default App;
