import React from "react";
import { useCart } from "../CartContext/CartContext";
import { Link } from "react-router-dom";

const WishlistPage = () => {
  const { wishlistItems, removeFromWishlist } = useCart();

  if (wishlistItems.length === 0) {
    return (
      <div className="container mx-auto p-5">
        <h2 className="text-2xl font-bold">Your Wishlist is Empty</h2>
        <p>
          Add some items to your wishlist to keep track of your favorite
          products!
        </p>
        <Link to="/" className="btn btn-primary mt-4">
          Go to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-5">
      <h2 className="text-2xl font-bold">Your Wishlist</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {wishlistItems.map((item) => (
          <div key={item.product_id} className="border p-4 rounded-md">
            <img
              src={item.product_image}
              alt={item.product_title}
              className="w-full h-[200px] object-cover"
            />
            <h3 className="text-lg font-semibold">{item.product_title}</h3>
            <p>{item.description}</p>
            <p className="font-bold">${item.price}</p>
            <button
              onClick={() => removeFromWishlist(item.product_id)}
              className="bg-red-500 text-white p-2 rounded-full mt-2"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishlistPage;
