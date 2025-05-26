import React, { useState } from "react";
import { API_ENDPOINT } from "../../config/constants";
import { useNavigate } from "react-router-dom";

const SignupForm: React.FC = () => {
  const [organisationName, setOrganisationName] = useState("");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch(`${API_ENDPOINT}/organisations`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: organisationName,
          user_name: userName,
          email: userEmail,
          password: userPassword,
        }),
      });

      const data = await response.json(); // Always parse response data

      if (!response.ok) {
        // If response.ok is false, it means the API returned an error status (e.g., 400, 409)
        console.error(
          "Sign-up failed with status:",
          response.status,
          "Error data:",
          data
        );
        // Display a user-friendly error message, e.g., using a state variable
        alert(
          data.message ||
            (data.errors && data.errors[0]?.message) ||
            "Sign-up failed. Please try again with different credentials."
        );
        return; // Stop execution here if signup failed
      }

      // If we reach here, response.ok was true, so signup was successful
      console.log("Sign-up successful. Response data:", data);

      if (data.token) {
        localStorage.setItem("authToken", data.token);
      } else {
        // This case should ideally not be hit if response.ok is true AND the backend
        // is designed to return a token on successful signup.
        // If it still happens, it means signup was successful but no auto-login token provided.
        console.warn(
          "Signup response did not contain a token, redirecting to sign-in."
        );
        localStorage.removeItem("authToken"); // Ensure no "undefined" token is saved
        localStorage.removeItem("userData"); // Ensure no "undefined" userData is saved
        navigate("/signin");
        return; // Exit the function
      }

      if (data.user) {
        localStorage.setItem("userData", JSON.stringify(data.user));
      } else {
        console.warn("Signup response did not contain user data.");
        // If user data is missing but token is present, we might still proceed,
        // but the Dashboard will handle the missing user data gracefully.
      }

      navigate("/account"); // Redirect to dashboard only if signup was truly successful and token obtained
    } catch (error) {
      console.error("Error during signup API call:", error);
      alert("An unexpected error occurred during signup. Please try again.");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label className="block text-gray-700 font-semibold mb-2">
          Organisation Name:
        </label>
        <input
          type="text"
          name="organisationName"
          id="organisationName"
          value={organisationName}
          onChange={(e) => setOrganisationName(e.target.value)}
          className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-semibold mb-2">
          Your Name:
        </label>
        <input
          type="text"
          name="userName"
          id="userName"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-semibold mb-2">Email:</label>
        <input
          type="email"
          name="userEmail"
          id="userEmail"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-semibold mb-2">
          Password:
        </label>
        <input
          type="password"
          name="userPassword"
          id="userPassword"
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
          className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-gray mt-4"
      >
        Sign up
      </button>
    </form>
  );
};

export default SignupForm;
