import React from 'react'
import { format } from 'timeago.js'

function CommentCard({comment}:any) {
  return (
    <div className="my-3 card bg-base-100 w-96 shadow-xl">
  <div className="card-body">
    <div className='flex items-center'>
    <div className="avatar">
  <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
    <img src={`https://ui-avatars.com/api/?name=${comment.username}`} />
  </div>
</div>
    <div className='ml-5'>
    <h2 className=" card-title">{comment.username}</h2>
    <p>{format(new Date(comment.createdAt))}</p>
    </div>
    </div>
    <p>{comment.body}</p>
   
  </div>
</div>
  )
}

export default CommentCard