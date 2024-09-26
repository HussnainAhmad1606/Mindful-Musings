import React from 'react'

function AboutMe() {
  return (
    <div className='bg-base-200 '>
    <h1 className="text-center text-4xl font-bold">About Me</h1>
        <div className="hero min-h-screen">

  <div className="hero-content flex-col lg:flex-row">
    <img
      src="/profile.jpg"
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Hi, I am Psycho</h1>
      <p className="py-6">
        This is the website where I spit, yeah.
      </p>
    </div>
  </div>
</div>
    </div>
  )
}

export default AboutMe