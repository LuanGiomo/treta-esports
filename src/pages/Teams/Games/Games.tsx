import { useState } from "react";
import GameBreadcrumbs from "./GameBreadcrumb";
import GameCard from "./GameCard";
import Players from "./Players";

export interface Game {
  name: string;
  shortName: string;
}

const Games = () => {
  const [games, setGames] = useState<Game[]>([
    { name: "League of Legends", shortName: "lol" },
    { name: "Valorant", shortName: "val" },
    { name: "Counter-Strike: Global Offensive", shortName: "csgo" },
    { name: "Brawl Stars", shortName: "bs" },
  ]);

  const [selectedGame, setSelectedGame] = useState("");

  const isSelected = selectedGame ? true : false;

  const visibleGames = selectedGame
    ? games.filter((game) => game.name === selectedGame)
    : games;

  return (
    <div className={isSelected ? "px-8 py-4 bg-zinc-900 rounded-md" : ""}>
      {isSelected && (
        <GameBreadcrumbs
          from="Teams"
          game={selectedGame}
          handleClick={(game: string) => setSelectedGame(game)}
        />
      )}
      <GameCard
        games={visibleGames}
        isSelected={isSelected}
        handleClick={(game: string) => setSelectedGame(game)}
      />
      <p className="mt-8 text-zinc-300 text-xl md:text-2xl uppercase">
        {selectedGame}
      </p>
      {selectedGame && (
        <p className="font-secondary my-4 text-justify text-sm text-zinc-400 selection:bg-red-700 selection:text-zinc-300 md:text-left sm:text-base sm:leading-6">
          Transformar diversão em competição e depois em resultados positivos,
          sem perder a alegria e o foco. Foi com esse desafio (e inspiração!)
          que a FURIA surgiu em 2017. Se no início a empreitada parecia ousada,
          logo o sarrafo aumentou: a FURIA rapidamente ganhava não só fãs, como
          se tornava um movimento, a expressão de uma geração. A cada nova
          vitória nas arenas e nos jogos, surgiam mais seguidores da pantera..
        </p>
      )}
      <Players game={selectedGame} />
    </div>
  );
};

export default Games;
