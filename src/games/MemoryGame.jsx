import React, { useState, useEffect } from "react";

export default function MemoryGame() {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);

  useEffect(() => {
    const emojis = ["🌸", "🦋", "🐱", "🍓", "💖", "🧁"];
    const shuffled = [...emojis, ...emojis].sort(() => Math.random() - 0.5);
    setCards(shuffled);
  }, []);

  function handleClick(i) {
    if (flipped.length === 2 || flipped.includes(i)) return;
    const newFlipped = [...flipped, i];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      const [a, b] = newFlipped;
      if (cards[a] === cards[b]) setMatched([...matched, cards[a]]);
      setTimeout(() => setFlipped([]), 800);
    }
  }

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-6 text-pink-500">🌸 Memory Game</h2>
      <div className="grid grid-cols-4 gap-4 justify-center">
        {cards.map((card, i) => (
          <button
            key={i}
            onClick={() => handleClick(i)}
            className="w-20 h-20 rounded-2xl bg-pink-300 text-3xl flex items-center justify-center shadow-md hover:scale-105 transition"
          >
            {flipped.includes(i) || matched.includes(card) ? card : "❓"}
          </button>
        ))}
      </div>
    </div>
  );
}
