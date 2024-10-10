"use client"
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import axios from 'axios';
import { toast } from 'react-hot-toast';

function page() {
    const [results, setResults] = useState([]);
    const searchParams = useSearchParams();
 
    const query = searchParams?.get('query');

    const search = async() => {
        if (query == "") {
            return;
        }
        const search = await axios.post("/api/search/search", {
            query:query
        })
        const response = search.data;

        if (response.type == "success") {
            const results = response.results;
            setResults(results);
        }
        else {
            toast.error(response.message);
        }
    }
   
    useEffect(() => {
      search();
    }, [query])
    
  return (
    <div className='min-h-[100vh]'>
        <h1 className='my-5 text-center font-bold text-3xl'>Search</h1>
    </div>
  )
}

export default page