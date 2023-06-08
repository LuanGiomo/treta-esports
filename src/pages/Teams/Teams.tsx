import GameCard, { Game } from "./GameCard/GameCard";
import styles from "./Teams.module.css";

const Teams = () => {
  const games: Game[] = [
    { name: "League of Legends", shortName: "lol" },
    { name: "Valorant", shortName: "val" },
    { name: "Counter-Strike: Global Offensive", shortName: "csgo" },
    { name: "Brawl Stars", shortName: "bs" },
  ];
  return (
    <>
      <div className={styles.games}>
        <GameCard games={games}></GameCard>
      </div>
      {/* <hr /> */}
    </>
  );
};

export default Teams;
