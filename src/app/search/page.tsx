"use client"
import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import BlogArticleCard from '@/components/BlogArticleCard';

function page() {
    const [results, setResults] = useState([]);
    const [isSearch, setIsSearch] = useState(false);
    const [search, setSearch] = useState("");
    const searchParams = useSearchParams();
    const router = useRouter();
    const query = searchParams?.get('query');

    const searchResult = async() => {
        if (query == null) {
            return;
        }
        const search = await axios.post("/api/search/search", {
            query:query
        })
        const response = search.data;
        console.log(response);

        if (response.type == "success") {
            const results = response.results;
            setResults(results);
            setIsSearch(true);
        }
        else {
            toast.error(response.message);
        }
    }
   
    useEffect(() => {
        searchResult();
    }, [query])
    
  return (
    <div className='min-h-[100vh]'>
        <h1 className='my-5 text-center font-bold text-3xl'>Search</h1>
       <div className='flex justify-center items-center flex-col my-10'>
       <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Enter Search: </span>
  </div>
  <input type="text"  value={search} onChange={e=>setSearch(e.target.value)} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
 
</label>
<button onClick={()=>{
    router.push(`/search?query=${search}`);
}} className="mt-3 btn btn-primary">Search</button>
       </div>

        {
            isSearch? (
                <p className='text-center font-bold text-3xl'>Found {results.length} Results</p>
            ):null
        }

<div className='flex justify-center items-center flex-col'>
          {
            results.map((article,index)=> {
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