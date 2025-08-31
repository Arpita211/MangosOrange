import React from "react";
export default function Navbar() {
  return (
    <div>
      {/* ===== NAVBAR ===== */}
      <nav className=" nav flex justify-between items-center px-8 py-4 bg-white shadow-md">
        <div className=" nav flex items-center gap-2 text-xl font-bold text-pink-700">
          <span className="text-2xl  text-pink-600;"></span> Memories
        </div>
        <ul className="flex gap-6 text-gray-700 font-medium">
          <li className="cursor-pointer hover:text-indigo-500">Home</li>
          <li className="cursor-pointer hover:text-indigo-500">Gallery</li>
          <li className="cursor-pointer hover:text-indigo-500">Golden Moments</li>
          <li className="cursor-pointer hover:text-indigo-500">Search</li>
          <li className="cursor-pointer hover:text-indigo-500">Profile</li>
        </ul>
        <button className="bg-orange-400 text-white px-4 py-2 rounded-lg shadow hover:bg-orange-500">
          Upload Photos
        </button>
      </nav>
      </div>
  );
}