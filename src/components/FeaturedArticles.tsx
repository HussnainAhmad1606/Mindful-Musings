"use client"
import React, { useEffect, useState } from 'react'
import ArticleCard from './ArticleCard'
import axios from 'axios';
import BlogArticleCard from './BlogArticleCard';

function FeaturesArticles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getArticles = async () => {
    setIsLoading(true);
    const req = await axios.get("/api/getFeaturedBlogs");
    const result = req.data;
    console.log(result);
    setArticles(result.articles);
    setIsLoading(false);
  }

  useEffect(() => {
    getArticles();
  }, [])
  
  return (
    <div className='bg-base-200 '>
      <h1  className="py-5 text-center text-5xl font-bold">Features Articles</h1>

      {
        isLoading==true?(
          <div className='flex justify-center items-center my-5'>
            <span className="loading loading-spinner loading-lg"></span>
            </div>
        ):null
      }
      <div className='flex justify-center items-center flex-col'>
          {
            articles.map((article,index)=> {
              return (
                <BlogArticleCard key={index} article={article}/>
              )
            })

          }
        </div>
    </div>
  )
}

export default FeaturesArticles