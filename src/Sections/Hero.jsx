import React from 'react';
import VideoBg from '../assets/Videobg.mp4';
import LogoHoriWhite from '../assets/logo_hori_white.svg';

const Hero = () => {
  return (
    <section className="bg-opacity-70 bg-black flex h-[100vh] justify-center">


      {/* <div className=" bg-black opacity-75 absolute  w-full h-full" /> */}

      <video
        className="w-full h-full absolute object-cover -z-10"
        src={VideoBg}
        autoPlay
        loop
        muted
      />
      
      <div className=" z-100 absolute padding-x  h-full padding-y flex justify-between max-md:justify-center max-md:text-center items-center max-md:flex-col max-md:items-center max-md:gap-10 max-container ">
        <div className="flex gap-3 w-full h-36 ">
          <img src={LogoHoriWhite} className='animate-fade-right' />
        </div>
        <div className="animate-fade-left">
          <p className="font-poppins w-full text-white font-light " >
          Real change begins when we choose hope. By believing that we have the power to make an impact, we take the first step on the journey to changing our world. The choice is yours. But you are not alone.

          </p>
        </div>
      </div>

    </section>
  );
};

export default Hero;
