import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NaaviLogo from "../../assets/images/logo/logo_01.png";

function Login() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
  };

  const login = () => {
    // Commenting out the API call
    /*
    try {
      const response = await fetch("/api/skillnaav/admin-login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();

      if (data.success) {
        alert(data.message);
        localStorage.setItem("token", JSON.stringify(data));
        navigate("/admin");
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    }
    */

    // Navigate directly to the /admin route
    navigate("/admin-dashboard");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-teal-300 to-blue-500">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg">
        <div className="flex justify-center mb-6">
          <img
            src={NaaviLogo}
            alt="Naavi Logo"
            className="w-36 h-auto"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "fallback-logo.png";
            }}
          />
        </div>
        <h1 className="text-3xl text-center text-[#1454A4] font-bold mb-6">
          Admin Login
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              htmlFor="username"
              className="block text-gray-700 font-medium mb-2"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              value={user.username}
              onChange={(e) =>
                setUser({ ...user, username: e.target.value.trim() })
              }
              placeholder="Enter your username"
              className="px-4 py-3 rounded-lg border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="mb-5 relative">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              Password
            </label>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              placeholder="Enter your password"
              className="px-4 py-3 rounded-lg border border-gray-300 w-full pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              style={{ paddingRight: "3rem" }}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 bottom-1/2 justify-center text-center transform -translate-y-1/2 text-gray-500 hover:text-blue-600 transition-all duration-200"
              style={{ padding: "5px" }}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-[#1454A4] text-white py-3 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Login
          </button>
        </form>
        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            Need help?{" "}
            <span className="text-[#1454A4] font-medium hover:underline cursor-pointer">
              Contact support
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
