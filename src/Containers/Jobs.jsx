import React, { useEffect, useState } from 'react'
import { UseFirebase } from '../Context/Firebase'

export default function Jobs() {
  const [name, setName] = useState([]);
  const [fname, setFname] = useState([]);
  const [location, setLocation] = useState([]);
  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);
  const [CNIC, setCNIC] = useState([]);
  const [phone, setPhone] = useState([]);
  const [email, setEmail] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [ApplyFor,setApplyFor]=useState([]);
  const [showModal, setShowModal] = React.useState(false);
  const Firebase = UseFirebase();
  useEffect(() => {
    Firebase.listAllJobs().then((item) => { setJobs(item.docs) })
  }, [])

  const Apply = (e) => {
    e.preventDefault();
    Firebase.PostApplicent(name, fname, location, skills, experience, education, CNIC, phone, email,ApplyFor)
    setName("");
    setFname("")
    setLocation('')
    setSkills('')
    setExperience('')
    setEducation('')
    setCNIC('')
    setEmail('')
    setPhone('')
    setApplyFor('')
    setShowModal(false)
  }
  return (
    <>
      <section>
        <img className='h-[50vh] sm:h-[600px] w-full object-cover brightness-75' src="job.avif" alt="" />
        <section className='my-20 max-w-6xl mx-auto'>
          <div className='text-center '>
            <h2 className='text-5xl mb-2  '>About Suvastu Tech <span className='text-orange-600 font-semibold font-serif'>Jobs</span></h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam iste aperiam porro. Necessitatibus natus eius quidem perspiciatis laboriosam eligendi aperiam facere, similique impedit molestiae ipsum in sapiente cumque molestias recusandae consequuntur hic? Explicabo, perspiciatis molestias porro rerum enim quos tenetur quo aperiam aliquam eligendi, ullam impedit voluptatibus, suscipit deleniti adipisci?</p>
          </div>

          <div className='grid sm:grid-cols-2 gap-8 my-20'>
            <div className='shadow-md bg-gray-50 p-6'>
              <h2 className='text-2xl font-semibold mb-2 border-b-2 py-1'>About Employ</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At inventore nemo placeat praesentium ratione perferendis nesciunt ex neque modi quo hic dolore accusamus iste quidem voluptate, atque, cupiditate illum dignissimos.</p>
            </div>
            <div className='shadow-md bg-gray-50 p-6'>
              <h2 className='text-2xl font-semibold mb-2 border-b-2 py-1'>About Internship</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At inventore nemo placeat praesentium ratione perferendis nesciunt ex neque modi quo hic dolore accusamus iste quidem voluptate, atque, cupiditate illum dignissimos.</p>
            </div>
          </div>

          {/* jobs */}
          <section className='bg-white p-6'>
            <h2 className='text-2xl font-semibold'>We are Hiring : </h2>
            <div className='my-10'>
              {
                jobs.map((item) => {
                  return (
                    <div class="w-full sm:px-8 mx-auto    ">
                          <details class="p-4 rounded-lg">
                            <summary class="font-semibold bg-gray-100 px-4 py-2  text-lg cursor-pointer">{item.data().jobtitle}</summary>
                            <div class=" bg-gray-100">
                              <p class="leading-6 px-3 py-2 text-gray-800">
                              <div className='shadow bg-gray-50 p-6'>
                      
                      <div className=''>

                        <p className='p-2 bg-gray-100'><span className='font-semibold'>Sallery : </span>{item.data().salleryfrom}-{item.data().salleryto} </p>
                        <p className='p-3 bg-gray-100'><span className='font-semibold'>Address : </span>{item.data().country}-{item.data().location} </p>
                        <p className='p-3 bg-gray-100'><span className='font-semibold'>Job Shift : </span>{item.data().jobshift} </p>
                        <p className='p-3 bg-gray-100'><span className='font-semibold'>Gender : </span>{item.data().gender} </p>
                        <p className='p-3 bg-gray-100'><span className='font-semibold'>Skills : </span>{item.data().skills} </p>

                     
                       
                      <button className='bg-blue-800 hover:bg-blue-700 max-w-sm mx-auto p-3 px-7 text-white float-right' onClick={() => setShowModal(true)}>Apply</button>

                      </div>
                      
                    </div>                      </p>
                            </div>
                          </details>
                        </div>
                    

                  )
                })
              }
            </div>
          </section>


          {/* model  */}

          {showModal ? (
            <>
              <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              >
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                      <h3 className="text-3xl font-semibold">
                        Apply For a Job
                      </h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                      >
                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                          ×
                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                      <form className='p-6 bg-gray-50 space-y-2' onSubmit={Apply}>
                        <input type="text" className='shadow w-full p-2 border-2 rounded-md text-sm bg-white ' value={name} onChange={(e) => setName(e.target.value)} required placeholder=' Full Name ' />
                        <input type="text" className='shadow w-full p-2 border-2 rounded-md text-sm bg-white ' value={fname} onChange={(e) => setFname(e.target.value)} required placeholder=' Father Name ' />
                        <input type="text" className='shadow w-full p-2 border-2 rounded-md text-sm bg-white ' value={location} onChange={(e) => setLocation(e.target.value)} required placeholder=' Location  ' />
                        <input type="text" className='shadow w-full p-2 border-2 rounded-md text-sm bg-white ' value={skills} onChange={(e) => setSkills(e.target.value)} required placeholder=' Skills' />
                        <input type="text" className='shadow w-full p-2 border-2 rounded-md text-sm bg-white ' value={experience} onChange={(e) => setExperience(e.target.value)} required placeholder=' Experience' />
                        <input type="text" className='shadow w-full p-2 border-2 rounded-md text-sm bg-white ' value={education} onChange={(e) => setEducation(e.target.value)} required placeholder='Education' />
                        <input type="number" className='shadow w-full p-2 border-2 rounded-md text-sm bg-white ' value={CNIC} onChange={(e) => setCNIC(e.target.value)} required placeholder='CNIC' />
                        <input type="number" className='shadow w-full p-2 border-2 rounded-md text-sm bg-white ' value={phone} onChange={(e) => setPhone(e.target.value)} required placeholder='Phone' />
                        <input type="email" className='shadow w-full p-2 border-2 rounded-md text-sm bg-white  ' value={email} onChange={(e) => setEmail(e.target.value)} required placeholder='Email' />
                        <select name="" id="" className='shadow w-full p-2 border-2 rounded-md text-sm bg-white ' onChange={(e)=>setApplyFor(e.target.value)}>
                          <option value="">Apply For</option>
                          <option value="Laravel">Laravel</option>
                          <option value="React">React</option>
                          <option value="Python">Python</option>
                          <option value="Node.js">Node.js</option>
                          <option value="Worldpress">Worldpress</option>
                          <option value="Manager">Manager</option>
                          <option value="HR">HR</option>
                          <option value="Networking">Networking</option>
                          <option value="SEO">SEO</option>
                          <option value="Content Writer">Content Writer</option>
                          <option value="Data Scientest">Data Scientest</option>
                          <option value="App Developer">App Developer</option>
                          <option value="UI/UX">UI/UX</option>
                        </select>
                        <button className='text-sm font-bold bg-blue-800 hover:bg-blue-700 text-white p-2 px-4 uppercase ' type='submit'>Apply</button>
                      </form>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b gap-4">
                      <button
                        className="text-sm font-bold bg-red-600 hover:bg-red-500 text-white p-2 px-4"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>

                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </section>
      </section>
    </>
  )
}
