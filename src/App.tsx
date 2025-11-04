import React, { useState } from "react";
import TicTacToe from "./games/TicTacToe";
import MemoryGame from "./games/MemoryGame";
import RockPaperScissors from "./games/RockPaperScissors";
import GuessNumber from "./games/GuessAnimal";
import QuizGame from "./games/QuizGame";

export default function App() {
  const [selectedGame, setSelectedGame] = useState(null);

  const games = [
    { id: "tictactoe", name: "❌ Tic Tac Toe", comp: <TicTacToe /> },
    { id: "memory", name: "🧠 Memory Game", comp: <MemoryGame /> },
    { id: "rps", name: "✂️ Rock Paper Scissors", comp: <RockPaperScissors /> },
    { id: "guess", name: "🐾 Guess the Animal", comp: <GuessNumber /> },
    { id: "quiz", name: "💌 Secret Word Game", comp: <QuizGame /> },
  ];

  return (
    <div className="min-h-screen w-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-pink-400 via-fuchsia-500 to-purple-600 text-gray p-8">
      <h1 className="text-5xl font-extrabold mb-10 drop-shadow-2xl animate-pulse text-center">
        🌸 Game Center 🌈
      </h1>

      {!selectedGame ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
          {games.map((g) => (
            <button
              key={g.id}
              onClick={() => setSelectedGame(g.id)}
              className="w-full h-32 flex items-center justify-center text-2xl font-semibold bg-pink-600 hover:bg-pink-700 text-gray transition-all rounded-2xl shadow-lg hover:scale-105 duration-300"
            >
              {g.name}
            </button>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center w-full">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6  max-w-3xl shadow-2xl">
            {games.find((g) => g.id === selectedGame)?.comp}
          </div>
          <button
            onClick={() => setSelectedGame(null)}
            className="mt-8 px-8 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-xl font-semibold text-lg shadow-md hover:scale-105 transition-all text-"
          >
            ⬅ Back to Menu
          </button>
        </div>
      )}
    </div>
  );
}
