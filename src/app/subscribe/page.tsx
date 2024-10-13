import Checkout from '@/components/Checkout'
import Pricing from '@/components/Pricing'
import React from 'react'

function page() {
  return (
    <div className='min-h-screen flex justify-center items-center flex-col'>
        <h1 className='text-3xl font-bold'>Unlock the Full Experience</h1>
        <p className='p-10 text-center'>
        Join The Mindful Musings and elevate your reading journey with our exclusive premium membership. For just monthly fee, you'll gain unlimited access to all premium articles, in-depth discussions and more. 
        </p>
      <div>
      <Pricing>
        <Checkout/>
      </Pricing>
      </div>
    </div>
  )
}

export default page