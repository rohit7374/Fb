import React from "react";
import NavLogo from "../Images/logo.png";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 border-b">
      {/* Logo Section */}
      <div className="flex items-center">
        <img src={NavLogo} alt="Logo" className="h-8" />
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-6">
        <a href="#" className="text-blue-500 font-semibold hover:underline">
          SHOP
        </a>
        <a href="#" className="text-blue-500 font-semibold hover:underline">
          PLAY
        </a>
        <a href="#" className="text-blue-500 font-semibold hover:underline">
          CONNECT
        </a>
      </div>

      {/* Icons Section */}
      <div className="flex items-center space-x-4">
        {/* Search Icon */}
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6 text-blue-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M16.65 11.7a5.95 5.95 0 11-11.9 0 5.95 5.95 0 0111.9 0z"
            />
          </svg>
        </button>

        {/* User Icon */}
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6 text-blue-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 20c0-4 4-8 8-8s8 4 8 8"
            />
          </svg>
        </button>

        {/* Cart Icon */}
        <div className="relative">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6 text-blue-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h3l1.68 12.39c.11.78.79 1.39 1.58 1.39h8.5c.79 0 1.47-.61 1.58-1.39L18 3H3z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 21h2m6-8h4"
              />
            </svg>
          </button>
          {/* Badge */}
          <span className="absolute top-0 right-0 bg-green-500 text-white rounded-full h-4 w-4 flex items-center justify-center text-xs">
            0
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
