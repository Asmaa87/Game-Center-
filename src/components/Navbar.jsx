import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6">
        <Link to="/" className="text-2xl font-bold text-blue-400">
          🎮 GameZone
        </Link>
      </div>
    </nav>
  );
}
