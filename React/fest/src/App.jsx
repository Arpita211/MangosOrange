import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchPage from "./components/Search";
import {  Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <div>
      <Navbar/>
      
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/search" element={<SearchPage/>}></Route>

          
        </Routes>
     
      <Footer/>
      
    </div>
  );
}

export default App;
