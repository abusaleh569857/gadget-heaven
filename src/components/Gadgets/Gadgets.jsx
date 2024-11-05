import React, { useEffect, useState } from "react";
import Gadget from "../Gadget/Gadget";

const Gadgets = () => {
  // State for loading the gadgets data
  const [gadgets, setGadgets] = useState([]);

  // State for the selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // useEffect to fetch the data from the JSON file
  useEffect(() => {
    fetch("./productsData.json")
      .then((res) => res.json())
      .then((data) => setGadgets(data));
  }, []);

  // Function to filter gadgets based on the selected category
  const filterGadgets = (category) => {
    if (category === "All") {
      return gadgets;
    }
    return gadgets.filter(
      (gadget) => gadget.category.toLowerCase() === category.toLowerCase()
    );
  };

  // Handle category button clicks
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  // Get the filtered gadgets based on the selected category
  const filteredGadgets = filterGadgets(selectedCategory);

  return (
    <div>
      <h2 className="text-4xl text-center font-bold my-3 pb-5">
        Explore Cutting-Edge Gadgets
      </h2>
      <div className="flex flex-col md:flex-row lg:flex-row gap-5 w-[90%] mx-auto ">
        <div className="w-[90%] md:w-1/4 lg:w-1/4">
          <div className="flex flex-col gap-3">
            {/* All Products Button */}
            <button
              className={`py-2 px-4 rounded-full font-semibold text-center ${
                selectedCategory === "All"
                  ? "bg-[#9538E2] text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              onClick={() => handleCategoryClick("All")}
            >
              All Products
            </button>

            {/* Laptop Button */}
            <button
              className={`py-2 px-4 rounded-full font-semibold text-center ${
                selectedCategory === "laptop"
                  ? "bg-[#9538E2] text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              onClick={() => handleCategoryClick("laptop")}
            >
              Laptops
            </button>

            {/* Phone Button */}
            <button
              className={`py-2 px-4 rounded-full font-semibold text-center ${
                selectedCategory === "phone"
                  ? "bg-[#9538E2] text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              onClick={() => handleCategoryClick("phone")}
            >
              Phones
            </button>

            {/* Accessories Button */}
            <button
              className={`py-2 px-4 rounded-full font-semibold text-center ${
                selectedCategory === "accessories"
                  ? "bg-[#9538E2] text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              onClick={() => handleCategoryClick("accessories")}
            >
              Accessories
            </button>

            {/* MacBook Button */}
            <button
              className={`py-2 px-4 rounded-full font-semibold text-center ${
                selectedCategory === "macbook"
                  ? "bg-[#9538E2] text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              onClick={() => handleCategoryClick("macbook")}
            >
              MacBooks
            </button>
          </div>
        </div>

        {/* Display gadgets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredGadgets.length === 0 ? (
            <p className="text-center text-xl text-red-500">
              No items found in this category.
            </p>
          ) : (
            filteredGadgets.map((gadget) => (
              <Gadget key={gadget.product_id} gadget={gadget} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Gadgets;
