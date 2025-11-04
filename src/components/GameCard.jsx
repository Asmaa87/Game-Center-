import React from "react";
import { Link } from "react-router-dom";

export default function GameCard({ game }) {
  return (
    <div className="bg-gray-800 p-6 rounded-xl text-center hover:bg-gray-700 transition shadow-lg">
      <h2 className="text-2xl font-bold mb-3">{game.title}</h2>
      <p className="text-gray-400 mb-5">{game.description}</p>
      <Link
        to={`/game/${game.name}`}
        className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg font-semibold"
      >
        Play
      </Link>
    </div>
  );
}
