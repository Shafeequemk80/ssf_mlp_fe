import React, { useState } from "react";
import { postDataServer } from "../api/apiCall.js";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

import { categories, itemsByCategory,teams } from "../data/data.js";
const ResultAd = () => {
  const [category, setcategory] = useState("");
  const [items, setItems] = useState([]);
  const [formData, setFormData] = useState({
    item: "",
    firstPrice: "",
    firstUnit: "",
    secPrice: "",
    secUnit: "",
    thirdPrice: "",
    thirdUnit: "",
  });

  const handleCategoryChange = (event) => {
    const cate = event.target.value;
    console.log(cate);
    
    setcategory(cate);
    setItems(itemsByCategory[cate]);
  };
  const handleformData = (event) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };
  const handlesumbit = async (event) => {
    event.preventDefault();
    toast.loading("Waiting...");
    console.log("sumbit");

    const postData = {
      ...formData,
      category,
    };
    if (
      !postData.item.trim() ||
      !postData.firstPrice.trim() ||
      !postData.firstUnit.trim() ||
      !postData.secPrice.trim() ||
      !postData.secUnit.trim() ||
      !postData.thirdPrice.trim() ||
      !postData.thirdUnit.trim()
    ) {
      toast.dismiss();
      toast.error("Please fill out all fields before submitting.");
      return; // Exit the function if validation fails
    }

    const data = await postDataServer(postData);
    console.log(data, data);
    toast.dismiss();
    toast.success("Successfully Added!");
    setFormData({
      item: "",
      firstPrice: "",
      firstUnit: "",
      secPrice: "",
      secUnit: "",
      thirdPrice: "",
      thirdUnit: "",
    });
  };

  const navigate = useNavigate();
  return (
    <div className="border-x-2   border-b-2 border-theme_black w-full  pb-10 pt-6 padding-x">
      <h1 className="mb-2 font-poppins font-semibold text-center text-3xl">
        Results
      </h1>
      <button
        onClick={() => {
          navigate("/admin/addimage");
        }}
        className="border cursor-pointer border-theme_black w-full p-3 mb-4 text-center font-medium bg-theme_yellow"
      >
        Upload Poster Template
      </button>
      <form onSubmit={handlesumbit} className="flex flex-col font-poppins">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-2">
          <select
            name="category"
            onChange={handleCategoryChange}
            
            className="w-full cursor-pointer border border-theme_black p-3"
            id="category"
          >
              <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <select
            name="item"
            className="w-full cursor-pointer border border-theme_black p-3"
            id="item"
            value={formData.item}
            onChange={handleformData}
          >
            <option value="">Select Item</option>
            {items.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
        </div>

        <div className="mt-6 flex flex-col ">
          <div className="mb-3">
            <label className=" " htmlFor="">
              First Price
            </label>
          </div>
          <div className="flex max-md:flex-col gap-6 ">
            <div className="w-full">
              <input
                onChange={handleformData}
                value={formData.firstPrice}
                type="text"
                id="firstPrice"
                className="w-full cursor-pointer border border-theme_black p-3 placeholder:text-black mb-2"
                placeholder="Enter Name"
              />
            </div>
            <div className="w-full">
              <select
                name=""
                onChange={handleformData}
                value={formData.firstUnit}
                className="w-full cursor-pointer border border-theme_black p-3"
                id="firstUnit"
              >
                  <option value="">Select Team</option>
                {teams.map((team) => (
                  <option key={team} value={team}>{team}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col ">
          <div className="mb-3">
            <label className=" " htmlFor="">
              Sec Price
            </label>
          </div>
          <div className="flex max-md:flex-col gap-6 my-1">
            <div className="w-full">
              <input
                value={formData.secPrice}
                onChange={handleformData}
                type="text"
                id="secPrice"
                className="w-full cursor-pointer border border-theme_black p-3 placeholder:text-black mb-2"
                placeholder="Enter Name"
              />
            </div>
            <div className="w-full">
              <select
                name="item"
                onChange={handleformData}
                value={formData.secUnit}
                className="w-full cursor-pointer border border-theme_black p-3"
                id="secUnit"
              >
                   <option value="">Select Team</option>
                {teams.map((team) => (
                  <option key={team} value={team}>{team}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="my-6  flex flex-col ">
          <div className="mb-3">
            <label className=" " htmlFor="">
              Third Price
            </label>
          </div>
          <div className="flex max-md:flex-col gap-6 my-1">
            <div className="w-full">
              <input
                value={formData.thirdPrice}
                onChange={handleformData}
                type="text"
                className="w-full cursor-pointer border border-theme_black p-3 placeholder:text-black mb-2"
                placeholder="Enter Name"
                id="thirdPrice"
              />
            </div>
            <div className="w-full">
              <select
                name="item"
                value={formData.thirdUnit}
                onChange={handleformData}
             
                className="w-full cursor-pointer border border-theme_black p-3"
                id="thirdUnit"
              >
                   <option value="">Select Team</option>
                {teams.map((team) => (
                  <option key={team} value={team}>{team}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <button
          className="border border-theme_black cursor-pointer  bg-theme_red p-3 text-white font-medium"
          type="submit"
        >
          Upload
        </button>
      </form>
      <Toaster />
    </div>
  );
};

export default ResultAd;
