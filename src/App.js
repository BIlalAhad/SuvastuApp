import { PrimeReactProvider } from 'primereact/api'
import 'primereact/resources/primereact.min.css'
import 'primereact/resources/themes/lara-light-indigo/theme.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboardheader from './Components/Dashboardheader'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import AddTeamMembers from './Containers/AddTeamMembers'
import AppdeveloperCV from './Containers/AppdeveloperCV'
import CV from './Containers/CV'
import ContentCV from './Containers/ContentCV'
import CreateProject from './Containers/CreateProject'
import Dashboard from './Containers/Dashboard'
import DataScientestCV from './Containers/DataScientestCV'
import HrCV from './Containers/HrCV'
import Index from './Containers/Index'
import Jobs from './Containers/Jobs'
import LaravelCV from './Containers/LaravelCV'
import Logo from './Containers/Logo'
import ManagerCV from './Containers/ManagerCV'
import Networking from './Containers/Networking'
import NodeCV from './Containers/NodeCV'
import PostJobs from './Containers/PostJobs'
import Projects from './Containers/Projects'
import PythonCV from './Containers/PythonCV'
import ReactCV from './Containers/ReactCV'
import SEOCV from './Containers/SEOCV'
import Signin from './Containers/Signin'
import Signup from './Containers/Signup'
import SingleCV from './Containers/SingleCV'
import TaskProgress from './Containers/TaskProgress'
import Team from './Containers/Team'
import UXCV from './Containers/UXCV'
import WordpressCV from './Containers/WordpressCV'
import Achivement from './Containers/Achivement'
import Addachivement from './Containers/Addachivement'

function App() {
  return (
    <>
      <BrowserRouter>
        <PrimeReactProvider>
          {/* <Dashboardheader /> */}
          <Navbar />
          <Routes>
            <Route path='/' element={<Index />} />
            <Route path='Signup' element={<Signup />} />
            <Route path='Signin' element={<Signin />} />
            <Route path='team' element={<Team />} />
            <Route path='jobs' element={<Jobs />} />
            <Route path='postjobs' element={<PostJobs />} />
            <Route path='teammembers' element={<AddTeamMembers />} />
            <Route path='Dashboard' element={<Dashboard />} />
            <Route path='cv' element={<CV />} />
            <Route path='nodejscv' element={<NodeCV />} />
            <Route path='worldpress' element={<WordpressCV />} />
            <Route path='reactCV' element={<ReactCV />} />
            <Route path='laravelcv' element={<LaravelCV />} />
            <Route path='pythoncv' element={<PythonCV />} />
            <Route path='managercv' element={<ManagerCV />} />
            <Route path='hrcv' element={<HrCV />} />
            <Route path='networking' element={<Networking />} />
            <Route path='SEO' element={<SEOCV />} />
            <Route path='contentwritercv' element={<ContentCV />} />
            <Route path='datascientestcv' element={<DataScientestCV />} />
            <Route path='appdevcv' element={<AppdeveloperCV />} />
            <Route path='uicv' element={<UXCV />} />
            <Route path='singleCV' element={<SingleCV />} />
            <Route path='createProject' element={<CreateProject />} />
            <Route path='projects' element={<Projects />} />
            <Route path='project/:id' element={<TaskProgress />} />
            <Route path='logo' element={<Logo />} />
            <Route path='achivement' element={<Achivement />} />
            <Route path='addachivement' element={<Addachivement />} />
          </Routes>
          <Footer />
        </PrimeReactProvider>
      </BrowserRouter>
    </>
  )
}

export default App
