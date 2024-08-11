import React, { useEffect, useState } from "react";
import { PiMedalFill } from "react-icons/pi";
import { PiMedalBold } from "react-icons/pi";
import { PiMedalLight } from "react-icons/pi";
import ImageDownload from "./ImageDownlad";
import { categories, itemsByCategory } from "../data/data.js";
import axios from "axios";
import { baseUrl, getDataServer } from "../api/apiCall";
import toast from "react-hot-toast";
const Results = () => {
  const [category, setCategory] = useState("");
  const [selectedItem, setSelectedItem] = useState("");
  const [items, setItems] = useState([]);
  const [results, setResults] = useState(null);
  const [images, setImages] = useState([null, null, null]);
  const [color, setColor] = useState([null, null, null]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/showImage`);
        const data = response.data.data;
        console.log(data.image1.image); // Logging the fetched data

        const newImages = [
          data.image1.image ? data.image1.image : null,
          data.image2.image ? data.image2.image : null,
          data.image3.image ? data.image3.image : null,
        ];

        const newColor = [
          data.image1.color ? data.image1.color : null,
          data.image2.color ? data.image2.color : null,
          data.image3.color ? data.image3.color : null,
        ];

        setImages(newImages);
        setColor(newColor);

        // Logging the URLs directly
        newImages.forEach((image, index) => {
          if (image) {
            console.log(`Image ${index + 1} URL: ${image}`);
          }
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setCategory(selectedCategory);
    setItems(itemsByCategory[selectedCategory] || []);
    setResults(null);
  };

  const handleItemData = async (event) => {
    const itemValue = event.target.value;
    setSelectedItem(itemValue);

    try {
      toast.loading("Waiting...");
      const response = await getDataServer(itemValue, category);
      setResults(response.data);
      toast.dismiss();
      if (response.data) {
        toast.success(`Yes, ${category} ${selectedItem} result published`);
      } else {

        toast(`NO, ${category} ${selectedItem} result published Yet`);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.dismiss();
      toast.error("Failed to fetch results. Please try again.");
    }
  };
  console.log(color);

  return (
    <section className="mt-16 ">
      <div className="max-container padding-y padding-x">
        <h1 className="mb-8 text-left font-mono text-4xl text-theme_black">
          Results
        </h1>
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-6">
          <div>
            <form className="mx-auto w-full  font-poppins">
              <select
                onChange={handleCategoryChange}
                id="category"
                className="cursor-pointer mb-6 bg-light_gray border border-theme_black text-theme_black text-sm focus:ring-theme_black focus:border-theme_gold block w-full p-2.5 "
              >
                <option value="">Select Category</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>

              <select
                id="event"
                onChange={handleItemData}
                className=" cursor-pointer mb-6 bg-light_gray border border-theme_black text-theme_black text-sm focus:ring-theme_black focus:border-theme_gold block w-full p-2.5"
              >
                <option selected>Select Item</option>
                {items.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </form>
            <p className="max-md:hidden font-baloo font-semibold text-theme_black mt-10 text-2xl leading-10">
              ഇനിയും മരിക്കാത്ത ആത്മാക്കളേ, <br /> ഹൃദയം മരിക്കാതെ കാത്ത്
              കൊൾക....
              <br />
              നനവുള്ള മണ്ണിൽ ഒരു ചെറു നാമ്പെങ്കിലും കാണാം...
            </p>
          </div>
          <div className="winners w-full h-auto font-poppins bg-light_gray text-theme_black flex flex-col  border border-theme_black p-5">
          {results&&(
            <>
            
            <div className="text-center">
          
              <h1 className="text-2xl font-light">{category}</h1>
              <h1 className="text-3xl font-bold">{selectedItem}</h1>
            </div>
            <div className="flex items-start gap-2 mt-6">
              <PiMedalFill size={30} color={"gold"} className="first_place" />
              <div>
                <h1 className="font-semibold text-xl">
                  {results.result[0].firstPrice}
                </h1>
                <h1 className="font-light">{results.result[0].firstUnit}</h1>
              </div>
            </div>
            <div className="flex items-start gap-2 mt-6">
              <PiMedalBold
                size={30}
                color={"silver"}
                className="second_place"
              />
              <div>
                <h1 className="font-semibold text-xl">
                  {results.result[1].secPrice}
                </h1>
                <h1 className="font-light">{results.result[1].secUnit}</h1>
              </div>
            </div>
            <div className="flex items-start gap-2 mt-6">
              <PiMedalLight
                size={30}
                color={"bronze"}
                className="third_place"
              />
              <div>
                <h1 className="font-semibold text-xl">
                  {results.result[2].thirdPrice}{" "}
                </h1>
                <h1 className="font-light">{results.result[2].thirdUnit}</h1>
              </div>
            </div>
            </>
          )}
             {results == false && (
          <div className="bg-yellow-100 border-l-4 mx-10 text-center border-yellow-500 text-yellow-700 p-4 mt-4 rounded-md">
            <h2 className="font-bold text-lg">Notice:</h2>
            <p className="mt-2">
              The results for the {category} {selectedItem} Competition have not
              yet been published. Please check back later for updates.
            </p>
          </div>
        )}
          </div>
        </div>
      </div>
      <div
        className={`grid grid-cols-1 px-4 py-6 sm:px-8 sm:py-8 overflow-scroll hide-scrollbar::-webkit-scrollbar hide-scrollbar  lg:px-20 lg:py-12 lg:grid-cols-2 xl:grid-cols-3 ${
          results ? "bg-slate-100" : ""
        } lg:px-28 `}
      >
        <ImageDownload
          results={results}
          category={category}
          selectedItem={selectedItem}
          image={images[0]}
          color={`text-${color[0]}`}
        />
        <ImageDownload
          results={results}
          category={category}
          selectedItem={selectedItem}
          image={images[1]}
          color={`text-${color[1]}`}
        />
        <ImageDownload
          results={results}
          category={category}
          selectedItem={selectedItem}
          image={images[2]}
          color={`text-${color[2]}`}
        />
      </div>
    </section>
  );
};

export default Results;
