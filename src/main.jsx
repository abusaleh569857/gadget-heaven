import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./components/Home/Home";
import Statistics from "./components/Statistics/Statistics";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import { CartProvider } from "./components/CartContext/CartContext";

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
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      {" "}
      {/* Wrap the RouterProvider with CartProvider */}
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>
);

// import React, { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Root from "./components/Root/Root";
// import ErrorPage from "./components/ErrorPage/ErrorPage";
// import Dashboard from "./components/Dashboard/Dashboard";
// import Home from "./components/Home/Home";
// import Statistics from "./components/Statistics/Statistics";
// import ProductDetails from "./components/ProductDetails/ProductDetails";
// import { CartProvider } from "./components/CartContext/CartContext"; // Adjust the path as necessary

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     errorElement: <ErrorPage />,
//     children: [
//       { path: "/", element: <Home /> },
//       { path: "/statistics", element: <Statistics /> },
//       { path: "/dashboard", element: <Dashboard /> },
//       { path: "/product/:product_id", element: <ProductDetails /> },
//     ],
//   },
// ]);

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <CartProvider>
//       {" "}
//       {/* Ensure CartProvider wraps the RouterProvider */}
//       <RouterProvider router={router} />
//     </CartProvider>
//   </StrictMode>
// );
