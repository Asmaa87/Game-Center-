import React, { useState } from "react";

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  return (
    <div className="grid grid-cols-3 gap-2">
      {squares.map((square, i) => (
        <button key={i} className="w-20 h-20 bg-gray-800 text-3xl text-white">
          {square}
        </button>
      ))}
    </div>
  );
}
