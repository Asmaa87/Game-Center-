import React from "react";
import GameCard from "../components/GameCard";

const games = [
  { name: "TicTacToe", title: "Tic Tac Toe", description: "Classic X and O game" },
  { name: "RockPaperScissors", title: "Rock Paper Scissors", description: "Beat the computer!" },
  { name: "MemoryGame", title: "Memory Game", description: "Match all the pairs" },
];

export default function Home() {
  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-8 text-center">Select a Game</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map((game) => (
          <GameCard key={game.name} game={game} />
        ))}
      </div>
    </div>
  );
}
