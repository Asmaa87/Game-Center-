import React, { useState } from "react";

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(squares);

  function handleClick(index) {
    if (squares[index] || winner) return;
    const newSquares = [...squares];
    newSquares[index] = xIsNext ? "X" : "O";
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  }

  function handleReset() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  }

  return (
    <div className="flex flex-col items-center justify-center mt-6">
      {/* Centered grid with equal spacing */}
      <div className="grid grid-cols-3 gap-4 w-[300px] sm:w-[360px] justify-items-center">
        {squares.map((value, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className={`w-24 h-24 sm:w-28 sm:h-28 text-4xl font-bold rounded-2xl flex items-center justify-center 
              transition-all duration-300 shadow-lg border-2 border-gray-700
              ${value === "X" ? "text-blue-400" : value === "O" ? "text-pink-400" : "text-gray-400"}
              ${!value ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-900"}
              ${winner && winner.includes(index) ? "bg-green-700 scale-105" : ""}
            `}
          >
            {value}
          </button>
        ))}
      </div>

      <p className="mt-6 text-2xl font-semibold text-white drop-shadow-lg">
        {winner
          ? `🏆 Winner: ${squares[winner[0]]}`
          : squares.every(Boolean)
          ? "🤝 It's a Draw!"
          : `Next Player: ${xIsNext ? "X" : "O"}`}
      </p>

      <button
        onClick={handleReset}
        className="mt-6 px-8 py-3 bg-pink-600 hover:bg-pink-500 rounded-xl font-semibold text-lg shadow-md transition-all"
      >
         Reset Game
      </button>
    </div>
  );
}

// Helper function
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let line of lines) {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return line;
    }
  }
  return null;
}
