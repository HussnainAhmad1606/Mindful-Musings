"use client"
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

function page() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter();

    const accountCreation = async() => {
        const data = {
            username, password,email
        }
        console.log("creating account")

        const req = await axios.post("/api/auth/signup", data);
        const res = req.data;
        console.log(res);
        if (res.type == "success"){
          toast.success(res.message);
          router.push("/login")
      }
      else {
          toast.error(res.message);
      }
    }

  
  return (
    <div className='min-h-[100vh] flex justify-center items-center flex-col'>
        <h1 className='text-3xl font-bold my-10'>Signup</h1>
        <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Username</span>
          </label>
          <input value={username} onChange={e=>setUsername(e.target.value)} type="text" placeholder="Username" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input value={email} onChange={e=>setEmail(e.target.value)} type="text" placeholder="Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder="Password" className="input input-bordered" required />
        
        </div>
        <div className="form-control mt-6">
          <button onClick={accountCreation} className="btn btn-primary">Signup</button>
        </div>
      </div>
    </div>
  )
}

export default page