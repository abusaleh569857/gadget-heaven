// import React from "react";
import { NavLink, useLocation } from "react-router-dom"; // Import useLocation hook
import { useCart } from "../CartContext/CartContext"; // Import the useCart hook

const NavBar = () => {
  const { cartItems, wishlistItems } = useCart(); // Get cart and wishlist items from the context
  const location = useLocation();

  // Links for navigation
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "bg-[#9538E2] text-white" : "text-black"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/statistics"
          className={({ isActive }) =>
            isActive ? "bg-[#9538E2] text-white" : "text-black"
          }
        >
          Statistics
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? "bg-[#9538E2] text-white" : "text-black"
          }
        >
          Dashboard
        </NavLink>
      </li>
    </>
  );

  // Apply background color conditionally
  const navbarBgColor = location.pathname === "/" ? "bg-[#9538E2]" : "bg-white";

  return (
    <div className={`navbar ${navbarBgColor}`}>
      {/* Apply dynamic background color */}
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost md:hidden lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Gadget Heaven</a>
      </div>
      <div className="navbar-center hidden md:flex lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <div className="flex items-center gap-4">
          <NavLink to="/cart" className="btn">
            🛒 {cartItems.length}
          </NavLink>
          <NavLink to="/wishlist" className="btn">
            ❤️ {wishlistItems.length}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
