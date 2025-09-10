import React, { useState } from "react";
import { motion } from "framer-motion";

export default function PopularSearches() {
  const [searchTerm, setSearchTerm] = useState("");
  const popularItems = [
    "College Fest",
    "Farewell 2025",
    "Sports Meet",
    "Graduation Day",
    "Cultural Night",
    "Tech Expo",
    "Freshers Party",
  ];

  const handlePopularClick = (term) => {
    setSearchTerm(term);
    console.log(`Searching for: ${term}`);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(`Searching for: ${searchTerm}`);
    // Add your search logic here
  };

  return (
    <motion.div
      className="w-full max-w-2xl mx-auto p-4 sm:p-6 bg-gray-900 text-white rounded-2xl shadow-lg"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* ==== Popular Searches ==== */}
      <motion.section
        className="mb-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <h5 className="text-gray-400 mb-3 text-base sm:text-lg font-semibold">
          🔥 Popular Searches
        </h5>
        <div className="flex flex-wrap gap-2">
          {popularItems.map((item, idx) => (
            <motion.button
              key={item}
              onClick={() => handlePopularClick(item)}
              className="px-3 py-1 text-xs sm:text-sm border border-gray-700 rounded-full hover:bg-gray-800 hover:shadow-md transition-transform duration-200"
              whileHover={{ scale: 1.08 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + idx * 0.05, duration: 0.4 }}
            >
              {item}
            </motion.button>
          ))}
        </div>
      </motion.section>

      {/* ==== Search Bar ==== */}
      <motion.form
        onSubmit={handleSearch}
        className="flex flex-col sm:flex-row gap-3 sm:gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <input
          type="text"
          className="flex-grow px-3 sm:px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
          placeholder="Search your memories..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg shadow transition-colors duration-200 text-sm sm:text-base"
        >
          Search
        </button>
      </motion.form>
    </motion.div>
  );
}
