import React, { useState, useEffect } from "react";
import { useCart } from "../CartContext/CartContext";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const {
    cartItems,
    wishlistItems,
    addToCart,
    removeFromCart,
    removeFromWishlist,
    clearCart, // Add clearCart from context
  } = useCart();
  const [isCartView, setIsCartView] = useState(true);
  const [sortedCartItems, setSortedCartItems] = useState(cartItems);
  const [showModal, setShowModal] = useState(false);
  const [totalCost, setTotalCost] = useState(
    cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2)
  );
  const navigate = useNavigate();

  // Sort cart items by descending price
  const sortByDescendingPrice = () => {
    const sortedItems = [...cartItems].sort((a, b) => b.price - a.price);
    setSortedCartItems(sortedItems);
  };

  // Handle purchase click to show modal
  const handlePurchase = () => {
    setShowModal(true); // Show success modal
  };

  // Confirm payment, clear cart, and set totalCost to 0
  const clearCartItem = () => {
    clearCart(); // Clear cart items
    setTotalCost(0); // Reset total cost
    setShowModal(false); // Close modal
    navigate("/"); // Redirect to home
  };

  // Function to handle item removal
  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  // Update sorted cart items and totalCost whenever cartItems changes
  useEffect(() => {
    setSortedCartItems(cartItems);
    setTotalCost(
      cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2)
    );
  }, [cartItems]);

  return (
    <div className="min-h-[300px] bg-gray-100 ">
      <ToastContainer position="top-center" autoClose={3000} />
      <div className="text-center py-8 bg-purple-500 text-white">
        <h2 className="text-3xl font-bold">Dashboard</h2>
        <p className="mt-2">
          Explore the latest gadgets that will take your experience to the next
          level.
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
            <div className="flex flex-col gap-3 md:flex-row lg:flex-row justify-between items-center mb-4">
              <h3 className="text-2xl font-bold">Cart</h3>
              <div className="flex flex-col gap-3 md:flex-row lg:flex-row items-center">
                <span className="font-bold">Total cost: ${totalCost}</span>
                <button
                  onClick={sortByDescendingPrice}
                  className="px-4 py-2 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition-all duration-300"
                >
                  Sort by Price
                </button>
                <button
                  onClick={handlePurchase}
                  className="px-4 py-2 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition-all duration-300"
                  disabled={cartItems.length === 0 || totalCost === 0} // Disable if cart is empty
                >
                  Purchase
                </button>
              </div>
            </div>
            {sortedCartItems.map((item) => (
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
                    <p className="text-[#09080F99]">{item.description}</p>
                    <p className="text-gray-600">Price: ${item.price}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleRemoveFromCart(item.product_id)}
                  className="text-xl"
                >
                  ❌
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
                    <p className="text-[#09080F99]">{item.description}</p>
                    <p className="text-gray-600">Price: ${item.price}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => {
                      addToCart(item);
                      removeFromWishlist(item.product_id);
                    }}
                    className="px-4 py-2 bg-purple-500 text-white rounded"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => removeFromWishlist(item.product_id)}
                    className="text-xl"
                  >
                    ❌
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal for Payment Success */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm mx-auto">
            <img
              src="https://i.ibb.co.com/bHKTL3f/Group.png"
              alt="Success Icon"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-2xl font-bold">Payment Successful</h3>
            <p className="text-gray-600 mt-2">Thanks for purchasing.</p>
            <p className="text-gray-600">Total: ${totalCost}</p>
            <button
              onClick={clearCartItem}
              className="mt-6 px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-all duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
