import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {/* ===== NAVBAR ===== */}
      <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md relative z-50">
        
        {/* Logo / Brand */}
        <div className="text-2xl font-extrabold cursor-pointer">
          <span className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-pink-700 bg-clip-text text-transparent animate-gradient">
            Memories
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          <li><Link to="/" className="cursor-pointer hover:text-indigo-500">Home</Link></li>
          <li className="cursor-pointer hover:text-indigo-500">Gallery</li>
          <li className="cursor-pointer hover:text-indigo-500">Golden Moments</li>
          <li><Link to="/search" className="cursor-pointer hover:text-indigo-500">Search</Link></li>
          <li className="cursor-pointer hover:text-indigo-500">Profile</li>
        </ul>

        {/* Upload Button (Desktop only) */}
        <button className="hidden md:block bg-orange-400 text-white px-4 py-2 rounded-lg shadow hover:bg-orange-500">
          Upload Photos
        </button>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-gray-700 text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu (Slide-down) */}
      <div
        className={`md:hidden bg-white shadow-lg overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 py-6 text-gray-700 font-medium">
          <li><Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-indigo-500">Home</Link></li>
          <li className="hover:text-indigo-500">Gallery</li>
          <li className="hover:text-indigo-500">Golden Moments</li>
          <li><Link to="/search" onClick={() => setMenuOpen(false)} className="hover:text-indigo-500">Search</Link></li>
          <li className="hover:text-indigo-500">Profile</li>
          <button className="bg-orange-400 text-white px-4 py-2 rounded-lg shadow hover:bg-orange-500">
            Upload Photos
          </button>
        </ul>
      </div>

      {/* Gradient Animation */}
      <style>
        {`
          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient {
            background-size: 200% 200%;
            animation: gradientMove 4s ease infinite;
          }
        `}
      </style>
    </div>
  );
}
