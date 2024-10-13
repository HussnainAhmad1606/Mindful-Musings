"use client"
import { useSearchParams } from 'next/navigation';
import Confetti from "react-confetti";
import {useEffect, useState } from "react";

const Success = () => {
  const searchParams = useSearchParams();
  const session_id = searchParams?.get('session_id');
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });
  const [isClient, setClient] = useState(false);
  useEffect(() => {
    const { innerWidth: width, innerHeight: height } = window;
    setDimensions({
      width,
      height,
    });
    setClient(true);


    const timer = setTimeout(() => {
      setDimensions({
        width: 0,
        height: 0,
      })
    }, 5000);

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timer);
  }, []);


  return (
    <>
    {isClient && (
          <Confetti width={dimensions.width} height={dimensions.height} />
        )}
    <div className='flex justify-center items-center flex-col min-h-screen'>
      <h1>Payment Successful</h1>
      <p>Thank you for your subscription!</p>
      <p>Your session ID: {session_id}</p>
    </div>
    </>
  );
};

export default Success;