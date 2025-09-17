import React, { useState } from "react";
import style from "./Search.module.css";
import { motion } from "framer-motion";
import {
  LucideChevronsLeftRightEllipsis,
  MoveLeftIcon,
  Search,
} from "lucide-react";
import PopularSearches from "./Popular";

const SearchPage = () => {
  const [searchText, setSearchText] = useState("Dj Night");

  // Sample memory data
  const memories = [
    {
      id: 1,
      title: "DJ Night 2024",
      description: "Amazing music and dancing all night!",
      author: "Rahul",
      date: "15 March 2024",
    },
    {
      id: 2,
      title: "Dance Performance",
      description: "Classical dance group performed beautifully",
      author: "Priya",
      date: "14 March 2024",
    },
    {
      id: 3,
      title: "Tech Quiz Winners",
      description: "Our team won the tech quiz competition",
      author: "Amit",
      date: "13 March 2024",
    },
    {
      id: 4,
      title: "Food Festival",
      description: "Delicious food from different stalls",
      author: "Sneha",
      date: "12 March 2024",
    },

    {
      id: 5,
      title: " Tech Expo",
      description: "Heckathon held for  tech-talent hunt",
      author: "Arpita",
      date: "31 August 2025",
    },
    {
      id: 6,
      title: "Farewell",
      description: "Goodbye Seniors",
      author: "Rahul",
      date: "15 March 2024",
    },
    {
      id: 7,
      title: "Sports Meet",
      description: "Amazing showcase of physical and mental fitness",
      author: "Dipti",
      date: "15 March 2024",
    },
    {
      id: 8,
      title: "Graduation Day",
      description: " Congratulation we got degree ",
      author: "Rahul",
      date: "15 March 2024",
    },
    {
      id: 9,
      title: "Fresher's Party",
      description: "welcome our Freshers",
      author: "Rahul",
      date: "15 March 2024",
    },
  ];

  // Filter memories based on search
  const filteredMemories = memories.filter(
    (memory) =>
      memory.title.toLowerCase().includes(searchText.toLowerCase()) ||
      memory.description.toLowerCase().includes(searchText.toLowerCase()) ||
      memory.author.toLowerCase().includes(searchText.toLowerCase())
  );
  const popularItems = [
    "College Fest",
    "Farewell",
    "Sports Meet",
    "Graduation Day",
    "Cultural Night",
    "Tech Expo",
    "Fresher's Party",
  ];

  return (
    <div className=" bg-fixed">
      <div
        className="hero"
        style={{
          marginTop: "10px",
          padding: "20px",
          fontFamily: "Fredoka",
          backgroundSize: "cover",
        }}
      >
        {/* Header */}
        <div
          className=""
          style={{
            textAlign: "center",
            marginBottom: "30px",
            marginTop: "50px",
          }}
        >
          <h1 className=" text-4xl md:text-6xl lg:text-7xl font-extrabold text-center mb-6 drp-shadow-md tracking-tight ">
            <br></br>
            <span className="block text-white">Where Yesterday </span>
            <span
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 
             "
              style={{
                background: "var(--gradient-sunset)",
                color: "transparent",
                backgroundClip: "text",
              }}
            >
              Meets Today
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-xl text-white font-normal italic mb-10">
            Your forgotten milestones, celebrations, and stories— rediscovered
            in one sleek, intuitive space
          </p>
        </div>

        {/* Search Box */}
        <div
          style={{
            display: "flex",
            justifyContent: "center", // centers horizontally
            alignItems: "center", // centers vertically if parent has height
            marginTop: "50px",
            marginBottom: "30px",
            position: "relative",
          }}
        >
          <div
            style={{ position: "relative", width: "400px", maxWidth: "90%" }}
          >
            <input
              type="text"
              placeholder="Search memories..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              style={{
                width: "100%",
                padding: "12px 50px 12px 16px", // extra right padding for button
                fontSize: "16px",
                border: "2px solid #ddd",
                backgroundColor: "whitesmoke",
                borderRadius: "8px",
                outline: "none",
              }}
            />
            <button
              className=" bg-gradient-sunset"
              type="submit"
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",

                border: "none",
                cursor: "pointer",
                padding: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Search /> {/* Your search icon component */}
            </button>
          </div>
        </div>
        <div className="flex justify-center  text-2xl md:text-3xl lg:text-4xl text-white mb-10 font-bold  mt-20">
          <motion.div
            className="w-full max-w-2xl mx-auto  sm:p-6 bg-transparent text-gray-700 rounded-2xl shadow-lg backdrop-blur-md


           

             p-2 
             border border-pink-200/90 hover:border-pink-400/100"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.section
              className="mb-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h5 className="text-white mb-3 text-base text-2xl md:text-3xl lg:text-3xl ">
                Popular Searches
              </h5>
              <div className="flex flex-wrap gap-5 mb-4">
                {popularItems.map((text) => (
                  <button
                    key={text}
                    onClick={() => setSearchText(text)}
                    className="px-2 py-1 bg-white/70 backdrop-blur-md
              text-sm

 flex
             rounded-2xl shadow-lg shadow-pink-200/40
 hover:shadow-5xl bt-gradient-sunset
             transform hover:scale-105   p-3
             border border-pink-200/90 hover:border-pink-400/100"
                  >
                    {text}
                  </button>
                ))}
              </div>
            </motion.section>
          </motion.div>
        </div>

        {/*<div className="flex justify-center  text-2xl md:text-3xl lg:text-4xl text-white mb-10 font-bold  mt-20">
          <PopularSearches />
        </div>
        <br></br>*/}

        {/* Results Count */}
        <p
          className="text-2xl"
          style={{ color: "#fffefeff", marginBottom: "20px" }}
        >
          Found {filteredMemories.length} memories
        </p>

        {/* Memory Cards */}
        <div className={style.grid}>
          {filteredMemories.map((memory) => (
            <div
              className="bg-white/70 backdrop-blur-md  rounded-2xl shadow-lg shadow-pink-200/40 hover:shadow-5xl 
             transform hover:scale-105 transition-all duration-200 p-5 
             border border-pink-200/90 hover:border-pink-400/100"
              key={memory.id}
              style={{
                boxShadow:
                  "0 4px 15px hsl(25 15% 15% / 0.15), 0 2px 8px hsl(25 15% 15% / 0.1)",
                marginLeft: "10px",
                marginRight: "10px",
              }}
            >
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "#333",
                  marginBottom: "10px",
                }}
              >
                {memory.title}
              </h3>

              <p
                style={{
                  color: "#666",
                  fontSize: "14px",
                  lineHeight: "1.5",
                  marginBottom: "15px",
                }}
              >
                {memory.description}
              </p>

              <div
                style={{
                  borderTop: "1px solid #eee",
                  paddingTop: "15px",
                  fontSize: "12px",
                  color: "#888",
                }}
              >
                <div>
                  <div style={{ marginBottom: "5px" }}>
                    <strong>By:</strong> {memory.author}
                  </div>
                  <div>
                    <strong>Date:</strong> {memory.date}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredMemories.length === 0 && searchText && (
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <p style={{ fontSize: "18px", color: "#666" }}>
              No memories found for "{searchText}"
            </p>
            <p style={{ fontSize: "14px", color: "#888" }}>
              Try searching for something else
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
