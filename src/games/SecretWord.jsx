import React, { useState } from "react";

export default function SecretWord() {
  const [secret, setSecret] = useState("");
  const [guess, setGuess] = useState("");
  const [hidden, setHidden] = useState(true);
  const [message, setMessage] = useState("");

  function handleGuess() {
    if (guess.toLowerCase() === secret.toLowerCase()) {
      setMessage("🎉 You guessed it right!");
    } else {
      setMessage("❌ Wrong guess, try again!");
    }
  }

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-6 text-pink-500">💌 Secret Word Game</h2>

      {hidden ? (
        <div className="flex flex-col items-center">
          <input
            type="password"
            placeholder="Enter secret word"
            className="border-2 border-pink-400 rounded-xl px-4 py-2 text-center mb-3 bg-pink-100 text-gray-800"
            onChange={(e) => setSecret(e.target.value)}
          />
          <button
            onClick={() => setHidden(false)}
            className="bg-pink-500 hover:bg-fuchsia-500 text-gray px-5 py-2 rounded-xl shadow-md"
          >
            Hide and Start
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <input
            type="text"
            placeholder="Guess the word..."
            className="border-2 border-purple-400 rounded-xl px-4 py-2 text-center mb-3 bg-purple-100 text-gray-800"
            onChange={(e) => setGuess(e.target.value)}
          />
          <button
            onClick={handleGuess}
            className="bg-fuchsia-500 hover:bg-pink-500 text-gray-800 px-5 py-2 rounded-xl "
          >
            Guess
          </button>
        </div>
      )}
      <p className="mt-4 text-lg font-semibold text-purple-600">{message}</p>
    </div>
  );
}
