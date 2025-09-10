import React, { useState } from "react";

const memories = [
  {
    id: 1,
    image: "/images/memory1.jpg",
    title: "Fest Night 2023",
    caption: "The night we danced till the lights went out ✨",
    date: "March 2023",
  },
  {
    id: 2,
    image: "/images/memory2.jpg",
    title: "Retro Day",
    caption: "Polaroids, laughter & golden vibes 🎞️",
    date: "Feb 2023",
  },
  {
    id: 3,
    image: "/images/memory3.jpg",
    title: "Farewell Party",
    caption: "The last but the best chapter 💫",
    date: "April 2024",
  },
];

export default function Spotlight() {
  const [current, setCurrent] = useState(0);

  const nextMemory = () =>
    setCurrent((prev) => (prev + 1) % memories.length);

  const prevMemory = () =>
    setCurrent((prev) => (prev - 1 + memories.length) % memories.length);

  const shuffleMemory = () =>
    setCurrent(Math.floor(Math.random() * memories.length));

  return (
    <div className="min-h-screen bg-gray-200 text-white flex flex-col items-center justify-center p-6">
      {/* Headline */}
      <h1 className="text-4xl font-bold mb-2">🌟 Spotlight</h1>
      <p className="text-lg mb-8 italic text-gray-400">
        Every memory deserves its time on stage
      </p>

      {/* Spotlight Card */}
      <div className="relative bg-white rounded-2xl shadow-2xl p-4 max-w-lg w-full text-center transform hover:scale-105 transition duration-500">
        <img
          src={memories[current].image}
          alt={memories[current].title}
          className="rounded-xl mb-4 shadow-lg"
        />
        <h2 className="text-2xl font-semibold">{memories[current].title}</h2>
        <p className="text-gray-400">{memories[current].caption}</p>
        <span className="block mt-2 text-sm text-pink-400">
          {memories[current].date}
        </span>
      </div>

      {/* Controls */}
      <div className="flex gap-4 mt-6">
        <button
          onClick={prevMemory}
          className="bg-pink-600 px-4 py-2 rounded-xl shadow hover:bg-pink-700"
        >
          ⏪ Prev
        </button>
        <button
          onClick={shuffleMemory}
          className="bg-yellow-500 px-4 py-2 rounded-xl shadow hover:bg-yellow-600"
        >
          🔀 Shuffle
        </button>
        <button
          onClick={nextMemory}
          className="bg-pink-600 px-4 py-2 rounded-xl shadow hover:bg-pink-700"
        >
          Next ⏩
        </button>
      </div>
    </div>
  );
}
