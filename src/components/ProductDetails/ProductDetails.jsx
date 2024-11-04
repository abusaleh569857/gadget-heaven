import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../CartContext/CartContext"; // Make sure to use your context hook
import { ToastContainer, toast } from "react-toastify"; // Import ToastContainer and toast
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS

function ProductDetails() {
  const { product_id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart, addToWishlist } = useCart(); // Use the correct context

  useEffect(() => {
    fetch("/productsData.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedProduct = data.find(
          (item) => item.product_id === parseInt(product_id)
        );
        setProduct(selectedProduct);
      });
  }, [product_id]);

  if (!product) return <p>Loading...</p>;

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleAddToWishlist = () => {
    addToWishlist(product);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-8">
      <ToastContainer
        position="top-center" // Center the toast messages
      />
      {/* Add ToastContainer here */}
      <div className="w-full max-w-3xl bg-purple-500 text-white py-4 px-8 rounded-t-lg text-center">
        <h2 className="text-2xl font-semibold">Product Details</h2>
        <p className="text-sm mt-2">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <div className="w-full max-w-3xl bg-white p-8 rounded-b-lg shadow-lg mt-[-8px]">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-1/3 bg-gray-200 rounded-lg h-64 flex items-center justify-center">
            <img
              src={product.product_image}
              alt={product.product_title}
              className="rounded-lg"
            />
          </div>

          <div className="w-full lg:w-2/3 flex flex-col gap-4">
            <h3 className="text-2xl font-bold">{product.product_title}</h3>
            <p className="text-lg font-semibold">Price: ${product.price}</p>
            <span
              className={`py-1 px-3 rounded-full text-sm font-medium inline-block ${
                product.availability
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {product.availability ? "In Stock" : "Out of Stock"}
            </span>
            <p className="text-gray-700">{product.description}</p>

            <div>
              <h4 className="font-semibold">Specification:</h4>
              <ul className="list-decimal list-inside text-gray-700">
                {product.Specification.map((spec, index) => (
                  <li key={index}>{spec}</li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-1">
              <h4 className="font-semibold">Rating:</h4>
              <div className="flex items-center text-yellow-500">
                {Array(Math.floor(product.rating))
                  .fill("⭐")
                  .map((star, index) => (
                    <span key={index}>{star}</span>
                  ))}
                {product.rating % 1 !== 0 && <span>⭐</span>}
              </div>
              <span className="ml-2 text-gray-600">({product.rating})</span>
            </div>

            <div className="flex items-center gap-4 mt-4">
              <button
                className="bg-purple-500 text-white py-2 px-6 rounded-full hover:bg-purple-600 flex items-center gap-2"
                onClick={handleAddToCart}
              >
                Add To Cart
                <span className="text-lg">🛒</span>
              </button>
              <button
                className="bg-purple-500 text-white py-2 px-6 rounded-full hover:bg-purple-600 flex items-center gap-2"
                onClick={handleAddToWishlist}
              >
                Add To Wishlist
                <span className="text-lg">❤️</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
