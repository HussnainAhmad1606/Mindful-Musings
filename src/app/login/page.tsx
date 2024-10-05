"use client"
import { useUserStore } from '@/store/store'
import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

function page() {
  const {SetIsLogin, SetEmail, SetUsername, SetIsPremium} = useUserStore();
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const login = async() => {
        const data = {
            username, password
        }
        console.log(data)

        const req = await axios.post("/api/auth/login", data);
        const res = req.data;
        console.log(res);
        if (res.type == "success"){
            toast.success(res.message);
            SetIsLogin(true);
            localStorage.setItem("mindful-token", res.token)
            SetEmail(res.userData.email)
            SetUsername(res.userData.username)
            SetIsPremium(res.userData.isPremium)
        }
        else {
            toast.error(res.message);
        }
    }

  
  return (
    <div className='min-h-[100vh] flex justify-center items-center flex-col'>
        <h1 className='text-3xl font-bold my-10'>Login</h1>
        <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Username</span>
          </label>
          <input value={username} onChange={e=>setUsername(e.target.value)} type="text" placeholder="Username" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder="Password" className="input input-bordered" required />
        
        </div>
        <div className="form-control mt-6">
          <button onClick={login} className="btn btn-primary">Login</button>
        </div>
      </div>
    </div>
  )
}

export default page