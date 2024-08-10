import React, { useState } from 'react';
import Logo from '../assets/Logo.svg'
import SahiLogo from '../assets/SahiLogoWhiteBG.svg'
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Message = () => {

  const [isInView, setIsInView] = useState(false);

  const handleIntersection = (entries) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      console.log('is in view');
      setIsInView(true);

    }else{
      console.log('is not in view');
      setIsInView(false)
    }
  };

  const targetRef = useIntersectionObserver(handleIntersection, {
    root: null, // Use the viewport
    rootMargin: '0px',
    threshold: 0.1, // Trigger when 10% of the element is visible
  });

  return (
    <section className="z-10 bg-white  ">
      
      {/* //what's hope? */}
      <div className="max-container text-left flex justify-between items-center max-md:flex-col-reverse gap-16 padding-y padding-x">
        <div ref={targetRef} className={`flex flex-col gap-5 w-full  ${isInView ? 'animate-fade-left' : 'opacity-0 '} transition-all duration-1000`}>
          <h1 className="text-4xl font-mono ">What's festival of Hope?</h1>
          <p className="font-light font-poppins">
          Real change begins when we choose hope. By believing that we have the power to make an impact, we take the first step on the journey to changing our world. The choice is yours. But you are not alone.
<br />
        
          This year, Malappuram East District Sahityotsav celebrates the hope that burns brightest in the hearts of the marginalized. We will amplify the voices of minorities and disadvantaged communities, showcasing their struggles and aspirations through literature, poetry, and discourse.

          </p>

        </div>
        <div className={`flex w-full gap-4 ${isInView ? 'animate-fade-right' : 'opacity-0 '} transition-all duration-1000`}>

          <img src={Logo} className="h-64 max-md:h-40 w-full" alt="" />
          <img src={SahiLogo} className="h-64 max-md:h-40 w-full" alt="" />
        </div>
      </div>

      

    </section>
  );
};

export default Message;
