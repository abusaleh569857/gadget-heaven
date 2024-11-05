// import { Outlet } from "react-router-dom";
// import NavBar from "../NavBar/NavBar";
// import Footer from "../Footer/Footer";

// const Root = () => {
//   return (
//     <div className="max-w-6xl mx-auto">
//       <NavBar></NavBar>
//       <Outlet></Outlet>
//       <Footer></Footer>
//     </div>
//   );
// };

// export default Root;
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const Root = () => {
  const location = useLocation(); // Access current route's location object

  useEffect(() => {
    let pageTitle = "Gadget Heaven"; // Default title

    // Dynamically change the title based on the path
    if (location.pathname === "/") {
      pageTitle = "Home | Gadget Heaven";
    } else if (location.pathname === "/statistics") {
      pageTitle = "Statistics | Gadget Heaven";
    } else if (location.pathname === "/dashboard") {
      pageTitle = "Dashboard | Gadget Heaven";
    } else if (location.pathname === "/cart") {
      pageTitle = "Cart | Gadget Heaven";
    } else if (location.pathname === "/wishlist") {
      pageTitle = "Wishlist | Gadget Heaven";
    } else {
      // For other paths, set a generic title
      pageTitle = `${location.pathname.replace("/", "")} | Gadget Heaven`;
    }

    // Update the document title when the route changes
    document.title = pageTitle;
  }, [location]); // The effect runs whenever the location (path) changes

  return (
    <div className="max-w-6xl mx-auto">
      <NavBar /> {/* Navigation Bar */}
      <Outlet /> {/* Render the matching child route component */}
      <Footer /> {/* Footer */}
    </div>
  );
};

export default Root;
