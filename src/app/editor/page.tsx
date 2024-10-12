"use client"
import React from 'react'
import dynamic, { noSSR } from 'next/dynamic';
const WritingEditor = dynamic(() => import("@/components/WritingEditor"),{ssr:false})
function page() {
  return (
    <div>
        <WritingEditor/>
    </div>
  )
}

export default page