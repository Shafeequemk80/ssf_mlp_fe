import React from 'react';

const Gallery = () => {
  const imgs = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="padding-y flex flex-col gap-2 justify-center">
      <section className="scroll font-poppins flex justify-center items-center overflow-hidden  mask-gradient relative gap-2 max-container padding-x">

        <div className="scroll-content">
          {imgs.map (ig => (
            <img src={`./${ig}.jpg`} className="scroll-content h-36" alt="" />
          ))}
          {imgs.map (ig => (
            <img src={`./${ig}.jpg`} className="scroll-content h-36" alt="" />
          ))}
        </div>

      </section>

      <section className="scroll font-poppins flex justify-center items-center overflow-hidden  mask-gradient relative  gap-2 max-container padding-x">

        <div className="scroll-content2">

          {imgs.map (ig => (
            <img src={`./${ig}.jpg`} className="scroll-content h-36" alt="" />
          ))}
          {imgs.map (ig => (
            <img src={`./${ig}.jpg`} className="scroll-content h-36" alt="" />
          ))}
        </div>
      </section>

      <section className="scroll font-poppins flex justify-center items-center overflow-hidden  mask-gradient relative  gap-2 max-container padding-x">
        <div className="scroll-content3">
          {imgs.map (ig => (
            <img src={`./${ig}.jpg`} className="scroll-content h-36" alt="" />
          ))}
          {imgs.map (ig => (
            <img src={`./${ig}.jpg`} className="scroll-content h-36" alt="" />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
