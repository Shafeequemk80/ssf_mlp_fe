import React from 'react';

const NewsAd = () => {
  return (
    <div className="border-x-2   border-b-2 border-theme_black w-full  pb-10 pt-6 padding-x">
      <h1 className="mb-6 font-poppins font-semibold text-center text-3xl">
        News
      </h1>
      <div className="flex max-md:flex-col gap-6">
        <input type="file" id='news-image-upload' className="image hidden" />
        <label htmlFor="news-image-upload" className='py-3 px-5 bg-light_gray border-2 border-black'>Upload News Image</label>
        <input
          type="text"
          className="header py-3 px-5 border-2 border-black bg-light_gray text-black placeholder:text-black"
          placeholder="Enter Header"
        />
        <input
          type="date"
          className="date py-3 px-5 bg-light_gray border-black border-2"
          placeholder="enter date border-black"
        />
        <input
          type="text"
          className="content   py-3 px-5 bg-light_gray border-black border-2 text-black placeholder:text-black"
          placeholder="enter news content"
        />
      </div>
      <div className="flex justify-center mt-16">
      <button type='submit' className=' font-semibold w-52 text-center bg-theme_yellow py-2 px-6'> Upload</button>
      </div>
    </div>
  );
};

export default NewsAd;