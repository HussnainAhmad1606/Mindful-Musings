"use client"
import Link from 'next/link'
import React, {useEffect} from 'react'
import ThemeController from './ThemeController'
import ProfileDropdown from './ProfileDropdown'
import { useUserStore } from '@/store/store'
import axios from 'axios'
import { toast } from 'react-hot-toast'

function Navbar() {
  const {IsLogin, Username, SetIsLogin, SetUsername,SetEmail, SetIsPremium} = useUserStore();

  const verifyToken = async() => {
    const token = localStorage.getItem("mindful-token");
    const req = await axios.post("/api/auth/verify", {
      token: token
    })
    

    if (req.data.type == "success") {
      SetIsLogin(true);
      SetUsername(req.data.user.username)
      SetEmail(req.data.user.email)
      SetIsPremium(req.data.user.isPremium);
    }
    else {
      toast.error("token expired. Please log in")
    }

  }

  useEffect(() => {
   verifyToken();
  }, [])
  
  return (
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><Link href={"/"}>Home</Link></li>
      
      <li><Link href={"/blog"}>Blog</Link></li>
      <li><Link href={"/about"}>About</Link></li>
      <li><Link href={"/about"}>Contact</Link></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Mindful Musings</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link href={"/"}>Home</Link></li>
      
      <li><Link href={"/blog"}>Blog</Link></li>
      <li><Link href={"/about"}>About</Link></li>
      <li><Link href={"/about"}>Contact</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    <ThemeController/>
    {
    IsLogin==false?(
      <>
      <Link href={"/signup"} className="ml-2 btn btn-neutral">Signup</Link>
      <Link href="/login" className="mx-5 btn btn-primary">Login</Link>
      </>
    ):(
      <ProfileDropdown />
    )
    }
    <Link href={"/subscribe"} className="btn btn-accent">Subscribe</Link>
  </div>
</div>
  )
}

export default Navbar