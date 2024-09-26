import Link from 'next/link'
import React from 'react'

function ArticleCard({title, desc, link}:{title:string, desc:string, link:string}) {
  return (
    <div className="my-5 card bg-base-100 w-[70%] shadow-xl">
    <div className="card-body">
      <h2 className="card-title">{title}</h2>
      <p>{desc}</p>
      <div className="card-actions justify-end">
        <Link href={link} className="btn btn-primary">Read Me</Link>
      </div>
    </div>
  </div>
  )
}

export default ArticleCard