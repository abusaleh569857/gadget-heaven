<!-- # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh -->

Gadget Heaven
Live Website: publish later
Requirement Document: "Batch-10_Assignment-08.pdf"

Overview
This project is a dynamic e-commerce dashboard where users can manage their cart and wishlist, sort items, and make purchases with a streamlined checkout process. The app is built with React and uses the Context API for state management, offering a smooth and responsive user experience.

Features
Cart and Wishlist Management: Add items to the cart and wishlist, view them in separate tabs, and remove items as needed.
Purchase and Checkout Modal: Confirm purchases through a checkout modal that shows a success message and clears the cart on confirmation.
Sorting Functionality: Sort cart items by price in descending order to easily view the most expensive items.
Total Cost Calculation: Real-time calculation of the total cost of items in the cart.
Conditional Button Disabling: The "Purchase" button is disabled when the cart is empty or when total cost is zero, ensuring no accidental
purchases.

React Fundamentals Used
This project utilizes several key concepts in React, including:

Components: Organized the UI into reusable functional components.
State Management with useState: Used for managing view toggles, sorting, and modal visibility.
Side Effects with useEffect: Managed side effects for dynamically updating sorted items and total cost whenever cart items change.
Conditional Rendering: Rendered the cart and wishlist views conditionally based on the active tab.
Routing with useNavigate: Used useNavigate for redirecting to the home page after a successful purchase.
Data Management
For data handling and state management, this project uses Context API. The Context API allows efficient management of shared state (such as
cartItems and wishlistItems) across components without prop drilling. All cart and wishlist actions, such as adding, removing, and clearing
items, are handled through the CartContext.
