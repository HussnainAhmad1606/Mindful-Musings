import Link from 'next/link'
import React from 'react'
import ThemeController from './ThemeController'

function Navbar() {
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
    <Link href={"/signup"} className="ml-2 btn btn-neutral">Signup</Link>
    <Link href="/login" className="mx-5 btn btn-primary">Login</Link>
    <Link href={"/subscribe"} className="btn btn-accent">Subscribe</Link>
  </div>
</div>
  )
}

export default Navbar