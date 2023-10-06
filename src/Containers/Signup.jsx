import React, { useState } from 'react'
import {FcGoogle} from 'react-icons/fc'
import { UseFirebase } from '../Context/Firebase';

export default function Signup() {
    const Firebase=UseFirebase()
    const [email, setEmail]=useState([]);
    const [password,setPassword]=useState([]);
    const handleLogin=(e)=>{
        console.log(email,password)
        e.preventDefault();
        Firebase.SignupUserWithEmailAndPassword(email,password)
    }
  return (
    <>
     <section className='grid items-center justify-center w-full h-[100vh]  bg-gradient-to-b from-slate-300'>
        <div className='max-w-xl shadow-2xl bg-gray-200 p-8 grid justify-center items-center space-y-2 text-center border-b-4 border-l-4 border-orange-600'>
            <img src="logo.png" alt="" />
            <p className='text-sm font-semibold py-2'>SignUp To Continue</p>
            <input type="email" placeholder='Email' className='p-2 text-sm' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" placeholder='password' className='p-2 text-sm' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button className='bg-blue-800 hover:bg-blue-700 text-white p-2' onClick={handleLogin}>SignUp</button>

            <p className='py-2'>OR</p>

            <div className='space-y-2'>
                <button className='flex shadow items-center gap-6 p-2 bg-white w-full text-sm font-semibold' onClick={()=>{Firebase.SignInWithGoogle()}}><span className='text-xl'><FcGoogle/></span> Continue with Google</button>
                
            </div>
        </div>
     </section>
    </>
  )
}
