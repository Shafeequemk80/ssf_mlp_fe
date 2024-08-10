import React, { useEffect, useState } from "react";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
import { getNewsContent } from "../api/apiCall";


const NewsCnt = () => {
  const location = useLocation();
  const [newsData, setNewData] = useState({});
  const { id } = location.state || {};
console.log(id);

  useEffect(() => {
    async function fetchData(id) {
     if(id){
      const response =await getNewsContent(id);
      console.log(response.data);
      
      setNewData(response.data);
     }
    }
    fetchData(id)
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="mt-16 max-container padding-y padding-x ">
      <div className="mb-8 flex max-md:flex-col max-md:items-start justify-between items-end ">
        <img className="md:w-2/3 h-auto mb-2 md:mb-6" src={newsData.image} alt="" />
        <div className="mb-5 max-md:hidden">
          <h2 className="font-poppins mb-2 text-gray-400">August 07, 2024</h2>
          <a href="https://whatsapp.com/channel/0029Vahbl5FKWEKmOoxvzj0D">
            <h2 className="flex items-center cursor-pointer gap-2 leading-4 font-semibold">
              For more
              <br /> updates{" "}
              <span>
                <FaSquareWhatsapp color={"green"} size={40} />
              </span>
            </h2>
          </a>
        </div>
        <a
          href="https://whatsapp.com/channel/0029Vahbl5FKWEKmOoxvzj0D"
          className="cursor-pointer"
        >
          <h2 className="flex items-center md:hidden font-poppins text-xs gap-2 leading-4 font-semibold">
            <span className="text-gray-400">August 07, 2024</span>For more
            updates
            <span>
              <FaSquareWhatsapp color={"green"} size={20} />
            </span>
          </h2>
        </a>
      </div>
      <h1 className=" mb-8 w-2/3 text-left font-baloo leading-9 font-bold text-3xl text-theme_black">
       {newsData.heading}
      </h1>

      <div className="font-baloo font-xl font-medium">
      {newsData.news}
      </div>

      <div className="grid max-md:grid-cols-2 max-sm:grid-cols-1 grid-cols-3 gap-8 " />
    </section>
  );
};

export default NewsCnt;
