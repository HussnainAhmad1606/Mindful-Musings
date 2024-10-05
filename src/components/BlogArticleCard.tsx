import Link from 'next/link'
import React from 'react'
import { FaRegHeart } from "react-icons/fa6";
import { FaRegComment } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { FaChessKing } from "react-icons/fa6";
import { format } from 'timeago.js';

function BlogArticleCard({article}:{article:any}) {
  return (
    <div className="my-5 card bg-base-100 w-[70%] shadow-xl">
    <div className="card-body">
      <div className='flex justify-between items-center'>
      <h2 className="card-title">{article.title}</h2>
     {
      article.isPremium?(
        <div className="tooltip" data-tip="Premium Content">
        <div className="badge badge-primary">
          <FaChessKing />
        </div>
  </div>
      ):null
     }
      </div>
      <p>{article.description}</p>

      <div className='flex justify-between items-center flex-row'>
       <div className='flex justify-between items-center flex-row'>
         {/* <div className='flex justify-center items-center'>
          <FaRegHeart className='text-2xl mx-3'/>
          <span>0</span>
        </div> */}
          <div className="my-3 flex items-center justify-center flex-wrap gap-2">
          <p>
          Posted {format(new Date(article.time))} | 
          </p>
          {article.tags.map((tag:String, index:any) => {
            return (
              <span key={index} className="badge badge-primary">
                {tag}
              </span>
            );
          })}

        </div>
       </div>
        <div className='flex justify-center items-center'>
          <FaRegBookmark className='text-2xl mx-3'/>
      
        </div>
      </div>
      <div className="mt-10 card-actions justify-end">
        <Link href={`/blog/${article._id}`} className="btn btn-primary">Read Me</Link>
      </div>
    </div>
  </div>
  )
}

export default BlogArticleCard;