import React from 'react'
import { MdLiveTv } from 'react-icons/md'


const LiveLinks = () => {
  return (
    <div className="max-container padding-y padding-x max-md:flex-col flex gap-8">
        
        <a
          href="https://www.youtube.com/live/6fb7iadGw1c?si=OTGLKidCZigDNylT"
          className="flex items-center justify-center gap-3 w-full p-2 bg-theme_red text-white text-center font-poppins font-semibold animate-pulse"
        >
          <MdLiveTv size={30} />
          <h2>Stage 01 | <span className=" text-theme_yellow">LIVE</span></h2>
        </a>
        <a
          href="https://www.youtube.com/live/LsJgxYoQr6k?si=ACyeodNZpc8gUPhS"
          className="flex items-center justify-center gap-3 w-full p-2 bg-theme_red text-white text-center font-poppins font-semibold animate-pulse"
        >
          <MdLiveTv size={30} />
          <h2>Stage 02 | <span className=" text-theme_yellow">LIVE</span></h2>
        </a>

      </div>
  )
}

export default LiveLinks