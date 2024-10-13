"use client"
import Checkout from '@/components/Checkout'
import Pricing from '@/components/Pricing'
import { useUserStore } from '@/store/store'
import axios from 'axios';
import React from 'react'
import { toast } from 'react-hot-toast';

function page() {
  const {IsPremium, Username, SetIsPremium} = useUserStore();

  const unsubscribe = async() => {
    const transId = await axios.post("/api/getTranscationId", {
      username: Username
    })

    console.log(transId.data)

    if (transId.data.type == "success") {
      await stripeUnsub(transId.data.id);
  }

}

const stripeUnsub = async(ID:String) => {
  const unsub = await axios.post("/api/cancel-subscription", {
    subscriptionId:ID,
    username: Username
  });

  console.log(unsub.data)

  if (unsub.data.type == "success"){
    toast.success(unsub.data.message);
    SetIsPremium(false);
  }
  else {
    toast.error(unsub.data.message);
  }
}
  return (
    <div className='min-h-screen flex justify-center items-center flex-col'>
        <h1 className='text-3xl font-bold'>Unlock the Full Experience</h1>
        <p className='p-10 text-center'>
        Join The Mindful Musings and elevate your reading journey with our exclusive premium membership. For just monthly fee, you'll gain unlimited access to all premium articles, in-depth discussions and more. 
        </p>
      <div>
        
      <Pricing>
        {
          IsPremium?(
            <button onClick={unsubscribe}>Unsubscribe</button>
            ):(
              <Checkout/>
              )
        }
      </Pricing>
      </div>
    </div>
  )
}

export default page