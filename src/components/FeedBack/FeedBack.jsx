//Feedback.jsx;
import React from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook

const Feedback = () => {
  const navigate = useNavigate(); // Initialize navigate function

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the form's default submit action
    // Redirect to the home page
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gray-100 rounded-md shadow-md max-w-md mx-auto my-10">
      <h2 className="text-2xl font-bold mb-4">We value your feedback!</h2>
      <p className="text-gray-700 mb-6 text-center">
        Please let us know how we can improve your experience.
      </p>

      {/* Feedback form */}
      <form onSubmit={handleSubmit} className="w-full space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            placeholder="Your Name"
            className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            placeholder="Your Email"
            className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Feedback
          </label>
          <textarea
            placeholder="Your feedback here..."
            className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            rows="4"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-purple-600 text-white rounded-md hover:bg-purple-700"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default Feedback;
