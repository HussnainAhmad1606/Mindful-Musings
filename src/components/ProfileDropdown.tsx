"use client"
import { useUserStore } from '@/store/store'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'
import { toast } from 'react-hot-toast';

function ProfileDropdown() {
  const router = useRouter();
  const {Username, SetEmail, SetUsername, SetIsLogin} = useUserStore();

  const logout = async() => {
    localStorage.removeItem("mindful-token");
    toast.success("Logged out successful");
    router.push("/login");
    SetEmail("");
    SetUsername("");
    SetIsLogin(false);
  }
  return (
    <div className="mx-3 dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <p className="justify-between">
            Hi, {Username}
          </p>
        </li>
        <li><Link href={"/bookmarks"}>Bookmarks</Link></li>
        <li><button onClick={logout}>Logout</button></li>
      </ul>
    </div>
  )
}

export default ProfileDropdown