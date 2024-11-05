import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root";
// import App from "./App";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Dashboard from "./components/Dashboard/Dashboard";
import CartPage from "./components/CartPage/CartPage";
import WishlistPage from "./components/WishlistPage/WishlistPage";
import Home from "./components/Home/Home";
import Statistics from "./components/Statistics/Statistics";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import { CartProvider } from "./components/CartContext/CartContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/product/:product_id",
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "/cart",
        element: <CartPage></CartPage>,
      },
      {
        path: "/wishlist",
        element: <WishlistPage></WishlistPage>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App></App> */}
    <CartProvider>
      {" "}
      <ToastContainer position="top-center" autoClose={3000} />
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>
);
