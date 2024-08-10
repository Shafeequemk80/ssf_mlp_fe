import React from 'react'
import { FaRegPlayCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Live = () => {
  return (
    <Link to={'/sahieast/videos'} >
    <div className='fixed animate-pulse bg-red-600 text-center text-lg rounded-3xl rounded-bl-none font-poppins flex justify-center items-center gap-2 z-50 text-white p-5 bottom-6 right-6'>
        <FaRegPlayCircle/>
        <p>LIVE</p>
    </div>
    </Link>
  )
}

export default Live