import Link from 'next/link'
import React from 'react'

function HeroSection() {
  return (
    <div className="hero bg-base-200 min-h-screen">
    <div className="hero-content text-center">
      <div className="max-w-md">
        <h1 className="text-5xl font-bold">Ideas That Resonate, Words That Connect</h1>
        <p className="py-6">
        Honest reflections, personal insights, and stories that challenge the norm. Join me as I explore life’s deeper questions, one thought-provoking post at a time.
        </p>
        <Link href={"/blog"} className="btn btn-primary">Read Blogs</Link>
      </div>
    </div>
  </div>
  )
}

export default HeroSection