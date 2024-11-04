// // src/components/CartContext/CartContext.jsx
// import React, { createContext, useState, useContext } from "react";

// // Create the context
// export const CartContext = createContext();

// // Create the provider component
// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);
//   const [wishlistItems, setWishlistItems] = useState([]);

//   const addToCart = (product) => {
//     setCartItems((prev) => [...prev, product]);
//   };

//   const addToWishlist = (product) => {
//     setWishlistItems((prev) => [...prev, product]);
//   };

//   return (
//     <CartContext.Provider
//       value={{ cartItems, wishlistItems, addToCart, addToWishlist }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// // Custom hook to use the CartContext
// export const useCart = () => {
//   return useContext(CartContext);
// };

// src/components/CartContext/CartContext.jsx
import React, { createContext, useState, useContext } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  const addToCart = (product) => {
    if (cartItems.some((item) => item.product_id === product.product_id)) {
      toast.error("Product already added to cart");
    } else {
      setCartItems((prev) => [...prev, product]);
      toast.success("Product added to cart");
    }
  };

  const addToWishlist = (product) => {
    if (wishlistItems.some((item) => item.product_id === product.product_id)) {
      toast.error("Product already added to wishlist");
    } else {
      setWishlistItems((prev) => [...prev, product]);
      toast.success("Product added to wishlist");
    }
  };

  return (
    <CartContext.Provider
      value={{ cartItems, wishlistItems, addToCart, addToWishlist }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
