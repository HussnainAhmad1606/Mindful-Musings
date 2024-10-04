import React from 'react'
import BlogArticleCard from "@/components/BlogArticleCard"
function page() {
  return (
    <div className='min-h-screen'>
        <h1 className='my-10 text-center font-bold text-3xl'>Blog</h1>

        <div className='flex justify-center items-center flex-col'>
        <BlogArticleCard title='Test' desc="test" link='/blog/article-1'/>
        <BlogArticleCard title='Test' desc="test" link='/blog/article-2'/>
        </div>

    </div>
  )
}

export default page