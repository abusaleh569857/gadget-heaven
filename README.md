# 🛒 Gadget Heaven | E-commerce Dashboard

A dynamic and responsive e-commerce dashboard built with **React**, focused on seamless gadget discovery and a streamlined checkout experience.

🌐 **Live Website:** [Gadget Heaven](https://gadget-heaven-b10-assignment-8.netlify.app/)

---

## 🚀 Overview
**Gadget Heaven** is a modern web application where users can explore the latest tech gadgets, manage their personal cart and wishlist, and complete purchases. By utilizing the **Context API**, the app ensures a smooth, prop-drilling-free state management experience across all components.

## ✨ Key Features
- 🛍️ **Cart & Wishlist Management:** Easily add or remove gadgets. View them in dedicated, organized tabs.
- 📉 **Smart Sorting:** Sort cart items by price in descending order to find the most premium gadgets instantly.
- 💰 **Real-time Calculations:** Automatically calculates the total cost as you modify your cart.
- 🎯 **Conditional Purchasing:** The purchase button intelligently disables when the cart is empty, preventing accidental checkouts.
- 🎊 **Seamless Checkout:** A polished modal-based checkout flow that confirms purchases and clears your cart upon completion.

## 🛠️ Tech Stack & Concepts
- **Core:** React.js
- **State Management:** Context API (Cart & Wishlist state)
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM (`useNavigate`, `useLocation`)
- **Persistence:** Managing side effects with `useEffect` for data synchronization.

## 📦 React Fundamentals Applied
- **Components:** Modular and reusable functional component architecture.
- **Hooks:** - `useState`: For UI toggles, modal visibility, and sorting states.
  - `useEffect`: To track cart changes and update total costs dynamically.
- **Context API:** Efficient global state management for a seamless user journey.
- **Conditional Rendering:** Dynamic view switching between Cart and Wishlist tabs.

---

### 💻 Local Installation
1. Clone the repo:
   ```bash
   git clone [https://github.com/your-username/gadget-heaven.git](https://github.com/your-username/gadget-heaven.git)
