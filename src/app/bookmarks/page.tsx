"use client"
import BookmarkCard from '@/components/BookmarkCard';
import { useUserStore } from '@/store/store'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';

function page() {
    const {Username} = useUserStore();
    const [bookmarks, setBookmarks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const deleteBookmark = async(bookmarkId:String) => {
      const data = {
        bookmarkId: bookmarkId
      }
      const re = await axios.post("/api/bookmark/delete-bookmark", data);
      const response = re.data;
  
      if (response.type == "success") {
        toast.success(response.message);
        setBookmarks(bookmarks.filter((bookmark:any) => bookmark._id !== bookmarkId));
      }
      else {
        toast.error(response.message);
      }
    }

    const getBookmarks = async() => {
      setIsLoading(true);
      const data = {
        username: Username
      }
      console.log(data)
        const re = await axios.post('/api/bookmark/get-bookmarks', data);
        const response = re.data;
        console.log(response)
        setBookmarks(response.bookmarks);

        setIsLoading(false);

    }

    useEffect(() => {
      getBookmarks();
    }, [])
    
  return (
    <div className='min-h-screen'>
        <h1 className='my-5 font-bold text-3xl text-center'>Bookmarks ({bookmarks.length})</h1>
        {
          isLoading==false&&bookmarks.length==0?(
            <div className='flex justify-center items-center flex-col'>
            <p className='my-3'>No Bookmarks Found.</p>
            <button className='btn btn-sm btn-primary' onClick={getBookmarks}>Reload</button>
            </div>
          ):null
        }
        <div className='flex justify-center items-center flex-col'>
          {
            bookmarks.map((article,index)=> {
              return (
                <BookmarkCard key={index} deleteBookmark={()=>{
                  deleteBookmark(article._id)
                }} article={article.articleId}/>
              )
            })

          }
        </div>
    </div>
  )
}

export default page