import React, { useState } from 'react';
import {submitnews} from '../api/apiCall.js'
import toast, { Toaster } from 'react-hot-toast';
const NewsAd = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [header, setHeader] = useState('');

  const [content, setContent] = useState('');

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    toast.loading('loading added');
    e.preventDefault();

    const formData = new FormData();
    const imageFile = document.getElementById('news-image-upload').files[0];

    formData.append('image', imageFile);
    formData.append('header', header);
    formData.append('content', content);

    try {
      const response = await submitnews(formData)

      if (response.message==true) {
        toast.dismiss()
        toast.success('success added');
        console.log('News uploaded successfully');
        setImagePreview(null)
        setHeader('')
        setContent('')

      } else {
        console.error('Failed to upload news');
      }
    } catch (error) {
      console.error('Error uploading news:', error);
    }
  };

  return (
    <div className="border-x-2 border-b-2 border-theme_black w-full pb-10 pt-6 px-4 sm:px-8 lg:px-16">
      <h1 className="mb-6 font-poppins font-semibold text-center text-2xl sm:text-3xl">
        News
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="flex flex-col items-center sm:w-1/3">
            <input
              type="file"
              id="news-image-upload"
              className="hidden"
              onChange={handleImageUpload}
            />
            <label
              htmlFor="news-image-upload"
              className="py-3 px-5 bg-light_gray border-2 border-black cursor-pointer text-center"
            >
              Upload News Image
            </label>
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                className="mt-4 max-h-40 object-cover w-full"
              />
            )}
          </div>
          <div className="flex flex-col flex-1 gap-4">
            <input
              type="text"
              className="py-3 px-5 border-2 border-black bg-light_gray text-black placeholder:text-black w-full"
              placeholder="Enter Header"
              value={header}
              onChange={(e) => setHeader(e.target.value)}
            />

            <textarea
              className="py-3 px-5 bg-light_gray border-black border-2 text-black placeholder:text-black w-full"
              placeholder="Enter News Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows="5"
            />
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <button
            type="submit"
            className="font-semibold w-full sm:w-52 text-center bg-theme_yellow py-2 px-6"
          >
            Upload
          </button>
        </div>
      </form>
      <Toaster />
    </div>
  );
};

export default NewsAd;
