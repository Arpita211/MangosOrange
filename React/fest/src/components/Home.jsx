import React from "react";
import SearchPage from "./Search";

import polaroidImage from "../assets/polaroid-1.jpg";
import polaroidimg from "../assets/polaroid-2.jpg";
import polaroid from "../assets/polaroid-3.jpg";
import silhouette from "../assets/image.png";

export default function Home() {
  return (
    <div className="min-h-screen ">
     
      {/* ===== HERO SECTION ===== */}
      {/* === Version A: Pastel Gradient Background === */}
      <section className=" hero relative text-center py-20 px-6 bg-gradient-to-r from-pink-100 via-blue-100 to-green-100 " >
       
       
        <div className="content">
        <p className="text-sm italic text-gray-600 mb-2">~ College Fest Memories ~</p>
        <h1 className=" text-4xl md:text-6xl lg:text-7xl text-white mb-6 font-extrabold text-white mb-4">
          Relive Your <br></br><span  className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 
             bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 
             bg-clip-text text-transparent animate-gradient" >Fest Memories</span>
        </h1>
        <p className="max-w-2xl mx-auto text-xl text-white font-normal mb-6">
          Step into a nostalgic journey through your college fest moments. Discover,
          share, and cherish every captured memory in our digital album.
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 bg-orange-400 text-white rounded-xl font-semibold shadow hover:bg-orange-500">
            Sign Up Now
          </button>
          <button className="px-6 py-3 bg-white border border-indigo-400 text-indigo-600 rounded-xl font-semibold shadow hover:bg-indigo-50">
            Explore Gallery
          </button>
        </div>

        {/* Badges */}
        <div className="absolute left-6 top-12 bg-purple-200 text-purple-700 text-sm font-bold px-3 py-1 rounded-full shadow">
          
        </div>
       

        {/* Stats */}
        <div className="mt-12 flex justify-center gap-12 text-white">
          <div>
            <h2 className="text-2xl font-bold">5K+</h2>
            <p className="text-sm text-white">Photos</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">200+</h2>
            <p className="text-sm text-white">Events</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">1K+</h2>
            <p className="text-sm text-white">Students</p>
          </div>
        </div>
        </div>
      </section>
      {/*why choose us*/}
      
      <section class=" py-16 bg-white">
    <h3 class="text-3xl font-bold text-gray-800 text-center mb-10">Why Choose Us?</h3>
    <div class="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">
      <div class="p-6 shadow-lg rounded-2xl bg-pink-50 hover:scale-105 transition">
        <h4 class="text-xl sm:text-2xl font-extrabold mb-6 
             bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 
             bg-clip-text text-transparent animate-gradient"> Easy Upload</h4>
        <p class="text-gray-600 mt-2">Upload your photos in seconds.</p>
      </div>
      <div class="p-6 shadow-lg rounded-2xl bg-pink-50 hover:scale-105 transition">
        <h4 class="text-xl sm:text-2xl font-extrabold mb-6 
             bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 
             bg-clip-text text-transparent animate-gradient"> Event Categories</h4>
        <p class="text-gray-600 mt-2">Cultural, Sports, Tech, Music, Dance.</p>
      </div>
      <div class="p-6 shadow-lg rounded-2xl bg-pink-50 hover:scale-105 transition">
        <h4 class="text-xl sm:text-2xl font-extrabold mb-6 
             bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 
             bg-clip-text text-transparent animate-gradient"> Privacy Control</h4>
        <p class="text-gray-600 mt-2">Make your memories public or private.</p>
      </div>
      <div class="p-6 shadow-lg rounded-2xl bg-pink-50 hover:scale-105 transition">
        <h4 class="text-xl sm:text-2xl font-extrabold mb-6 
             bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 
             bg-clip-text text-transparent animate-gradient"> Golden Moments</h4>
        <p class="text-gray-600 mt-2">Highlight top events from your fest.</p>
      </div>
    </div>
  </section>

  
  <section class="py-16 bg-#E6DBCE">
    <h3 class="text-3xl font-bold  text-gray-700 text-center mb-10">Recent Uploads</h3>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto px-6">
      <img src={polaroidImage} alt="Polaroid photo" className="rounded-xl shadow-md" />
      <img src={polaroidimg} alt="px" className="rounded-xl shadow-md" />
       <img src={polaroid} alt="px" className="rounded-xl shadow-md" />
       <img src={silhouette} alt="freshers pic" className="rounded-xl shadow-md"/>
      
      
    </div>
    </section>
    </div>
   
    
    
  );
}
