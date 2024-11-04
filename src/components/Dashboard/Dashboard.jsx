import React, { useState } from "react";
import { useCart } from "../CartContext/CartContext";
import { ToastContainer } from "react-toastify"; // Import the useCart hook

const Dashboard = () => {
  const { cartItems, wishlistItems, removeFromCart, removeFromWishlist } =
    useCart();
  const [isCartView, setIsCartView] = useState(true); // Toggle between Cart and Wishlist

  // Calculate total cost of items in the cart
  const totalCost = cartItems
    .reduce((acc, item) => acc + item.price, 0)
    .toFixed(2);

  return (
    <div className="min-h-screen bg-gray-100 pt-8">
      <ToastContainer
        position="top-center" // Center the toast messages
      />
      <div className="text-center py-8 bg-purple-500 text-white">
        <h2 className="text-3xl font-bold">Dashboard</h2>
        <p className="mt-2">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="mt-4">
          <button
            onClick={() => setIsCartView(true)}
            className={`px-4 py-2 rounded-full ${
              isCartView
                ? "bg-white text-purple-500"
                : "bg-purple-700 text-white"
            }`}
          >
            Cart
          </button>
          <button
            onClick={() => setIsCartView(false)}
            className={`ml-4 px-4 py-2 rounded-full ${
              !isCartView
                ? "bg-white text-purple-500"
                : "bg-purple-700 text-white"
            }`}
          >
            Wishlist
          </button>
        </div>
      </div>

      <div className="px-8 mt-6">
        {isCartView ? (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold">Cart</h3>
              <div className="flex items-center gap-4">
                <span className="font-bold">Total cost: ${totalCost}</span>
                <button className="px-4 py-2 bg-purple-500 text-white rounded-full">
                  Sort by Price
                </button>
                <button className="px-4 py-2 bg-purple-500 text-white rounded-full">
                  Purchase
                </button>
              </div>
            </div>
            {cartItems.map((item) => (
              <div
                key={item.product_id}
                className="flex items-center justify-between bg-white p-4 mb-2 rounded shadow"
              >
                <div className="flex items-center">
                  <img
                    src={item.product_image}
                    alt={item.product_title}
                    className="w-16 h-16 mr-4 rounded"
                  />
                  <div>
                    <h4 className="text-xl font-semibold">
                      {item.product_title}
                    </h4>
                    <p className="text-gray-600">Price: ${item.price}</p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.product_id)}
                  className="text-red-500 text-xl"
                >
                  ✖
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <h3 className="text-2xl font-bold mb-4">Wishlist</h3>
            {wishlistItems.map((item) => (
              <div
                key={item.product_id}
                className="flex items-center justify-between bg-white p-4 mb-2 rounded shadow"
              >
                <div className="flex items-center">
                  <img
                    src={item.product_image}
                    alt={item.product_title}
                    className="w-16 h-16 mr-4 rounded"
                  />
                  <div>
                    <h4 className="text-xl font-semibold">
                      {item.product_title}
                    </h4>
                    <p className="text-gray-600">Price: ${item.price}</p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromWishlist(item.product_id)}
                  className="text-red-500 text-xl"
                >
                  ✖
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
