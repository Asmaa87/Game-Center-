import React, { useState } from "react";

export default function QuizGame() {
  const [secretWord, setSecretWord] = useState("");
  const [guess, setGuess] = useState("");
  const [revealed, setRevealed] = useState(false);
  const [message, setMessage] = useState("");

  const handleSetWord = () => {
    if (secretWord.trim() === "") {
      setMessage("⚠️ Please enter a word first!");
      return;
    }
    setRevealed(true);
    setMessage("✅ Word set! Ask your friend to guess 💖");
  };

  const handleGuess = () => {
    if (guess.trim() === "") {
      setMessage("📝 Please enter your guess!");
      return;
    }
    if (guess.toLowerCase() === secretWord.toLowerCase()) {
      setMessage("🎉 You guessed it right!");
    } else {
      setMessage("😢 Wrong guess! Try again!");
    }
  };

  const handleReset = () => {
    setSecretWord("");
    setGuess("");
    setRevealed(false);
    setMessage("");
  };

  return (
    <div className="flex flex-col items-center bg-pink-100 p-8 rounded-3xl shadow-lg text-purple-700 w-[90%] sm:w-[500px]">
      <h2 className="text-3xl font-bold mb-6 text-fuchsia-700">
        Secret Word Game
      </h2>

      {!revealed ? (
        <>
          <input
            type="text"
            placeholder="Enter secret word..."
            value={secretWord}
            onChange={(e) => setSecretWord(e.target.value)}
            className="w-64 px-4 py-2 mb-4 rounded-lg border-2 border-pink-300 focus:outline-none text-center text-purple-700"
          />
          <button
            onClick={handleSetWord}
            className="bg-pink-500 hover:bg-fuchsia-400 text-gray-600 px-6 py-2 rounded-xl font-semibold transition-transform hover:scale-105"
          >
            Hide Word 😉
          </button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Guess the word..."
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            className="w-64 px-4 py-2 mb-4 rounded-lg border-2 border-fuchsia-300 focus:outline-none text-center text-purple-700"
          />
          <button
            onClick={handleGuess}
            className="bg-pink-500 hover:bg-pink-400 text-gray-900 px-6 py-2 rounded-xl font-semibold transition-transform hover:scale-105"
          >
            Guess 💖
          </button>
        </>
      )}

      {message && <p className="mt-4 text-lg font-medium">{message}</p>}

      <button
        onClick={handleReset}
        className="mt-6 px-4 py-2 bg-pink-300 hover:bg-pink-200 rounded-lg text-sm text-purple-800 font-semibold"
      >
        🔁 Restart Game
      </button>
    </div>
  );
}
