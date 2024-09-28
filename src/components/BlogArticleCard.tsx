import Link from 'next/link'
import React from 'react'
import { FaRegHeart } from "react-icons/fa6";
import { FaRegComment } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { FaChessKing } from "react-icons/fa6";
function BlogArticleCard({title, desc, link}:{title:string, desc:string, link:string}) {
  return (
    <div className="my-5 card bg-base-100 w-[70%] shadow-xl">
    <div className="card-body">
      <div className='flex justify-between items-center'>
      <h2 className="card-title">{title}</h2>
      <div className="tooltip" data-tip="Premium Content">
      <div className="badge badge-primary">
        <FaChessKing />
      </div>
</div>
      </div>
      <p>{desc}</p>

      <div className='flex justify-between items-center flex-row'>
       <div className='flex justify-between items-center flex-row'>
         <div className='flex justify-center items-center'>
          <FaRegHeart className='text-2xl mx-3'/>
          <span>0</span>
        </div>
        <div className='flex justify-center items-center'>
          <FaRegComment className='text-2xl mx-3'/>
          <span>0</span>
        </div>
       </div>
        <div className='flex justify-center items-center'>
          <FaRegBookmark className='text-2xl mx-3'/>
      
        </div>
      </div>
      <div className="card-actions justify-end">
        {/* <Link href={link} className="btn btn-primary">Read Me</Link> */}
      </div>
    </div>
  </div>
  )
}

export default BlogArticleCard;