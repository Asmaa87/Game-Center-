import React, { useState } from "react";

const animals = [
  // 🐶 Animals
  { name: "cat", hint: "I say meow 😺" },
  { name: "dog", hint: "I say woof 🐶" },
  { name: "rabbit", hint: "I jump and eat carrots 🥕" },
  { name: "lion", hint: "I am the king of the jungle 🦁" },
  { name: "panda", hint: "I am black and white 🐼" },
  { name: "fox", hint: "I am smart and orange 🦊" },
  { name: "bear", hint: "I am big and love honey 🐻" },
  { name: "monkey", hint: "I love bananas 🍌" },
  { name: "elephant", hint: "I have a big trunk 🐘" },
  { name: "zebra", hint: "I have black and white stripes 🦓" },
  { name: "tiger", hint: "I have orange fur with black stripes 🐯" },
  { name: "giraffe", hint: "I have a long neck 🦒" },
  { name: "cow", hint: "I give milk 🐄" },
  { name: "sheep", hint: "I give wool 🐑" },
  { name: "horse", hint: "I love to run fast 🐎" },
  { name: "camel", hint: "I have a hump and live in the desert 🐫" },

  // 🐦 Birds
  { name: "parrot", hint: "I can talk and I am colorful 🦜" },
  { name: "eagle", hint: "I can fly very high 🦅" },
  { name: "owl", hint: "I see at night 🦉" },
  { name: "penguin", hint: "I can't fly but I love cold places 🐧" },
  { name: "duck", hint: "I say quack and love water 🦆" },
  { name: "chicken", hint: "I give eggs 🐔" },
  { name: "peacock", hint: "I have a big colorful tail 🦚" },
  { name: "crow", hint: "I am black and clever 🪶" },

  // 🐟 Fish
  { name: "fish", hint: "I swim in the sea 🐠" },
  { name: "shark", hint: "I am big and have sharp teeth 🦈" },
  { name: "dolphin", hint: "I am friendly and smart 🐬" },
  { name: "whale", hint: "I am the biggest in the ocean 🐋" },
  { name: "clownfish", hint: "I look like Nemo 🐡" },
  { name: "seahorse", hint: "I look like a horse but live in water 🐉" },
  { name: "octopus", hint: "I have 8 arms 🐙" },
  { name: "crab", hint: "I walk sideways 🦀" },
];

export default function GuessAnimal() {
  const [randomAnimal, setRandomAnimal] = useState(
    animals[Math.floor(Math.random() * animals.length)]
  );
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");

  function checkGuess() {
    if (guess.trim().toLowerCase() === randomAnimal.name) {
      setMessage(`🎉 Correct! It's a ${randomAnimal.name}!`);
    } else {
      setMessage("❌ Nope! Try again 🐾");
    }
  }

  function playAgain() {
    setRandomAnimal(animals[Math.floor(Math.random() * animals.length)]);
    setGuess("");
    setMessage("");
  }

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-6 text-pink-500">🐾 Guess the Animal!</h2>

      <p className="text-lg mb-4 text-purple-700 font-medium">
        💡 Hint: {randomAnimal.hint}
      </p>

      <input
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        placeholder="Type the animal..."
        className="border-2 border-pink-400 rounded-xl px-4 py-2 text-center mb-4 bg-pink-100 text-gray-800"
      />

      <div className="flex justify-center gap-4">
        <button
          onClick={checkGuess}
          className="bg-pink-500 hover:bg-fuchsia-500 text-gray px-5 py-2 rounded-xl shadow-md"
        >
          Guess
        </button>

        <button
          onClick={playAgain}
          className="bg-purple-400 hover:bg-purple-500 text-gray px-5 py-2 rounded-xl shadow-md"
        >
          🔁 New Hint
        </button>
      </div>

      <p className="mt-4 text-lg font-semibold text-purple-600">{message}</p>
    </div>
  );
}
