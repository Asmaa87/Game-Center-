import React, { useState } from "react";
import { motion } from "framer-motion";

const choices = [
  { name: "Rock", emoji: "🪨", color: "from-gray-700 to-gray-500" },
  { name: "Paper", emoji: "📄", color: "from-blue-700 to-blue-500" },
  { name: "Scissors", emoji: "✂️", color: "from-pink-600 to-red-400" },
];

export default function RockPaperScissors() {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState("");
  const [scores, setScores] = useState({ user: 0, computer: 0 });

  function play(choice) {
    const comp = choices[Math.floor(Math.random() * 3)];
    setUserChoice(choice);
    setComputerChoice(comp);

    let res = "";
    if (choice.name === comp.name) res = "🤝 It's a Draw!";
    else if (
      (choice.name === "Rock" && comp.name === "Scissors") ||
      (choice.name === "Paper" && comp.name === "Rock") ||
      (choice.name === "Scissors" && comp.name === "Paper")
    ) {
      res = "🎉 You Win!";
      setScores({ ...scores, user: scores.user + 1 });
    } else {
      res = "😢 You Lose!";
      setScores({ ...scores, computer: scores.computer + 1 });
    }
    setResult(res);
  }

  function resetGame() {
    setUserChoice(null);
    setComputerChoice(null);
    setResult("");
  }

  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-gray-900 to-gray-800 text-white p-8 rounded-3xl shadow-2xl w-[90%] sm:w-[550px] border border-gray-700">
    

      {/* Scoreboard */}
      <div className="flex justify-between w-full mb-6 text-lg font-semibold">
        <span className="text-green-400">👤 You: {scores.user}</span>
        <span className="text-gray-400">|</span>
        <span className="text-red-400">💻 Computer: {scores.computer}</span>
      </div>

      {/* Choice Buttons */}
      <div className="flex flex-wrap justify-center gap-6 mb-8">
        {choices.map((c) => (
          <motion.button
            key={c.name}
            onClick={() => play(c)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`w-28 h-28 flex flex-col justify-center items-center bg-gradient-to-br ${c.color} rounded-2xl shadow-lg text-4xl font-bold border border-gray-600`}
          >
            {c.emoji}
            <span className="text-sm mt-1 text-gray-100">{c.name}</span>
          </motion.button>
        ))}
      </div>

      {/* Result Section */}
      {userChoice && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center bg-gray-800 p-6 rounded-2xl shadow-lg w-full border border-gray-700"
        >
          <p className="text-lg">
            👤 You chose: <span className="font-bold text-blue-400">{userChoice.emoji}</span>
          </p>
          <p className="text-lg mt-2">
            💻 Computer chose:{" "}
            <span className="font-bold text-red-400">{computerChoice.emoji}</span>
          </p>

          <motion.h3
            key={result}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className={`mt-4 text-2xl font-bold ${
              result.includes("Win")
                ? "text-green-400"
                : result.includes("Lose")
                ? "text-red-400"
                : "text-yellow-300"
            }`}
          >
            {result}
          </motion.h3>

          <button
            onClick={resetGame}
            className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg font-semibold transition-all"
          >
            🔄 Play Again
          </button>
        </motion.div>
      )}
    </div>
  );
}
