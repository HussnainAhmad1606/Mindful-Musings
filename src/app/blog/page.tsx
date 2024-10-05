"use client"
import React, {useEffect, useState} from 'react'
import BlogArticleCard from "@/components/BlogArticleCard"
import axios from 'axios'
import { useUserStore } from '@/store/store'
function page() {
  const [articles, setArticles] = useState([])
  const getArticles = async () => {
    const req = await axios.get("/api/articles/get-articles");
    const result = req.data;
    console.log(result);
    setArticles(result.articles)
  }

  useEffect(() => {
    getArticles();
  }, [])
  
  return (
    <div className='min-h-screen'>
        <h1 className='my-10 text-center font-bold text-3xl'>Blog</h1>

        <div className='flex justify-center items-center flex-col'>
          {
            articles.map((article,index)=> {
              return (
                <BlogArticleCard article={article}/>
              )
            })

          }
        </div>

    </div>
  )
}

export default page