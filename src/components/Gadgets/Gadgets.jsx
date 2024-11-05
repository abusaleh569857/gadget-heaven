import React, { useEffect, useState } from "react";
import Gadget from "../Gadget/Gadget";

const Gadgets = () => {
  // State for load fake json data
  const [gadgets, setGadgets] = useState([]);
  // useEffect
  useEffect(() => {
    fetch("./productsData.json")
      .then((res) => res.json())
      .then((data) => setGadgets(data));
  }, []);
  return (
    <div>
      <h2 className="text-4xl text-center font-bold my-3">
        Explore Cutting-Edge Gadgets
      </h2>
      <div className="flex gap-5 w-[90%] mx-auto ">
        <div className="w-1/4">
          <div className="flex flex-col gap-3">
            <button className="bg-[#9538E2] text-center text-white py-2 px-4 rounded-full font-semibold">
              All Product
            </button>
            <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded-full hover:bg-gray-300">
              Laptops
            </button>
            <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded-full hover:bg-gray-300">
              Phones
            </button>
            <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded-full hover:bg-gray-300">
              Accessories
            </button>
            <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded-full hover:bg-gray-300">
              Smart Watches
            </button>
            <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded-full hover:bg-gray-300">
              MacBook
            </button>
            <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded-full hover:bg-gray-300">
              iPhone
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {gadgets.map((gadget) => (
            <Gadget key={gadget.product_id} gadget={gadget}></Gadget>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gadgets;
