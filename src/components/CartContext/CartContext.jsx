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

  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.product_id !== productId)
    );
    toast.success("Product removed from cart");
  };

  const removeFromWishlist = (productId) => {
    setWishlistItems((prev) =>
      prev.filter((item) => item.product_id !== productId)
    );
    toast.success("Product removed from wishlist");
  };

  const clearCart = () => {
    setCartItems([]); // Clear the cart items
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        wishlistItems,
        addToCart,
        addToWishlist,
        removeFromCart,
        removeFromWishlist,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
