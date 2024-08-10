import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getallnews } from "../api/apiCall";

const News = () => {
  const navigate = useNavigate();
  const [newsData, setNewData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await getallnews();
      console.log(response.data);
      setNewData(response.data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="mt-16 padding-y padding-x max-container">
      <h1 className="mb-8 text-left font-mono text-4xl text-theme_black">
        News
      </h1>
      <div className="grid max-lg:grid-cols-2 max-sm:grid-cols-1 grid-cols-3 gap-8">
        {newsData.map((news) => (
          <div
            key={news._id}
            onClick={() => {
              navigate("/newscnt", { state: { id: news._id } });
            }}
            className="w-full h-full overflow-hidden rounded-tr-3xl rounded-bl-3xl shadow-xl cursor-pointer"
          >
            <img
              className="rounded-tr-3xl rounded-bl-3xl shadow-lg hover:scale-105 transform transition-transform duration-300"
              src={news.image}
              alt={news.heading}
            />
            <div className="p-5">
              <h5 className="font-baloo mb-2 text-lg max-w-lg font-bold tracking-tight text-theme_black">
                {news.heading}
              </h5>
              <p className="line-clamp-3 font-baloo leading-5 text-sm">
                {news.news}
              </p>
            </div>
            <div
              onClick={() => {
                navigate("/newscnt", { state: { id: news._id } });
              }}
              className="p-5 inline-flex items-center text-sm font-medium text-theme_red cursor-pointer"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default News;
