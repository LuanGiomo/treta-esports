import { Outlet } from "react-router-dom";
import GameCard from "./GameCard/GameCard";
import styles from "./Games.module.css";
import { useEffect, useState } from "react";

const Games = () => {
  const [seletedGame, setSelectedGame] = useState("");
  const [games, _] = useState([
    { name: "League of Legends", shortName: "lol" },
    { name: "Valorant", shortName: "val" },
    { name: "Counter-Strike: Global Offensive", shortName: "csgo" },
    { name: "Brawl Stars", shortName: "bs" },
  ]);

  useEffect(() => {
    const gamesDefault = [...games];
    console.log(gamesDefault);
    setSelectedGame("");
  }, []);

  let visibleGames = seletedGame
    ? games.filter((game) => game.shortName === seletedGame)
    : games;

  return (
    <>
      <div
        className={
          seletedGame
            ? [styles.games, styles.gameSelect].join(" ")
            : styles.games
        }
      >
        <GameCard
          games={visibleGames}
          onSelectGame={(game) => setSelectedGame(game)}
        ></GameCard>
      </div>
      <Outlet />
    </>
  );
};

export default Games;
