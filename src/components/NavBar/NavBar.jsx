// import { NavLink } from "react-router-dom";
// import { CiShoppingCart } from "react-icons/ci"; // Import the shopping cart icon
// import { AiOutlineHeart } from "react-icons/ai"; // Import a heart icon for the wishlist

// const NavBar = () => {
//   const links = (
//     <>
//       <li>
//         <NavLink to="/">Home</NavLink>
//       </li>
//       <li>
//         <NavLink to="/statistics">Statistics</NavLink>
//       </li>
//       <li>
//         <NavLink to="/dashboard">Dashboard</NavLink>
//       </li>
//     </>
//   );

//   return (
//     <div className="navbar bg-[#9538E2]">
//       <div className="navbar-start">
//         <div className="dropdown">
//           <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h8m-8 6h16"
//               />
//             </svg>
//           </div>
//           <ul
//             tabIndex={0}
//             className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
//           >
//             {links}
//           </ul>
//         </div>
//         <a className="btn btn-ghost text-xl">Gadget Heaven</a>
//       </div>
//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1">{links}</ul>
//       </div>
//       <div className="navbar-end flex gap-2">
//         <button className="btn btn-ghost">
//           <CiShoppingCart className="h-6 w-6" />
//         </button>
//         <button className="btn btn-ghost">
//           <AiOutlineHeart className="h-6 w-6" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default NavBar;

// src/components/NavBar/NavBar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "../CartContext/CartContext"; // Import the useCart hook

const NavBar = () => {
  const { cartItems, wishlistItems } = useCart(); // Get cart and wishlist items from the context

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/statistics">Statistics</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-[#9538E2]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
      <div className="navbar-center hidden lg:flex">
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
