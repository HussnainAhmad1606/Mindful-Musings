import React from 'react'

export default function page({params}:any) {
    const {slug } = params;
  return (
    <div className='p-10 px-[300px]'>
        <h1 className='text-4xl font-bold'>The Future of Artificial Intelligence in Web Development</h1>

        <img className='my-5 rounded-2xl' src='https://images.unsplash.com/photo-1666597107756-ef489e9f1f09?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>

<div className='flex items-center'>
<div className="avatar">
  <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring ring-offset-2">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
  </div>
</div>

<div className='my-7 ml-5'>
    <h1 className='text-2xl font-bold'>Psycho Girl</h1>
    <p>Web Developer</p>
</div>
</div>

<p>
Artificial Intelligence is rapidly transforming the landscape of web development. From intelligent code completion to automated testing and personalized user experiences, AI is revolutionizing how we build and interact with websites and web applications.
</p>
<h1 className='text-2xl font-bold'>Key Areas of AI Impact
</h1>

<ul>
    <li>
Automated code generation and optimization
    </li>

    <li>
Intelligent debugging and error prediction
    </li>

<li>
Personalized user interfaces and experiences
</li>

<li>
Advanced natural language processing for chatbots and voice interfaces
</li>
</ul>
<p>
As we look to the future, it's clear that AI will play an increasingly important role in shaping the web development process, enabling developers to create more sophisticated, efficient, and user-friendly applications.
    </p>

    <div className="divider"></div>

    <div>
    <div className="mx-2 badge badge-primary">Artificial Intelligence</div>
    <div className="mx-2 badge badge-primary">Web Development</div>
    <div className="mx-2 badge badge-primary">Future Tech</div>
    </div>
    </div>
  )
}
