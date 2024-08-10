import React, { useRef, useState } from 'react';

import Footer_Bar from '../assets/Footer_Ribbon.svg';
import Org from '../assets/Org.svg';
import {FaSquareYoutube} from 'react-icons/fa6';
import {FaSquareInstagram} from 'react-icons/fa6';
import {FaFacebookSquare} from 'react-icons/fa';
import {FaSquareXTwitter} from 'react-icons/fa6';
import {BsThreadsFill} from 'react-icons/bs';
import { FaWhatsappSquare } from "react-icons/fa";
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Footer = () => {

  const [isInView, setIsInView] = useState(false);

  const handleIntersection = (entries) => {
    const entry = entries[0];
    if (entry.isIntersecting && !isInView) {
      console.log('is in view');
      setIsInView(true);

    }else if(!entry.isIntersecting && isInView){
      console.log('is not in view');
      setIsInView(false)
    }
  };

  const targetRef = useIntersectionObserver(handleIntersection, {
    root: null, // Use the viewport
    rootMargin: '0px',
    threshold: .5, 
  });

  return (
    <section ref={targetRef} className={`mt-10 ${isInView ? 'opacity-00' : 'animate-flip-up '} transition-all duration-1000`}>
      <img src={Footer_Bar} alt="" />
      <div className="bg-theme_black py-16 padding-x">

        <div className="flex justify-between max-md:flex-col max-md:items-center max-md:gap-5 max-container">
          <img src={Org} className="h-5" />
          <div className='text-white flex gap-2'>
            <a href="https://www.threads.net/@ssfmlpmeast?hl=en"><BsThreadsFill /></a>
            <a href="https://x.com/SsfEast?t=Zh8uUhT1ZVw-Qe_ee7nJDg&s=09"><FaSquareXTwitter /></a>
            <a href="https://www.facebook.com/ssfmlpmeast"><FaFacebookSquare /></a>
            <a href="https://www.instagram.com/ssfmlpmeast?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><FaSquareInstagram /></a>
            <a href="https://www.youtube.com/@SSFMALAPPURAMEAST"><FaSquareYoutube /></a>
            <a href="https://whatsapp.com/channel/0029Vahbl5FKWEKmOoxvzj0D"><FaWhatsappSquare /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
