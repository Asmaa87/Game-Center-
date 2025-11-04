import React from "react";
import { useParams, Link } from "react-router-dom";
import TicTacToe from "../games/TicTacToe";
import RockPaperScissors from "../games/RockPaperScissors";
import MemoryGame from "../games/MemoryGame";

export default function GamePage() {
  const { name } = useParams();

  const renderGame = () => {
    switch (name) {
      case "TicTacToe":
        return <TicTacToe />;
      case "RockPaperScissors":
        return <RockPaperScissors />;
      case "MemoryGame":
        return <MemoryGame />;
      default:
        return <p>Game not found</p>;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-10">
      {renderGame()}
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-semibold"
      >
        ⬅ Back to Games
      </Link>
    </div>
  );
}
