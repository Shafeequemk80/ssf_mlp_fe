import React from 'react';
import CountBar from '../assets/CountBG.svg';
import AnimatedCounter from '../components/AnimatedCounter';

const Counts = () => {
  const countsElements = [
    {cnt: 3, elem: 'Days'},
    {cnt: 12, elem: 'Stages'},
    {cnt: 170, elem: 'Events'},
    {cnt: 3000, elem: 'Participants'},
    
  ];

  

  return (
    <section className="relative max-md:hidden">

      <img src={CountBar} className="w-full h-auto " alt="" />

      
        <div className="font-poppins font-light absolute inset-0 text-white text-center justify-center items-center max-md:bg-none bg-black bg-opacity-20 flex max-lg:gap-10 gap-20">
          {countsElements.map (em => (
            <div className='max-md:hidden'>
              <h1 className="text-4xl max-lg:text-2xl"><AnimatedCounter endValue={em.cnt} duration={2} /></h1>
              <h1 className="text-2xl max-lg:text-xl">{em.elem}</h1>
            </div>
          ))}

        </div>

    </section>
  );
};

export default Counts;
