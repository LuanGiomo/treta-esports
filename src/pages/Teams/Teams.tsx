import { useState } from "react";
import Games from "./Games/Games";

const Teams = () => {
  const [seletedGame, setSelectedGame] = useState("");

  const [games, setGames] = useState([
    { name: "League of Legends", shortName: "lol" },
    { name: "Valorant", shortName: "val" },
    { name: "Counter-Strike: Global Offensive", shortName: "csgo" },
    { name: "Brawl Stars", shortName: "bs" },
  ]);

  let visibleGames = seletedGame
    ? games.filter((game) => game.shortName === seletedGame)
    : games;

  return <Games games={games} />;
};

export default Teams;
