import React from 'react'
import ArticleCard from './ArticleCard'

function FeaturesArticles() {
  return (
    <div className='bg-base-200 '>
      <h1  className="py-5 text-center text-5xl font-bold">Features Articles</h1>
<div className='flex justify-center items-center flex-col'>
      <ArticleCard title='Article 1' desc='Description 1' link='/article-1'/>
      <ArticleCard title='Article 2' desc='Description 2' link='/article-2'/>
      <ArticleCard title='Article 3' desc='Description 3' link='/article-3'/>
</div>
    </div>
  )
}

export default FeaturesArticles