import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("userData"));

  // This check is crucial and was added in the previous fix.
  // It ensures userData is valid before attempting to access its properties.
  if (!userData) {
    console.error(
      "User data not found in localStorage on Dashboard page. Redirecting to signin."
    );
    localStorage.removeItem("authToken"); // Clear potentially bad token
    localStorage.removeItem("userData"); // Clear potentially bad user data
    navigate("/signin"); // Redirect to sign-in page
    return null; // Don't render anything if data is missing and we're redirecting
  }

  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Correct key for auth token
    localStorage.removeItem("userData");
    navigate("/signin");
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center flex-col p-0">
      <div className="flex items-center justify-center bg-gray-100 mb-0">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Dashboard
        </h1>
      </div>
      <div className="m-0 max-w-md w-full px-6 py-8 bg-white rounded-lg shadow-md flex-col">
        {/* Use optional chaining for safer access, though `if (!userData)` above handles the null case */}
        <h1 className="text-xl font-semibold mb-2">
          Welcome, {userData.name}!
        </h1>
        <p className="text-gray-700">ID: {userData.id}</p>
        <p className="text-gray-700">Email: {userData.email}</p>
      </div>
      <button // Changed to button for semantic clarity, though `<a>` works.
        id="logout-link"
        onClick={handleLogout} // Call the handleLogout function
        className="mt-4 px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
      >
        Log Out
      </button>
    </div>
  );
};

export default Dashboard;
