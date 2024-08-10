import React, { useState } from 'react';
import ResultAd from './ResultAd';
import NewsAd from './NewsAd';
import VideosAd from './VideosAd';
import GalleryAd from './GalleryAd';
import ScoreAd from './ScoreAd';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('results');

  const handleClick = (tab) => {
    setActiveTab(tab);
  };

  const tabs = [
    { label: 'Results', value: 'results' },
    { label: 'News', value: 'news' },
    { label: 'Videos', value: 'videos' },
    { label: 'Gallery', value: 'gallery' },
    { label: 'Score', value: 'scoread' },
  ];

  return (
    <div className="mt-16 padding-y padding-x max-container">
      <div className="h-16 w-full bg-theme_black cursor-pointer px-3">
        <div className="h-full text-white font-poppins flex gap-6 justify-between items-center">
          {tabs.map((tab) => (
            <h1
              key={tab.value}
              onClick={() => handleClick(tab.value)}
              className={`font-poppins font-medium text-center max-md:text-sm text-xl ${
                activeTab === tab.value ? 'text-theme_yellow underline' : ''
              } py-5 w-full`}
            >
              {tab.label}
            </h1>
          ))}
        </div>
      </div>

      {activeTab === 'results' && <ResultAd />}
      {activeTab === 'news' && <NewsAd />}
      {activeTab === 'videos' && <VideosAd />}
      {activeTab === 'gallery' && <GalleryAd />}
      {activeTab === 'scoread' && <ScoreAd />}
    </div>
  );
};

export default Admin;
